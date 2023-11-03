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

import type { OntologyDefinition, ThinClient } from "@osdk/api";
import type { PalantirApiError } from "../../../Errors";
import type { OntologyObject } from "../../baseTypes";
import type { Page } from "../../paging";
import {
  handleListLinkedObjectsError,
  ListLinkedObjectsErrorHandler,
} from "../ErrorHandlers";
import type { ListLinkedObjectsError } from "../Errors";
import type { Result } from "../Result";
import { getLinkedObjectsPage } from "./getLinkedObjectsPage";
import { createPageIterator } from "./util/createPageIterator";
import { iterateLinkedObjects } from "./util/iterateLinkedObjects";

export async function pageLinkedObjects<T extends OntologyObject>(
  client: ThinClient<OntologyDefinition<any>>,
  sourceApiName: string,
  primaryKey: any,
  linkTypeApiName: string,
  options?: {
    pageSize?: number;
    pageToken?: string;
  },
): Promise<Result<Page<T>, ListLinkedObjectsError>> {
  const response = createPageIterator<T, ListLinkedObjectsError>(
    async () => {
      return getLinkedObjectsPage<T>(
        client,
        sourceApiName,
        primaryKey,
        linkTypeApiName,
        options,
      );
    },
    () =>
      iterateLinkedObjects(
        client,
        sourceApiName,
        primaryKey,
        linkTypeApiName,
        options,
      ),
    (palantirApiError: PalantirApiError) => {
      return handleListLinkedObjectsError(
        new ListLinkedObjectsErrorHandler(),
        palantirApiError,
        palantirApiError.parameters,
      );
    },
  );
  return response;
}
