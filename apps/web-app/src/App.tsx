import { ModernSearch } from "@dlw-mse/main";
import { TeamsMsal2Provider } from '@microsoft/mgt-teams-msal2-provider';
import * as MicrosoftTeams from "@microsoft/teams-js";
import * as React from "react";

function App() {
	// Todo: pass correct access token provider to ModernSearch component.
	console.log("initializing ModernSearch");
	MicrosoftTeams.initialize();

	TeamsMsal2Provider.microsoftTeamsLib = MicrosoftTeams;

	console.log("handling MSAL2 provider");
	TeamsMsal2Provider.handleAuth();

	/*Providers.globalProvider = new TeamsMsal2Provider({
		clientId: 'cff2eeb3-a919-465b-824b-cd7590a4d0b4',
		authPopupUrl: '/tabauth',
		scopes: ['User.Read','Mail.ReadBasic'],
		ssoUrl: 'https://localhost:44386/api/auth',
		httpMethod: HttpMethod.POST
	});*/

	/*const provider = Providers.globalProvider;

	console.log("getting access token");
	provider.getAccessToken().then(token => {
		console.log(token);
	}).catch(err => {
		console.log(err);
	});*/

	return <ModernSearch apiAccessTokenProvider={""} />;
}

export default App;
