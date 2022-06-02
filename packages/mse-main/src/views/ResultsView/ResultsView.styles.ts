import { IResultsViewStyleProps, IResultsViewStyles } from "./ResultsView.types";

const GlobalClassNames = {
	root: "mse-ResultsView",
	emergencyNumbers: "mse-ResultsView-emergencyNumbers",
	leftPart: "mse-ResultsView-left",
	rightPart: "mse-ResultsView-right",
	wrapper: "mse-ResultsView-wrapper",
	backButton: "mse-ResultsView-backButton"
};

export const getStyles = (props: IResultsViewStyleProps): IResultsViewStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [classNames.root, {
			fontFamily: 'Segoe UI'
		}, className],
		wrapper: [
			classNames.wrapper,
			{
				gap: "16px",
				backgroundColor: "#E5E5E5",
			}
		],
		backButton: [
			classNames.backButton,
			{
				fontFamily: 'Segoe UI',
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "14px",
				lineHeight: "20px",
				padding: "20px 120px",
				textDecoration: "none",
				color: "#000"
			}
		]
	};
};
