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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ObjectSelectField } from "../fields/ObjectSelectField.js";

vi.mock("@osdk/react/experimental", () => ({
  useOsdkObjects: vi.fn(),
}));

const { useOsdkObjects } = await import("@osdk/react/experimental");
const mockUseOsdkObjects = vi.mocked(useOsdkObjects);

afterEach(cleanup);

function makeMockObject(primaryKey: number, title: string) {
  return {
    $primaryKey: primaryKey,
    $title: title,
    $objectType: "Employee",
    $apiName: "Employee",
  };
}

const MOCK_EMPLOYEES = [
  makeMockObject(1, "Alice Smith"),
  makeMockObject(2, "Bob Jones"),
  makeMockObject(3, "Carol White"),
];

function mockLoadedState(
  data: ReturnType<typeof makeMockObject>[] = MOCK_EMPLOYEES,
  overrides: Partial<{
    isLoading: boolean;
    error: Error;
    hasMore: boolean;
    fetchMore: (() => Promise<void>) | undefined;
  }> = {},
) {
  // The mock return must satisfy UseOsdkListResult which has complex generics.
  // We construct the minimal shape needed by ObjectSelectField at runtime.
  mockUseOsdkObjects.mockReturnValue({
    data,
    isLoading: false,
    isOptimistic: false,
    hasMore: false,
    error: undefined,
    fetchMore: undefined,
    refetch: vi.fn(),
    objectSet: undefined,
    ...overrides,
  } as unknown as ReturnType<typeof useOsdkObjects>);
}

function renderObjectSelect(
  overrides: Partial<Parameters<typeof ObjectSelectField>[0]> = {},
) {
  return render(
    <ObjectSelectField
      objectTypeApiName="Employee"
      value={null}
      onChange={vi.fn()}
      {...overrides}
    />,
  );
}

async function openCombobox(): Promise<void> {
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.keyDown(input, { key: "ArrowDown" });
  await vi.waitFor(() => {
    expect(screen.getByRole("option", { name: "Alice Smith" })).toBeDefined();
  });
}

describe("ObjectSelectField", () => {
  beforeEach(() => {
    mockUseOsdkObjects.mockReset();
  });

  it("renders a searchable combobox", () => {
    mockLoadedState();
    renderObjectSelect();

    expect(screen.getByRole("combobox")).toBeDefined();
  });

  it("displays object titles as dropdown items", async () => {
    mockLoadedState();
    renderObjectSelect();
    await openCombobox();

    expect(screen.getByRole("option", { name: "Alice Smith" })).toBeDefined();
    expect(screen.getByRole("option", { name: "Bob Jones" })).toBeDefined();
    expect(screen.getByRole("option", { name: "Carol White" })).toBeDefined();
  });

  it("calls onChange with the selected object when an option is clicked", async () => {
    const onChange = vi.fn();
    mockLoadedState();
    renderObjectSelect({ onChange });
    await openCombobox();

    fireEvent.click(screen.getByRole("option", { name: "Alice Smith" }));

    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ $primaryKey: 1, $title: "Alice Smith" }),
      );
    });
  });

  it("passes objectTypeApiName to useOsdkObjects as a minimal type def", () => {
    mockLoadedState();
    renderObjectSelect({ objectTypeApiName: "Office" });

    expect(mockUseOsdkObjects).toHaveBeenCalledWith(
      expect.objectContaining({ type: "object", apiName: "Office" }),
      expect.objectContaining({ pageSize: 50 }),
    );
  });

  it("shows loading indicator when data is not yet available", async () => {
    mockLoadedState([], { isLoading: true });
    renderObjectSelect();

    const input = screen.getByRole("combobox");
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });

    // Loading state renders a skeleton in the popup
    await vi.waitFor(() => {
      const popup = document.querySelector("[class*='osdkComboboxPopup']");
      const skeleton = popup?.querySelector("[class*='skeleton']");
      expect(skeleton).not.toBeNull();
    });
  });

  it("shows error message when fetch fails", async () => {
    mockLoadedState([], {
      isLoading: false,
      error: new Error("Connection refused"),
    });
    renderObjectSelect();

    const input = screen.getByRole("combobox");
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });

    await vi.waitFor(() => {
      const alertElement = document.querySelector("[role='alert']");
      expect(alertElement).not.toBeNull();
      expect(alertElement!.textContent).toBe("Connection refused");
    });
  });

  it("debounces search input before updating where clause", async () => {
    vi.useFakeTimers();
    try {
      mockLoadedState();
      renderObjectSelect();

      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "Ali" } });

      // Immediately after typing, the where clause should not be set yet
      const firstCall = mockUseOsdkObjects.mock.calls.at(-1);
      expect(firstCall?.[1]?.where).toBeUndefined();

      // Advance past the debounce timer
      vi.advanceTimersByTime(300);

      await vi.waitFor(() => {
        const latestCall = mockUseOsdkObjects.mock.calls.at(-1);
        expect(latestCall?.[1]?.where).toBeDefined();
      });
    } finally {
      vi.useRealTimers();
    }
  });

  it("renders custom placeholder text", () => {
    mockLoadedState();
    renderObjectSelect({ placeholder: "Find an employee…" });

    const input = screen.getByRole("combobox");
    expect(input.getAttribute("placeholder")).toBe("Find an employee…");
  });

  it("uses $primaryKey as fallback display when $title is missing", async () => {
    mockLoadedState([
      {
        $primaryKey: 99,
        $title: undefined as unknown as string,
        $objectType: "Employee",
        $apiName: "Employee",
      },
    ]);
    renderObjectSelect();

    const input = screen.getByRole("combobox");
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });

    await vi.waitFor(() => {
      expect(screen.getByRole("option", { name: "99" })).toBeDefined();
    });
  });
});
