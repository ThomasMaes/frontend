import * as React from "react";
import { ISearchService } from "../../services";

export const SearchServiceContext = React.createContext<ISearchService | undefined>(undefined);

export const useSearchService = () => {
	const searchService = React.useContext(SearchServiceContext);

	return searchService;
};
