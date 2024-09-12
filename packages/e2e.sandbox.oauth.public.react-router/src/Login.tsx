import React, { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import { publicOauthClient } from "./client.js";
import Layout from "./Layout.js";

function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const token = publicOauthClient.getTokenOrUndefined();

  const handleLogin = useCallback(async () => {
    setIsLoggingIn(true);
    try {
      // Initiate the OAuth flow, which will redirect the user to log into Foundry
      await publicOauthClient();
    } catch (e: unknown) {
      console.error(e);
      setError((e as Error).message ?? e);
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  // If the token exists but a user tries to load /login, redirect to the home page instead
  if (token != null) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Layout>
      <h1>Ontology SDK</h1>
      <button onClick={handleLogin}>
        {isLoggingIn ? "Logging in…" : "Log in "}
      </button>
      {error && <div>Unable to log in: {error}</div>}
    </Layout>
  );
}

export default Login;
