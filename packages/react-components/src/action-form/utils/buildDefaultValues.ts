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

import type { RendererFieldDefinition } from "../FormFieldApi.js";

/** Collects configured defaults, which take precedence over validation defaults. */
export function buildDefaultValues(
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition>,
): Record<string, unknown> {
  return Object.fromEntries(
    fieldDefinitions.flatMap((definition): Array<[string, unknown]> => {
      const props: Record<string, unknown> = definition.fieldComponentProps;
      return "defaultValue" in props
        ? [[definition.fieldKey, props.defaultValue]]
        : [];
    }),
  );
}
