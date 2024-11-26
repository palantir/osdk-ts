import {  TokenResponse } from "expo-auth-session";
import { FOUNDRY_URL } from "./osdkConst";

let authToken: TokenResponse | undefined = undefined;

const discovery = {
    authorizationEndpoint: `${FOUNDRY_URL}/multipass/api/oauth2/authorize`,
    tokenEndpoint: `${FOUNDRY_URL}/multipass/api/oauth2/token`,
  };
  
export const setAuthToken = (authTokenResponse: TokenResponse): void => {
    authToken = authTokenResponse;
}

export const getValidAuthToken = async (): Promise<string> => {
    if (authToken != null) {
        return Promise.resolve(authToken.accessToken);
    } else {
        throw new Error('No valid auth token');
    }
}
