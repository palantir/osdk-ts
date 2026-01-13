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

import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { PopoverPosition } from "../useCellContextMenu.js";
import { useCellContextMenu } from "../useCellContextMenu.js";

describe("useCellContextMenu", () => {
  let mockElement: HTMLTableCellElement;

  beforeEach(() => {
    // Create a mock table cell element with getBoundingClientRect
    mockElement = document.createElement("td");

    vi.spyOn(mockElement, "getBoundingClientRect").mockReturnValue({
      left: 100,
      top: 200,
      bottom: 240,
      width: 150,
      height: 40,
      right: 250,
      x: 100,
      y: 200,
      toJSON: () => ({}),
    });

    Object.defineProperty(window, "scrollX", { value: 10, writable: true });
    Object.defineProperty(window, "scrollY", { value: 20, writable: true });
  });

  describe("initial state", () => {
    it("returns closed context menu state by default", () => {
      const tdRef = { current: mockElement };
      const { result } = renderHook(() => useCellContextMenu({ tdRef }));

      expect(result.current.isContextMenuOpen).toBe(false);
      expect(result.current.popoverPosition).toBeNull();
    });
  });

  describe("handleOpenContextMenu", () => {
    it("opens context menu and calculates position from element", () => {
      const tdRef = { current: mockElement };
      const { result } = renderHook(() => useCellContextMenu({ tdRef }));

      const mockEvent = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLTableCellElement>;

      act(() => {
        result.current.handleOpenContextMenu(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(result.current.isContextMenuOpen).toBe(true);
      expect(result.current.popoverPosition).toEqual({
        left: 110, // 100 (rect.left) + 10 (scrollX)
        top: 260, // 240 (rect.bottom) + 20 (scrollY)
        width: 150,
      } as PopoverPosition);
    });

    it("does not open context menu if tdRef.current is null", () => {
      const tdRef = { current: null };
      const { result } = renderHook(() => useCellContextMenu({ tdRef }));

      const mockEvent = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLTableCellElement>;

      act(() => {
        result.current.handleOpenContextMenu(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(result.current.isContextMenuOpen).toBe(false);
      expect(result.current.popoverPosition).toBeNull();
    });

    it("updates position when called multiple times", () => {
      const tdRef = { current: mockElement };
      const { result } = renderHook(() => useCellContextMenu({ tdRef }));

      const mockEvent = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLTableCellElement>;

      // First open
      act(() => {
        result.current.handleOpenContextMenu(mockEvent);
      });

      const firstPosition = result.current.popoverPosition;

      // Update mock element position
      vi.spyOn(mockElement, "getBoundingClientRect").mockReturnValue({
        left: 200,
        top: 300,
        bottom: 340,
        width: 200,
        height: 40,
        right: 400,
        x: 200,
        y: 300,
        toJSON: () => ({}),
      });

      // Second open
      act(() => {
        result.current.handleOpenContextMenu(mockEvent);
      });

      expect(result.current.popoverPosition).not.toEqual(firstPosition);
      expect(result.current.popoverPosition).toEqual({
        left: 210, // 200 + 10
        top: 360, // 340 + 20
        width: 200,
      });
    });
  });

  describe("handleCloseContextMenu", () => {
    it("closes context menu and clears position", () => {
      const tdRef = { current: mockElement };
      const { result } = renderHook(() => useCellContextMenu({ tdRef }));

      const mockEvent = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent<HTMLTableCellElement>;

      // Open first
      act(() => {
        result.current.handleOpenContextMenu(mockEvent);
      });

      expect(result.current.isContextMenuOpen).toBe(true);
      expect(result.current.popoverPosition).not.toBeNull();

      // Close
      act(() => {
        result.current.handleCloseContextMenu();
      });

      expect(result.current.isContextMenuOpen).toBe(false);
      expect(result.current.popoverPosition).toBeNull();
    });

    it("is safe to call when already closed", () => {
      const tdRef = { current: mockElement };
      const { result } = renderHook(() => useCellContextMenu({ tdRef }));

      // Close without opening
      act(() => {
        result.current.handleCloseContextMenu();
      });

      expect(result.current.isContextMenuOpen).toBe(false);
      expect(result.current.popoverPosition).toBeNull();
    });
  });
});
