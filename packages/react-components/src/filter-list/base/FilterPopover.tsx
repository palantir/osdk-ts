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

import { Popover } from "@base-ui/react/popover";
import classnames from "classnames";
import React, { memo, useCallback, useState } from "react";
import { RemoveIcon } from "./FilterIcons.js";
import styles from "./FilterPopover.module.css";

export interface FilterPopoverProps {
  label: string;
  /** Short summary of the current value; falls back to `placeholder` when empty. */
  summary: string;
  isActive: boolean;
  onRemove?: () => void;
  /** Popup contents — only mounted while the popover is open. */
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
  /**
   * Where the label sits relative to the trigger.
   * - `"inline"` (default): label and trigger sit on one row.
   * - `"top"`: label stacks above the trigger.
   */
  labelPlacement?: "inline" | "top";
}

/** Labeled, popover-backed filter trigger. Pair with `FilterInput` for the popup body. */
function FilterPopoverInner(
  {
    label,
    summary,
    isActive,
    onRemove,
    children,
    className,
    placeholder = "Any",
    labelPlacement = "inline",
  }: FilterPopoverProps,
): React.ReactElement {
  const [open, setOpen] = useState(false);
  const summaryHasValue = summary !== "";
  const handleRemoveClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove?.();
    },
    [onRemove],
  );

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <span
        className={classnames(
          styles.fieldGroup,
          labelPlacement === "top" && styles.fieldGroupTop,
          className,
        )}
      >
        <span className={styles.label}>{label}</span>
        <Popover.Trigger
          className={styles.trigger}
          data-active={isActive ? "true" : undefined}
        >
          <span
            className={classnames(
              styles.summary,
              !summaryHasValue && styles.placeholder,
            )}
          >
            {summaryHasValue ? summary : placeholder}
          </span>
        </Popover.Trigger>
        {onRemove && (
          <button
            type="button"
            onClick={handleRemoveClick}
            className={styles.removeButton}
            aria-label={`Remove ${label} filter`}
          >
            <RemoveIcon />
          </button>
        )}
      </span>
      <Popover.Portal>
        <Popover.Positioner sideOffset={4} align="start">
          <Popover.Popup className={styles.popup}>
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export const FilterPopover: React.NamedExoticComponent<FilterPopoverProps> =
  memo(FilterPopoverInner);
