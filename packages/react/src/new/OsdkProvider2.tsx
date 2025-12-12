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
import React, { useEffect, useMemo, useRef, useState } from "react";
import { OsdkContext } from "../OsdkContext.js";
import { getRegisteredDevTools } from "../public/devtools-registry.js";
import { OsdkContext2 } from "./OsdkContext2.js";

declare const process: { env?: { NODE_ENV?: string } } | undefined;

interface OsdkProviderOptions {
  children: React.ReactNode;
  client: Client;
  observableClient?: ObservableClient;
  enableDevTools?: boolean;
  showDevToolsPanel?: boolean;
}

export function OsdkProvider2({
  children,
  client,
  observableClient,
  enableDevTools = typeof process !== "undefined"
    && process.env?.NODE_ENV !== "production",
  showDevToolsPanel = true,
}: OsdkProviderOptions): React.JSX.Element {
  const baseObservableClient = useMemo(
    () => observableClient ?? createObservableClient(client),
    [client, observableClient],
  );

  const [wrappedClient, setWrappedClient] = useState<ObservableClient>(
    baseObservableClient,
  );
  const [devToolsPanel, setDevToolsPanel] = useState<React.ReactNode>(null);

  // Track devtools state to wrap children
  const devToolsRef = useRef<ReturnType<typeof getRegisteredDevTools>>(null);
  const monitoredClientRef = useRef<ObservableClient | null>(null);

  useEffect(() => {
    let mounted = true;
    const devTools = getRegisteredDevTools();
    devToolsRef.current = devTools;

    if (!enableDevTools || !devTools) {
      if (mounted) {
        setWrappedClient(baseObservableClient);
        setDevToolsPanel(null);
        monitoredClientRef.current = null;
      }
      return;
    }

    const monitoredClient = devTools.wrapClient(
      baseObservableClient,
    ) as ObservableClient;
    monitoredClientRef.current = monitoredClient;

    if (mounted) {
      setWrappedClient(monitoredClient);
      setDevToolsPanel(
        showDevToolsPanel ? devTools.renderPanel(monitoredClient) : null,
      );
    }

    return () => {
      mounted = false;
      devTools.dispose?.(monitoredClient);
      monitoredClientRef.current = null;
    };
  }, [enableDevTools, showDevToolsPanel, baseObservableClient]);

  // Wrap children using refs to avoid unnecessary re-wrapping
  const wrappedChildren = useMemo(() => {
    const devTools = devToolsRef.current;
    const monitoredClient = monitoredClientRef.current;

    if (!enableDevTools || !devTools || !monitoredClient) {
      return children;
    }

    return devTools.wrapChildren(children, monitoredClient);
  }, [children, enableDevTools]);

  return (
    <OsdkContext2.Provider
      value={{ client, observableClient: wrappedClient }}
    >
      <OsdkContext.Provider value={{ client }}>
        {wrappedChildren}
        {devToolsPanel}
      </OsdkContext.Provider>
    </OsdkContext2.Provider>
  );
}
