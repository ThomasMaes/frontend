import { ModernSearch, ThemeContext } from "@dlw-mse/main";
import { ThemeChangedEventArgs, ThemeProvider } from "@microsoft/sp-component-base";
import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "ModernSearchWebPartStrings";
import { createTheme, ITheme } from "office-ui-fabric-react/lib/Styling";
import * as React from "react";
import * as ReactDom from "react-dom";

export interface IModernSearchWebPartProps {}

export default class ModernSearchWebPart extends BaseClientSideWebPart<IModernSearchWebPartProps> {
	private _currentTheme: ITheme;
	private _themeProvider: ThemeProvider;

	private _accessTokenProvider: () => Promise<string>;

	constructor() {
		super();

		this._onThemeChanged = this._onThemeChanged.bind(this);
	}

	public async onInit(): Promise<void> {
		const aadTokenProvider = await this.context.aadTokenProviderFactory.getTokenProvider();
		this._accessTokenProvider = () => aadTokenProvider.getToken(process.env.REACT_AZUREAD_RESOURCEURI);
	}

	public render(): void {
		const element = (
			<ThemeContext.Provider value={this._currentTheme}>
				<ModernSearch apiAccessTokenProvider={this._accessTokenProvider} />
			</ThemeContext.Provider>
		);

		ReactDom.render(element, this.domElement);
	}

	protected onDispose(): void {
		if (this._themeProvider) {
			this._themeProvider.themeChangedEvent.remove(this, this._onThemeChanged);
		}

		ReactDom.unmountComponentAtNode(this.domElement);
	}

	protected get dataVersion(): Version {
		return Version.parse("1.0");
	}

	protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
		return {
			pages: [
				{
					header: {
						description: strings.PropertyPaneDescription
					},
					groups: []
				}
			]
		};
	}

	private _onThemeChanged(args: ThemeChangedEventArgs): void {
		this._currentTheme = createTheme(this._themeProvider.tryGetTheme());
		this.render();
	}
}
