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
import React, { useCallback, useState } from "react";
import { RemoveIcon } from "../FilterIcons.js";
import styles from "./HorizontalFilterTrigger.module.css";

interface HorizontalFilterTriggerProps {
  label: string;
  summary: React.ReactNode;
  isActive: boolean;
  onRemove?: () => void;
  /**
   * Children are rendered inside the popover when it opens. Inputs that
   * fetch aggregations don't fire any network requests until the popover
   * is opened, satisfying Item 1 AC #7.
   */
  children: React.ReactNode;
  className?: string;
}

/**
 * Button trigger for horizontal-mode filter rows. The trigger shows the
 * filter label and a summary of the current value; clicking it opens a
 * popover with the existing input UI.
 *
 * @internal
 */
export function HorizontalFilterTrigger(
  {
    label,
    summary,
    isActive,
    onRemove,
    children,
    className,
  }: HorizontalFilterTriggerProps,
): React.ReactElement {
  const [open, setOpen] = useState(false);
  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove?.();
    },
    [onRemove],
  );

  const summaryHasValue = summary != null && summary !== "";

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        className={classnames(styles.trigger, className)}
        data-active={isActive}
      >
        <span className={styles.label}>
          {label}
          {summaryHasValue ? ":" : ""}
        </span>
        {summaryHasValue && <span className={styles.summary}>{summary}</span>}
        {onRemove && (
          <button
            type="button"
            onClick={handleRemove}
            className={styles.removeButton}
            aria-label={`Remove ${label} filter`}
          >
            <RemoveIcon />
          </button>
        )}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={4}>
          <Popover.Popup className={styles.popup}>
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
