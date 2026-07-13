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

import { describe, expect, it } from "vitest";

import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import { ComponentQueryRegistry } from "../utils/ComponentQueryRegistry.js";
import {
  collectUsedObjectTypes,
  toOntologyNodeUsages,
  usagesForType,
} from "./ontologyGraphBindings.js";

function makeBinding(
  overrides: Partial<ComponentHookBinding> = {}
): ComponentHookBinding {
  return {
    componentId: "c1",
    componentName: "c1Component",
    hookType: "useOsdkObjects",
    hookIndex: 0,
    subscriptionId: "",
    querySignature: "useOsdkObjects:c1",
    queryParams: { type: "list", objectType: "Employee" },
    stackTrace: "",
    mountedAt: 0,
    renderCount: 0,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
    ...overrides,
  };
}

function registerBinding(
  registry: ComponentQueryRegistry,
  componentId: string,
  hookType:
    | "useOsdkObject"
    | "useOsdkObjects"
    | "useOsdkAggregation"
    | "useLinks",
  queryParams: Parameters<
    ComponentQueryRegistry["registerBinding"]
  >[0]["queryParams"],
  extra?: Partial<Parameters<ComponentQueryRegistry["registerBinding"]>[0]>
): string {
  return registry.registerBinding({
    componentId,
    componentName: `${componentId}Component`,
    hookType,
    hookIndex: 0,
    querySignature: `${hookType}:${componentId}`,
    queryParams,
    ...extra,
  });
}

describe("collectUsedObjectTypes", () => {
  it("collects apiNames from object/list/aggregation queries and link sourceObjects", () => {
    const registry = new ComponentQueryRegistry();
    registerBinding(registry, "c1", "useOsdkObject", {
      type: "object",
      objectType: "Employee",
      primaryKey: "1",
    });
    registerBinding(registry, "c2", "useOsdkObjects", {
      type: "list",
      objectType: "Office",
    });
    registerBinding(registry, "c3", "useOsdkAggregation", {
      type: "aggregation",
      objectType: "Department",
    });
    registerBinding(registry, "c4", "useLinks", {
      type: "links",
      sourceObject: "Employee",
      linkName: "lead",
    });

    expect(collectUsedObjectTypes(registry)).toEqual(
      new Set(["Employee", "Office", "Department"])
    );
  });

  it("filters out the 'Unknown' sentinel apiName", () => {
    const registry = new ComponentQueryRegistry();
    registerBinding(registry, "c1", "useOsdkObject", {
      type: "object",
      objectType: "Unknown",
      primaryKey: "1",
    });

    expect(collectUsedObjectTypes(registry)).toEqual(new Set());
  });

  it("ignores action bindings, which carry no object type", () => {
    const registry = new ComponentQueryRegistry();
    registry.registerBinding({
      componentId: "c1",
      componentName: "c1Component",
      hookType: "useOsdkAction",
      hookIndex: 0,
      querySignature: "action:doThing",
      queryParams: { type: "action", actionName: "doThing" },
    });

    expect(collectUsedObjectTypes(registry)).toEqual(new Set());
  });
});

describe("usagesForType", () => {
  it("matches object/list/aggregation bindings by objectType", () => {
    const registry = new ComponentQueryRegistry();
    registerBinding(registry, "c1", "useOsdkObjects", {
      type: "list",
      objectType: "Employee",
    });
    registerBinding(registry, "c2", "useOsdkObjects", {
      type: "list",
      objectType: "Office",
    });

    const matches = usagesForType(registry.getAllBindings(), "Employee");
    expect(matches.map((b) => b.componentId)).toEqual(["c1"]);
  });

  it("matches link bindings by sourceObject", () => {
    const registry = new ComponentQueryRegistry();
    registerBinding(registry, "c1", "useLinks", {
      type: "links",
      sourceObject: "Employee",
      linkName: "lead",
    });

    const matches = usagesForType(registry.getAllBindings(), "Employee");
    expect(matches.map((b) => b.componentId)).toEqual(["c1"]);
  });

  it("excludes unmounted bindings", () => {
    const registry = new ComponentQueryRegistry();
    registerBinding(registry, "c1", "useOsdkObjects", {
      type: "list",
      objectType: "Employee",
    });
    registry.unregisterComponent("c1");

    expect(usagesForType(registry.getAllBindings(), "Employee")).toEqual([]);
  });
});

describe("toOntologyNodeUsages", () => {
  it("prefers componentDisplayName over componentName for the label", () => {
    const [usage] = toOntologyNodeUsages([
      makeBinding({ componentDisplayName: "EmployeeList" }),
    ]);
    expect(usage.label).toBe("EmployeeList");
  });

  it("falls back to componentName when no componentDisplayName is set", () => {
    const [usage] = toOntologyNodeUsages([makeBinding()]);
    expect(usage.label).toBe("c1Component");
  });

  it("omits the separator when filePath is absent", () => {
    const [usage] = toOntologyNodeUsages([makeBinding()]);
    expect(usage.detail).toBe("useOsdkObjects");
  });

  it("joins hookType and a shortened filePath with ' · '", () => {
    const [usage] = toOntologyNodeUsages([
      makeBinding({ filePath: "/repo/src/components/EmployeeList.tsx" }),
    ]);
    expect(usage.detail).toBe("useOsdkObjects · components/EmployeeList.tsx");
  });

  it("exposes the full filePath as detailTitle for the hover tooltip", () => {
    const [usage] = toOntologyNodeUsages([
      makeBinding({ filePath: "/repo/src/components/EmployeeList.tsx" }),
    ]);
    expect(usage.detailTitle).toBe("/repo/src/components/EmployeeList.tsx");
  });

  it("derives the key from componentId + hookType", () => {
    const [usage] = toOntologyNodeUsages([makeBinding()]);
    expect(usage.key).toBe("c1useOsdkObjects");
  });
});
