import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { useTheme } from "../../models/contexts/ThemeContext";
import { I{{pascalCase name}}Props, I{{pascalCase name}}StyleProps, I{{pascalCase name}}Styles } from "./{{pascalCase name}}.types";

const getClassNames = classNamesFunction<I{{pascalCase name}}StyleProps, I{{pascalCase name}}Styles>();

export const {{pascalCase name}}Base: React.FC<I{{pascalCase name}}Props> = (props) => {
	const {} = props;

	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	return <div className={classNames.root} />;
};
