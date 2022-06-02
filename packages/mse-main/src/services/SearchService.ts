import { app, authentication } from "@microsoft/teams-js";
import { ISearchResult } from "../models/search/SearchResult";
import { ISearchQueryInput, ISearchService } from "./ISearchService";

interface IQueryInputModel {
	queryText?: string;
	facets?: string[];
	filter?: string;
	highlightFields?: string[];
	hightlightPostTag?: string;
	hightlightPreTag?: string;
	includeTotalCount?: boolean;
	orderBy?: string[];
	queryType?: "simple" | "full";
	searchFields?: string[];
	searchMode?: "any" | "all";
	select?: string[];
	size?: number;
	skip?: number;
}

export class SearchService implements ISearchService {
	public ApiAccessTokenProvider: string | (() => string) | (() => PromiseLike<string>);

	constructor(apiAccessTokenProvider: string | (() => string) | (() => PromiseLike<string>)) {
		this.ApiAccessTokenProvider = apiAccessTokenProvider;
	}

	public async executeQuery(queryInput: ISearchQueryInput): Promise<ISearchResult> {
		const body: IQueryInputModel = {
			queryText: queryInput.queryText,
			filter: this._calculateFilterString(queryInput),
			size: queryInput.size,
			skip: queryInput.skip
		};

		if(!app.isInitialized()){
			app.initialize();
		}

		// fetch data from a secured endpoint
		var token = await authentication.getAuthToken();

			//const response = await fetch(`${process.env.REACT_WEBAPI_BASEURI}/search`, {
			const response = await fetch(`https://localhost:44386/api/search`, {
				body: JSON.stringify(body),
				method: "POST",
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json"
				}
			});

			if (!response.ok) {
				// do something with the error
			}
	
			const result = await response.json();
			return result;
	}

	private _calculateFilterString(queryInput: ISearchQueryInput): string {
		const filterParts: string[] = [];

		

		const filterString = filterParts.join(" and ");

		return filterString;
	}
}
