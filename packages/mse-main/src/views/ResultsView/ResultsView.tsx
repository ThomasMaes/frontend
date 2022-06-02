import { styled } from "office-ui-fabric-react/lib/Utilities";
import { ResultsViewBase } from "./ResultsView.base";
import { getStyles } from "./ResultsView.styles";
import { IResultsViewProps, IResultsViewStyleProps, IResultsViewStyles } from "./ResultsView.types";

export const ResultsView: React.FC<IResultsViewProps> = styled<
	IResultsViewProps,
	IResultsViewStyleProps,
	IResultsViewStyles
>(ResultsViewBase, getStyles);
