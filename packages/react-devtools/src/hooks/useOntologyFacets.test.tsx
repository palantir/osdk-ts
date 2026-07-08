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

import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import type { MonitorStore } from "../store/MonitorStore.js";
import type {
  ComponentHookBinding,
  QueryParams,
} from "../utils/ComponentQueryRegistry.js";
import { useComponentOntology } from "./useComponentOntology.js";
import { useOntologyFacets } from "./useOntologyFacets.js";

function makeBinding(queryParams: QueryParams): ComponentHookBinding {
  return {
    componentId: "c1",
    componentName: "C",
    hookType: "useOsdkObjects",
    hookIndex: 0,
    subscriptionId: "s",
    querySignature: "sig",
    queryParams,
    stackTrace: "",
    mountedAt: 0,
    renderCount: 0,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
  };
}

function makeReactiveStore(active: Map<string, ComponentHookBinding[]>): {
  store: MonitorStore;
  fireChange: () => void;
} {
  let version = 0;
  let listener: (() => void) | null = null;
  const stub = {
    getComponentRegistry: () => ({
      subscribe: (cb: () => void) => {
        listener = cb;
        return () => {
          listener = null;
        };
      },
      getVersion: () => version,
      getActiveComponents: () => active,
      getComponentProps: () => undefined,
    }),
    getPropertyAccessTracker: () => ({
      getWastedRenders: () => [],
      getUnusedProperties: () => [],
      getAccessesByComponent: () => [],
    }),
  };
  return {
    store: stub as unknown as MonitorStore,
    fireChange: () => {
      version++;
      listener?.();
    },
  };
}

afterEach(() => {
  cleanup();
});

describe("useOntologyFacets", () => {
  it("mirrors the distinct facet counts from the single-source ontology", () => {
    const active = new Map<string, ComponentHookBinding[]>([
      [
        "c1",
        [
          makeBinding({ type: "list", objectType: "Parcel" }),
          makeBinding({ type: "aggregation", objectType: "Workspace" }),
          makeBinding({ type: "action", actionName: "createParcel" }),
        ],
      ],
    ]);
    const { store } = makeReactiveStore(active);

    const { result } = renderHook(() => ({
      facets: useOntologyFacets(store),
      ontology: useComponentOntology(store),
    }));

    expect(result.current.facets).toEqual({
      objectTypeCount: result.current.ontology.facets.objectTypes.length,
      actionTypeCount: result.current.ontology.facets.actions.length,
    });
    expect(result.current.facets).toEqual({
      objectTypeCount: 2,
      actionTypeCount: 1,
    });
  });

  it("reports zero counts when nothing is mounted", () => {
    const { store } = makeReactiveStore(new Map());
    const { result } = renderHook(() => useOntologyFacets(store));
    expect(result.current).toEqual({ objectTypeCount: 0, actionTypeCount: 0 });
  });

  it("increments the object-type count when a new type mounts", () => {
    const active = new Map<string, ComponentHookBinding[]>([
      ["c1", [makeBinding({ type: "list", objectType: "Parcel" })]],
    ]);
    const { store, fireChange } = makeReactiveStore(active);

    const { result } = renderHook(() => useOntologyFacets(store));
    expect(result.current.objectTypeCount).toBe(1);

    act(() => {
      active.set("c2", [makeBinding({ type: "list", objectType: "Invoice" })]);
      fireChange();
    });

    expect(result.current.objectTypeCount).toBe(2);
  });
});
