import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "@/client";

/**
 * Component to render at `/auth/callback`
 * This calls signIn() again to save the token, and then navigates the user back to the home page.
 */
function AuthCallback(): React.ReactElement {
  const [error, setError] = useState<string | undefined>();
  const navigate = useNavigate();

  // This effect conflicts with React 18 strict mode in development
  // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
  useEffect(() => {
    async function run() {
      try {
        await auth.signIn();
        navigate("/", { replace: true });
      } catch (signInError: unknown) {
        if (signInError instanceof Error) {
          setError(signInError.message);
        } else {
          setError(String(signInError));
        }
      }
    }
    void run();
  }, [navigate]);
  return (
    <div>
      {error !== undefined && error !== null ? error : "Authenticating…"}
    </div>
  );
}

export default AuthCallback;
