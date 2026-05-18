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

import { Button, Callout, Icon, Tooltip } from "@blueprintjs/core";
import React from "react";
import styles from "./InterceptTab.module.scss";

export interface InspectorSelectionHeaderProps {
  error: string | null;
  onDismissError: () => void;
  isSelectionActive: boolean;
  onActivateSelection: () => void;
  infoText: React.ReactNode;
  activeWarningText: string;
  buttonLabel: string;
  showHelpTooltip?: boolean;
}

export const InspectorSelectionHeader: React.FC<
  InspectorSelectionHeaderProps
> = ({
  error,
  onDismissError,
  isSelectionActive,
  onActivateSelection,
  infoText,
  activeWarningText,
  buttonLabel,
  showHelpTooltip,
}) => {
  return (
    <div className={styles.header}>
      {error && (
        <Callout intent="danger" icon="error" className={styles.error}>
          {error}
          <Button
            variant="minimal"
            size="small"
            icon="cross"
            aria-label="Dismiss error"
            onClick={onDismissError}
            className={styles.dismissButton}
          />
        </Callout>
      )}

      <Callout intent="primary" icon="info-sign" className={styles.info}>
        {infoText}
        {showHelpTooltip && (
          <>
            {" "}
            <Tooltip content="If you're unable to find OSDK usage where you expect try hovering over a related component">
              <Icon
                icon="info-sign"
                size={12}
                className={styles.helpIcon}
              />
            </Tooltip>
          </>
        )}
      </Callout>

      <Button
        size="large"
        intent={isSelectionActive ? "warning" : "primary"}
        icon="style"
        onClick={onActivateSelection}
        disabled={isSelectionActive}
        className={styles.activateButton}
      >
        {isSelectionActive ? "Selection Mode Active" : buttonLabel}
      </Button>

      {isSelectionActive && (
        <Callout intent="warning" icon="hand">
          {activeWarningText} Press <kbd>Esc</kbd> to cancel.
        </Callout>
      )}
    </div>
  );
};
