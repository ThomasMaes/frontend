import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { SearchContainer } from "../../components/SearchContainer";
import { SearchResultsList } from "../../components/SearchResultsList";
import { useTheme } from "../../models";
import { useSearchExecution } from "../../reducers";
import { IResultsViewProps, IResultsViewStyleProps, IResultsViewStyles } from "./ResultsView.types";

const getClassNames = classNamesFunction<IResultsViewStyleProps, IResultsViewStyles>();

export const ResultsViewBase: React.FC<IResultsViewProps> = (props) => {
	const {} = props;

	// ensure search query is executed when the search input changes
	useSearchExecution();

	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	return (
		<div className={classNames.root}>
			<div className={classNames.wrapper}>
					<SearchContainer title="Search imec information" big={false} />
					<a className={classNames.backButton} href="https://www.imec.be/en/">back</a>
					<SearchResultsList />
			</div>
		</div>
	);
};
