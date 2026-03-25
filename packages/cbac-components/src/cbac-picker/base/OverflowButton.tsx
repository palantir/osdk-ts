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
import React from "react";
import type { MarkingSelectionState } from "../types.js";
import styles from "./OverflowButton.module.css";
import { OverflowItem } from "./OverflowItem.js";
import overflowItemStyles from "./OverflowItem.module.css";

export interface OverflowButtonProps {
  overflowMarkings: ReadonlyArray<{
    id: string;
    label: string;
    selectionState: MarkingSelectionState;
    disabled?: boolean;
  }>;
  hasActiveOverflow: boolean;
  onMarkingToggle: (markingId: string) => void;
}

export function OverflowButton({
  overflowMarkings,
  hasActiveOverflow,
  onMarkingToggle,
}: OverflowButtonProps): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        render={
          <button
            type="button"
            className={classnames(
              styles.moreButton,
              hasActiveOverflow && styles.moreButtonActive,
            )}
          >
            +{overflowMarkings.length} more
          </button>
        }
      />
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="start">
          <Popover.Popup className={overflowItemStyles.overflowList}>
            {overflowMarkings.map((marking) => (
              <OverflowItem
                key={marking.id}
                id={marking.id}
                label={marking.label}
                selectionState={marking.selectionState}
                disabled={marking.disabled}
                onToggle={onMarkingToggle}
              />
            ))}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
