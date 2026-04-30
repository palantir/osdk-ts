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

import classnames from "classnames";
import * as React from "react";
import { Dialog } from "../base-components/dialog/Dialog.js";
import styles from "./ContextItemPill.module.css";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface ContextItemPillProps {
  /** Primary label shown in the pill. */
  label: string;
  /** Optional secondary text rendered to the right of the label. */
  secondaryText?: string;
  /** Title shown in the inspector dialog when the pill is clicked. */
  dialogTitle: string;
  /** JSON-serializable data displayed as JSON in the dialog body. */
  data?: JsonValue;
  /** Custom node rendered in the dialog body. Overrides `data` when provided. */
  dialogContent?: React.ReactNode;
  /** Label for the loaded badge. Defaults to "Loaded". */
  loadedLabel?: string;
  /** Whether to show the loaded badge. Defaults to true. */
  showLoadedBadge?: boolean;
  /** Additional CSS class for the root element. */
  className?: string;
}

const DEFAULT_LOADED_LABEL = "Loaded";

export const ContextItemPill: React.NamedExoticComponent<
  ContextItemPillProps
> = React.memo(function ContextItemPill({
  label,
  secondaryText,
  dialogTitle,
  data,
  dialogContent,
  loadedLabel = DEFAULT_LOADED_LABEL,
  showLoadedBadge = true,
  className,
}: ContextItemPillProps): React.ReactElement {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const handleOpen = React.useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const rootClassName = classnames(styles.pill, className);

  const dataString = React.useMemo(
    () => (data === undefined ? "" : JSON.stringify(data, null, 2)),
    [data],
  );

  return (
    <>
      <button type="button" className={rootClassName} onClick={handleOpen}>
        <span className={styles.label}>{label}</span>
        {secondaryText !== undefined && (
          <span className={styles.secondaryText}>{secondaryText}</span>
        )}
        {showLoadedBadge && (
          <span className={styles.loadedBadge}>{loadedLabel}</span>
        )}
      </button>
      <Dialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title={dialogTitle}
      >
        {dialogContent !== undefined
          ? dialogContent
          : <pre className={styles.rawView}>{dataString}</pre>}
      </Dialog>
    </>
  );
});
