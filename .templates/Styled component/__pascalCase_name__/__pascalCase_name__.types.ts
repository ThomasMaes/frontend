import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface I{{pascalCase name}}Props {
	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<I{{pascalCase name}}StyleProps, I{{pascalCase name}}Styles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface I{{pascalCase name}}StyleProps {
	className?: string;
	theme: ITheme;
}

export interface I{{pascalCase name}}Styles {
	root?: IStyle;
}
