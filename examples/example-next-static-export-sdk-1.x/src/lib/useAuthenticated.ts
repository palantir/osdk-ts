import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import client from "./client";

function useAuthenticated() {
  const router = useRouter();
  const [token, setToken] = useState(client.auth.token);
  useEffect(() => {
    if (client.auth.token == null || client.auth.token.isExpired) {
      client.auth
        .refresh()
        .then(() => {
          setToken(client.auth.token);
        })
        .catch(() => {
          // If we cannot refresh the token (i.e. the user is not logged in) we redirect to the login page
          router.push("/login");
        });
    }
  }, [router]);

  return token != null && !token.isExpired;
}

export default useAuthenticated;
