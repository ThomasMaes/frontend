import { ISearchFilterStyleProps, ISearchFilterStyles } from "./SearchFilter.types";

const GlobalClassNames = {
	root: "mse-SearchFilter"
};

export const getStyles = (props: ISearchFilterStyleProps): ISearchFilterStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [
			classNames.root,
			{
			
			},
			className
		]
	};
};
