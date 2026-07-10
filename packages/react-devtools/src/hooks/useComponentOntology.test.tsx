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

/** A registry backed by a real mutable Map with a working subscribe/version pair. */
function makeReactiveStore(active: Map<string, ComponentHookBinding[]>): {
  store: MonitorStore;
  fireChange: () => void;
  active: Map<string, ComponentHookBinding[]>;
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
    active,
  };
}

function makeStore(active: Map<string, ComponentHookBinding[]>): MonitorStore {
  return makeReactiveStore(active).store;
}

afterEach(() => {
  cleanup();
});

describe("useComponentOntology", () => {
  it("derives the object-type and action facets as one distinct sorted union across all components", () => {
    const active = new Map<string, ComponentHookBinding[]>([
      [
        "c1",
        [
          makeBinding({ type: "list", objectType: "Parcel" }),
          makeBinding({
            type: "links",
            sourceObject: "Parcel:123",
            linkName: "owner",
          }),
          makeBinding({
            type: "objectSet",
            baseObjectSet: "Parcel",
            operations: [],
          }),
          makeBinding({
            type: "aggregation",
            objectType: "Workspace",
          }),
        ],
      ],
      ["c2", [makeBinding({ type: "action", actionName: "createParcel" })]],
    ]);

    const { result } = renderHook(() =>
      useComponentOntology(makeStore(active))
    );

    const expectedObjectTypes = [
      ...new Set(
        result.current.entries.flatMap((e) =>
          e.ontology.objectTypes.map((t) => t.name)
        )
      ),
    ].sort((a, b) => a.localeCompare(b));
    const expectedActions = [
      ...new Set(result.current.entries.flatMap((e) => e.ontology.actions)),
    ].sort((a, b) => a.localeCompare(b));

    expect(result.current.facets.objectTypes).toEqual(expectedObjectTypes);
    expect(result.current.facets.actions).toEqual(expectedActions);
    // The Parcel link + objectSet + list fold to a single "Parcel".
    expect(result.current.facets.objectTypes).toEqual(["Parcel", "Workspace"]);
  });

  it("folds a link, object set, and list on the same type into one entry and drops Unknown", () => {
    const active = new Map<string, ComponentHookBinding[]>([
      [
        "c1",
        [
          makeBinding({
            type: "links",
            sourceObject: "Workspace:7",
            linkName: "members",
          }),
          makeBinding({
            type: "objectSet",
            baseObjectSet: "Workspace",
            operations: [],
          }),
          makeBinding({ type: "list", objectType: "Workspace" }),
          makeBinding({
            type: "object",
            objectType: "Unknown",
            primaryKey: "x",
          }),
        ],
      ],
    ]);

    const { result } = renderHook(() =>
      useComponentOntology(makeStore(active))
    );

    expect(result.current.facets.objectTypes).toEqual(["Workspace"]);
  });

  it("counts distinct action names from action bindings only, deduped across components", () => {
    const active = new Map<string, ComponentHookBinding[]>([
      [
        "c1",
        [
          makeBinding({ type: "action", actionName: "createParcel" }),
          makeBinding({ type: "action", actionName: "archiveParcel" }),
          makeBinding({ type: "list", objectType: "Parcel" }),
        ],
      ],
      ["c2", [makeBinding({ type: "action", actionName: "createParcel" })]],
    ]);

    const { result } = renderHook(() =>
      useComponentOntology(makeStore(active))
    );

    expect(result.current.facets.actions).toEqual([
      "archiveParcel",
      "createParcel",
    ]);
    const entryActions = [
      ...new Set(result.current.entries.flatMap((e) => e.ontology.actions)),
    ].sort((a, b) => a.localeCompare(b));
    expect(entryActions).toEqual(["archiveParcel", "createParcel"]);
  });

  it("yields no entries and empty facets when nothing is mounted", () => {
    const { result } = renderHook(() =>
      useComponentOntology(makeStore(new Map()))
    );

    expect(result.current.entries).toEqual([]);
    expect(result.current.facets.objectTypes).toEqual([]);
    expect(result.current.facets.actions).toEqual([]);
  });

  it("re-derives facets when the registry announces a change", () => {
    const active = new Map<string, ComponentHookBinding[]>([
      ["c1", [makeBinding({ type: "list", objectType: "Parcel" })]],
    ]);
    const { store, fireChange } = makeReactiveStore(active);

    const { result } = renderHook(() => useComponentOntology(store));
    const before = result.current.facets.objectTypes.length;

    act(() => {
      active.set("c2", [makeBinding({ type: "list", objectType: "Invoice" })]);
      fireChange();
    });

    expect(result.current.facets.objectTypes.length).toBe(before + 1);
    expect(result.current.facets.objectTypes).toContain("Invoice");
    expect(
      result.current.entries.flatMap((e) =>
        e.ontology.objectTypes.map((t) => t.name)
      )
    ).toContain("Invoice");
  });
});
