import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

initializeIcons();

ReactDOM.render(
	<React.StrictMode>
		<Fabric>
			<App />
		</Fabric>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
