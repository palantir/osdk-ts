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

import type { WorkshopVariableValues } from "@osdk/workshop-embed";
import type { CSSProperties } from "react";

export interface WorkshopModuleProps {
  /** RID of the Workshop module to render. */
  moduleRid: string;

  /** Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published).
   * @default "published" */
  moduleVersion?: "latest" | "published";

  /** Controlled scalar inputs keyed by module-interface external ID. Changed values are sent without reloading the iframe.
   * Merge onVariablesChanged patches into these values to keep edits from Workshop in sync.
   * Omitted inputs remain unchanged; null requests clearing a value. Inputs are resent after reconnection.
   * @default undefined */
  variables?: WorkshopVariableValues;

  /** Reports scalar changes from Workshop as a partial update keyed by module-interface external ID.
   * Merge the patch into variables to retain Workshop edits. Unchanged values are not reported.
   * @param changes Changed values; null represents a cleared variable.
   * @default undefined */
  onVariablesChanged?: (changes: WorkshopVariableValues) => void;

  /** Called when connecting or sending inputs fails. The iframe remains visible.
   * @default undefined */
  onConnectionError?: (error: Error) => void;

  /** Accessible title for the iframe.
   * @default "Workshop module" */
  title?: string;

  /** Additional CSS class name for the iframe.
   * @default undefined */
  className?: string;

  /** Inline styles for the iframe. By default, it fills its container.
   * @default undefined */
  style?: CSSProperties;
}

export interface BaseWorkshopModuleProps extends WorkshopModuleProps {
  /** HTTP or HTTPS Foundry base URL, for example `https://example.palantirfoundry.com`. */
  foundryUrl: string;

  /** Foundry branch RID. Changing the branch reloads the module.
   * @default undefined (main branch) */
  branchRid?: string;

  /** Initial theme override. `system` resolves the browser preference once before loading the module.
   * Uncontrolled: changes after mount are ignored. Remount to apply a different theme.
   * @default undefined (use the module's theme) */
  defaultTheme?: "light" | "dark" | "system";
}
