import { ISearchResult } from "../models/search/SearchResult";
import { ISearchFilter } from "../models/SearchFilter";

export interface ISearchQueryInput {
	queryText: string;
	size?: number;
	skip?: number;
	filters?: ISearchFilter[];
}

export interface ISearchService {
	executeQuery: (queryInput: ISearchQueryInput) => Promise<ISearchResult>;
}
