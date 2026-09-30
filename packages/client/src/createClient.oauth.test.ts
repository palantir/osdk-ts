/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BarInterface } from "@osdk/client.test.ontology";
import { createPublicOauthClient } from "@osdk/oauth";
import { stubData } from "@osdk/shared.test";
import { afterEach, describe, expect, it, vi } from "vitest";

import { createClient } from "./createClient.js";

vi.mock("@osdk/oauth", () =>
  vi.importActual("../../oauth/src/createPublicOauthClient.ts"),
);

function memoryStorage() {
  const entries = new Map<string, string>();
  return {
    getItem: (key: string) => entries.get(key) ?? null,
    setItem: (key: string, value: string) => {
      entries.set(key, value);
    },
    removeItem: (key: string) => {
      entries.delete(key);
    },
  };
}

afterEach(() => {
  vi.clearAllTimers();
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("branch selection after an OAuth round trip", () => {
  it.each([false, true])(
    "restores the original URL with useHistory=%s",
    async (useHistory) => {
      vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });
      const branch = "ri.foundry.main.branch.workshop";
      const originalUrl = `https://app.example/?foundryBranchRid=${branch}&other=value#view`;
      const redirectUrl = "https://app.example/auth/callback";
      const foundryUrl = "https://foundry.example";
      const ontologyRid = "ri.ontology.main.ontology.example";
      const location = new URL(originalUrl);
      const assign = vi.fn();
      const replaceState = vi.fn(
        (_state: unknown, _title: string, url: string) => {
          location.href = new URL(url, location).href;
        },
      );
      vi.stubGlobal("window", {
        location: Object.assign(location, { assign }),
        history: { replaceState },
      });
      vi.stubGlobal("document", undefined);
      vi.stubGlobal("localStorage", memoryStorage());
      vi.stubGlobal("sessionStorage", memoryStorage());
      vi.stubEnv("TARGET", "browser");

      const tokenFetch = vi.fn<typeof fetch>().mockImplementation(() =>
        Promise.resolve(
          Response.json({
            access_token: "access-token",
            refresh_token: "refresh-token",
            token_type: "Bearer",
            expires_in: 3600,
          }),
        ),
      );
      const ontologyFetch = vi.fn<typeof fetch>();
      function initializeApp() {
        const auth = createPublicOauthClient(
          "client-id",
          foundryUrl,
          redirectUrl,
          {
            useHistory,
            fetchFn: tokenFetch,
          },
        );
        return {
          auth,
          client: createClient(
            foundryUrl,
            ontologyRid,
            auth,
            undefined,
            ontologyFetch,
          ),
        };
      }

      const initialApp = initializeApp();
      // The initial page is unloaded while signIn waits for navigation.
      void initialApp.auth.signIn();
      await vi.waitFor(() => expect(assign).toHaveBeenCalledTimes(1));
      const authorizationUrl = new URL(assign.mock.calls[0][0] as string);
      expect(authorizationUrl.searchParams.get("redirect_uri")).toBe(
        redirectUrl,
      );
      const state = authorizationUrl.searchParams.get("state");
      expect(state).toBeTruthy();

      // Simulate the authorization server returning to a URL without a branch.
      location.href = `${redirectUrl}?${new URLSearchParams({ code: "auth-code", state: state! })}`;
      assign.mockClear();
      const callbackApp = initializeApp();
      await callbackApp.auth();
      expect(tokenFetch).toHaveBeenCalledTimes(1);
      expect(String(tokenFetch.mock.calls[0][0])).toBe(
        `${foundryUrl}/multipass/api/oauth2/token`,
      );

      let activeApp = callbackApp;
      if (useHistory) {
        expect(replaceState).toHaveBeenCalledWith({}, "", originalUrl);
        expect(assign).not.toHaveBeenCalled();
        // Replacing history keeps the client created on the callback page.
      } else {
        expect(assign).toHaveBeenCalledWith(originalUrl);
        expect(replaceState).not.toHaveBeenCalled();
        // location.assign reloads the application; recreate both exports at
        // its actual destination, retaining browser storage across the reload.
        location.href = assign.mock.calls[0][0] as string;
        activeApp = initializeApp();
      }
      expect(location.href).toBe(originalUrl);

      ontologyFetch.mockResolvedValueOnce(Response.json(stubData.BarInterface));
      ontologyFetch.mockResolvedValueOnce(Response.json({ data: [] }));
      await activeApp.client(BarInterface).fetchPage();

      expect(ontologyFetch).toHaveBeenCalledTimes(2);
      // Check both metadata and data requests, not just the restored address bar.
      for (const [input] of ontologyFetch.mock.calls) {
        expect(new URL(String(input)).searchParams.get("branch")).toBe(
          useHistory ? null : branch,
        );
      }
    },
  );
});
