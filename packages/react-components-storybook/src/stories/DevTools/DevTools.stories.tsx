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

// Importing the package registers the devtools with @osdk/react's
// devtools-registry (a side effect of the module). The storybook's global
// OsdkProvider (see .storybook/preview.tsx) then wraps its client for
// monitoring and renders the devtools panel alongside every story's content.
import { registerDevToolsPlugin } from "@osdk/react-devtools";
// Opt-in advanced plugin tabs — registered so they appear alongside the base
// tabs (overview, components, performance, console).
import {
  cacheTab,
  computeTab,
  interceptTab,
  ontologyTab,
} from "@osdk/react-devtools/advanced";

import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

registerDevToolsPlugin(cacheTab);
registerDevToolsPlugin(computeTab);
registerDevToolsPlugin(interceptTab);
registerDevToolsPlugin(ontologyTab);

const columns: ColumnDefinition<Employee>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "jobTitle" } },
  { locator: { type: "property", id: "department" } },
  { locator: { type: "property", id: "locationCity" } },
];

const meta: Meta = {
  title: "DevTools/OSDK DevTools",
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Renders an ObjectTable of Employees against the FauxFoundry backend. The
 * table's OSDK fetches populate the devtools stores (cache, compute,
 * components), and the devtools panel is rendered automatically by the
 * global OsdkProvider. Click the panel's tabs to explore.
 */
export const Default: Story = {
  render: () => (
    <div className="object-table-container" style={{ height: "70vh" }}>
      <ObjectTable objectType={Employee} columnDefinitions={columns} />
    </div>
  ),
};
