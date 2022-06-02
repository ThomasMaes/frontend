import { ISearchBarStyleProps, ISearchBarStyles } from "./SearchBar.types";

const GlobalClassNames = {
	root: "mse-SearchBar",
	searchBox: "mse-SearchBar-searchBox",
	button: "mse-SearchBar-button"
};

export const getStyles = (props: ISearchBarStyleProps): ISearchBarStyles => {
	const { className, theme } = props;
	const classNames = GlobalClassNames;

	return {
		root: [
			classNames.root,
			{
				display: "flex",
				width: "100%"
			},
			className
		],

		button: [
			classNames.button,
			{
				backgroundColor: theme.semanticColors.primaryButtonBackground,
				borderRadius: 0,
				color: theme.semanticColors.primaryButtonText,

				"&:focus, &:hover": {
					backgroundColor: theme.semanticColors.primaryButtonBackgroundHovered,
					color: theme.semanticColors.primaryButtonTextHovered
				},

				"&:active": {
					backgroundColor: theme.semanticColors.primaryButtonBackgroundPressed,
					color: theme.semanticColors.primaryButtonTextPressed
				}
			}
		],

		searchBox: [
			classNames.searchBox,
			{
				background: "#F2F2F2",
				borderRadius: "5px",
				width: "100%",
			}
		]
	};
};
