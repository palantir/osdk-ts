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

// HappyDOM elements have 0 dimensions, so TanStack Virtual's ResizeObserver
// reports 0 height and renders 0 items. Stub ResizeObserver to report a
// reasonable viewport so the virtualizer renders items in tests.
const VIRTUAL_VIEWPORT_HEIGHT = 300;
vi.stubGlobal(
  "ResizeObserver",
  class StubResizeObserver {
    callback: ResizeObserverCallback;
    constructor(callback: ResizeObserverCallback) {
      this.callback = callback;
    }
    observe(target: Element): void {
      this.callback(
        [
          {
            target,
            contentRect: {
              width: 300,
              height: VIRTUAL_VIEWPORT_HEIGHT,
            } as DOMRectReadOnly,
            borderBoxSize: [{
              blockSize: VIRTUAL_VIEWPORT_HEIGHT,
              inlineSize: 300,
            }],
            contentBoxSize: [{
              blockSize: VIRTUAL_VIEWPORT_HEIGHT,
              inlineSize: 300,
            }],
            devicePixelContentBoxSize: [],
          } as ResizeObserverEntry,
        ],
        this as ResizeObserver,
      );
    }
    unobserve(): void {}
    disconnect(): void {}
  },
);

vi.mock("@osdk/react", () => ({
  useOsdkMetadata: vi.fn(),
}));

vi.mock("@osdk/react/experimental", () => ({
  useOsdkObjects: vi.fn(),
}));

const { useOsdkMetadata } = await import("@osdk/react");
const mockUseOsdkMetadata = vi.mocked(useOsdkMetadata);

const { useOsdkObjects } = await import("@osdk/react/experimental");
const mockUseOsdkObjects = vi.mocked(useOsdkObjects);

// The full return type is UseOsdkListResult<ObjectTypeDefinition> whose `data`
// field requires full Osdk.Instance objects (including $objectSpecifier, etc.).
// Our mock objects only carry the subset ObjectSelectField reads at runtime
// ($primaryKey, $title), so the mock value must be cast through `never`.

afterEach(cleanup);

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
  } as never);
}

