/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import type { ObservableClient } from "@osdk/client/observable";
import * as React from "react";
import { OsdkContext } from "../new/OsdkContext.js";

const FAKE_OBSERVABLE_CLIENT_MESSAGE =
  "fakeObservableClient method called in a test. This stub throws on any access — pass a real ObservableClient if your test exercises observable client behavior.";

/**
 * A Proxy-based ObservableClient stub for tests that wrap a hook in
 * <TestOsdkProvider> but do not exercise any observable client behavior.
 *
 * Any property access returns a function that throws, so accidental usage
 * fails loudly instead of silently returning `undefined`.
 */
export const fakeObservableClient: ObservableClient = new Proxy(
  {} as ObservableClient,
  {
    get(_target, prop) {
      if (prop === Symbol.toPrimitive || prop === Symbol.toStringTag) {
        return undefined;
      }
      return (..._args: unknown[]) => {
        throw new Error(FAKE_OBSERVABLE_CLIENT_MESSAGE);
      };
    },
  },
);

/**
 * A minimal provider for tests. Bypasses the production `OsdkProvider`'s
 * devtools and user-agent wiring and lets the caller inject both a `client`
 * and an `ObservableClient` directly.
 *
 * Production code should always use `<OsdkProvider client={...}>`, which
 * derives its `ObservableClient` from `client` so the two cannot diverge.
 */
export function TestOsdkProvider({
  children,
  client,
  observableClient,
}: {
  children: React.ReactNode;
  client: Client;
  observableClient: ObservableClient;
}): React.JSX.Element {
  const value = React.useMemo(
    () => ({ client, observableClient, devtoolsEnabled: false }),
    [client, observableClient],
  );
  return React.createElement(OsdkContext.Provider, { value }, children);
}
