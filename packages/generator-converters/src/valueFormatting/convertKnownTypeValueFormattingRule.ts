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

import type { PropertyKnownTypeFormattingRule } from "@osdk/api";
import type * as Ontologies from "@osdk/foundry.ontologies";

export function convertKnownTypeFormattingRule(
  wireFormatting: Ontologies.PropertyKnownTypeFormattingRule,
): PropertyKnownTypeFormattingRule | undefined {
  switch (wireFormatting.knownType) {
    case "ARTIFACT_GID":
      return {
        type: "knownType",
        knownType: "ARTIFACT_GID",
      };
    case "RESOURCE_RID":
      return {
        type: "knownType",
        knownType: "RESOURCE_RID",
      };
    case "USER_OR_GROUP_ID":
      return {
        type: "knownType",
        knownType: "USER_OR_GROUP_ID",
      };
    default:
      wireFormatting.knownType satisfies never;
      return undefined;
  }
}
