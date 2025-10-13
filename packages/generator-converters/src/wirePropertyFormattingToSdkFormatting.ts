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

import type { PropertyValueFormattingRule } from "@osdk/api";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { convertBooleanFormattingRule } from "./valueFormatting/convertBooleanValueFormattingRule.js";
import {
  convertDateFormattingRule,
  convertTimestampFormattingRule,
} from "./valueFormatting/convertDateAndTimestampValueFormattingRule.js";
import { convertKnownTypeFormattingRule } from "./valueFormatting/convertKnownTypeValueFormattingRule.js";
import { convertNumberFormattingRule } from "./valueFormatting/convertNumberValueFormattingRule.js";

/**
 * Converts a PropertyValueFormattingRule from the ontologies format to the SDK format
 */
export function wirePropertyFormattingToSdkFormatting(
  wireFormatting: Ontologies.PropertyValueFormattingRule,
  log?: { info: (msg: string) => void },
): PropertyValueFormattingRule | undefined {
  try {
    return convertPropertyFormattingInternal(wireFormatting);
  } catch (error) {
    log?.info(`Failed to convert property formatting rule: ${error}`);
    return undefined;
  }
}

function convertPropertyFormattingInternal(
  wireFormatting: Ontologies.PropertyValueFormattingRule,
): PropertyValueFormattingRule | undefined {
  switch (wireFormatting.type) {
    case "date":
      return convertDateFormattingRule(wireFormatting);

    case "timestamp":
      return convertTimestampFormattingRule(wireFormatting);

    case "boolean":
      return convertBooleanFormattingRule(wireFormatting);

    case "knownType":
      return convertKnownTypeFormattingRule(wireFormatting);

    case "number":
      return convertNumberFormattingRule(wireFormatting);

    default:
      wireFormatting satisfies never;
      throw new Error(
        `Unknown formatting type: ${(wireFormatting as any).type}`,
      );
  }
}
