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

import type { OntologyEntityBase } from "./common/OntologyEntityBase.js";
import { importOntologyEntity } from "./importOntologyEntity.js";

/**
 * Wraps an OntologyEntityType with a Proxy that calls importOntologyEntity when properties are accessed.
 *
 * @param entity - The OntologyEntityType to wrap with a Proxy
 * @returns A Proxy that imports the entity when properties are accessed
 */
export function wrapWithProxy<T extends OntologyEntityBase>(entity: T): T {
  return new Proxy(entity, {
    get(target, prop, receiver) {
      importOntologyEntity(target);
      return Reflect.get(target, prop, receiver);
    },
  });
}
