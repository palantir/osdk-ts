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

import { SegmentedControl } from "@blueprintjs/core";
import { GridView, Properties } from "@blueprintjs/icons";
import React from "react";

import type { SidebarMode } from "../PdfViewerApi.js";

import styles from "./PdfViewerSidebarHeader.module.css";

export interface PdfViewerSidebarHeaderProps {
  sidebarMode: SidebarMode;
  onSidebarModeChange: (mode: SidebarMode) => void;
}

const SIDEBAR_OPTIONS = [
  {
    value: "thumbnails",
    label: "Page thumbnails",
    icon: <GridView size={16} />,
  },
  {
    value: "outline",
    label: "Document outline",
    icon: <Properties size={16} />,
  },
];

export function PdfViewerSidebarHeader({
  sidebarMode,
  onSidebarModeChange,
}: PdfViewerSidebarHeaderProps): React.ReactElement {
  return (
    <div className={styles.sidebarHeader}>
      <SegmentedControl
        value={sidebarMode}
        onValueChange={(newValue) =>
          onSidebarModeChange(newValue as SidebarMode)
        }
        options={SIDEBAR_OPTIONS}
        className={styles.toggleGroup}
      />
    </div>
  );
}
