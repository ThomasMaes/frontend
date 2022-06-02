import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface ISearchBarProps {
	value?: string;

	onChange?: (newValue?: string) => void;

	onSearch?: (newValue?: string) => void;

	/**
	 * Optional class for the root People Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<ISearchBarStyleProps, ISearchBarStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface ISearchBarStyleProps {
	className?: string;
	theme: ITheme;
}

export interface ISearchBarStyles {
	root?: IStyle;
	button?: IStyle;
	searchBox?: IStyle;
}
