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

import type { ObjectMetadata } from "@osdk/api";

export function propertyJsdoc(
  property: ObjectMetadata.Property,
  { isInherited, apiName }: { isInherited?: boolean; apiName: string },
) {
  let ret = `/**\n`;
  const renderDisplayName = property.displayName
    && property.displayName !== apiName;
  if (isInherited || renderDisplayName || property.description) {
    if (isInherited) {
      ret += ` * (inherited from parent)\n`;
    }

    if (renderDisplayName) {
      ret += ` *   display name: '${property.displayName}'${
        property.description ? "," : ""
      }\n`;
    }

    if (property.description) {
      ret += ` *   description: ${property.description}\n`;
    }
  } else {
    ret += ` * (no ontology metadata)\n`;
  }

  ret += ` */\n`;
  return ret;
}
