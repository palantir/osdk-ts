/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/* eslint-disable @typescript-eslint/require-await */

import { OntologiesV2 } from "../mock/index.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";

export const createCipherTextHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry
) => [
  /**
   * Decrypt a ciphertext property value.
   */
  OntologiesV2.CipherTextProperties.decrypt(
    baseUrl,
    async ({
      params: { ontologyApiName, objectType, primaryKey, propertyName },
    }) => {
      fauxFoundry
        .getDataStore(ontologyApiName)
        .getObjectOrThrow(objectType, primaryKey);
      return {
        // Just return a deterministic string that acts as plaintext
        plaintext: `decrypted:${objectType}:${primaryKey}:${propertyName}`,
      };
    }
  ),
];
