import * as React from "react";
import { ViewType } from "../ViewType";

export const ViewTypeContext = React.createContext<[ViewType, React.Dispatch<React.SetStateAction<ViewType>>]>([
	ViewType.landing,
	() => {} // tslint:disable-line: no-empty
]);

export const useViewType = () => {
	const viewTypeContext = React.useContext(ViewTypeContext);

	return viewTypeContext;
};
