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
  MonitoringPanel,
  MonitorStore,
  type Operation,
} from "@osdk/react-devtools";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const DEVTOOLS_POSITION_KEY = "osdk-monitor-position";
const DEVTOOLS_THEME_KEY = "osdk-devtools-theme";

function createNotionalMonitorStore(): MonitorStore {
  const store = new MonitorStore();
  const metrics = store.getMetricsStore();
  const registry = store.getComponentRegistry();

  registry.registerBinding({
    componentId: "employee-directory",
    componentName: "EmployeeDirectory",
    hookType: "useOsdkObjects",
    hookIndex: 0,
    querySignature: "list:Employee:engineering",
    queryParams: {
      type: "list",
      objectType: "Employee",
      where: { department: "Engineering" },
      orderBy: { fullName: "asc" },
      pageSize: 25,
    },
  });
  registry.registerBinding({
    componentId: "employee-directory",
    componentName: "EmployeeDirectory",
    hookType: "useOsdkAction",
    hookIndex: 1,
    querySignature: "action:updateEmployee",
    queryParams: { type: "action", actionName: "updateEmployee" },
  });
  registry.registerBinding({
    componentId: "employee-profile",
    componentName: "EmployeeProfile",
    hookType: "useOsdkObject",
    hookIndex: 0,
    querySignature: "object:Employee:657495110",
    queryParams: {
      type: "object",
      objectType: "Employee",
      primaryKey: "657495110",
    },
  });
  registry.registerBinding({
    componentId: "employee-profile",
    componentName: "EmployeeProfile",
    hookType: "useLinks",
    hookIndex: 1,
    querySignature: "links:Employee:lead",
    queryParams: {
      type: "links",
      sourceObject: "Employee:657495110",
      linkName: "lead",
    },
  });

  for (let index = 0; index < 18; index++) {
    metrics.recordCacheHit(
      `Employee:${String(657495100 + index)}`,
      0.4 + index * 0.02,
      {
        apiName: "Employee",
        primaryKey: String(657495100 + index),
        objectType: "Employee",
      },
      1
    );
  }
  for (let index = 0; index < 6; index++) {
    metrics.recordCacheMiss(
      `Employee:${String(657495200 + index)}`,
      110 + index * 8,
      {
        apiName: "Employee",
        primaryKey: String(657495200 + index),
        objectType: "Employee",
      },
      1
    );
  }
  metrics.recordDeduplication("Employee:list:engineering", {
    apiName: "Employee",
    objectType: "Employee",
    whereClause: 'department = "Engineering"',
    pageSize: 25,
  });
  metrics.recordRevalidation(
    "Employee:list:engineering",
    84,
    {
      apiName: "Employee",
      objectType: "Employee",
      whereClause: 'department = "Engineering"',
      pageSize: 25,
    },
    25
  );

  const actionOperation: Operation = {
    id: "action-update-employee",
    type: "action",
    signature: "updateEmployee:657495110",
    timestamp: Date.now(),
    responseTime: 168,
    actionName: "updateEmployee",
    optimisticConfigured: true,
    optimisticObserved: true,
    optimisticRenderTime: 12,
    serverRoundTripTime: 168,
    perceivedSpeedup: 156,
    optimisticObjectsAffected: 1,
    metadata: {
      actionName: "updateEmployee",
      apiName: "Employee",
      objectType: "Employee",
      primaryKey: "657495110",
    },
  };
  metrics.recordActionLifecycle(actionOperation);
  metrics.recordActionLifecycle({
    ...actionOperation,
    id: "action-assign-mentor",
    signature: "assignMentor:657495110",
    actionName: "assignMentor",
    optimisticRenderTime: 16,
    serverRoundTripTime: 194,
    perceivedSpeedup: 178,
    metadata: {
      ...actionOperation.metadata,
      actionName: "assignMentor",
    },
  });
  metrics.recordActionLifecycle({
    ...actionOperation,
    id: "action-update-location",
    signature: "updateEmployeeLocation:657495110",
    actionName: "updateEmployeeLocation",
    optimisticRenderTime: 14,
    serverRoundTripTime: 151,
    perceivedSpeedup: 137,
    metadata: {
      ...actionOperation.metadata,
      actionName: "updateEmployeeLocation",
    },
  });

  return store;
}

function DevToolsStory(): React.JSX.Element {
  const [monitorStore] = useState(() => {
    localStorage.removeItem(DEVTOOLS_POSITION_KEY);
    localStorage.removeItem(DEVTOOLS_THEME_KEY);
    return createNotionalMonitorStore();
  });
  return <MonitoringPanel monitorStore={monitorStore} />;
}

const meta: Meta<typeof MonitoringPanel> = {
  title: "DevTools/OSDK React Devtools",
  component: MonitoringPanel,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotionalEmployeeApp: Story = {
  render: () => <DevToolsStory />,
};
