import { ISearchContainerStyleProps, ISearchContainerStyles } from "./SearchContainer.types";

const GlobalClassNames = {
	root: "mse-SearchContainer",
	wrapper: "mse-wrapper",
	wrapperSmall: "mse-wrapper-small",
	searchTitle: "mse-searchTitle",
};

export const getStyles = (props: ISearchContainerStyleProps): ISearchContainerStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [
			classNames.root,
			{
				display: "flex",
				flexWrap: "wrap",
				width: "100%"
			},
			className
		],
		wrapper: [
			classNames.wrapper,
			{
				width: "100%",
				height: "100px",
				padding: "120px",
				background: "linear-gradient(112.32deg, #3F98BD 7.52%, #52BDC2 90.36%)",
			}
		],
		wrapperSmall: [
			classNames.wrapperSmall,
			{
				width: "100%",
				height: "100px",
				padding: "60px 120px",
				background: "linear-gradient(112.32deg, #3F98BD 7.52%, #52BDC2 90.36%)",
			}
		],
		searchTitle: [
			classNames.searchTitle,
			{
				color: "#fff",
				fontSize: "32px",
			}
		]
	};
};
