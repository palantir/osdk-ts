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

export type {
  ActionTypeValue,
  AliasesFile,
  DatasetValue,
  DefaultAliases,
  EgressConnectionValue,
  InterfaceTypeValue,
  LinkValue,
  MediasetValue,
  ModelValue,
  ObjectTypeValue,
  OntologyValue,
  PropertyValue,
  QueryTypeValue,
  RidIdentifier,
  StreamValue,
  VersionedRidIdentifier,
} from "./AliasesFile.js";
export {
  ALIASES_FILE_VERSION,
  parseAliasesFile,
  serializeAliasesFile,
} from "./AliasesFile.js";
export { registerPackagedAliases, setAliasOverride } from "./registry.js";
export {
  $resolveAction,
  $resolveInterfaceType,
  $resolveLink,
  $resolveObjectType,
  $resolveOntologyBranch,
  $resolveOntologyRid,
  $resolvePrimaryKey,
  $resolveProperty,
  $resolveQuery,
  $resolveQueryVersion,
} from "./resolve.js";