describe("ObjectSelectField", () => {
  beforeEach(() => {
    mockUseOsdkObjects.mockReset();
    mockUseOsdkMetadata.mockReset();
    mockMetadataLoaded();
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

    await vi.waitFor(() => {
      const popup = getPopup();
      expect(popup?.textContent).toContain("Alice Smith");
      expect(popup?.textContent).toContain("Bob Jones");
      expect(popup?.textContent).toContain("Carol White");
    });
  });

  it("calls onChange with the selected object when an option is clicked", async () => {
    const onChange = vi.fn();
    mockLoadedState();
    renderObjectSelect({ onChange });
    await openCombobox();

    await vi.waitFor(() => {
      expect(getPopup()?.textContent).toContain("Alice Smith");
    });
    fireEvent.click(screen.getByText("Alice Smith"));

    await vi.waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
    const selectedValue = onChange.mock.calls[0]?.[0];
    expect(selectedValue).toEqual(
      expect.objectContaining({ $primaryKey: 1, $title: "Alice Smith" }),
    );
  });

  it("passes objectTypeApiName to useOsdkObjects as a minimal type def", () => {
    mockLoadedState();
    renderObjectSelect({ objectTypeApiName: "Office" });

    expect(mockUseOsdkObjects).toHaveBeenCalledWith(
      expect.objectContaining({ type: "object", apiName: "Office" }),
      expect.objectContaining({ pageSize: 50 }),
    );
  });

  it("shows 'No results' when data is empty and not searching", async () => {
    mockLoadedState([], { isLoading: false });
    renderObjectSelect();

    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);

    await vi.waitFor(() => {
      const popup = document.querySelector("[class*='osdkComboboxPopup']");
      expect(popup).not.toBeNull();
      expect(popup?.textContent).toContain("No results");
    });
  });

  it("shows error message when fetch fails", async () => {
    mockLoadedState([], {
      isLoading: false,
      error: new Error("Connection refused"),
    });
    renderObjectSelect();

    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);

    await vi.waitFor(() => {
      const popup = document.querySelector("[class*='osdkComboboxPopup']");
      expect(popup).not.toBeNull();
      expect(popup?.textContent).toContain("Connection refused");
    });
  });

  it("debounces search input before updating the where clause", async () => {
    vi.useFakeTimers();
    try {
      mockLoadedState();
      renderObjectSelect();
      await openCombobox();

      // The search input is inside the popup, separate from the trigger.
      const searchInput = screen.getByPlaceholderText("Search…");
      fireEvent.change(searchInput, { target: { value: "Ali" } });

      // Immediately after typing, the where clause should not be set yet
      const firstCall = mockUseOsdkObjects.mock.calls.at(-1);
      expect(firstCall?.[1]?.where).toBeUndefined();

      // Advance past the debounce timer (300ms)
      vi.advanceTimersByTime(300);

      await vi.waitFor(() => {
        const latestCall = mockUseOsdkObjects.mock.calls.at(-1);
        expect(latestCall?.[1]?.where).toEqual({
          fullName: { $containsAnyTerm: "Ali" },
        });
      });
    } finally {
      vi.useRealTimers();
    }
  });

  it("does not set where clause when metadata is still loading", async () => {
    vi.useFakeTimers();
    try {
      mockUseOsdkMetadata.mockReturnValue({ loading: true });
      mockLoadedState();
      renderObjectSelect();
      await openCombobox();

      const searchInput = screen.getByPlaceholderText("Search…");
      fireEvent.change(searchInput, { target: { value: "Ali" } });
      vi.advanceTimersByTime(300);

      await vi.waitFor(() => {
        const latestCall = mockUseOsdkObjects.mock.calls.at(-1);
        expect(latestCall?.[1]?.where).toBeUndefined();
      });
    } finally {
      vi.useRealTimers();
    }
  });

  it("clears the search query on selection", async () => {
    mockLoadedState();
    renderObjectSelect();
    await openCombobox();

    await vi.waitFor(() => {
      expect(getPopup()?.textContent).toContain("Alice Smith");
    });
    fireEvent.click(screen.getByText("Alice Smith"));

    await vi.waitFor(() => {
      const latestCall = mockUseOsdkObjects.mock.calls.at(-1);
      expect(latestCall?.[1]?.where).toBeUndefined();
    });
  });

  it("clears search text from the input after selecting an object", async () => {
    mockLoadedState();
    renderObjectSelect();
    await openCombobox();

    await vi.waitFor(() => {
      expect(getPopup()?.textContent).toContain("Alice Smith");
    });

    const searchInput = screen.getByPlaceholderText("Search…");
    fireEvent.change(searchInput, { target: { value: "Ali" } });

    fireEvent.click(screen.getByText("Alice Smith"));

    // After selection, the search text should not remain in the input.
    // The component clears its query state so base-ui can display the
    // selected label instead of leftover search text.
    await vi.waitFor(() => {
      expect(searchInput).not.toHaveProperty("value", "Ali");
    });
  });

  it("renders custom placeholder text", () => {
    mockLoadedState();
    renderObjectSelect({ placeholder: "Find an employee…" });

    // The placeholder appears as visible text in the trigger,
    // not as an HTML placeholder attribute on an input.
    expect(screen.getByText("Find an employee…")).toBeDefined();
  });

  it("uses $primaryKey as fallback display when $title is missing", async () => {
    mockLoadedState([makeMockObject(99)]);
    renderObjectSelect();
    await openCombobox();

    await vi.waitFor(() => {
      const popup = getPopup();
      expect(popup?.textContent).toContain("99");
    });
  });
});

function mockMetadataLoaded(titleProperty: string = "fullName"): void {
  mockUseOsdkMetadata.mockReturnValue({
    loading: false,
    metadata: { titleProperty } as ReturnType<
      typeof useOsdkMetadata
    >["metadata"],
  });
}

function makeMockObject(primaryKey: number, title?: string) {
  return {
    $primaryKey: primaryKey,
    $title: title,
    $objectType: "Employee",
    $apiName: "Employee",
  };
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

function getPopup(): Element | null {
  return document.querySelector("[class*='osdkComboboxPopup']");
}

async function openCombobox(): Promise<void> {
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.keyDown(input, { key: "ArrowDown" });
  // In virtualized mode, items may not have role="option" in HappyDOM
  // (no layout engine), so wait for the popup container instead.
  await vi.waitFor(() => {
    expect(getPopup()).not.toBeNull();
  });
}
