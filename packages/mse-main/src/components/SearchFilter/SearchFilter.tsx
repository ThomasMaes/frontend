import { styled } from "office-ui-fabric-react/lib/Utilities";
import { SearchFilterBase } from "./SearchFilter.base";
import { getStyles } from "./SearchFilter.styles";
import { ISearchFilterProps, ISearchFilterStyleProps, ISearchFilterStyles } from "./SearchFilter.types";

export const SearchFilter: React.FC<ISearchFilterProps> = styled<
	ISearchFilterProps,
	ISearchFilterStyleProps,
	ISearchFilterStyles
>(SearchFilterBase, getStyles);
