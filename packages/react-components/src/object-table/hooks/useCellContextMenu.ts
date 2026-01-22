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

import type { MouseEventHandler, RefObject } from "react";
import { useCallback, useState } from "react";

export interface PopoverPosition {
  left: number;
  top: number;
  width: number;
}

interface UseCellContextMenuProps {
  tdRef: RefObject<HTMLTableCellElement>;
}

interface UseCellContextMenuResults {
  isContextMenuOpen: boolean;
  handleOpenContextMenu: MouseEventHandler<HTMLTableCellElement>;
  handleCloseContextMenu: () => void;
  popoverPosition: PopoverPosition | null;
}

export const useCellContextMenu = ({
  tdRef,
}: UseCellContextMenuProps): UseCellContextMenuResults => {
  const [popoverPosition, setPopoverPosition] = useState<
    PopoverPosition | null
  >(null);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const handleOpenContextMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (tdRef.current) {
      const rect = tdRef.current.getBoundingClientRect();
      const position = {
        left: rect.left,
        top: rect.bottom,
        width: rect.width,
      };
      setPopoverPosition(position);
      setIsContextMenuOpen(true);
    }
  }, [tdRef]);

  const handleCloseContextMenu = useCallback(() => {
    setIsContextMenuOpen(false);
    setPopoverPosition(null);
  }, []);

  return {
    isContextMenuOpen,
    handleOpenContextMenu,
    handleCloseContextMenu,
    popoverPosition,
  };
};
