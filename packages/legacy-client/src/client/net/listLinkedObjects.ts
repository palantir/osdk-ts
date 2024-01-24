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

import type { OntologyDefinition } from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import type { OntologyObject } from "../baseTypes/index.js";
import {
  handleListLinkedObjectsError,
  ListLinkedObjectsErrorHandler,
} from "../errors/index.js";
import type { ListLinkedObjectsError } from "../errors/index.js";
import type { Page } from "../Page.js";
import type { Result } from "../Result.js";
import { getLinkedObjectsPage } from "./getLinkedObjectsPage.js";
import { wrapResult } from "./util/wrapResult.js";

export function listLinkedObjects<T extends OntologyObject>(
  client: ClientContext<OntologyDefinition<any>>,
  sourceApiName: string,
  primaryKey: any,
  linkTypeApiName: T["__apiName"],
): Promise<Result<T[], ListLinkedObjectsError>> {
  return wrapResult(
    async () => {
      const allObjects: T[] = [];

      let page: Page<T> | undefined;
      do {
        page = await getLinkedObjectsPage<T>(
          client,
          sourceApiName,
          primaryKey,
          linkTypeApiName,
          {
            pageToken: page?.nextPageToken,
          },
        );
        for (const object of page.data) {
          allObjects.push(object);
        }
      } while (page.nextPageToken);

      return allObjects;
    },
    e =>
      handleListLinkedObjectsError(
        new ListLinkedObjectsErrorHandler(),
        e,
        e.parameters,
      ),
  );
}
