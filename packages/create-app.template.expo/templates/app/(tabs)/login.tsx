import { useCallback, useEffect, useMemo } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { exchangeCodeAsync, makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button,  StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { CLIENT_ID, FOUNDRY_URL } from '@/foundry/osdkConst';
import { useRouter } from 'expo-router';
import { setAuthToken } from '@/foundry/Auth';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: `${FOUNDRY_URL}/multipass/api/oauth2/authorize`,
  tokenEndpoint: `${FOUNDRY_URL}/multipass/api/oauth2/token`,
};

export default function Login() {
  const router = useRouter();
  const redirectUri = useMemo(() => makeRedirectUri({
    path: '',
  }), []);
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ["api:read-data", "api:write-data"],
      redirectUri,
      usePKCE: true,
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  const onLogin = useCallback(async () => {
    promptAsync().then((codeResponse) => {
        if (codeResponse.type !== 'success') {
          return;
        }
        exchangeCodeAsync(
          {
            clientId: CLIENT_ID,
            code: codeResponse.params.code,
            redirectUri,
            extraParams: request?.codeVerifier 
            ? {
              code_verifier: request.codeVerifier
            } : undefined,
          },
          discovery
        ).then( async (tokenResponse) => {
            setAuthToken(tokenResponse);
            router.navigate('/(tabs)/explore');
          });
        }
      );
  } , [promptAsync, router, request]);
  
  return (
      <ThemedView style={styles.loginContainer}>
          <ThemedView style={styles.loginControls}>
              <Button
                  title="Login"
                  onPress={onLogin} />
              <ThemedText type={'subtitle'} style={styles.loginSubTitle}>Powered by Palantir</ThemedText>
          </ThemedView>
      </ThemedView>
);
}


const styles = StyleSheet.create({
  loginContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 10,
      padding: 10,
      width: "100%",
      height: "100%",
      backgroundColor: "white",
  },
  loginControls: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
    alignSelf: "center",
  },
  loginSubTitle: {
    display: "flex",
    padding: 10,
    alignSelf: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
