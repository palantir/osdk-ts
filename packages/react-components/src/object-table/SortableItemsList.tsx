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

import React, { useCallback } from "react";
import {
  type DraggableItem,
  DraggableList,
} from "../base-components/draggable-list/DraggableList.js";

export interface SortableItem extends DraggableItem {
  content: React.ReactNode;
}

interface SortableItemsListProps {
  items: SortableItem[];
  onReorder: (fromIndex: number, toIndex: number) => void;
  onRemove: (id: string) => void;
  className?: string;
}

export function SortableItemsList({
  items,
  onReorder,
  onRemove,
  className,
}: SortableItemsListProps): React.ReactElement {
  const renderContent = useCallback((item: SortableItem) => item.content, []);

  return (
    <DraggableList
      items={items}
      onReorder={onReorder}
      onRemove={onRemove}
      removeIconVariant="cross"
      renderContent={renderContent}
      className={className}
    />
  );
}
