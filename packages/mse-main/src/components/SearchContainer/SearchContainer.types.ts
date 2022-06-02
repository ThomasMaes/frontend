import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";
import { SearchScope } from "../../models/SearchScope";

export interface ISearchContainerProps {
	onChangeScope?: (scope: SearchScope) => void;

	onExecuteSearch?: (searchValue: string) => void;

	/**
	 * Optional class for the root Peple Picker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the People Picker element
	 */
	styles?: IStyleFunctionOrObject<ISearchContainerStyleProps, ISearchContainerStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;

	title?: string;
	big?: boolean;
}

export interface ISearchContainerStyleProps {
	className?: string;
	theme: ITheme;
}

export interface ISearchContainerStyles {
	root?: IStyle;
	wrapper?: IStyle;
	wrapperSmall?: IStyle;
	searchTitle?: IStyle;
}
