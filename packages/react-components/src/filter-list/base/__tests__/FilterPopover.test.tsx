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

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { FilterPopover } from "../FilterPopover.js";

afterEach(cleanup);

describe("FilterPopover", () => {
  it("renders the label and summary", () => {
    render(
      <FilterPopover label="Sites" summary="3 selected" isActive={true}>
        <div>popup body</div>
      </FilterPopover>
    );
    expect(screen.getByText("Sites")).toBeDefined();
    expect(screen.getByText("3 selected")).toBeDefined();
  });

  it("renders the placeholder when summary is empty", () => {
    render(
      <FilterPopover
        label="Sites"
        summary=""
        isActive={false}
        placeholder="Search…"
      >
        <div>popup body</div>
      </FilterPopover>
    );
    expect(screen.getByText("Search…")).toBeDefined();
  });

  it("falls back to the default placeholder when none is provided", () => {
    render(
      <FilterPopover label="Sites" summary="" isActive={false}>
        <div>popup body</div>
      </FilterPopover>
    );
    expect(screen.getByText("Any")).toBeDefined();
  });

  it("toggles data-active on the trigger based on isActive", () => {
    const { rerender } = render(
      <FilterPopover label="Sites" summary="" isActive={false}>
        <div>popup body</div>
      </FilterPopover>
    );
    const trigger = screen.getByRole("button", { name: /Any/iu });
    expect(trigger.getAttribute("data-active")).toBeNull();

    rerender(
      <FilterPopover label="Sites" summary="X" isActive={true}>
        <div>popup body</div>
      </FilterPopover>
    );
    expect(
      screen.getByRole("button", { name: /X/iu }).getAttribute("data-active")
    ).toBe("true");
  });

  it("does not mount children until the popover opens", () => {
    render(
      <FilterPopover label="Sites" summary="" isActive={false}>
        <div data-testid="popup-body">popup body</div>
      </FilterPopover>
    );
    expect(screen.queryByTestId("popup-body")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: /Any/iu }));
    expect(screen.getByTestId("popup-body")).toBeDefined();
  });

  it("unmounts children when the popover closes", async () => {
    render(
      <FilterPopover label="Sites" summary="" isActive={false}>
        <div data-testid="popup-body">popup body</div>
      </FilterPopover>
    );
    const trigger = screen.getByRole("button", { name: /Any/iu });
    fireEvent.click(trigger);
    expect(screen.getByTestId("popup-body")).toBeDefined();

    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.queryByTestId("popup-body")).toBeNull();
    });
  });

  it("renders a remove button only when onRemove is provided", () => {
    const onRemove = vi.fn();
    const { rerender } = render(
      <FilterPopover label="Sites" summary="" isActive={false}>
        <div>popup body</div>
      </FilterPopover>
    );
    expect(
      screen.queryByRole("button", { name: /Remove Sites filter/iu })
    ).toBeNull();

    rerender(
      <FilterPopover
        label="Sites"
        summary=""
        isActive={false}
        onRemove={onRemove}
      >
        <div>popup body</div>
      </FilterPopover>
    );
    const removeButton = screen.getByRole("button", {
      name: /Remove Sites filter/iu,
    });
    fireEvent.click(removeButton);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("stacks label on top when labelPlacement is 'top'", () => {
    const { container } = render(
      <FilterPopover
        label="Sites"
        summary=""
        isActive={false}
        labelPlacement="top"
      >
        <div>popup body</div>
      </FilterPopover>
    );
    const wrapper = container.firstElementChild;
    expect(wrapper?.className).toMatch(/fieldGroupTop/u);
  });

  it("does not apply fieldGroupTop when labelPlacement defaults to inline", () => {
    const { container } = render(
      <FilterPopover label="Sites" summary="" isActive={false}>
        <div>popup body</div>
      </FilterPopover>
    );
    const wrapper = container.firstElementChild;
    expect(wrapper?.className).not.toMatch(/fieldGroupTop/u);
  });

  it("forwards the className to the field group wrapper", () => {
    const { container } = render(
      <FilterPopover
        label="Sites"
        summary=""
        isActive={false}
        className="custom-wrapper"
      >
        <div>popup body</div>
      </FilterPopover>
    );
    const wrapper = container.querySelector(".custom-wrapper");
    expect(wrapper).not.toBeNull();
  });
});
