
import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import {
	ApiAccessTokenProviderContext,
	useTheme,
	ViewType,
	ViewTypeContext
} from "../../models";
import { SearchProvider } from "../../reducers";
import { LandingView, ResultsView } from "../../views";
import { IModernSearchProps, IModernSearchStyleProps, IModernSearchStyles } from "./ModernSearch.types";

const getClassNames = classNamesFunction<IModernSearchStyleProps, IModernSearchStyles>();

export const ModernSearchBase: React.FC<IModernSearchProps> = (props) => {
	const { apiAccessTokenProvider } = props;
	const [viewType, setViewType] = React.useState<ViewType>(ViewType.landing);



	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	return (
		<ViewTypeContext.Provider value={[viewType, setViewType]}>
			<ApiAccessTokenProviderContext.Provider value={apiAccessTokenProvider}>			
				<SearchProvider>	
						<div className={classNames.root}>
							{viewType === ViewType.landing && <LandingView />}
							{viewType === ViewType.results && <ResultsView />}
						</div>
				</SearchProvider>
			</ApiAccessTokenProviderContext.Provider>
		</ViewTypeContext.Provider>
	);
};
