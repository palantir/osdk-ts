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

import { Button } from "@base-ui/react/button";
import { Popover } from "@base-ui/react/popover";
import classnames from "classnames";
import React from "react";

import { SearchBar } from "../../base-components/search-bar/SearchBar.js";
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
  const [query, setQuery] = React.useState("");

  const handleOpenChange = React.useCallback((nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setQuery("");
    }
  }, []);

  const handleQueryChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [],
  );

  const filteredMarkings = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return normalizedQuery.length === 0
      ? overflowMarkings
      : overflowMarkings.filter((marking) =>
          marking.label.toLowerCase().includes(normalizedQuery),
        );
  }, [overflowMarkings, query]);

  return (
    <Popover.Root open={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger
        render={
          <Button
            className={classnames(
              styles.moreButton,
              hasActiveOverflow && styles.moreButtonActive,
            )}
          >
            +{overflowMarkings.length} more
          </Button>
        }
      />
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="start">
          <Popover.Popup className={styles.overflowPopup}>
            <SearchBar
              value={query}
              onChange={handleQueryChange}
              placeholder="Search markings"
              className={styles.overflowSearch}
            />
            <div className={styles.overflowList}>
              {filteredMarkings.map((marking) => (
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
              {filteredMarkings.length === 0 && (
                <div className={styles.emptyState}>No matching markings</div>
              )}
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
