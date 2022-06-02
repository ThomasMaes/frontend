import { styled } from "office-ui-fabric-react/lib/Utilities";
import { ModernSearchBase } from "./ModernSearch.base";
import { getStyles } from "./ModernSearch.styles";
import { IModernSearchProps, IModernSearchStyleProps, IModernSearchStyles } from "./ModernSearch.types";

export const ModernSearch: React.FC<IModernSearchProps> = styled<
	IModernSearchProps,
	IModernSearchStyleProps,
	IModernSearchStyles
>(ModernSearchBase, getStyles);
