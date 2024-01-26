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
import type { MultiLink, OntologyObject, ParameterValue } from "../baseTypes";
import type { GetLinkedObjectError, ListLinkedObjectsError } from "../errors";
import { getLinkedObject } from "../net/getLinkedObject";
import { listLinkedObjects } from "../net/listLinkedObjects";
import { pageLinkedObjects } from "../net/pageLinkedObjects";
import type { Page } from "../Page";
import type { Result } from "../Result";

export function createMultiLinkStep<T extends OntologyObject = OntologyObject>(
  client: ClientContext<any>,
  sourceApiName: string,
  sourcePrimaryKey: ParameterValue,
  targetApiName: string,
): MultiLink<T> {
  return {
    get(
      primaryKey: T["__primaryKey"],
    ): Promise<Result<T, GetLinkedObjectError>> {
      return getLinkedObject(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        primaryKey.toString(),
      );
    },

    all(): Promise<Result<T[], ListLinkedObjectsError>> {
      return listLinkedObjects(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
      );
    },

    page(
      options?:
        | { pageSize?: number | undefined; pageToken?: string | undefined }
        | undefined,
    ): Promise<Result<Page<T>, ListLinkedObjectsError>> {
      return pageLinkedObjects(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        options,
      );
    },
  };
}
