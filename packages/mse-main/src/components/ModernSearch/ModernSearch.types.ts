import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface IModernSearchProps {
	apiAccessTokenProvider: string | (() => string) | (() => PromiseLike<string>);

	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<IModernSearchStyleProps, IModernSearchStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface IModernSearchStyleProps {
	className?: string;
	theme: ITheme;
}

export interface IModernSearchStyles {
	root?: IStyle;
}
