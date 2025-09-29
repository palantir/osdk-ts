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

import type { ObjectTypeDefinition, PrimaryKeyType } from "@osdk/api";
import type { Canonical } from "./Canonical.js";
import type { SpecificLinkCacheKey } from "./links/SpecificLinkCacheKey.js";
import type { ListCacheKey } from "./list/ListCacheKey.js";
import type { ObjectCacheKey } from "./object/ObjectCacheKey.js";
import type { Rdp } from "./RdpCanonicalizer.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";

export function getObjectCacheKeyApiName(key: ObjectCacheKey): string {
  return key.otherKeys[0];
}

export function getObjectCacheKeyPk(
  key: ObjectCacheKey,
): PrimaryKeyType<ObjectTypeDefinition> {
  return key.otherKeys[1];
}

export function getObjectCacheKeyRdpConfig(
  key: ObjectCacheKey,
): Canonical<Rdp> | undefined {
  return key.otherKeys[2];
}

export function getListCacheKeyType(key: ListCacheKey): "object" | "interface" {
  return key.otherKeys[0];
}

export function getListCacheKeyApiName(key: ListCacheKey): string {
  return key.otherKeys[1];
}

export function getListCacheKeyWhereClause(
  key: ListCacheKey,
): Canonical<SimpleWhereClause> {
  return key.otherKeys[2];
}

export function getListCacheKeyOrderByClause(
  key: ListCacheKey,
): Canonical<Record<string, "asc" | "desc" | undefined>> {
  return key.otherKeys[3];
}

export function getListCacheKeyRdpConfig(
  key: ListCacheKey,
): Canonical<Rdp> | undefined {
  return key.otherKeys[4];
}

export function getLinkCacheKeySourceObjectType(
  key: SpecificLinkCacheKey,
): string {
  return key.otherKeys[0];
}

export function getLinkCacheKeySourcePk(
  key: SpecificLinkCacheKey,
): PrimaryKeyType<ObjectTypeDefinition> {
  return key.otherKeys[1];
}

export function getLinkCacheKeyLinkName(key: SpecificLinkCacheKey): string {
  return key.otherKeys[2];
}

export function getLinkCacheKeyWhereClause(
  key: SpecificLinkCacheKey,
): Canonical<SimpleWhereClause> {
  return key.otherKeys[3];
}

export function getLinkCacheKeyOrderByClause(
  key: SpecificLinkCacheKey,
): Canonical<Record<string, "asc" | "desc" | undefined>> {
  return key.otherKeys[4];
}
