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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import type { Observer } from "type-fest";
import type { MockedObject } from "vitest";
import type { ObjectHolder } from "../../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { SpecificLinkPayload } from "../../../LinkPayload.js";
import type { Store } from "../../Store.js";
import {
  createDefer,
  expectSingleLinkCallAndClear,
  mockLinkSubCallback,
  waitForCall,
} from "../../testUtils.js";

const defer = createDefer();

/**
 * Utility function for testing link observation behavior between objects
 *
 * This function provides the following guarantees:
 * - Sets up a link subscription using the Store's observeLinks method
 * - Validates that an initial "loading" state is emitted with empty results
 * - Waits for the link data to be fetched and emitted
 * - Validates the "loaded" state contains the expected linked objects
 * - Returns both the link payload and mock subscription function for further assertions
 *
 * This helper creates a standardized test flow for link observations that:
 * 1. Creates a subscription to observe links from source to target objects
 * 2. Verifies the initial loading state is emitted with empty results
 * 3. Waits for the data loading to complete
 * 4. Verifies the loaded state with the expected linked objects
 * 5. Provides the result objects for additional assertions in tests
 *
 * @typeParam S - The source object type definition
 * @typeParam T - The target object type definition
 */
export async function expectStandardObserveLink<
  S extends ObjectTypeDefinition,
  T extends ObjectTypeDefinition,
>(
  {
    store,
    srcObject,
    srcLinkName,
    targetType,
    expected,
  }: {
    /** The Store instance to use for observation */
    store: Store;
    /** The source object that contains the link */
    srcObject: Osdk.Instance<S>;
    /** The name of the link field to observe */
    srcLinkName: string;
    /** The type definition of the linked objects */
    targetType: T;
    /** The expected linked objects that should be returned */
    expected: ObjectHolder<Osdk.Instance<T>>[];
  },
): Promise<{
  /** The link payload containing the linked objects and metadata */
  payload: SpecificLinkPayload | undefined;
  /** The mocked subscription callback for further testing assertions */
  linkSubFn: MockedObject<
    Observer<
      SpecificLinkPayload | undefined
    >
  >;
}> {
  const linkSubFn = mockLinkSubCallback();
  defer(
    store.links.observe({
      linkName: srcLinkName,
      srcType: { type: "object", apiName: srcObject.$apiName },
      pk: srcObject.$primaryKey,
    }, linkSubFn),
  );

  await waitForCall(linkSubFn);
  expectSingleLinkCallAndClear(linkSubFn, undefined, { status: "loading" });

  await waitForCall(linkSubFn);

  const payload = expectSingleLinkCallAndClear(linkSubFn, expected, {
    status: "loaded",
  });

  return { payload, linkSubFn };
}
