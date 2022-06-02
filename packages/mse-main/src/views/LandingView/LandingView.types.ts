import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface ILandingViewProps {
	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<ILandingViewStyleProps, ILandingViewStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface ILandingViewStyleProps {
	className?: string;
	theme: ITheme;
}

export interface ILandingViewStyles {
	root?: IStyle;
	wrapper?: IStyle;
	other?: IStyle;
}
