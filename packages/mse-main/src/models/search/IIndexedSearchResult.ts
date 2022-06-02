import { IIndexedItem } from "./IndexedItem";

export interface IIndexedSearchResult extends IIndexedItem {
	id: string;
	itemType: "searchresult";
	rank?: string;
	icon?: string;
	title?: string;
	type?: string;
	subType?: string;
	description?: string;
	link?: string;
	adaptiveCard?: string;
	aditionalProperties?: { [key: string]: any };
}
