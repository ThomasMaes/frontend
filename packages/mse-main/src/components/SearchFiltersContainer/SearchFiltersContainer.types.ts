import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface ISearchFiltersContainerProps {
	onChangeFilter?: (fieldName:string, selectedFilter: string) => void;
	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<ISearchFiltersContainerStyleProps, ISearchFiltersContainerStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface ISearchFiltersContainerStyleProps {
	className?: string;
	theme: ITheme;
}

export interface ISearchFiltersContainerStyles {
	searchFiltersContainer?: IStyle;
	searchFilters?: IStyle;
	searchFilter?: IStyle;
}
