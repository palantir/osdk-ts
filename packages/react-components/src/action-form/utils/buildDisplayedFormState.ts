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

interface BuildDisplayedFormStateOptions {
  validationDefaultValues: Readonly<Record<string, unknown>>;
  configuredDefaultValues: Readonly<Record<string, unknown>>;
  currentValues: Readonly<Record<string, unknown>>;
  protectedFieldKeys: ReadonlySet<string>;
}

interface UpdateFormStateFromValidationOptions {
  currentValues: Readonly<Record<string, unknown>>;
  previousValidationDefaultValues: Readonly<Record<string, unknown>>;
  nextValidationDefaultValues: Readonly<Record<string, unknown>>;
  configuredDefaultValues: Readonly<Record<string, unknown>>;
  protectedFieldKeys: ReadonlySet<string>;
}

type ValidationValueChange =
  | { type: "remove"; fieldKey: string }
  | { type: "replace"; fieldKey: string; value: unknown };

/**
 * Resolves displayed values in precedence order: validation defaults,
 * configured defaults, then defined current values or user-cleared fields.
 */
export function buildDisplayedFormState({
  validationDefaultValues,
  configuredDefaultValues,
  currentValues,
  protectedFieldKeys,
}: BuildDisplayedFormStateOptions): Record<string, unknown> {
  return Object.fromEntries([
    ...Object.entries(validationDefaultValues).filter(
      ([fieldKey]) => !protectedFieldKeys.has(fieldKey),
    ),
    ...definedEntries(configuredDefaultValues),
    ...Object.entries(currentValues).filter(
      ([fieldKey, value]) =>
        value !== undefined || protectedFieldKeys.has(fieldKey),
    ),
  ]);
}

/**
 * Replaces or clears values only while validation still owns them, preserving
 * configured defaults and fields protected by user edits.
 */
export function updateFormStateFromValidation({
  currentValues,
  previousValidationDefaultValues,
  nextValidationDefaultValues,
  configuredDefaultValues,
  protectedFieldKeys,
}: UpdateFormStateFromValidationOptions): Record<string, unknown> {
  const validationFieldKeys = new Set([
    ...Object.keys(previousValidationDefaultValues),
    ...Object.keys(nextValidationDefaultValues),
  ]);

  const changes = [...validationFieldKeys].flatMap(
    (fieldKey): ValidationValueChange[] => {
      if (
        protectedFieldKeys.has(fieldKey) ||
        configuredDefaultValues[fieldKey] !== undefined
      ) {
        return [];
      }

      const currentValue = currentValues[fieldKey];
      const previousDefault = previousValidationDefaultValues[fieldKey];
      const nextDefault = nextValidationDefaultValues[fieldKey];
      const isValidationOwned =
        previousDefault !== undefined &&
        Object.is(currentValue, previousDefault);

      if (
        nextDefault !== undefined &&
        (currentValue === undefined || isValidationOwned)
      ) {
        return [{ type: "replace", fieldKey, value: nextDefault }];
      }
      return nextDefault === undefined && isValidationOwned
        ? [{ type: "remove", fieldKey }]
        : [];
    },
  );
  const removedFieldKeys = new Set(
    changes.flatMap((change) =>
      change.type === "remove" ? [change.fieldKey] : [],
    ),
  );

  return Object.fromEntries([
    ...Object.entries(currentValues).filter(
      ([fieldKey]) => !removedFieldKeys.has(fieldKey),
    ),
    ...changes.flatMap(
      (change): Array<[string, unknown]> =>
        change.type === "replace" ? [[change.fieldKey, change.value]] : [],
    ),
  ]);
}

function definedEntries(
  values: Readonly<Record<string, unknown>>,
): Array<[string, unknown]> {
  return Object.entries(values).filter(
    (entry): entry is [string, unknown] => entry[1] !== undefined,
  );
}
