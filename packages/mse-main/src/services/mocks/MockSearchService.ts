import { ISearchResult } from "../../models/search/SearchResult";
import { ISearchService } from "../ISearchService";

export class MockSearchService implements ISearchService {
	public async executeQuery(): Promise<ISearchResult> {
		await new Promise((resolve) => setTimeout(resolve, 500));

		return {
			items: [
				{
					id: "1",
					rank: "1",
					icon: "b@hotmail.com",
					type: "ExternalItem",
					subType: "Procedure",
					itemType: "searchresult",
					title: "DOM FEOL",
					description: "The purpose of this procedure is to provide information, in order to perform in a good conform manner the quality tests at DOM_FEOL.",
					link: "b@hotmail.com"
				},
				{
					id: "2",
					rank: "2",
					icon: "b@hotmail.com",
					type: "ExternalItem",
					subType: "Procedure",
					itemType: "searchresult",
					title: "Recipe management",
					description: "This document describes all items that are relevant for the management of the recipes and	sequences (or waferflows) present in IMECinOne validation tables and present on the FAB	cleanroom tools. The items include the recipe (or sequence/waferflows) nomenclature guidelines, rules for making recipe backups, the recipe clean-up procedure, and recipe integrity statement.",
					link: "b@hotmail.com"
				},
				{
					id: "3",
					rank: "3",
					icon: "b@hotmail.com",
					type: "ExternalItem",
					subType: "Procedure",
					itemType: "searchresult",
					title: "Work regulations",
					description: "The purpose of this document is to provide the necessary information to the ...",
					link: "b@hotmail.com"
				}
			]
		};
	}
}
