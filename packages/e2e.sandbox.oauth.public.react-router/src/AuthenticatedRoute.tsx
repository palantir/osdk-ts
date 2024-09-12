import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { publicOauthClient } from "./client.js";

/**
 * A component that can be used to wrap routes that require authentication.
 * Nested routes may assume that a valid token is present.
 */
function AuthenticatedRoute() {
  const [token, setToken] = useState(publicOauthClient.getTokenOrUndefined());

  useEffect(() => {
    publicOauthClient().then((token) => {
      setToken(token);
    });
  }, []);

  if (token == null) {
    return null;
  }

  return <Outlet />;
}

export default AuthenticatedRoute;
