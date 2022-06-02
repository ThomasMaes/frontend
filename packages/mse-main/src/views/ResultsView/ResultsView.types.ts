import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface IResultsViewProps {
	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<IResultsViewStyleProps, IResultsViewStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface IResultsViewStyleProps {
	className?: string;
	theme: ITheme;
}

export interface IResultsViewStyles {
	root?: IStyle;
	emergencyNumbers?: IStyle;
	leftPart?: IStyle;
	rightPart?: IStyle;
	wrapper?: IStyle;
	backButton?: IStyle;
}
