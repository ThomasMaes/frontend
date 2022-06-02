import { styled } from "office-ui-fabric-react/lib/Utilities";
import { SearchFiltersContainerBase } from "./SearchFiltersContainer.base";
import { getStyles } from "./SearchFiltersContainer.styles";
import { ISearchFiltersContainerProps, ISearchFiltersContainerStyleProps, ISearchFiltersContainerStyles } from "./SearchFiltersContainer.types";

export const SearchFiltersContainer: React.FC<ISearchFiltersContainerProps> = styled<
	ISearchFiltersContainerProps,
	ISearchFiltersContainerStyleProps,
	ISearchFiltersContainerStyles
>(SearchFiltersContainerBase, getStyles);
