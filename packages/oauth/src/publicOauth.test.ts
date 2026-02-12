/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import * as commonJs from "./common.js";
import { LocalStorageState, SessionStorageState } from "./common.js";
import { createPublicOauthClient } from "./createPublicOauthClient.js";
import { PublicOauthClient } from "./PublicOauthClient.js";

const hoistedMocks = vi.hoisted(() => {
  return {
    makeTokenAndSaveRefresh: vi.fn(),
  };
});

vi.mock("delay", async (importOriginal) => {
  const original = await importOriginal<typeof import("delay")>();
  return {
    default: vi.fn<typeof original.default>((ms, opts) => {
      // speed up the tests
      return original.default(ms / 100, opts);
    }),
  };
});

vi.mock("./common.js", async (importOriginal) => {
  const original = await importOriginal<typeof import("./common.js")>();
  return {
    ...original,
    common: vi.fn<typeof commonJs.common>((...args) => {
      const result = original.common(...args);
      return {
        ...result,
        makeTokenAndSaveRefresh: hoistedMocks.makeTokenAndSaveRefresh,
      };
    }),
    readLocal: vi.spyOn(original, "readLocal"),
    readSession: vi.spyOn(original, "readSession"),
    // vi.fn(original.readLocal),
  };
});

vi.mock("oauth4webapi");

interface BaseClientArgs {
  clientId: string;
  foundryUrl: string;
  redirectUrl: string;
  fetchFn?: typeof globalThis.fetch;
}

interface ClientArgs extends BaseClientArgs {
  useHistory?: boolean;
  loginPage?: string;
  postLoginPage?: string;
  scopes?: string[];
  ctxPath?: string;
  refreshTokenMarker?: string;
}

