import * as React from "react";

export const ApiAccessTokenProviderContext = React.createContext<
	string | (() => string) | (() => PromiseLike<string>) | undefined
>(undefined);

export const useApiAccessTokenProvider = () => {
	const apiAccessTokenProvider = React.useContext(ApiAccessTokenProviderContext);

	return apiAccessTokenProvider;
};
