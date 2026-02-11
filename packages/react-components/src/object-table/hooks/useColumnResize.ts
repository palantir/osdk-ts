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

import type { ColumnSizingState, OnChangeFn } from "@tanstack/react-table";
import { useCallback, useState } from "react";

interface UseColumnResizeProps {
  onColumnResize?: (columnId: string, newWidth: number | null) => void;
}

interface UseColumnResizeResults {
  columnSizing: ColumnSizingState;
  onColumnSizingChange: OnChangeFn<ColumnSizingState>;
}

export const useColumnResize = ({
  onColumnResize,
}: UseColumnResizeProps): UseColumnResizeResults => {
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

  const onColumnSizingChange: OnChangeFn<ColumnSizingState> = useCallback(
    (updater) => {
      setColumnSizing((prev) => {
        const newState = typeof updater === "function"
          ? updater(prev)
          : updater;

        if (onColumnResize) {
          for (const columnId of Object.keys(newState)) {
            if (newState[columnId] !== prev[columnId]) {
              onColumnResize(columnId, newState[columnId]);
            }
          }
          for (const columnId of Object.keys(prev)) {
            if (!(columnId in newState)) {
              onColumnResize(columnId, null);
            }
          }
        }

        return newState;
      });
    },
    [onColumnResize],
  );

  return { columnSizing, onColumnSizingChange };
};
