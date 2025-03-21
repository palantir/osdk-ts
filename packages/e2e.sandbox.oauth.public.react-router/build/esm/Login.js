import React, { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import { publicOauthClient } from "./client.js";
import Layout from "./Layout.js";
function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(undefined);
  const token = publicOauthClient.getTokenOrUndefined();
  const handleLogin = useCallback(async () => {
    setIsLoggingIn(true);
    try {
      // Initiate the OAuth flow, which will redirect the user to log into Foundry
      await publicOauthClient();
    } catch (e) {
      console.error(e);
      setError(e.message ?? e);
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  // If the token exists but a user tries to load /login, redirect to the home page instead
  if (token != null) {
    return /*#__PURE__*/React.createElement(Navigate, {
      to: "/",
      replace: true
    });
  }
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement("h1", null, "Ontology SDK"), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogin
  }, isLoggingIn ? "Logging in…" : "Log in "), error && /*#__PURE__*/React.createElement("div", null, "Unable to log in: ", error));
}
export default Login;
//# sourceMappingURL=Login.js.map