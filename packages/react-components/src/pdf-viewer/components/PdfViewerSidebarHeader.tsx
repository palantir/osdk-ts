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

import { Button } from "@base-ui/react/button";
import { GridView, ListDetailView } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { useCallback } from "react";
import { Tooltip } from "../../base-components/tooltip/Tooltip.js";
import type { SidebarMode } from "../types.js";
import styles from "./PdfViewerSidebarHeader.module.css";

export interface PdfViewerSidebarHeaderProps {
  sidebarMode: SidebarMode;
  onSidebarModeChange: (mode: SidebarMode) => void;
}

export function PdfViewerSidebarHeader({
  sidebarMode,
  onSidebarModeChange,
}: PdfViewerSidebarHeaderProps): React.ReactElement {
  const handleThumbnailsClick = useCallback(() => {
    onSidebarModeChange("thumbnails");
  }, [onSidebarModeChange]);

  const handleOutlineClick = useCallback(() => {
    onSidebarModeChange("outline");
  }, [onSidebarModeChange]);

  return (
    <div className={styles.sidebarHeader}>
      <Tooltip.Root>
        <Tooltip.Trigger
          render={
            <Button
              className={classnames(
                styles.modeButton,
                sidebarMode === "thumbnails" && styles.modeButtonActive,
              )}
              onClick={handleThumbnailsClick}
              aria-label="Page thumbnails"
              aria-pressed={sidebarMode === "thumbnails"}
              type="button"
            />
          }
        >
          <GridView size={16} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>
              Page thumbnails
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger
          render={
            <Button
              className={classnames(
                styles.modeButton,
                sidebarMode === "outline" && styles.modeButtonActive,
              )}
              onClick={handleOutlineClick}
              aria-label="Document outline"
              aria-pressed={sidebarMode === "outline"}
              type="button"
            />
          }
        >
          <ListDetailView size={16} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>
              Document outline
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  );
}
