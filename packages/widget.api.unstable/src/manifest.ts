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

import type {
  EventDefinition,
  ParameterConfig,
  ParameterDefinition,
} from "./config.js";

export interface WidgetManifestV1 {
  version: "1.0.0";

  /**
   * Set of widgets that are available to be rendered.
   * The key can be arbitrary, and is usually the name of your entrypoint, e.g. "main"
   */
  widgets: Record<string, WidgetManifestConfigV1>;
}

export interface WidgetManifestConfigV1 {
  /**
   * RID of the widget that this config corresponds to
   */
  rid: string;

  /**
   * The version of the widget to publish as
   */
  version: string;

  /**
   * List of entrypoint JS files to be loaded, in order. These will be placed on the page in script tags
   */
  entrypointJs: string[];

  /**
   * Any CSS files to be loaded, in order.
   * @optional
   */
  entrypointCss?: string[];

  /**
   * The map of parameter IDs to their definition
   */
  parameters: Record<string, ParameterDefinition>;

  /**
   * The map of events to their definition. Any parameter IDs referenced must be defined in the `parameters` field
   */
  events: Record<string, EventDefinition<ParameterConfig>>;
}

export const MANIFEST_FILE_LOCATION = ".palantir/widgets.config.json";
