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

import type { Client } from "@osdk/client";
import type {
  ObservableClient,
  ObservableClientOptions,
} from "@osdk/client/observable";
import { createObservableClient } from "@osdk/client/observable";
import React, { useCallback, useEffect, useMemo } from "react";

import { getRegisteredDevTools } from "../public/devtools-registry.js";
import { REACT_USER_AGENT } from "../util/UserAgent.js";
import { OsdkContext } from "./OsdkContext.js";
import { useDevToolsClient } from "./useDevToolsClient.js";
import { UserAgentContext } from "./UserAgentContext.js";

declare const process: { env: { NODE_ENV: string } };
const __DEV__ =
  typeof process === "undefined" || process.env.NODE_ENV !== "production";

type OsdkProviderOptions = {
  children: React.ReactNode;
  enableDevTools?: boolean;
} & (
  | {
      client: Client;
      /**
       * Dev-only behaviors of the underlying observable client. Has no effect in
       * production builds. Use `devMode={{ actionDelayMs: 0 }}` to disable the
       * artificial action delay that makes optimistic updates visible in dev,
       * `devMode={{ logLevel: "debug" }}` to surface the observable client's debug
       * tracing, or `devMode={{ debug: { refCounts: true } }}` to log cache
       * internals.
       */
      devMode?: ObservableClientOptions["devMode"];
    }
  | {
      client: ObservableClient;
      devMode?: never;
    }
);

export function OsdkProvider(props: OsdkProviderOptions): React.JSX.Element {
  const { children, client: providedClient, enableDevTools, devMode } = props;
  const devtoolsEnabled =
    __DEV__ && (enableDevTools ?? getRegisteredDevTools() != null);

  const isObservableClient = "getClient" in providedClient;
  const client = isObservableClient
    ? providedClient.getClient()
    : providedClient;
  const observableClient = isObservableClient ? providedClient : undefined;

  const actionDelayMs = devMode?.actionDelayMs;
  const logLevel = devMode?.logLevel;
  const debugRefCounts = devMode?.debug?.refCounts;
  const debugCacheKeys = devMode?.debug?.cacheKeys;
  const baseObservableClient = useMemo(
    () =>
      observableClient ??
      createObservableClient(client, () => [REACT_USER_AGENT], {
        devMode: {
          actionDelayMs,
          logLevel,
          debug: { refCounts: debugRefCounts, cacheKeys: debugCacheKeys },
        },
      }),
    [
      client,
      observableClient,
      actionDelayMs,
      logLevel,
      debugRefCounts,
      debugCacheKeys,
    ],
  );

  useEffect(
    () => observableClient?.registerUserAgent(REACT_USER_AGENT),
    [observableClient],
  );

  const addUserAgent = useCallback(
    (agent: string) => baseObservableClient.registerUserAgent(agent),
    [baseObservableClient],
  );

  const { client: devToolsClient, wrapChildren } = useDevToolsClient(
    baseObservableClient,
    devtoolsEnabled,
  );

  const content = wrapChildren?.(children) ?? children;

  const contextValue = useMemo(
    () => ({ client, observableClient: devToolsClient, devtoolsEnabled }),
    [client, devToolsClient, devtoolsEnabled],
  );

  return (
    <UserAgentContext.Provider value={addUserAgent}>
      <OsdkContext.Provider value={contextValue}>
        {content}
      </OsdkContext.Provider>
    </UserAgentContext.Provider>
  );
}
