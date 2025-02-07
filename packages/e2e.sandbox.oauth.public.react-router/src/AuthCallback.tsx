import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicOauthClient } from "./client.js";

/**
 * Component to render at `/auth/callback`
 * This calls signIn() again to save the token, and then navigates the user back to the home page.
 */
function AuthCallback(): React.JSX.Element {
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    publicOauthClient()
      .then(() => navigate("/", { replace: true }))
      .catch((e: unknown) => setError((e as Error).message ?? e));
  }, [navigate]);

  return <div>{error != null ? error : "Authenticating…"}</div>;
}

export default AuthCallback;
