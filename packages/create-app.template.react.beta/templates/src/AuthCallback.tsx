import { auth } from "@/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Component to render at `/auth/callback`
 * This calls signIn() again to save the token, and then navigates the user back to the home page.
 */
function AuthCallback(): React.ReactElement {
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  // This effect conflicts with React 18 strict mode in development
  // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
  useEffect(() => {
    auth
      .signIn()
      .then(() => navigate("/", { replace: true }))
      .catch((e: unknown) => {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError(String(e));
        }
      });
  }, [navigate]);
  return <div>{error != null ? error : "Authenticating…"}</div>;
}

export default AuthCallback;
