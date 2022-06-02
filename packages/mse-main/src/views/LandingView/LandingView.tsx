import { styled } from "office-ui-fabric-react/lib/Utilities";
import { LandingViewBase } from "./LandingView.base";
import { getStyles } from "./LandingView.styles";
import { ILandingViewProps, ILandingViewStyleProps, ILandingViewStyles } from "./LandingView.types";

export const LandingView: React.FC<ILandingViewProps> = styled<
	ILandingViewProps,
	ILandingViewStyleProps,
	ILandingViewStyles
>(LandingViewBase, getStyles);
