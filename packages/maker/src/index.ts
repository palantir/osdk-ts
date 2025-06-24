/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export { default as default } from "./cli/main.js";

export { addDependency } from "./api/addDependency.js";
export {
  defineAction,
  defineCreateInterfaceObjectAction,
  defineCreateObjectAction,
  defineDeleteObjectAction,
  defineModifyInterfaceObjectAction,
  defineModifyObjectAction,
} from "./api/defineAction.js";
export { importSharedPropertyType } from "./api/defineImportSpt.js";
export { defineInterface } from "./api/defineInterface.js";
export { defineInterfaceLinkConstraint } from "./api/defineInterfaceLinkConstraint.js";
export { defineLink } from "./api/defineLink.js";
export { defineObject } from "./api/defineObject.js";
export { defineOntology } from "./api/defineOntology.js";
export { defineSharedPropertyType } from "./api/defineSpt.js";
export { defineValueType } from "./api/defineValueType.js";
export { importOntologyEntity } from "./api/importOntologyEntity.js";
export type {
  ActionType,
  InterfaceType,
  LinkType,
  ObjectType,
  SharedPropertyType,
  ValueTypeDefinitionVersion,
} from "./api/types.js";
export { OntologyEntityTypeEnum } from "./api/types.js";
export { wrapWithProxy } from "./api/wrapWithProxy.js";
