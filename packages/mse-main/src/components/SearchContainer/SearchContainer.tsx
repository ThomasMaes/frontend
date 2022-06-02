import { styled } from "office-ui-fabric-react/lib/Utilities";
import { SearchContainerBase } from "./SearchContainer.base";
import { getStyles } from "./SearchContainer.styles";
import { ISearchContainerProps, ISearchContainerStyleProps, ISearchContainerStyles } from "./SearchContainer.types";

export const SearchContainer: React.FC<ISearchContainerProps> = styled<
	ISearchContainerProps,
	ISearchContainerStyleProps,
	ISearchContainerStyles
>(SearchContainerBase, getStyles);
