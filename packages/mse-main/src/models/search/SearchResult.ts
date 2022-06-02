import { IFilter } from "./Filter";
import { IndexedItem } from "./IndexedItem";

export interface ISearchResult {
	items: IndexedItem[];
	filters?: IFilter[];
	totalCount?: number;
}
