import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";
import { IndexedItem } from "../../models";

export interface ISearchResultItemProps {
	isSelected?: boolean;

	item: IndexedItem;

	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<ISearchResultItemStyleProps, ISearchResultItemStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface ISearchResultItemStyleProps {
	className?: string;
	isSelected?: boolean;
	theme: ITheme;
}

export interface ISearchResultItemStyles {
	root?: IStyle;
	persona?: IStyle;
	icon?: IStyle;
	resultType?: IStyle;
	title?: IStyle;
	description?: IStyle;
	highlight?: IStyle;
	seperator?: IStyle;
}
