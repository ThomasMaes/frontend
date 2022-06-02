import { ISearchResult } from "../../models/search";
import { ISearchFilter } from "../../models/SearchFilter";
import { SearchScope } from "../../models/SearchScope";

export interface ISearchState {
	hasSubmittedQuery: boolean;
	isSearching: boolean;
	queryText: string;
	scope: SearchScope;
	filter: ISearchFilter[];
	searchResult?: ISearchResult;
}

export type SearchAction =
	| { type: "BEGIN_SEARCH" }
	| { type: "COMPLETE_SEARCH"; payload: ISearchResult }
	| { type: "SET_QUERY_TEXT"; payload: string }
	| { type: "SET_SCOPE"; payload: SearchScope }
	| { type: "ADD_FILTER"; payload: ISearchFilter }

export type UseSearchReturnType = {
	currentQuery: string;
	scope: SearchScope;
	filter: ISearchFilter[];
	isSearching: boolean;
	searchResult?: ISearchResult;
	setScope: (newScope: string) => void;
	addFilter: (fieldName:string, selectedFilter: string) => void;
	submitQuery: (newQuery: string) => void;
};
