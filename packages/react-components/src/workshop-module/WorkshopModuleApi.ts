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

import type { CSSProperties } from "react";

export interface WorkshopModuleProps {
  /** RID of the Workshop module to render. */
  moduleRid: string;

  /** Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published).
   * @default "published" */
  moduleVersion?: "latest" | "published";

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
}
