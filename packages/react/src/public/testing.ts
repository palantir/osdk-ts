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

import type { ObservableClient } from "@osdk/client/observable";

const FAKE_OBSERVABLE_CLIENT_MESSAGE =
  "fakeObservableClient method called in a test. This stub throws on any access — pass a real ObservableClient if your test exercises observable client behavior.";

/**
 * A Proxy-based ObservableClient stub for tests that wrap a hook in
 * <OsdkProvider> but do not exercise any observable client behavior.
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
