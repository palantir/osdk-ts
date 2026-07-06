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

import { Tooltip } from "@blueprintjs/core";
import type { TooltipProps } from "@blueprintjs/core";
import React from "react";

import { PanelContainerContext } from "../PanelContainerContext.js";

/**
 * Blueprint `Tooltip` pre-wired to portal into the devtools panel (via
 * `PanelContainerContext`) instead of `document.body`, so the tooltip inherits
 * the panel's theme and stacking context. Takes all the usual `TooltipProps`;
 * an explicitly passed `portalContainer` still wins.
 */
export function BpTooltip({
  portalContainer,
  ...props
}: TooltipProps): React.JSX.Element {
  const panelContainer = React.useContext(PanelContainerContext);
  return (
    <Tooltip
      portalContainer={portalContainer ?? panelContainer ?? undefined}
      {...props}
    />
  );
}
