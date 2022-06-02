import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { useTheme } from "../../models/contexts/ThemeContext";
import { useSearch } from "../../reducers";
import { SearchFiltersContainer } from "../SearchFiltersContainer";
import { SearchResultItem } from "../SearchResultItem";
import {
	ISearchResultsListProps,
	ISearchResultsListStyleProps,
	ISearchResultsListStyles
} from "./SearchResultsList.types";

const getClassNames = classNamesFunction<ISearchResultsListStyleProps, ISearchResultsListStyles>();

export const SearchResultsListBase: React.FC<ISearchResultsListProps> = (props) => {
	const {} = props;

	const { searchResult, isSearching } = useSearch();

	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	return (
		<div className={classNames.root}>
			{isSearching && <div className={classNames.loading}>Searching...</div>}
			{!isSearching && searchResult && (
				<div>
					<SearchFiltersContainer />
					<span className={classNames.resultCount}>{searchResult?.totalCount} results found</span>
					<hr className={classNames.seperator} />
					{searchResult?.items.map((it) => (
						<React.Fragment key={it.id + "1"}>
							<SearchResultItem item={it} />
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
};
