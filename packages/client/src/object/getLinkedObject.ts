/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ObjectTypeKeysFrom,
  ObjectTypeLinkKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import { type ClientContext, PalantirApiError } from "@osdk/shared.net";
import type { SelectArg } from "./fetchPage.js";
import { pageLinkedObjects } from "./pageLinkedObjects.js";

/**
 * @deprecated use `getLinkedObject`.
 */
export async function getLinkedObjectOrThrow<
  O extends OntologyDefinition<any>,
  T extends ObjectTypeKeysFrom<O> & string,
  L extends ObjectTypeLinkKeysFrom<O, T> & string,
  S extends SelectArg<O, T>["select"],
>(
  client: ClientContext<O>,
  sourceApiName: T,
  primaryKey: any,
  linkTypeApiName: L,
  select?: S,
) {
  return getLinkedObject<O, T, L, S>(
    client,
    sourceApiName,
    primaryKey,
    linkTypeApiName,
    select,
  );
}

export async function getLinkedObject<
  O extends OntologyDefinition<any>,
  T extends ObjectTypeKeysFrom<O> & string,
  L extends ObjectTypeLinkKeysFrom<O, T> & string,
  S extends SelectArg<O, T>["select"],
>(
  client: ClientContext<O>,
  sourceApiName: T,
  primaryKey: any,
  linkTypeApiName: L,
  select?: S,
) {
  const result = await pageLinkedObjects(
    client,
    sourceApiName,
    primaryKey,
    linkTypeApiName,
    { pageSize: 1, select },
  );

  if (result.data.length !== 1 || result.nextPageToken != null) {
    throw new PalantirApiError(
      `Expected a single result but got ${result.data.length} instead${
        result.nextPageToken != null ? " with nextPageToken set" : ""
      }`,
    );
  }

  return result.data[0];
}
