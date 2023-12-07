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

import type { ClientContext } from "@osdk/shared.net";

import type { OntologyObject, ParameterValue, SingleLink } from "../baseTypes";
import type { GetLinkedObjectError } from "../errors";
import { getOnlyLinkedObject } from "../net/getOnlyLinkedObject";
import type { Result } from "../Result";

export function createSingleLinkStep<T extends OntologyObject = OntologyObject>(
  client: ClientContext<any>,
  sourceObjectType: string,
  sourcePrimaryKey: NonNullable<ParameterValue>,
  targetLinkType: string,
): SingleLink<T> {
  return {
    async get(): Promise<Result<T, GetLinkedObjectError>> {
      return getOnlyLinkedObject(
        client,
        sourceObjectType,
        sourcePrimaryKey,
        targetLinkType,
      );
    },
  };
}
