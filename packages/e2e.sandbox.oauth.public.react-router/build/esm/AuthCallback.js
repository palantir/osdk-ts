import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicOauthClient } from "./client.js";

/**
 * Component to render at `/auth/callback`
 * This calls signIn() again to save the token, and then navigates the user back to the home page.
 */
function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState(undefined);
  useEffect(() => {
    publicOauthClient().then(() => navigate("/", {
      replace: true
    })).catch(e => setError(e.message ?? e));
  }, [navigate]);
  return /*#__PURE__*/React.createElement("div", null, error != null ? error : "Authenticating…");
}
export default AuthCallback;
//# sourceMappingURL=AuthCallback.js.map