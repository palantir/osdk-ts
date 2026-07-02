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

import "@blueprintjs/core/lib/css/blueprint.css";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import React from "react";
import { createRoot } from "react-dom/client";

import { ComponentsPanel } from "../src/components/components/ComponentsPanel.js";
import type { MonitorStore } from "../src/store/MonitorStore.js";
import type { UnusedProperty, WastedRender } from "../src/types/index.js";
import type {
  ComponentHookBinding,
  QueryParams,
} from "../src/utils/ComponentQueryRegistry.js";
import type { PropertyAccessEvent } from "../src/utils/PropertyAccessTracker.js";

import styles from "./dev.module.scss";

function binding(
  componentName: string,
  queryParams: QueryParams,
  hookType: ComponentHookBinding["hookType"] = "useOsdkObjects"
): ComponentHookBinding {
  return {
    componentId: componentName,
    componentName,
    hookType,
    hookIndex: 0,
    subscriptionId: `${componentName}:${hookType}`,
    querySignature: JSON.stringify(queryParams),
    queryParams,
    stackTrace: "",
    mountedAt: 0,
    renderCount: 6,
    lastRenderDuration: 1,
    avgRenderDuration: 1,
  };
}

function access(
  componentId: string,
  objectKey: string,
  property: string
): PropertyAccessEvent {
  return { componentId, objectKey, property, timestamp: 0 };
}

const active = new Map<string, ComponentHookBinding[]>([
  [
    "App",
    [
      binding("App", { type: "list", objectType: "Parcel" }),
      binding("App", { type: "list", objectType: "Workspace" }),
      binding(
        "App",
        { type: "action", actionName: "createParcel" },
        "useOsdkAction"
      ),
    ],
  ],
  [
    "ParcelTable",
    [binding("ParcelTable", { type: "list", objectType: "Parcel" })],
  ],
  [
    "ParcelEditor",
    [
      binding(
        "ParcelEditor",
        {
          type: "object",
          objectType: "Parcel",
          primaryKey: "p3",
        },
        "useOsdkObject"
      ),
      binding(
        "ParcelEditor",
        { type: "action", actionName: "updateParcel" },
        "useOsdkAction"
      ),
      binding(
        "ParcelEditor",
        { type: "action", actionName: "deleteParcel" },
        "useOsdkAction"
      ),
    ],
  ],
]);

const parcelTableAccesses: PropertyAccessEvent[] = [];
for (let i = 1; i <= 12; i++) {
  for (const property of ["name", "status", "owner", "region"]) {
    parcelTableAccesses.push(access("ParcelTable", `Parcel:p${i}`, property));
  }
}

const accessesById: Record<string, PropertyAccessEvent[]> = {
  App: [
    access("App", "Parcel:p1", "name"),
    access("App", "Parcel:p1", "status"),
    access("App", "Parcel:p2", "name"),
    access("App", "Workspace:w1", "title"),
  ],
  ParcelTable: parcelTableAccesses,
  ParcelEditor: [
    access("ParcelEditor", "Parcel:p3", "name"),
    access("ParcelEditor", "Parcel:p3", "status"),
  ],
};

const propsById: Record<string, Record<string, string>> = {
  App: { mode: "grid", pageSize: "25" },
  ParcelTable: { density: "compact", selectable: "true" },
  ParcelEditor: { parcelId: "p3", onSave: "ƒ" },
};

const wasted: WastedRender[] = [
  {
    componentId: "ParcelEditor",
    componentName: "ParcelEditor",
    count: 4,
    timestamp: 0,
  },
];

const unused: UnusedProperty[] = [];

const fakeStore = {
  getComponentRegistry: () => ({
    subscribe: () => () => {},
    getVersion: () => 0,
    getActiveComponents: () => active,
    getComponentProps: (id: string) => propsById[id],
  }),
  getPropertyAccessTracker: () => ({
    getWastedRenders: () => wasted,
    getUnusedProperties: () => unused,
    getAccessesByComponent: (id: string) => accessesById[id] ?? [],
  }),
} as unknown as MonitorStore;

const container = document.querySelector("#root");
if (container) {
  createRoot(container).render(
    <div className={styles.page}>
      <div className={classNames(styles.panel, Classes.DARK)}>
        <ComponentsPanel monitorStore={fakeStore} theme="dark" />
      </div>
    </div>
  );
}
