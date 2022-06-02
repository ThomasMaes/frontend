import { ITheme } from "office-ui-fabric-react";
import * as React from "react";

export const ThemeContext = React.createContext<ITheme | undefined>(undefined);

export const useTheme = () => {
	const theme = React.useContext(ThemeContext);

	return theme;
};
