import { ISearchFiltersContainerStyleProps, ISearchFiltersContainerStyles } from "./SearchFiltersContainer.types";

const GlobalClassNames = {
	searchFiltersContainer: "mse-SearchFiltersContainer",
	searchFilters: "mse-SearchFiltersContainer-searchFilters",
	searchFilter: "mse-SearchFiltersContainer-searchFilter"
};

export const getStyles = (props: ISearchFiltersContainerStyleProps): ISearchFiltersContainerStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		searchFiltersContainer: [classNames.searchFiltersContainer, {
			display: "flex",
			paddingBottom: "20px"
		}, className],
		searchFilters: [classNames.searchFilters, {
			display: "flex",
			width: "100%",
		}],
		searchFilter: [classNames.searchFilter, {
			width: "200px",
			paddingRight: "5px;"
		}]
	};
};
