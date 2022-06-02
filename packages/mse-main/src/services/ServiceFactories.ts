import { ISearchService } from "./ISearchService";
import { MockSearchService } from "./mocks";
import { SearchService } from "./SearchService";



export const createSearchService = (
	apiAccessTokenProvider: string | (() => string) | (() => PromiseLike<string>),
	useMocks?: boolean
): ISearchService => {
	const shouldMock = useMocks !== undefined ? useMocks : process.env.REACT_MOCK_SERVICES === "true";

	return shouldMock ? new MockSearchService() : new SearchService(apiAccessTokenProvider);
};
