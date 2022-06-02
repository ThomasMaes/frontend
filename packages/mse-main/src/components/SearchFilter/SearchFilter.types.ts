import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";
import { IFilterValue } from "../../models/search/Filter";

export interface ISearchFilterProps {
	fieldName: string;
	values: IFilterValue[];

	onSelected?: (fieldname: string, newValue?: string) => void;

	/**
	 * Optional class for the root People Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<ISearchFilterStyleProps, ISearchFilterStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface ISearchFilterStyleProps {
	className?: string;
	theme: ITheme;
}

export interface ISearchFilterStyles {
	root?: IStyle;
	button?: IStyle;
	searchBox?: IStyle;
}
