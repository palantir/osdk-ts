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

import React from "react";
import type { CustomFieldProps } from "../FormFieldApi.js";

/**
 * Renders a user-provided custom field. Delegates all rendering to the
 * `customRenderer` callback, passing through the standard form field props
 * (value, onChange, id) so the custom implementation can participate in
 * form state management.
 */
export function CustomField({
  customRenderer,
  ...baseProps
}: CustomFieldProps<unknown>): React.ReactElement {
  return <>{customRenderer(baseProps)}</>;
}
