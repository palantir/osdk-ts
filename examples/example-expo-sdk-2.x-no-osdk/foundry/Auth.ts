import { TokenResponse } from "expo-auth-session";

let authToken: TokenResponse | undefined = undefined;

export const setAuthToken = (authTokenResponse: TokenResponse): void => {
  authToken = authTokenResponse;
};

export const getValidAuthToken = async (): Promise<string> => {
  if (authToken != null) {
    return Promise.resolve(authToken.accessToken);
  } else {
    throw new Error("No valid auth token");
  }
};
