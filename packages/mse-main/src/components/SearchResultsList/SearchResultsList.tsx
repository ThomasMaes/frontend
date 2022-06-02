import { styled } from "office-ui-fabric-react/lib/Utilities";
import { SearchResultsListBase } from "./SearchResultsList.base";
import { getStyles } from "./SearchResultsList.styles";
import { ISearchResultsListProps, ISearchResultsListStyleProps, ISearchResultsListStyles } from "./SearchResultsList.types";

export const SearchResultsList: React.FC<ISearchResultsListProps> = styled<
	ISearchResultsListProps,
	ISearchResultsListStyleProps,
	ISearchResultsListStyles
>(SearchResultsListBase, getStyles);
