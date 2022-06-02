import { IIndexedSearchResult } from "./IIndexedSearchResult";

export interface IIndexedItem {
	// Public id which maps to the item details.
	id: string;

	// Type of the result item.
	itemType: string;
}
export type IndexedItem = IIndexedSearchResult;
