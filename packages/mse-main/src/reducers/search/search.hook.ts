import * as React from "react";
import { useSearchService } from "../../models";
import { SearchScope } from "../../models/SearchScope";
import { ISearchQueryInput } from "../../services";
import { SearchContext } from "./search.context";
import { UseSearchReturnType } from "./search.types";

/**
 * Hook to execute the search query.
 * This hook includes an effect which executes the search query when relevant state is updated.
 * Important! Make sure to include this in only 1 mounted component at a time.
 * If not, multiple queries will be started simultaneously.
 */
export const useSearchExecution = (): (() => void) => {
	const { state, dispatch } = React.useContext(SearchContext);
	const { hasSubmittedQuery, queryText, scope, filter } = state;

	const searchService = useSearchService();

	const executeSearch = React.useCallback(() => {
		(async () => {
			if (!searchService) {
				throw new Error("There is no search service available to work with.");
			}

			// initialize state change
			dispatch({ type: "BEGIN_SEARCH" });

			// build search query input
			const searchInput: ISearchQueryInput = {
				queryText: queryText,
				filters: filter
			};

			// execute search query
			const result = await searchService.executeQuery(searchInput);

			// finalize state
			dispatch({ type: "COMPLETE_SEARCH", payload: result });
		})();
	}, [queryText, scope]);

	React.useEffect(() => {
		if (hasSubmittedQuery) {
			executeSearch();
		}
	}, [queryText, scope]);

	// TODO: remove temp logging
	React.useEffect(() => {
		console.log(state);
	}, [state]);

	return executeSearch;
};

/**
 * Hook to access and update search context.
 */
export const useSearch = (): UseSearchReturnType => {
	const { state, dispatch } = React.useContext(SearchContext);
	const { queryText, searchResult, scope, isSearching, filter } = state;

	// change the current search scope
	const setScope = (newScope: SearchScope) => {
		dispatch({ type: "SET_SCOPE", payload: newScope });
	};

	const addFilter = (fieldName:string, selectedFilter: string) => {
		dispatch({ type: "ADD_FILTER", payload: {field:fieldName, value:selectedFilter} });
	};

	// submit a new search query
	const submitQuery = (newQuery: string) => {
		dispatch({ type: "SET_QUERY_TEXT", payload: newQuery });
	};

	return { currentQuery: queryText, scope, searchResult, filter, isSearching, setScope, addFilter, submitQuery };
};
