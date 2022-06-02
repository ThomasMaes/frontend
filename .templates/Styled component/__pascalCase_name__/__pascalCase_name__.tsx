import { styled } from "office-ui-fabric-react/lib/Utilities";
import { {{pascalCase name}}Base } from "./{{pascalCase name}}.base";
import { getStyles } from "./{{pascalCase name}}.styles";
import { I{{pascalCase name}}Props, I{{pascalCase name}}StyleProps, I{{pascalCase name}}Styles } from "./{{pascalCase name}}.types";

export const {{pascalCase name}}: React.FC<I{{pascalCase name}}Props> = styled<
	I{{pascalCase name}}Props,
	I{{pascalCase name}}StyleProps,
	I{{pascalCase name}}Styles
>({{pascalCase name}}Base, getStyles);
