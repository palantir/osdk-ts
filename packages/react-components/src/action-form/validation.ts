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

import type { ActionValidationResponse } from "@osdk/api";

type ParameterValidationResult = ActionValidationResponse["parameters"][string];

/**
 * Extract per-field error messages from a validation response.
 * Only includes errors for fields in the touchedFields set.
 */
export function extractFieldErrors(
  response: ActionValidationResponse,
  touchedFields: ReadonlySet<string>,
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const [key, param] of Object.entries(response.parameters)) {
    if (param.result === "INVALID" && touchedFields.has(key)) {
      errors[key] = getParameterErrorMessage(param);
    }
  }
  return errors;
}

/**
 * Extract form-level error from submission criteria failures.
 */
export function extractSubmissionError(
  response: ActionValidationResponse | undefined,
): string | undefined {
  if (response == null || response.result === "VALID") return undefined;
  const failed = response.submissionCriteria
    .filter(c => c.result === "INVALID")
    .map(c => c.configuredFailureMessage ?? "Validation failed");
  return failed.length > 0 ? failed.join("; ") : undefined;
}

/**
 * Derive a human-readable error from a parameter validation result.
 */
function getParameterErrorMessage(
  param: ParameterValidationResult,
): string {
  for (const c of param.evaluatedConstraints) {
    if (
      c.type === "stringRegexMatch" && c.configuredFailureMessage != null
    ) {
      return c.configuredFailureMessage;
    }
  }

  if (param.required) return "This field is required";

  for (const c of param.evaluatedConstraints) {
    if (c.type === "range") return formatRangeMessage(c);
    if (c.type === "stringLength") return formatRangeMessage(c, "length");
    if (c.type === "oneOf") return "Please select a valid option";
  }

  return "Invalid value";
}

function formatRangeMessage(
  constraint: { lt?: unknown; lte?: unknown; gt?: unknown; gte?: unknown },
  subject?: string,
): string {
  const parts: string[] = [];
  const label = subject != null ? `${subject} ` : "Value ";

  if (constraint.gte != null) {
    parts.push(`${label}must be at least ${String(constraint.gte)}`);
  } else if (constraint.gt != null) {
    parts.push(`${label}must be greater than ${String(constraint.gt)}`);
  }

  if (constraint.lte != null) {
    parts.push(`${label}must be at most ${String(constraint.lte)}`);
  } else if (constraint.lt != null) {
    parts.push(`${label}must be less than ${String(constraint.lt)}`);
  }

  return parts.length > 0 ? parts.join(" and ") : "Invalid value";
}
