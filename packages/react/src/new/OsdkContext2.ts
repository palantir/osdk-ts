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
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import React from "react";

export const MISSING_PROVIDER_MESSAGE =
  "No OsdkProvider2 found. Did you forget to wrap your component tree with <OsdkProvider2>?";

function fakeClientFn(..._args: any[]) {
  throw new Error(MISSING_PROVIDER_MESSAGE);
}

const fakeClient = Object.assign(fakeClientFn, {
  fetchMetadata: fakeClientFn,
} as Client);

// Proxy that throws a clear error when any method is called, so hooks like
// useOsdkObjects get "Did you forget <OsdkProvider2>?" instead of
// "cannot read canonicalizeWhereClause of undefined".
// We intercept `get` so every property access returns a throwing function,
// without needing to enumerate every ObservableClient method.
// Symbol.toPrimitive and Symbol.toStringTag are accessed by React/devtools
// during rendering and logging — returning undefined for these avoids
// spurious throws in contexts unrelated to the user's code.
const fakeObservableClient = new Proxy({} as ObservableClient, {
  get(_target, prop) {
    if (prop === Symbol.toPrimitive || prop === Symbol.toStringTag) {
      return undefined;
    }
    return (..._args: any[]) => {
      throw new Error(MISSING_PROVIDER_MESSAGE);
    };
  },
});

interface OsdkContextContents {
  client: Client;
  // keeping the old name for now intentionally
  // in case i need both for a while
  // in the future we can just make
  // this `client: ObservableClient`
  observableClient: ObservableClient;
  devtoolsEnabled: boolean;
}

export const OsdkContext2: React.Context<OsdkContextContents> =
  React.createContext<OsdkContextContents>({
    client: fakeClient,
    observableClient: fakeObservableClient,
    devtoolsEnabled: false,
  });
