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
import type {
  GetLinkedObjectError,
  ListLinkedObjectsError,
  Result,
} from "../ontologyProvider";
import { getLinkedObject } from "../ontologyProvider/calls/getLinkedObject";
import { listLinkedObjects } from "../ontologyProvider/calls/listLinkedObjects";
import { pageLinkedObjects } from "../ontologyProvider/calls/pageLinkedObjects";
import type { Page } from "../paging";
import type { MultiLink } from "./links";
import type { OntologyObject } from "./OntologyObject";
import type { ParameterValue } from "./ParameterValue";

export class MultiLinkImpl<T extends OntologyObject = OntologyObject>
  implements MultiLink<T>
{
  #client: ThinClient<OntologyDefinition<any>>;
  #sourceApiName: string;
  #sourcePrimaryKey: ParameterValue;
  #targetApiName: T["__apiName"];

  constructor(
    client: ThinClient<OntologyDefinition<any>>,
    sourceApiName: string,
    sourcePrimaryKey: ParameterValue,
    targetApiName: T["__apiName"],
  ) {
    this.#client = client;
    this.#sourceApiName = sourceApiName;
    this.#sourcePrimaryKey = sourcePrimaryKey;
    this.#targetApiName = targetApiName;
  }

  get(primaryKey: T["__primaryKey"]): Promise<Result<T, GetLinkedObjectError>> {
    return getLinkedObject(
      this.#client,
      this.#sourceApiName,
      this.#sourcePrimaryKey,
      this.#targetApiName,
      primaryKey.toString(),
    );
  }

  all(): Promise<Result<T[], ListLinkedObjectsError>> {
    return listLinkedObjects(
      this.#client,
      this.#sourceApiName,
      this.#sourcePrimaryKey,
      this.#targetApiName,
    );
  }

  page(
    options?:
      | { pageSize?: number | undefined; pageToken?: string | undefined }
      | undefined,
  ): Promise<Result<Page<T>, ListLinkedObjectsError>> {
    return pageLinkedObjects(
      this.#client,
      this.#sourceApiName,
      this.#sourcePrimaryKey,
      this.#targetApiName,
      options,
    );
  }
}
