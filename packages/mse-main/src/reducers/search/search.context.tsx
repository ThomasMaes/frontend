import * as React from "react";
import { SearchServiceContext, useApiAccessTokenProvider } from "../../models";
import { SearchScope } from "../../models/SearchScope";
import { createSearchService } from "../../services";
import { searchReducer } from "./search.reducer";
import { ISearchState, SearchAction } from "./search.types";

const initialSearchState: ISearchState = {
	hasSubmittedQuery: false,
	isSearching: false,
	queryText: "",
	scope: SearchScope.All,
	filter: [],
	searchResult: {
		items: []
	}
};

export const SearchContext = React.createContext({
	state: initialSearchState,
	dispatch: (action: SearchAction) => {} // tslint:disable-line:no-empty
});

export const SearchProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [state, dispatch] = React.useReducer(searchReducer, initialSearchState);
	const apiAccessTokenProvider = useApiAccessTokenProvider();

	const searchService = createSearchService(apiAccessTokenProvider!, false);

	return (
		<SearchServiceContext.Provider value={searchService}>
			<SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>
		</SearchServiceContext.Provider>
	);
};
