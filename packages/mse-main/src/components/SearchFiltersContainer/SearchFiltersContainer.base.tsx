import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { useTheme } from "../../models/contexts/ThemeContext";
import { useSearch } from "../../reducers";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import {
	ISearchFiltersContainerProps,
	ISearchFiltersContainerStyleProps,
	ISearchFiltersContainerStyles
} from "./SearchFiltersContainer.types";

const getClassNames = classNamesFunction<ISearchFiltersContainerStyleProps, ISearchFiltersContainerStyles>();

export const SearchFiltersContainerBase: React.FC<ISearchFiltersContainerProps> = (props) => {
	const {onChangeFilter} = props;

	const { searchResult, isSearching, currentQuery, submitQuery, addFilter } = useSearch();

	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	const onSelected = (fieldName:string, selectedFilter: string) => {
		if (!!onChangeFilter) {
			onChangeFilter(fieldName, selectedFilter);
		}
		addFilter(fieldName, selectedFilter);
		submitQuery(currentQuery);
	};

	return (
		<div className={classNames.searchFiltersContainer}>
			{!isSearching && searchResult && searchResult.filters && (
				<div className={classNames.searchFilters}>
					{searchResult.filters.map((it) => (
						<React.Fragment key={it.name}>
							<div className={classNames.searchFilter}>
								<SearchFilter fieldName={it.name} values={it.items} onSelected={onSelected} />
							</div>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
};
