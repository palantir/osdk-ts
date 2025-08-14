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
import type { PropertyV2 } from "@osdk/foundry.ontologies";

export function propertyJsdoc(
  property: ObjectMetadata.Property,
  rawPropertyMetadata: PropertyV2 | undefined,
  { isInherited, apiName }: { isInherited?: boolean; apiName: string },
): string {
  const ret = [];
  const renderDisplayName = property.displayName
    && property.displayName !== apiName;
  const status = rawPropertyMetadata?.status;
  if (isInherited || renderDisplayName || property.description || status) {
    if (status) {
      let deprecationStatus = "";
      if (status.type === "deprecated") {
        deprecationStatus += ` *   @deprecated\n`;
        deprecationStatus += ` *   - ${status.message}\n`;
        if (status.deadline) {
          deprecationStatus += ` *   - deadline: ${status.deadline}\n`;
        }
        if (status.replacedBy) {
          deprecationStatus += ` *   - replaced by: ${status.replacedBy}\n`;
        }
        ret.push(deprecationStatus);
      } else if (status.type === "experimental") {
        ret.push(` * @${status.type}\n`);
      }
      ret.push(` *   property status: ${status.type}\n`);
    }
    if (isInherited) {
      ret.push(` * (inherited from parent)\n`);
    }

    if (renderDisplayName) {
      ret.push(
        ` *   display name: '${property.displayName}'${
          property.description ? "," : ""
        }\n`,
      );
    }

    if (property.description) {
      ret.push(` *   description: ${property.description}\n`);
    }
  } else {
    ret.push(` * (no ontology metadata)\n`);
  }
  return `/**\n` + ret.join("*\n") + ` */\n`;
}
