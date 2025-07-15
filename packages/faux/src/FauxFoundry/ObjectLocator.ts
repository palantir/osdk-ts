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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { BaseServerObject } from "./BaseServerObject.js";

export type ObjectLocator<
  T extends OntologiesV2.ObjectTypeApiName = OntologiesV2.ObjectTypeApiName,
  PK extends string = string,
> = `${T}:${PK}`;

export function objectLocator(obj: BaseServerObject): ObjectLocator {
  return `${obj.__apiName}:${obj.__primaryKey}`;
}

export function parseLocator(
  locator: ObjectLocator,
): { objectType: string; primaryKey: string } {
  const [objectType, primaryKey] = locator?.split(":") ?? [];
  invariant(objectType && primaryKey, `Invalid locator format:  ${locator}`);
  return { objectType, primaryKey };
}
