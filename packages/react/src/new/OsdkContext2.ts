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

function fakeClientFn(..._args: any[]) {
  throw new Error(
    "This is not a real client. Did you forget to <OsdkContext.Provider>?",
  );
}

const fakeClient = Object.assign(fakeClientFn, {
  fetchMetadata: fakeClientFn,
} as Client);

interface OsdkContextContents {
  client: Client;
  // keeping the old name for now intentionally
  // in case i need both for a while
  // in the future we can just make
  // this `client: ObservableClient`
  observableClient: ObservableClient;
}

export const OsdkContext2: React.Context<OsdkContextContents> = React
  .createContext<OsdkContextContents>({
    client: fakeClient,
    observableClient: undefined!,
  });
