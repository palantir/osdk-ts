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
import React, { useMemo } from "react";
import { OsdkContext2 } from "./OsdkContext2.js";

interface OsdkProviderOptions {
  children: React.ReactNode;
  client: Client;
  observableClient?: ObservableClient;
}

export function OsdkProvider2({
  children,
  client,
  observableClient,
}: OsdkProviderOptions): React.JSX.Element {
  observableClient = useMemo(
    () => observableClient ?? createObservableClient(client),
    [client, observableClient],
  );
  return (
    <OsdkContext2.Provider value={{ client, observableClient }}>
      {children}
    </OsdkContext2.Provider>
  );
}
