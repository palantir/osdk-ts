import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "./client";

/**
 * A component that can be used to wrap routes that require authentication.
 * Nested routes may assume that a valid token is present.
 */
function AuthenticatedRoute() {
  const navigate = useNavigate();
  const [token, setToken] = useState(auth.getTokenOrUndefined());
  useEffect(() => {
    if (auth.getTokenOrUndefined() == null) {
      auth
        .refresh()
        .then(() => {
          setToken(auth.getTokenOrUndefined());
        })
        .catch(() => {
          // If we cannot refresh the token (i.e. the user is not logged in) we redirect to the login page
          navigate("/login");
        });
    }
  }, [navigate]);

  if (token == null || token.isExpired) {
    return null;
  }

  return <Outlet />;
}

export default AuthenticatedRoute;
