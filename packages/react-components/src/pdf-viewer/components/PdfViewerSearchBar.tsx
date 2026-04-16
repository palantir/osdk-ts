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

import { ChevronDown, ChevronUp, Cross } from "@blueprintjs/icons";
import React, { useCallback } from "react";
import styles from "./PdfViewerSearchBar.module.css";

export interface PdfViewerSearchBarProps {
  query: string;
  totalMatches: number;
  currentMatchIndex: number;
  onQueryChange: (query: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

export function PdfViewerSearchBar({
  query,
  totalMatches,
  currentMatchIndex,
  onQueryChange,
  onNext,
  onPrev,
  onClose,
}: PdfViewerSearchBarProps): React.ReactElement {
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onQueryChange(e.target.value);
    },
    [onQueryChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (e.shiftKey) {
          onPrev();
        } else {
          onNext();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [onNext, onPrev, onClose],
  );

  const matchDisplay =
    totalMatches > 0
      ? `${currentMatchIndex + 1} of ${totalMatches}`
      : query.length > 0
        ? "No results"
        : "";

  return (
    <div className={styles.searchBar}>
      <input
        autoFocus={true}
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Find in document..."
        aria-label="Search in PDF"
      />
      {matchDisplay.length > 0 && (
        <span className={styles.matchCount}>{matchDisplay}</span>
      )}
      <button
        className={styles.navButton}
        onClick={onPrev}
        disabled={totalMatches === 0}
        aria-label="Previous match"
        type="button"
      >
        <ChevronUp size={16} />
      </button>
      <button
        className={styles.navButton}
        onClick={onNext}
        disabled={totalMatches === 0}
        aria-label="Next match"
        type="button"
      >
        <ChevronDown size={16} />
      </button>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close search"
        type="button"
      >
        <Cross size={16} />
      </button>
    </div>
  );
}
