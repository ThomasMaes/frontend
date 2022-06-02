import { I } from {}
{pascalCase name}}StyleProps, I{{pascalCase name}}Styles } from "./{{pascalCase name}}.types";

const GlobalClassNames = {
	root: "mse-{{pascalCase name}}"
};

export const getStyles = (props: I{{pascalCase name}}StyleProps): I{{pascalCase name}}Styles => {
	const { className } = props;
	const classNames = GlobalClassNames;

	return {
		root: [classNames.root, {}, className]
	};
};
