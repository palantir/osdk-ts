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

import { BaseObjectMap } from "@osdk/react-components/experimental/object-map";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, passthrough } from "msw";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";

import { GEOMETRY_FEATURES, OFFICE_FEATURES } from "./officeMapFixtures.js";
import { OfficeMapPrototype } from "./OfficeMapPrototype.js";

const MAP_CONTAINER = { height: "65vh" } as const;
const NO_FEATURES = [] as const;
const DATA_ERROR = new Error("Office data is temporarily unavailable.");

const meta: Meta<typeof BaseObjectMap> = {
  title: "Components/ObjectMap",
  component: BaseObjectMap,
  parameters: { layout: "fullscreen" },
  args: {
    features: OFFICE_FEATURES,
    onSelectionChanged: fn(),
  },
  render: (args) => (
    <div style={MAP_CONTAINER}>
      <BaseObjectMap {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const GeometryTypes: Story = {
  args: { features: GEOMETRY_FEATURES },
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const DataError: Story = {
  args: { error: DATA_ERROR, onRetry: fn() },
};

export const Empty: Story = {
  args: { features: NO_FEATURES },
};

export const MoreObjects: Story = {
  args: { hasMore: true, onLoadMore: fn(), omittedObjectCount: 2 },
};

export const ApplicationPrototype: Story = {
  render: () => <OfficeMapPrototype />,
  parameters: {
    msw: {
      // This fixture-only application needs real static assets, not Foundry
      // handlers. Pass through to the server so missing files still fail.
      handlers: [
        http.get(`${import.meta.env.BASE_URL}object-map-basemap/*`, () =>
          passthrough(),
        ),
      ],
    },
    docs: {
      description: {
        story:
          "A standalone office-planning workflow with synthetic offices and bundled overview geography. Filter sites, select on the map or list, and review capacity in a linked detail panel. No Foundry credentials or external map requests are needed by default; optional street detail loads from OpenStreetMap.",
      },
    },
  },
};

// Keep the shareable application interactive. Automated user gestures belong
// in a test-only story so opening the demo never changes its filters/selection.
export const ApplicationPrototypeInteractions: Story = {
  ...ApplicationPrototype,
  // cspell:ignore autodocs
  tags: ["test", "!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const search = canvas.getByRole("searchbox", {
      name: "Find an office or city",
    });
    const capacityFilter = canvas.getByRole("checkbox", {
      name: "At least 90% occupied",
    });
    const streetDetail = canvas.getByRole("checkbox", {
      name: "Street detail (OpenStreetMap)",
    });
    // The manual demo must begin with the full office network and no filters.
    await expect(
      await canvas.findByText("6 of 6 offices shown"),
    ).toBeInTheDocument();
    await expect(search).toHaveValue("");
    await expect(capacityFilter).not.toBeChecked();
    await expect(streetDetail).not.toBeChecked();
    await waitFor(() => {
      expect(canvas.getByRole("button", { name: "Fit objects" })).toBeEnabled();
      // MapLibre's stylesheet must not collapse the container or clip markers.
      const renderer = canvasElement.querySelector(".maplibregl-map");
      expect(renderer?.getBoundingClientRect().height).toBeGreaterThan(200);
    });
    await userEvent.click(
      canvas.getByRole("button", { name: "Harbor office" }),
    );
    const details = within(
      canvas.getByRole("complementary", { name: "Selected office details" }),
    );
    await expect(
      await details.findByRole("heading", { name: "Harbor office" }),
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole("button", { name: "Harbor office" }),
    ).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(canvas.getByRole("button", { name: "Object list" }));
    const harborCheckbox = canvas.getByRole("checkbox", {
      name: "Harbor office · Boston",
    });
    await expect(harborCheckbox).toBeChecked();
    await userEvent.click(
      canvas.getByRole("checkbox", { name: "Midtown office · New York" }),
    );
    await expect(
      await details.findByRole("heading", { name: "Midtown office" }),
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole("button", { name: "Midtown office" }),
    ).toHaveAttribute("aria-pressed", "true");
    await expect(
      details.getByRole("heading", { name: "Harbor office" }),
    ).toBeInTheDocument();
    await userEvent.click(harborCheckbox);
    await waitFor(() =>
      expect(
        details.queryByRole("heading", { name: "Harbor office" }),
      ).not.toBeInTheDocument(),
    );
    await expect(
      canvas.getByRole("button", { name: "Harbor office" }),
    ).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(capacityFilter);
    await expect(
      await canvas.findByText("3 of 6 offices shown"),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByRole("button", { name: "Market Street office" }),
    ).not.toBeInTheDocument();
    await userEvent.type(search, "Boston");
    await waitFor(() => expect(search).toHaveValue("Boston"));
    await expect(
      await canvas.findByText("1 of 6 offices shown"),
    ).toBeInTheDocument();
    await userEvent.clear(search);
    await userEvent.click(capacityFilter);
    await expect(
      await canvas.findByText("6 of 6 offices shown"),
    ).toBeInTheDocument();
    await expect(
      await details.findByRole("heading", { name: "Review a location" }),
    ).toBeInTheDocument();
  },
};
