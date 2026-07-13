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

import { MonitoringPanel, MonitorStore } from "@osdk/react-devtools";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useMemo } from "react";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";

const HOST_PAGE_STYLE = { padding: 24, maxWidth: 640 } as const;

function createDemoMonitorStore(): MonitorStore {
  const monitorStore = new MonitorStore();

  // Stands in for `OsdkDevTools`/`register.ts` auto-instrumenting a real
  // client — points the monitored client at the same FauxFoundry mock
  // backend the rest of this Storybook uses, so metadata fetched by the
  // Ontology tab is real (mocked) network data, not hand-authored fixtures.
  monitorStore.createMonitoredClient({
    baseUrl: fauxFoundry.baseUrl,
    ontologyRid: fauxFoundry.defaultOntologyRid,
    auth: () => Promise.resolve("myAccessToken"),
  });

  // A real app populates the component registry via fiber inspection when
  // components call `useOsdkObjects`/`useLinks` etc. Seed it directly here
  // so the Ontology Graph tab has "used" types to render without depending
  // on that fiber-walking machinery inside a Storybook iframe.
  const registry = monitorStore.getComponentRegistry();
  const listObjectTypes = [
    "Employee",
    "Office",
    "Department",
    "Project",
    "Team",
  ];
  listObjectTypes.forEach((objectType, index) => {
    registry.registerBinding({
      componentId: `${objectType}-directory-demo`,
      componentName: `${objectType}DirectoryDemo`,
      hookType: "useOsdkObjects",
      hookIndex: index,
      querySignature: `list:${objectType}`,
      queryParams: { type: "list", objectType },
    });
  });
  registry.registerBinding({
    componentId: "employee-lead-badge-demo",
    componentName: "EmployeeLeadBadgeDemo",
    hookType: "useLinks",
    hookIndex: 0,
    querySignature: "links:Employee:lead",
    queryParams: { type: "links", sourceObject: "Employee", linkName: "lead" },
  });
  registry.registerBinding({
    componentId: "project-status-action-demo",
    componentName: "ProjectStatusActionDemo",
    hookType: "useOsdkAction",
    hookIndex: 0,
    querySignature: "action:updateProjectStatusStoryAction",
    queryParams: {
      type: "action",
      actionName: "updateProjectStatusStoryAction",
    },
  });

  return monitorStore;
}

function OsdkDevToolsDemo() {
  const monitorStore = useMemo(() => createDemoMonitorStore(), []);

  return (
    <div style={HOST_PAGE_STYLE}>
      <h2>Host app</h2>
      <p>
        This page stands in for a real OSDK app. The floating devtools panel is
        the real <code>@osdk/react-devtools</code> package, wired to a client
        monitoring the FauxFoundry mock ontology used elsewhere in this
        Storybook.
      </p>
      <p>
        Open the <strong>Ontology</strong> tab on the panel to see the ontology
        graph. The component registry below is pre-seeded with list queries for
        five object types — <code>Employee</code>, <code>Office</code>,{" "}
        <code>Department</code>, <code>Project</code>, and <code>Team</code> —
        plus a <code>lead</code> link traversal and an{" "}
        <code>updateProjectStatusStoryAction</code> action, so the graph loads
        real metadata from the mock backend: Employee's self-referencing{" "}
        <code>lead</code>/<code>peeps</code> links, and the Office → Department
        → Project → Team chain.
      </p>
      <MonitoringPanel monitorStore={monitorStore} />
    </div>
  );
}

const meta: Meta = {
  title: "Components/DevTools",
  tags: ["beta"],
  parameters: {
    // This story mounts its own monitored client, so it doesn't need the
    // shared OsdkProvider — opting out avoids a second, empty auto-mounted
    // devtools panel (see .storybook/preview.tsx).
    osdkProvider: false,
    docs: {
      description: {
        component:
          "`@osdk/react-devtools` mounted against a monitored client, for exercising the devtools panel without a real OSDK app.",
      },
    },
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
  },
};

export default meta;
type Story = StoryObj;

export const OntologyGraph: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Click the panel's Ontology tab to see the graph. Click the Employee node to open the detail drawer with its properties and links.",
      },
    },
  },
  render: () => <OsdkDevToolsDemo />,
};
