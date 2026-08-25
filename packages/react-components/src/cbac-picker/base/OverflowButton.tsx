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

import { Button, Popover } from "@blueprintjs/core";
import classnames from "classnames";
import React from "react";

import type { MarkingSelectionState } from "../types.js";
import { OverflowItem } from "./OverflowItem.js";

import styles from "./OverflowButton.module.css";

export interface OverflowButtonProps {
  overflowMarkings: ReadonlyArray<{
    id: string;
    label: string;
    description?: string;
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
    <Popover
      isOpen={open}
      onInteraction={setOpen}
      placement="bottom-start"
      popoverClassName={styles.overflowList}
      content={
        <div>
          {overflowMarkings.map((marking) => (
            <OverflowItem
              key={marking.id}
              id={marking.id}
              label={marking.label}
              description={marking.description}
              selectionState={marking.selectionState}
              disabled={marking.disabled}
              onToggle={onMarkingToggle}
            />
          ))}
        </div>
      }
    >
      <Button
        className={classnames(
          styles.moreButton,
          hasActiveOverflow && styles.moreButtonActive,
        )}
      >
        +{overflowMarkings.length} more
      </Button>
    </Popover>
  );
}
