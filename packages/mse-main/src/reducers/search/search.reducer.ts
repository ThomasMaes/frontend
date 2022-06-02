import { ISearchState, SearchAction } from "./search.types";

export const searchReducer = (state: ISearchState, action: SearchAction): ISearchState => {
	switch (action.type) {
		case "BEGIN_SEARCH":
			return { ...state, isSearching: true, searchResult: undefined };

		case "COMPLETE_SEARCH":
			return { ...state, isSearching: false, searchResult: action.payload };

		case "SET_QUERY_TEXT":
			return { ...state, hasSubmittedQuery: true, queryText: action.payload };

		case "SET_SCOPE":
			return { ...state, scope: action.payload };
		case "ADD_FILTER":
			var filter = state.filter;
			filter.push(action.payload);
			return { ...state, filter: filter };

		default:
			return state;
	}
};
