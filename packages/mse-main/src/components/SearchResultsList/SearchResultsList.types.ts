import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface ISearchResultsListProps {
	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<ISearchResultsListStyleProps, ISearchResultsListStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface ISearchResultsListStyleProps {
	className?: string;
	theme: ITheme;
}

export interface ISearchResultsListStyles {
	root?: IStyle;
	resultCount?: IStyle;
	seperator?: IStyle;
	loading?: IStyle;
}
