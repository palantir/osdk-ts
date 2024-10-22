import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "./client";

function useAuthenticated() {
  const router = useRouter();
  const [token, setToken] = useState(auth.token);
  useEffect(() => {
    if (auth.getTokenOrUndefined() == null) {
      auth
        .refresh()
        .then(() => {
          setToken(auth.getTokenOrUndefined());
        })
        .catch(() => {
          // If we cannot refresh the token (i.e. the user is not logged in) we redirect to the login page
          router.push("/login");
        });
    }
  }, [router]);

  return token != null;
}

export default useAuthenticated;
