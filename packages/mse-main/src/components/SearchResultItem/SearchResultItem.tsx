import { styled } from "office-ui-fabric-react/lib/Utilities";
import { SearchResultItemBase } from "./SearchResultItem.base";
import { getStyles } from "./SearchResultItem.styles";
import { ISearchResultItemProps, ISearchResultItemStyleProps, ISearchResultItemStyles } from "./SearchResultItem.types";

export const SearchResultItem: React.FC<ISearchResultItemProps> = styled<
	ISearchResultItemProps,
	ISearchResultItemStyleProps,
	ISearchResultItemStyles
>(SearchResultItemBase, getStyles);
