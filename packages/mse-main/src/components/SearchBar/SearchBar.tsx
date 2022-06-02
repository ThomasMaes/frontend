import { styled } from "office-ui-fabric-react/lib/Utilities";
import { SearchBarBase } from "./SearchBar.base";
import { getStyles } from "./SearchBar.styles";
import { ISearchBarProps, ISearchBarStyleProps, ISearchBarStyles } from "./SearchBar.types";

export const SearchBar: React.FC<ISearchBarProps> = styled<
	ISearchBarProps,
	ISearchBarStyleProps,
	ISearchBarStyles
>(SearchBarBase, getStyles);
