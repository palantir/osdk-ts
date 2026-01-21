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

import type { ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type {
  ColumnDefinition,
} from "../../ObjectTableApi.js";
import { SELECTION_COLUMN_ID } from "../../utils/constants.js";
import { useColumnPinning } from "../useColumnPinning.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;

function createColumnDef(
  id: string,
  pinned?: "left" | "right" | "none",
): ColumnDefinition<TestObject> {
  return {
    locator: { type: "property", id: id as PropertyKeys<TestObject> },
    pinned,
  };
}

describe("useColumnPinning", () => {
  describe("initialization", () => {
    it("initializes with empty pinning state when no columnDefinitions provided", () => {
      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions: undefined,
        })
      );

      expect(result.current.columnPinning).toEqual({
        left: [],
        right: [],
      });
    });

    it("initializes with empty pinning state when columnDefinitions has no pinned columns", () => {
      const columnDefinitions = [
        createColumnDef("name"),
      ];

      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions,
        })
      );

      expect(result.current.columnPinning).toEqual({
        left: [],
        right: [],
      });
    });

    it("initializes with default pinning from columnDefinitions", () => {
      const columnDefinitions = [
        createColumnDef("firstName", "left"),
        createColumnDef("lastName", "left"),
        createColumnDef("age", "none"),
        createColumnDef("email", "right"),
      ];

      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions,
        })
      );

      expect(result.current.columnPinning).toEqual({
        left: ["firstName", "lastName"],
        right: ["email"],
      });
    });

    it("adds selection column to left pinning when hasSelectionColumn is true", () => {
      const columnDefinitions = [
        createColumnDef("name", "left"),
      ];

      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions,
          hasSelectionColumn: true,
        })
      );

      expect(result.current.columnPinning).toEqual({
        left: [SELECTION_COLUMN_ID, "name"],
        right: [],
      });
    });

    it("does not add selection column when hasSelectionColumn is false", () => {
      const columnDefinitions = [
        createColumnDef("name", "left"),
      ];

      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions,
          hasSelectionColumn: false,
        })
      );

      expect(result.current.columnPinning).toEqual({
        left: ["name"],
        right: [],
      });
    });
  });

  describe("onColumnPinningChange", () => {
    it("updates column pinning state when called", () => {
      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions: undefined,
        })
      );

      expect(result.current.columnPinning).toEqual({
        left: [],
        right: [],
      });

      act(() => {
        result.current.onColumnPinningChange({
          left: ["name"],
          right: ["email"],
        });
      });

      expect(result.current.columnPinning).toEqual({
        left: ["name"],
        right: ["email"],
      });
    });

    it("calls onColumnsPinnedChanged with converted format when pinning changes", () => {
      const onColumnsPinnedChanged = vi.fn();
      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions: undefined,
          onColumnsPinnedChanged,
        })
      );

      act(() => {
        result.current.onColumnPinningChange({
          left: ["name", "age"],
          right: ["email"],
        });
      });

      expect(onColumnsPinnedChanged).toHaveBeenCalledWith([
        { columnId: "name", pinned: "left" },
        { columnId: "age", pinned: "left" },
        { columnId: "email", pinned: "right" },
      ]);
    });

    it("filters out selection column from onColumnsPinnedChanged callback", () => {
      const onColumnsPinnedChanged = vi.fn();
      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions: undefined,
          onColumnsPinnedChanged,
        })
      );

      act(() => {
        result.current.onColumnPinningChange({
          left: [SELECTION_COLUMN_ID, "name"],
          right: ["email"],
        });
      });

      // Selection column should be filtered out
      expect(onColumnsPinnedChanged).toHaveBeenCalledWith([
        { columnId: "name", pinned: "left" },
        { columnId: "email", pinned: "right" },
      ]);
    });

    it("handles updater function in onColumnPinningChange", () => {
      const onColumnsPinnedChanged = vi.fn();
      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions: undefined,
          onColumnsPinnedChanged,
        })
      );

      // Set initial pinning
      act(() => {
        result.current.onColumnPinningChange({
          left: ["name"],
          right: [],
        });
      });

      // Update using updater function
      act(() => {
        result.current.onColumnPinningChange((prev) => ({
          ...prev,
          right: ["email"],
        }));
      });

      expect(result.current.columnPinning).toEqual({
        left: ["name"],
        right: ["email"],
      });
      expect(onColumnsPinnedChanged).toHaveBeenLastCalledWith([
        { columnId: "name", pinned: "left" },
        { columnId: "email", pinned: "right" },
      ]);
    });

    it("does not call onColumnsPinnedChanged when not provided", () => {
      const { result } = renderHook(() =>
        useColumnPinning<TestObject>({
          columnDefinitions: undefined,
        })
      );

      // Should not throw
      act(() => {
        result.current.onColumnPinningChange({
          left: ["name"],
          right: [],
        });
      });

      expect(result.current.columnPinning).toEqual({
        left: ["name"],
        right: [],
      });
    });
  });

  // describe("updates when props change", () => {
  //   it("updates pinning state when columnDefinitions change", () => {
  //     const initialColumnDefinitions: ObjectTableProps<
  //       TestObject
  //     >["columnDefinitions"] = [
  //       {
  //         locator: { type: "property", id: "name" },
  //         pinned: "left",
  //       },
  //     ];

  //     const { result, rerender } = renderHook(
  //       ({ columnDefinitions }) =>
  //         useColumnPinning<TestObject>({
  //           columnDefinitions,
  //         }),
  //       {
  //         initialProps: { columnDefinitions: initialColumnDefinitions },
  //       },
  //     );

  //     expect(result.current.columnPinning).toEqual({
  //       left: ["name"],
  //       right: [],
  //     });

  //     const newColumnDefinitions: ObjectTableProps<
  //       TestObject
  //     >["columnDefinitions"] = [
  //       {
  //         locator: { type: "property", id: "name" },
  //         pinned: "left",
  //       },
  //       {
  //         locator: { type: "property", id: "age" },
  //         pinned: "right",
  //       },
  //     ];

  //     rerender({ columnDefinitions: newColumnDefinitions });

  //     expect(result.current.columnPinning).toEqual({
  //       left: ["name"],
  //       right: ["age"],
  //     });
  //   });

  //   it("updates pinning state when hasSelectionColumn changes", () => {
  //     const columnDefinitions: ObjectTableProps<
  //       TestObject
  //     >["columnDefinitions"] = [
  //       {
  //         locator: { type: "property", id: "name" },
  //         pinned: "left",
  //       },
  //     ];

  //     const { result, rerender } = renderHook(
  //       ({ hasSelectionColumn }) =>
  //         useColumnPinning<TestObject>({
  //           columnDefinitions,
  //           hasSelectionColumn,
  //         }),
  //       {
  //         initialProps: { hasSelectionColumn: false },
  //       },
  //     );

  //     expect(result.current.columnPinning).toEqual({
  //       left: ["name"],
  //       right: [],
  //     });

  //     rerender({ hasSelectionColumn: true });

  //     expect(result.current.columnPinning).toEqual({
  //       left: [SELECTION_COLUMN_ID, "name"],
  //       right: [],
  //     });
  //   });
  // });

  // describe("edge cases", () => {
  //   it("handles empty columnDefinitions array", () => {
  //     const { result } = renderHook(() =>
  //       useColumnPinning<TestObject>({
  //         columnDefinitions: [],
  //       })
  //     );

  //     expect(result.current.columnPinning).toEqual({
  //       left: [],
  //       right: [],
  //     });
  //   });

  //   it("handles columns with no pinned property", () => {
  //     const columnDefinitions: ObjectTableProps<
  //       TestObject
  //     >["columnDefinitions"] = [
  //       {
  //         locator: { type: "property", id: "name" },
  //       },
  //       {
  //         locator: { type: "property", id: "age" },
  //       },
  //     ];

  //     const { result } = renderHook(() =>
  //       useColumnPinning<TestObject>({
  //         columnDefinitions,
  //       })
  //     );

  //     expect(result.current.columnPinning).toEqual({
  //       left: [],
  //       right: [],
  //     });
  //   });

  //   it("handles columns with pinned: 'none'", () => {
  //     const columnDefinitions: ObjectTableProps<
  //       TestObject
  //     >["columnDefinitions"] = [
  //       {
  //         locator: { type: "property", id: "name" },
  //         pinned: "none",
  //       },
  //       {
  //         locator: { type: "property", id: "age" },
  //         pinned: "left",
  //       },
  //     ];

  //     const { result } = renderHook(() =>
  //       useColumnPinning<TestObject>({
  //         columnDefinitions,
  //       })
  //     );

  //     expect(result.current.columnPinning).toEqual({
  //       left: ["age"],
  //       right: [],
  //     });
  //   });

  //   it("handles unpinning all columns", () => {
  //     const onColumnsPinnedChanged = vi.fn();
  //     const columnDefinitions: ObjectTableProps<
  //       TestObject
  //     >["columnDefinitions"] = [
  //       {
  //         locator: { type: "property", id: "name" },
  //         pinned: "left",
  //       },
  //     ];

  //     const { result } = renderHook(() =>
  //       useColumnPinning<TestObject>({
  //         columnDefinitions,
  //         onColumnsPinnedChanged,
  //       })
  //     );

  //     expect(result.current.columnPinning).toEqual({
  //       left: ["name"],
  //       right: [],
  //     });

  //     act(() => {
  //       result.current.onColumnPinningChange({
  //         left: [],
  //         right: [],
  //       });
  //     });

  //     expect(result.current.columnPinning).toEqual({
  //       left: [],
  //       right: [],
  //     });
  //     expect(onColumnsPinnedChanged).toHaveBeenCalledWith([]);
  //   });

  //   it("handles moving column from left to right", () => {
  //     const onColumnsPinnedChanged = vi.fn();
  //     const { result } = renderHook(() =>
  //       useColumnPinning<TestObject>({
  //         columnDefinitions: undefined,
  //         onColumnsPinnedChanged,
  //       })
  //     );

  //     // Pin to left
  //     act(() => {
  //       result.current.onColumnPinningChange({
  //         left: ["name"],
  //         right: [],
  //       });
  //     });

  //     // Move to right
  //     act(() => {
  //       result.current.onColumnPinningChange({
  //         left: [],
  //         right: ["name"],
  //       });
  //     });

  //     expect(result.current.columnPinning).toEqual({
  //       left: [],
  //       right: ["name"],
  //     });
  //     expect(onColumnsPinnedChanged).toHaveBeenLastCalledWith([
  //       { columnId: "name", pinned: "right" },
  //     ]);
  //   });
  // });
});
