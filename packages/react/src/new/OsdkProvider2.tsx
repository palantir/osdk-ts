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
import {
  createObservableClient,
  type ObservableClient,
} from "@osdk/client/unstable-do-not-use";
import React, { useCallback, useMemo, useRef } from "react";
import { OsdkContext } from "../OsdkContext.js";
import { getRegisteredDevTools } from "../public/devtools-registry.js";
import { REACT_USER_AGENT } from "../util/UserAgent.js";
import { OsdkContext2 } from "./OsdkContext2.js";
import { useDevToolsClient } from "./useDevToolsClient.js";
import { UserAgentContext } from "./UserAgentContext.js";

declare const process: { env: { NODE_ENV: string } };
const __DEV__ = typeof process === "undefined"
  || process.env.NODE_ENV !== "production";

interface OsdkProviderOptions {
  children: React.ReactNode;
  client: Client;
  observableClient?: ObservableClient;
  enableDevTools?: boolean;
}

export function OsdkProvider2({
  children,
  client,
  observableClient,
  enableDevTools,
}: OsdkProviderOptions): React.JSX.Element {
  const devtoolsEnabled = __DEV__
    && (enableDevTools ?? getRegisteredDevTools() != null);

  const userAgentsRef = useRef(new Set<string>([REACT_USER_AGENT]));

  const addUserAgent = useCallback((agent: string) => {
    userAgentsRef.current.add(agent);
    return () => {
      userAgentsRef.current.delete(agent);
    };
  }, []);

  const baseObservableClient = useMemo(
    () =>
      observableClient
        ?? createObservableClient(
          client,
          () => [...userAgentsRef.current],
        ),
    [client, observableClient],
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
      <OsdkContext2.Provider
        value={contextValue}
      >
        <OsdkContext.Provider value={{ client }}>
          {content}
        </OsdkContext.Provider>
      </OsdkContext2.Provider>
    </UserAgentContext.Provider>
  );
}
