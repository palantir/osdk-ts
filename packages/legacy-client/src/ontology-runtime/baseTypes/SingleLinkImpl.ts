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

import type { ThinClient } from "@osdk/api";
import { type GetLinkedObjectError, type Result } from "../ontologyProvider";
import { getOnlyLinkedObject } from "../ontologyProvider/calls/getOnlyLinkedObject";
import type { SingleLink } from "./links";
import type { OntologyObject } from "./OntologyObject";
import type { ParameterValue } from "./ParameterValue";

export class SingleLinkImpl<T extends OntologyObject = OntologyObject>
  implements SingleLink<T>
{
  #client: ThinClient<any>;
  #sourceObjectType: string;
  #sourcePrimaryKey: ParameterValue;
  #targetObjectType: T["__apiName"];

  constructor(
    client: ThinClient<any>,
    sourceObjectType: string,
    sourcePrimaryKey: ParameterValue,
    targetObjectType: T["__apiName"],
  ) {
    this.#client = client;
    this.#sourceObjectType = sourceObjectType;
    this.#sourcePrimaryKey = sourcePrimaryKey;
    this.#targetObjectType = targetObjectType;
  }

  async get(): Promise<Result<T, GetLinkedObjectError>> {
    return getOnlyLinkedObject(
      this.#client,
      this.#sourceObjectType,
      this.#sourcePrimaryKey,
      this.#targetObjectType,
    );
  }
}
