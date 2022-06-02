import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { SearchContainer } from "../../components/SearchContainer";
import { useTheme, useViewType } from "../../models";
import { ViewType } from "../../models/ViewType";
import { ILandingViewProps, ILandingViewStyleProps, ILandingViewStyles } from "./LandingView.types";

const getClassNames = classNamesFunction<ILandingViewStyleProps, ILandingViewStyles>();

export const LandingViewBase: React.FC<ILandingViewProps> = (props) => {
	const {} = props;

	const [, setViewType] = useViewType();

	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	// Event handlers
	const onSearch = () => {
		setViewType(ViewType.results);
	};

	return (
		<div className={classNames.root}>
				<SearchContainer title="Hello! What imec information are you looking for?" big={true} onExecuteSearch={onSearch} styles={{ root: { margin: "auto" } }} />
				<div className={classNames.other}>Search within other sources:</div>
		</div>
	);
};
