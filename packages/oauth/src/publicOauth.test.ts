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

import crypto from "node:crypto";
import * as commonJs from "./common.js";
import { LocalStorageState } from "./common.js";
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
    // vi.fn(original.readLocal),
  };
});

vi.mock("oauth4webapi");

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
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  const BASE_CLIENT_ARGS = {
    clientId: "this-would-be-client-id",
    foundryUrl: "https://a.foundry.url.local",
    redirectUrl: "https://my.redirect.url.local",
    fetchFn,
  };

  const fullLoginUrl = new URL("/loginPage", DEFAULT_CUR_URL);

  describe.each<{
    name: string;
    currentUrl: URL;
    clientArgs: {
      clientId: string;
      foundryUrl: string;
      redirectUrl: string;
      useHistory?: boolean;
      loginPage?: string;
      postLoginPage?: string;
      scopes?: string[];
      fetchFn?: typeof globalThis.fetch;
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
    let client: PublicOauthClient;

    beforeEach(() => {
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

      mockWindow.location.href = new URL(currentUrl).href;
      mockWindow.location.pathname = new URL(currentUrl).pathname;
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
      );
    });

    describe.each<LocalStorageState>([
      {
        refresh_token: "a-refresh-token",
      },
      {
        codeVerifier: "hi",
        state: "mom",
        oldUrl: "https://someoldurl.local",
      },
      {},
    ])("Initial Local State: %s", (initialLocalState) => {
      const ACCESS_TOKEN = (Math.random() + 1).toString(36).substring(7);

      beforeEach(() => {
        vi.mocked(commonJs.readLocal).mockImplementation(() =>
          initialLocalState
        );

        hoistedMocks.makeTokenAndSaveRefresh.mockImplementation(
          () => ({
            access_token: ACCESS_TOKEN,
            expires_at: Date.now(),
            expires_in: 10000,
          }),
        );
      });

      if (Object.keys(initialLocalState).length === 0) {
        if (should.redirectToLoginPage) {
          it("redirects to login page", async () => {
            const tokenPromise = client!();
            expect(vi.mocked(commonJs.common)).toBeCalledTimes(1);

            if (should.redirectToLoginPage) {
              // expect save local
              await expect(tokenPromise).resolves.toBeUndefined();
              expect(mockLocalStorage.setItem).toBeCalledWith(
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
              expect(mockLocalStorage.setItem).toBeCalledWith(
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
                scope: "offline_access api:read-data api:write-data",
                state: expect.any(String),
              }),
            );
          });
        }
      }

      if (initialLocalState.codeVerifier) {
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
            initialLocalState.oldUrl,
          );
        });
      }

      if (initialLocalState.refresh_token) {
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
});
