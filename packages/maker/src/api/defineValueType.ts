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

import invariant from "tiny-invariant";
import { valueTypes } from "./defineOntology.js";
import type {
  ValueTypeBaseType,
  ValueTypeDataConstraint,
  ValueTypeExampleValue,
  ValueTypeReference,
} from "./types.js";

export function defineValueType(
  opts: {
    apiName: string;
    version: string;
    type: ValueTypeBaseType;
    array?: boolean;
    description?: string;
    displayName?: string;
    constraints?: ValueTypeDataConstraint[];
    exampleValues?: ValueTypeExampleValue[];
  },
): ValueTypeReference {
  const { apiName, version } = opts;
  let existing = valueTypes.valueTypes[apiName];
  invariant(
    existing === undefined,
    `Shared property type ${apiName} with version ${version} already exists at version ${existing.reference.version}, 
    and multi-version value types are not currently supported.`,
  );
  let created = valueTypes.valueTypes[apiName] = {
    reference: { apiName: apiName, version: version },
    ...opts,
  };
  return created.reference;
}
