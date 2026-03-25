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

import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import React, { useCallback } from "react";
import type { SidebarMode } from "../types.js";
import styles from "./PdfViewerSidebarHeader.module.css";

export interface PdfViewerSidebarHeaderProps {
  sidebarMode: SidebarMode;
  onSidebarModeChange: (mode: SidebarMode) => void;
}

const SIDEBAR_MODE_VALUE = Object.freeze(["thumbnails"]) as readonly string[];
const OUTLINE_MODE_VALUE = Object.freeze(["outline"]) as readonly string[];

export function PdfViewerSidebarHeader({
  sidebarMode,
  onSidebarModeChange,
}: PdfViewerSidebarHeaderProps): React.ReactElement {
  const value = sidebarMode === "thumbnails"
    ? SIDEBAR_MODE_VALUE
    : OUTLINE_MODE_VALUE;

  const handleValueChange = useCallback(
    (newValue: string[]) => {
      if (newValue.length > 0) {
        onSidebarModeChange(newValue[0] as SidebarMode);
      }
    },
    [onSidebarModeChange],
  );

  return (
    <div className={styles.sidebarHeader}>
      <ToggleGroup
        value={value}
        onValueChange={handleValueChange}
        className={styles.toggleGroup}
      >
        <Toggle
          value="thumbnails"
          className={styles.modeButton}
          aria-label="Page thumbnails"
        >
          Pages
        </Toggle>

        <Toggle
          value="outline"
          className={styles.modeButton}
          aria-label="Document outline"
        >
          Outline
        </Toggle>
      </ToggleGroup>
    </div>
  );
}
