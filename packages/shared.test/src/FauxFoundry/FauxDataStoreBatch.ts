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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import deepEqual from "fast-deep-equal";
import type { BaseServerObject } from "./BaseServerObject.js";
import type { FauxDataStore } from "./FauxDataStore.js";

export class FauxDataStoreBatch {
  #fauxDataStore: FauxDataStore;
  objectEdits: OntologiesV2.ObjectEdits = {
    addedLinksCount: 0,
    addedObjectCount: 0,
    deletedLinksCount: 0,
    deletedObjectsCount: 0,
    modifiedObjectsCount: 0,
    edits: [],
  };

  constructor(fauxDataStore: FauxDataStore) {
    this.#fauxDataStore = fauxDataStore;
  }

  getObject = (
    objectType: string,
    primaryKey: string | number | boolean,
  ): BaseServerObject => {
    return this.#fauxDataStore.getObjectOrThrow(
      objectType,
      primaryKey,
    );
  };

  modifyObject = (
    objectType: string,
    primaryKey: string | number | boolean,
    update: Partial<BaseServerObject>,
  ): void => {
    const origObj = this.#fauxDataStore.getObjectOrThrow(
      objectType,
      primaryKey,
    );
    const newObj = {
      ...origObj,
      ...update,
    };

    if (!deepEqual(origObj, newObj)) {
      this.#fauxDataStore.registerObject(newObj);
      this.objectEdits.edits.push({
        type: "modifyObject",
        primaryKey: String(primaryKey),
        objectType,
      });
      this.objectEdits.modifiedObjectsCount += 1;
    }
  };
}