describe(createPublicOauthClient, () => {
  const DEFAULT_CUR_URL = new URL("https://fauxurl");
  const fetchFn = vi.fn<typeof fetch>();

  const mockWindow = {
    location: {
      toString: vi.fn(() => DEFAULT_CUR_URL),
      assign: vi.fn(),
      href: DEFAULT_CUR_URL.href,
      pathname: DEFAULT_CUR_URL.pathname,
    },
    history: {
      replaceState: vi.fn<typeof window.history.replaceState>(),
    },
  };

  const mockLocalStorage = {
    setItem: vi.fn(),
    getItem: vi.fn(),
    removeItem: vi.fn(),
  };

  const mockSessionStorage = {
    setItem: vi.fn(),
    getItem: vi.fn(),
    removeItem: vi.fn(),
  };

  beforeEach((context) => {
    vi.restoreAllMocks();
    fetchFn.mockRestore();
  });

  afterEach((context) => {
    vi.clearAllMocks();
    fetchFn.mockReset();
  });

  beforeAll(() => {
    vi.stubGlobal("window", mockWindow);
    vi.stubGlobal("localStorage", mockLocalStorage);
    vi.stubGlobal("sessionStorage", mockSessionStorage);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  const BASE_CLIENT_ARGS: BaseClientArgs = {
    clientId: "this-would-be-client-id",
    foundryUrl: "https://a.foundry.url.local",
    redirectUrl: "https://my.redirect.url.local",
    fetchFn,
  };

  const fullLoginUrl = new URL("/loginPage", DEFAULT_CUR_URL);

  function setupWindowLocation(currentUrl: string) {
    mockWindow.location.href = new URL(currentUrl).href;
    mockWindow.location.pathname = new URL(currentUrl).pathname;
  }

  function setupLocalState(initialLocalState: LocalStorageState) {
    vi.mocked(commonJs.readLocal).mockImplementation(() => initialLocalState);
  }

  let client: PublicOauthClient;
  let clientArgs: ClientArgs;
  function setupClient(clientArgs_: ClientArgs) {
    clientArgs = clientArgs_;
    if (clientArgs.refreshTokenMarker) {
      client = createPublicOauthClient(
        clientArgs.clientId,
        clientArgs.foundryUrl,
        clientArgs.redirectUrl,
        clientArgs,
      );
    } else {
      client = createPublicOauthClient(
        clientArgs.clientId,
        clientArgs.foundryUrl,
        clientArgs.redirectUrl,
        clientArgs.useHistory,
        clientArgs.loginPage,
        clientArgs.postLoginPage,
        clientArgs.scopes,
        clientArgs.fetchFn,
        clientArgs.ctxPath,
      );
    }
  }
  beforeEach((context) => {
    // prevents mistakes like forgetting to initialize the client with an
    // old value around
    client = undefined!;
    clientArgs = undefined!;
  });

  async function expectRedirectToMultipass(
    tokenPromise: Promise<string>,
  ) {
    // we assume window.location.assign will take you away therefore we
    // also have to expect in this scenario that the thrown error happens
    await expect(tokenPromise)
      .rejects.toThrowError(new Error("Unable to redirect"));

    expect(mockWindow.location.assign).toHaveBeenCalledOnce();

    const url = new URL(
      mockWindow.location.assign.mock.calls[0][0],
    );
    expect(url.origin).toEqual(clientArgs.foundryUrl);
    expect(url.pathname).toEqual("/multipass/api/oauth2/authorize");
    expect(Object.fromEntries(url.searchParams.entries())).toEqual(
      expect.objectContaining({
        client_id: clientArgs.clientId,
        code_challenge: expect.any(String),
        redirect_uri: clientArgs.redirectUrl,
        response_type: "code",
        code_challenge_method: "S256",
        scope: [
          "offline_access",
          ...(clientArgs.scopes
            ?? [
              "api:read-data",
              "api:write-data",
              "api:use-ontologies-read",
              "api:use-ontologies-write",
            ].sort()),
        ].join(" "),
        state: expect.any(String),
      }),
    );
  }

  describe("refresh token marker and scopes", () => {
    beforeEach(() => {
      setupWindowLocation("https://foundry.local");
    });

    // Backwards compatibility from when we didn't store scopes
    it("should not allow refresh if scopes in local storage is undefined", async () => {
      setupLocalState({
        refresh_token: "refreshToken",
      });

      setupClient({
        ...BASE_CLIENT_ARGS,
        // Testing with default scopes
      });

      await expectRedirectToMultipass(
        client(),
      );
    });

    it("should not allow refresh if requested scopes are different", async () => {
      setupLocalState({
        refresh_token: "refreshToken",
        requestedScopes: "api:read-data",
      });

      setupClient({
        ...BASE_CLIENT_ARGS,
        scopes: ["api:write-data"],
      });

      await expectRedirectToMultipass(
        client(),
      );
    });

    it("should not allow refresh if the refresh markers do not match", async () => {
      setupLocalState({
        refresh_token: "refreshToken",
        refreshTokenMarker: "not-the-right-marker",
        requestedScopes: "api:read-data",
      });

      setupClient({
        ...BASE_CLIENT_ARGS,
        refreshTokenMarker: "marker",
        scopes: ["api:read-data"],
      });

      await expectRedirectToMultipass(
        client(),
      );
    });

    it("should try to refresh if refresh markers match and requested scopes are equal", async () => {
      setupLocalState({
        refresh_token: "refreshToken",
        refreshTokenMarker: "marker",
        requestedScopes: "api:admin-read api:datasets-read",
      });

      setupClient({
        ...BASE_CLIENT_ARGS,
        refreshTokenMarker: "marker",
        scopes: ["api:datasets-read", "api:admin-read"],
      });

      hoistedMocks.makeTokenAndSaveRefresh.mockImplementationOnce(
        () => ({
          access_token: "some token",
          expires_at: Date.now(),
          expires_in: 10000,
        }),
      );

      const tokenPromise = client();

      await expect(tokenPromise).resolves.toEqual("some token");

      expect(hoistedMocks.makeTokenAndSaveRefresh).toBeCalledTimes(1);
    });
  });

  describe.each<{
    name: string;
    currentUrl: URL;
    clientArgs: BaseClientArgs & {
      useHistory?: boolean;
      loginPage?: string;
      postLoginPage?: string;
      scopes?: string[];
      ctxPath?: string;
    };
    should: {
      redirectToLoginPage: boolean;
    };
  }>([
    {
      name: "Basic Usage",
      currentUrl: DEFAULT_CUR_URL,
      clientArgs: {
        ...BASE_CLIENT_ARGS,
      },
      should: {
        redirectToLoginPage: false,
      },
    },
    {
      name: "Base w/ full loginPage and curUrl is root",
      currentUrl: DEFAULT_CUR_URL,
      clientArgs: {
        ...BASE_CLIENT_ARGS,
        loginPage: fullLoginUrl.toString(),
      },
      should: {
        redirectToLoginPage: true,
      },
    },
    {
      name: "Base w/ full loginPage and curUrl is login page",
      currentUrl: fullLoginUrl,
      clientArgs: {
        ...BASE_CLIENT_ARGS,
        loginPage: fullLoginUrl.toString(),
      },
      should: {
        redirectToLoginPage: false,
      },
    },
    {
      name: "Base w/ short loginPage and curUrl is root",
      currentUrl: DEFAULT_CUR_URL,
      clientArgs: {
        ...BASE_CLIENT_ARGS,
        loginPage: "/loginPage",
      },
      should: {
        redirectToLoginPage: true,
      },
    },
    {
      name: "Base w/ short loginPage and curUrl is loginPage",
      currentUrl: new URL("/loginPage", DEFAULT_CUR_URL),
      clientArgs: {
        ...BASE_CLIENT_ARGS,
        loginPage: "/loginPage",
      },
      should: {
        redirectToLoginPage: false,
      },
    },
  ])("$name", ({ clientArgs, currentUrl, should }) => {
    beforeEach(() => {
      setupClient(clientArgs);
      setupWindowLocation(currentUrl.toString());
    });

    it("calls common with expected values", () => {
      expect(vi.mocked(commonJs.common)).toHaveBeenCalledWith(
        expect.objectContaining({
          client_id: clientArgs.clientId,
          token_endpoint_auth_method: "none",
        }),
        commonJs.createAuthorizationServer(
          clientArgs.ctxPath ?? "/multipass",
          clientArgs.foundryUrl,
        ),
        expect.any(Function),
        expect.anything(),
        expect.any(Function),
        undefined,
        (clientArgs.scopes
          ?? [
            "api:read-data",
            "api:write-data",
            "api:use-ontologies-read",
            "api:use-ontologies-write",
          ]).sort().join(" "),
        undefined,
      );
    });

    describe.each<
      { localStorage: LocalStorageState; sessionStorage: SessionStorageState }
    >([
      {
        localStorage: {
          refresh_token: "a-refresh-token",
          requestedScopes: (clientArgs.scopes
            ?? [
              "api:read-data",
              "api:write-data",
              "api:use-ontologies-read",
              "api:use-ontologies-write",
            ]).sort().join(" "),
        },
        sessionStorage: {},
      },
      {
        localStorage: {},
        sessionStorage: {
          codeVerifier: "hi",
          state: "mom",
          oldUrl: "https://someoldurl.local",
        },
      },
      { localStorage: {}, sessionStorage: {} },
    ])("Initial Local State: %s", (initialState) => {
      const ACCESS_TOKEN = (Math.random() + 1).toString(36).substring(7);

      beforeEach(() => {
        vi.mocked(commonJs.readLocal).mockImplementation(() =>
          initialState.localStorage
        );

        vi.mocked(commonJs.readSession).mockImplementation(() =>
          initialState.sessionStorage
        );

        hoistedMocks.makeTokenAndSaveRefresh.mockImplementation(
          () => ({
            access_token: ACCESS_TOKEN,
            expires_at: Date.now(),
            expires_in: 10000,
          }),
        );
      });

      if (
        Object.keys(initialState.localStorage).length === 0
        && Object.keys(initialState.sessionStorage).length === 0
      ) {
        if (should.redirectToLoginPage) {
          it("redirects to login page", async () => {
            const tokenPromise = client!();
            expect(vi.mocked(commonJs.common)).toBeCalledTimes(1);

            if (should.redirectToLoginPage) {
              // expect save local
              await expect(tokenPromise).resolves.toBeUndefined();
              expect(mockSessionStorage.setItem).toBeCalledWith(
                `@osdk/oauth : refresh : ${clientArgs.clientId}`,
                JSON.stringify({ oldUrl: window.location.toString() }),
              );
              expect(mockWindow.history.replaceState).toHaveBeenCalledWith(
                {},
                "",
                clientArgs.loginPage,
              );
              return;
            }
          });
        } else {
          it("redirects to multipass", async () => {
            const tokenPromise = client!();
            expect(vi.mocked(commonJs.common)).toBeCalledTimes(1);

            if (should.redirectToLoginPage) {
              // expect save local
              await expect(tokenPromise).resolves.toBeUndefined();
              expect(mockSessionStorage.setItem).toBeCalledWith(
                `@osdk/oauth : refresh : ${clientArgs.clientId}`,
                JSON.stringify({ oldUrl: window.location.toString() }),
              );

              expect(mockWindow.history.replaceState).toHaveBeenCalledWith(
                {},
                "",
                clientArgs.loginPage,
              );
              return;
            }

            await expectRedirectToMultipass(
              tokenPromise,
            );
          });
        }
      }

      if (initialState.sessionStorage.codeVerifier) {
        it("tries to auth with return results", async () => {
          await expect(client()).resolves.toEqual(ACCESS_TOKEN);
          expect(hoistedMocks.makeTokenAndSaveRefresh).toHaveBeenCalledTimes(
            1,
          );
          expect(hoistedMocks.makeTokenAndSaveRefresh).toHaveBeenCalledWith(
            undefined, // this is only because we didn't mock out the internals
            "signIn",
          );

          expect(mockWindow.history.replaceState).toHaveBeenCalledTimes(1);
          expect(mockWindow.history.replaceState).toBeCalledWith(
            expect.anything(),
            expect.anything(),
            initialState.sessionStorage.oldUrl,
          );
        });
      }

      if (initialState.localStorage.refresh_token) {
        it("refreshes", async () => {
          await expect(client()).resolves.toEqual(ACCESS_TOKEN);

          expect(hoistedMocks.makeTokenAndSaveRefresh).toHaveBeenCalledTimes(
            1,
          );
          expect(hoistedMocks.makeTokenAndSaveRefresh).toHaveBeenCalledWith(
            undefined, // this is only because we didn't mock out the internals
            "refresh",
          );
        });
      }
    });
  });

  describe("tokenStorage option", () => {
    beforeEach(() => {
      setupWindowLocation("https://foundry.local");
      setupLocalState({});
      vi.mocked(commonJs.readSession).mockImplementation(() => ({}));
      // getStorage() checks process.env.TARGET to determine if we're in a browser
      vi.stubGlobal("process", { env: { TARGET: "browser" } });
    });

    afterEach(() => {
      vi.unstubAllGlobals();
      // Re-stub the globals that the outer describe needs
      vi.stubGlobal("window", mockWindow);
      vi.stubGlobal("localStorage", mockLocalStorage);
      vi.stubGlobal("sessionStorage", mockSessionStorage);
    });

    it("should pass localStorage to common when tokenStorage is 'localStorage'", () => {
      createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
        { tokenStorage: "localStorage" },
      );

      // common() is called with 8 args, the last one being the storage
      const lastArg = vi.mocked(commonJs.common).mock.calls[0][7];
      expect(lastArg).toBe(mockLocalStorage);
    });

    it("should pass sessionStorage to common when tokenStorage is 'sessionStorage'", () => {
      createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
        { tokenStorage: "sessionStorage" },
      );

      const lastArg = vi.mocked(commonJs.common).mock.calls[0][7];
      expect(lastArg).toBe(mockSessionStorage);
    });

    it("should pass undefined to common when tokenStorage is 'none'", () => {
      createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
        { tokenStorage: "none" },
      );

      const lastArg = vi.mocked(commonJs.common).mock.calls[0][7];
      expect(lastArg).toBeUndefined();
    });

    it("should not include offline_access scope when tokenStorage is 'none'", async () => {
      const client = createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
        { tokenStorage: "none" },
      );

      // Trigger the auth flow - this should redirect to multipass
      await expect(client()).rejects.toThrowError("Unable to redirect");

      expect(mockWindow.location.assign).toHaveBeenCalledOnce();

      const url = new URL(mockWindow.location.assign.mock.calls[0][0]);
      const scope = url.searchParams.get("scope");

      // Should NOT include offline_access
      expect(scope).not.toContain("offline_access");
      // Should still include the regular scopes
      expect(scope).toContain("api:read-data");
    });

    it("should pass undefined to common when tokenStorage is not provided", () => {
      createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
      );
      const lastArg = vi.mocked(commonJs.common).mock.calls[0][7];
      expect(lastArg).toBeUndefined();
    });

    it("should include offline_access scope when tokenStorage is 'localStorage'", async () => {
      const client = createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
        { tokenStorage: "localStorage" },
      );

      await expect(client()).rejects.toThrowError("Unable to redirect");

      const url = new URL(mockWindow.location.assign.mock.calls[0][0]);
      const scope = url.searchParams.get("scope");

      expect(scope).toContain("offline_access");
    });

    it("should include offline_access scope when tokenStorage is 'sessionStorage'", async () => {
      const client = createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
        { tokenStorage: "sessionStorage" },
      );

      await expect(client()).rejects.toThrowError("Unable to redirect");

      const url = new URL(mockWindow.location.assign.mock.calls[0][0]);
      const scope = url.searchParams.get("scope");

      expect(scope).toContain("offline_access");
    });

    it("should not attempt to read from storage when tokenStorage is 'none'", async () => {
      vi.mocked(commonJs.readLocal).mockClear();

      const client = createPublicOauthClient(
        BASE_CLIENT_ARGS.clientId,
        BASE_CLIENT_ARGS.foundryUrl,
        BASE_CLIENT_ARGS.redirectUrl,
        { tokenStorage: "none" },
      );

      await expect(client()).rejects.toThrowError("Unable to redirect");

      expect(vi.mocked(commonJs.readLocal)).not.toHaveBeenCalled();
    });
  });
});
