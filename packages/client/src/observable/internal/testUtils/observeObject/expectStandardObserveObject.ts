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

import type { ObjectTypeDefinition } from "@osdk/api";
import { expect } from "vitest";
import type { TypedObjectPayload } from "../../../ObjectPayload.js";
import type { Store } from "../../Store.js";
import type { MockedSingleSubCallback } from "../../testUtils.js";
import {
  createDefer,
  expectSingleObjectCallAndClear,
  mockSingleSubCallback,
  waitForCall,
} from "../../testUtils.js";

const defer = createDefer();

/**
 * Utility function for testing object observation behavior
 *
 * This function provides the following guarantees:
 * - Validates the initial "loading" state is emitted
 * - Waits for the subscription callback to be called again
 * - Validates the "loaded" state with the expected object containing apiName and primaryKey
 * - Returns both the observed object and mock subscription function for further assertions
 *
 * @param cache - The Store instance to use for observation
 * @param apiName - The API name for the object to observe
 * @param primaryKey - The primary key of the object to observe
 * @returns A promise that resolves to the observed object and the mocked subscription callback
 */
export async function expectStandardObserveObject<
  T extends ObjectTypeDefinition,
>(
  { cache, type, primaryKey }: { cache: Store; type: T; primaryKey: number },
): Promise<{
  payload: TypedObjectPayload<T>;
  subFn: MockedSingleSubCallback;
}> {
  const subFn = mockSingleSubCallback();
  defer(
    cache.observeObject(type.apiName, primaryKey, {}, subFn),
  );

  expectSingleObjectCallAndClear(
    subFn,
    undefined,
    "loading",
  );

  await waitForCall(subFn);

  const obj = expectSingleObjectCallAndClear(
    subFn,
    expect.objectContaining({
      $apiName: type.apiName,
      $primaryKey: primaryKey,
    }),
    "loaded",
  );
  return { payload: obj as TypedObjectPayload<T>, subFn };
}
