import { ILandingViewStyleProps, ILandingViewStyles } from "./LandingView.types";

const GlobalClassNames = {
	root: "mse-LandingView",
	other: "mse-LandingView-other",
};

export const getStyles = (props: ILandingViewStyleProps): ILandingViewStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [classNames.root, {
			fontFamily: 'Segoe UI'
		}, className],
		other: [classNames.other, {
			margin: "0",
			paddingTop: "20px"
		}],
	};
};
