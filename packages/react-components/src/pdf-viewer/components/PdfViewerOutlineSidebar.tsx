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

import classnames from "classnames";
import React, { useCallback, useMemo } from "react";
import type { OutlineItem } from "../hooks/usePdfOutline.js";
import styles from "./PdfViewerOutlineSidebar.module.css";

const INDENT_PER_DEPTH = 16;

export interface PdfViewerOutlineSidebarProps {
  outlineItems: OutlineItem[];
  currentPage: number;
  onItemClick: (pageNumber: number) => void;
  onSwitchToThumbnails: () => void;
  outlineIcons?: Partial<Record<number, React.ComponentType>>;
}

export function PdfViewerOutlineSidebar({
  outlineItems,
  currentPage,
  onItemClick,
  onSwitchToThumbnails,
  outlineIcons,
}: PdfViewerOutlineSidebarProps): React.ReactElement {
  const activeIndex = useMemo(() => {
    return computeActiveIndex(outlineItems, currentPage);
  }, [outlineItems, currentPage]);

  if (outlineItems.length === 0) {
    return (
      <div className={styles.sidebar}>
        <div className={styles.emptyState}>
          <div className={styles.emptyStateText}>
            No outline available
          </div>
          <button
            type="button"
            className={styles.switchToThumbnailsButton}
            onClick={onSwitchToThumbnails}
          >
            View page thumbnails
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.scrollContainer}>
        {outlineItems.map((item, index) => (
          <PdfViewerOutlineItem
            key={index}
            item={item}
            isActive={index === activeIndex}
            onClick={onItemClick}
            iconComponent={outlineIcons?.[item.depth]}
          />
        ))}
      </div>
    </div>
  );
}

interface PdfViewerOutlineItemProps {
  item: OutlineItem;
  isActive: boolean;
  onClick: (pageNumber: number) => void;
  iconComponent: React.ComponentType | undefined;
}

function PdfViewerOutlineItem({
  item,
  isActive,
  onClick,
  iconComponent: IconComponent,
}: PdfViewerOutlineItemProps): React.ReactElement {
  const handleClick = useCallback(() => {
    onClick(item.pageNumber);
  }, [onClick, item.pageNumber]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(item.pageNumber);
      }
    },
    [onClick, item.pageNumber],
  );

  const itemClassName = classnames(
    styles.outlineItem,
    isActive && styles.outlineItemActive,
    item.bold && styles.outlineItemBold,
    item.italic && styles.outlineItemItalic,
  );

  const paddingLeft = INDENT_PER_DEPTH * item.depth + 12;

  return (
    <div
      className={itemClassName}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={item.title}
      aria-current={isActive ? "location" : undefined}
      style={{ paddingLeft }}
    >
      {IconComponent != null && (
        <span className={styles.outlineItemIcon}>
          <IconComponent />
        </span>
      )}
      <span className={styles.outlineItemTitle}>{item.title}</span>
    </div>
  );
}

function computeActiveIndex(
  items: OutlineItem[],
  currentPage: number,
): number {
  let activeIdx = -1;
  for (let i = 0; i < items.length; i++) {
    if (items[i].pageNumber <= currentPage) {
      activeIdx = i;
    } else {
      break;
    }
  }
  return activeIdx;
}
