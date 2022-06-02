import { ISearchResultItemStyleProps, ISearchResultItemStyles } from "./SearchResultItem.types";

const GlobalClassNames = {
	root: "mse-SearchResultItem",
	persona: "mse-SearchResultItem-persona",
	icon: "mse-SearchResultItem-icon",
	resultType: "mse-SearchResultItem-resultType",
	title: "mse-SearchResultItem-title",
	description: "mse-SearchResultItem-description",
	highlight: "mse-SearchResultItem-highlight",
	seperator: "mse-SearchResultItem-seperator"
};

export const getStyles = (props: ISearchResultItemStyleProps): ISearchResultItemStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [
			classNames.root,
			{
				display: "grid",
				gridTemplateColumns: "2% 1fr",
				gridTemplateRows: "5% 20% 1fr", 
				gap: "15px 20px", 
				gridTemplateAreas: 
					'"mse-SearchResultItem-icon mse-SearchResultItem-resultType" "mse-SearchResultItem-icon mse-SearchResultItem-title" "mse-SearchResultItem-icon mse-SearchResultItem-description" "mse-SearchResultItem-seperator mse-SearchResultItem-seperator"'
			},
			className
		],
		seperator: [classNames.seperator, {
			height: "2px",
			background: "#DBDBDB",
			width: "100%",
			borderStyle: "none",
			gridArea: "mse-SearchResultItem-seperator"
		}],
		highlight: [classNames.highlight, {
			backgroundColor: "rgba(108, 194, 200, 0.22)"
		}],
		title: [classNames.title, {
			fontFamily: 'Segoe UI',
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "20px",
			lineHeight: "32px",
			color: "#494949",
			gridArea: "mse-SearchResultItem-title"
		}],
		description: [classNames.description, {
			fontFamily: 'Segoe UI',
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "14px",
			lineHeight: "20px",
			color: "#494949",
			gridArea: "mse-SearchResultItem-description"
		}],
		resultType: [classNames.resultType, {
			fontFamily: 'Segoe UI',
			fontStyle: "normal",
			fontWeight: "700",
			fontSize: "12px",
			lineHeight: "16px",
			textAlign: "center",
			color: "#fff",
			background: "#A4C5E4",
			borderRadius: "3px",
			padding: "2px 6px 2px 5px",
			gap: "10px",
			width: "fit-content",
			height: "20px",
			gridArea: "mse-SearchResultItem-resultType"
		}],
		icon: [classNames.icon, {
			width: "30px",
			height: "30px",
			gridArea: "mse-SearchResultItem-icon"
		}],
		persona: [classNames.persona, {}]
	};
};
