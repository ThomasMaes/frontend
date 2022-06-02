import { ISearchResultsListStyleProps, ISearchResultsListStyles } from "./SearchResultsList.types";

const GlobalClassNames = {
	root: "mse-SearchResultsList",
	resultCount: "mse-SearchResultsList-resultCount",
	seperator: "mse-SearchResultsList-seperator",
	loading: "mse-SearchResultsList-loading",
};

export const getStyles = (props: ISearchResultsListStyleProps): ISearchResultsListStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [classNames.root, {
			padding: "20px 120px"
		}, className],
		resultCount: [classNames.resultCount, {
			fontFamily: 'Segoe UI',
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "15px",
			lineHeight: "32px",
			color: "#494949"
		}],
		seperator: [classNames.seperator, {
			height: "1px",
			background: "#C4C4C4",
			borderStyle: "hidden",
		}],
		loading: [classNames.loading, {
			fontFamily: 'Segoe UI',
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "15px",
			lineHeight: "32px",
		}]
	};
};
