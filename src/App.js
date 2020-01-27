import React from "react";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(awsconfig);

function App() {
	return <div>Hello world!</div>;
}

export default withAuthenticator(App, true);
