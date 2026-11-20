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

import type { MarkingType } from "@osdk/client.unstable";
import type {
  MarkingsShape,
  SupportedMarkingsTypeV2,
} from "@osdk/client.unstable/api";

import { ReadableIdGenerator, type ReadableId } from "./generateRid.js";

export function getMediaSetMarkings(markings: Record<string, MarkingType>): {
  readableId: ReadableId;
  placeholderMarkings: string[];
  shapeTypes: Pick<
    MarkingsShape,
    "supportedMarkingsType" | "supportedMarkingsTypesV2"
  >;
} {
  const groups = Object.keys(markings).sort();
  const readableId = ReadableIdGenerator.getForMarkingSet(markings);
  const types = [...new Set(Object.values(markings))];
  // OMS requires a legacy type for placeholder IDs, even when V2 permits mixed resolved markings.
  // Keep the composite placeholder separate from IDs used by typed object marking properties.
  const supportedMarkingsType: MarkingType =
    types.length === 1 ? types[0] : "MANDATORY";
  return {
    readableId,
    placeholderMarkings: groups.length <= 1 ? groups : [readableId],
    shapeTypes: {
      supportedMarkingsType,
      ...(types.length > 1
        ? {
            supportedMarkingsTypesV2: [
              "CBAC",
              "MANDATORY_NOT_ORGANIZATION",
              "ORGANIZATION",
            ] satisfies SupportedMarkingsTypeV2[],
          }
        : {}),
    },
  };
}
