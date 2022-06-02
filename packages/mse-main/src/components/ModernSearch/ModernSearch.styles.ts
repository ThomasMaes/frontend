import { IModernSearchStyleProps, IModernSearchStyles } from "./ModernSearch.types";

const GlobalClassNames = {
	root: "dw-ModernSearch"
};

export const getStyles = (props: IModernSearchStyleProps): IModernSearchStyles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [classNames.root, {}, className]
	};
};
