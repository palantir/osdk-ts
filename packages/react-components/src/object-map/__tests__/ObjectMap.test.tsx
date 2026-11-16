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

import type {
  ObjectMetadata,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import { createClient, getWireObjectSet } from "@osdk/client";
import { useObjectSet, useOsdkClient, useOsdkMetadata } from "@osdk/react";
import { act, cleanup, render } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BaseObjectMap } from "../BaseObjectMap.js";
import type { BaseObjectMapProps } from "../BaseObjectMapApi.js";
import { ObjectMap } from "../ObjectMap.js";
import { objectMapFeatureId } from "../utils/objectMapGeometry.js";

const Office: ObjectTypeDefinition = { type: "object", apiName: "Office" };
const client = createClient(
  "https://example.invalid",
  "ri.ontology.main.ontology.test",
  () => Promise.resolve("test"),
);
const officeSet = client(Office);
const fetchMore = vi.fn<() => Promise<void>>().mockResolvedValue(undefined);
const refetch = vi.fn<() => Promise<void>>().mockResolvedValue(undefined);

vi.mock("@osdk/react", () => ({
  useObjectSet: vi.fn(),
  useOsdkMetadata: vi.fn(),
  useOsdkClient: vi.fn(() => client),
}));
vi.mock("../BaseObjectMap.js", () => ({
  BaseObjectMap: vi.fn((_props: BaseObjectMapProps) => null),
}));

function metadata(properties: ObjectMetadata["properties"]): ObjectMetadata {
  return {
    type: "object",
    apiName: "Office",
    displayName: "Office",
    pluralDisplayName: "Offices",
    description: undefined,
    properties,
    rid: "ri.ontology.main.object-type.office",
    primaryKeyApiName: "id",
    primaryKeyType: "string",
    titleProperty: "name",
    links: {},
    icon: undefined,
    status: undefined,
    visibility: undefined,
    interfaceMap: {},
    inverseInterfaceMap: {},
  };
}

function office(
  key: string | number,
  location: unknown,
): Osdk.Instance<ObjectTypeDefinition> {
  // Match the OSDK-object test fixtures used by useObjectTableData and useRowSelection.
  return {
    $primaryKey: key,
    $title: `Office ${key}`,
    $objectType: "Office",
    location,
  } as unknown as Osdk.Instance<ObjectTypeDefinition>;
}

function setResult(
  data: Osdk.Instance<ObjectTypeDefinition>[],
  objectSet: ObjectSet<ObjectTypeDefinition> = officeSet,
  isLoading = false,
): void {
  vi.mocked(useObjectSet).mockReturnValue({
    data,
    objectSet,
    isLoading,
    isOptimistic: false,
    hasMore: true,
    fetchMore,
    refetch,
    error: undefined,
  });
}

function baseProps(): BaseObjectMapProps {
  const call = vi.mocked(BaseObjectMap).mock.calls.at(-1);
  if (call == null) throw new Error("BaseObjectMap was not rendered");
  return call[0];
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useOsdkClient).mockReturnValue(client);
  vi.mocked(useOsdkMetadata).mockReturnValue({
    loading: false,
    metadata: metadata({ location: { type: "geopoint" } }),
  });
  setResult([office("a", { type: "Point", coordinates: [-74, 40] })]);
});
afterEach(cleanup);

describe("ObjectMap", () => {
  it("derives the sole geometry property and keeps typed keys and omitted counts", () => {
    const numeric = office(1, { type: "Point", coordinates: [0, 0] });
    const string = office("1", { type: "Point", coordinates: [1, 1] });
    setResult([
      numeric,
      string,
      office("missing", undefined),
      office("invalid", { type: "Point", coordinates: [0, 200] }),
    ]);
    const onSelectionChanged = vi.fn();
    render(
      <ObjectMap
        objectType={Office}
        selectedObjectKeys={[1]}
        onSelectionChanged={onSelectionChanged}
      />,
    );
    const props = baseProps();
    expect(props.features.map((feature) => feature.id)).toEqual([
      objectMapFeatureId(1),
      objectMapFeatureId("1"),
    ]);
    expect(props.omittedObjectCount).toBe(2);
    expect(props.selectedIds).toEqual([objectMapFeatureId(1)]);
    props.onSelectionChanged?.([objectMapFeatureId("1")]);
    expect(onSelectionChanged).toHaveBeenLastCalledWith([string]);
    expect(onSelectionChanged.mock.calls[0][0][0]).toBe(string);
    props.onSelectionChanged?.([]);
    expect(onSelectionChanged).toHaveBeenLastCalledWith([]);
  });

  it("applies filters to the supplied object set and requests pages explicitly", async () => {
    const objectSet = officeSet.where({ name: "London" });
    const filter = { id: { $in: ["a"] } };
    const query = objectSet.where(filter);
    setResult([], query);
    render(
      <ObjectMap objectType={Office} objectSet={objectSet} filter={filter} />,
    );
    const call = vi.mocked(useObjectSet).mock.calls.at(-1);
    expect(call?.[0] && getWireObjectSet(call[0])).toEqual(
      getWireObjectSet(query),
    );
    expect(call?.[1]).toEqual({ enabled: true, pageSize: 100 });
    expect(baseProps().hasMore).toBe(true);
    expect(fetchMore).not.toHaveBeenCalled();
    await act(async () => {
      baseProps().onLoadMore?.();
      await fetchMore.mock.results.at(-1)?.value;
    });
    expect(fetchMore).toHaveBeenCalledOnce();
  });

  it("keeps current-query data during refresh and hides a previous filter's result", () => {
    const rows = [office("a", { type: "Point", coordinates: [-74, 40] })];
    const { rerender } = render(<ObjectMap objectType={Office} />);
    setResult(rows, officeSet, true);
    rerender(<ObjectMap objectType={Office} />);
    expect(baseProps().features).toHaveLength(1);
    expect(baseProps().isLoading).toBe(true);
    const filter = { name: "Paris" };
    rerender(<ObjectMap objectType={Office} filter={filter} />);
    expect(baseProps().features).toHaveLength(0);
    expect(baseProps().hasMore).toBe(false);
    setResult(rows, officeSet.where(filter));
    rerender(<ObjectMap objectType={Office} filter={filter} />);
    expect(baseProps().features).toHaveLength(1);
  });

  it("keeps previously loaded geometry visible when a refresh fails", () => {
    const { rerender } = render(<ObjectMap objectType={Office} />);
    vi.mocked(useObjectSet).mockReturnValue({
      data: undefined,
      objectSet: officeSet,
      isLoading: false,
      isOptimistic: false,
      hasMore: false,
      fetchMore: undefined,
      refetch,
      error: new Error("Refresh failed"),
    });
    rerender(<ObjectMap objectType={Office} />);
    expect(baseProps().features).toHaveLength(1);
    expect(baseProps().error?.message).toBe("Refresh failed");
  });

  it("does not retain a previous filter's geometry when the next query fails", () => {
    const { rerender } = render(<ObjectMap objectType={Office} />);
    const filter = { name: "Paris" };
    vi.mocked(useObjectSet).mockReturnValue({
      data: undefined,
      objectSet: officeSet.where(filter),
      isLoading: false,
      isOptimistic: false,
      hasMore: false,
      fetchMore: undefined,
      refetch,
      error: new Error("Filtered query failed"),
    });
    rerender(<ObjectMap objectType={Office} filter={filter} />);
    expect(baseProps().features).toHaveLength(0);
    expect(baseProps().error?.message).toBe("Filtered query failed");
  });

  it("clears retained geometry when the provider client changes", () => {
    const { rerender } = render(<ObjectMap objectType={Office} />);
    const anotherClient = createClient(
      "https://other.example.invalid",
      "ri.ontology.main.ontology.other",
      () => Promise.resolve("test"),
    );
    vi.mocked(useOsdkClient).mockReturnValue(anotherClient);
    vi.mocked(useObjectSet).mockReturnValue({
      data: undefined,
      objectSet: undefined,
      isLoading: true,
      isOptimistic: false,
      hasMore: false,
      fetchMore: undefined,
      refetch,
      error: undefined,
    });
    rerender(<ObjectMap objectType={Office} />);
    expect(baseProps().features).toHaveLength(0);
    expect(baseProps().isLoading).toBe(true);
  });

  it("converts geoshape feature collections and forwards uncontrolled selection seeds", () => {
    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      metadata: metadata({ location: { type: "geoshape" } }),
    });
    const point = { type: "Point", coordinates: [-74, 40] };
    setResult([
      office("a", {
        type: "FeatureCollection",
        features: [{ type: "Feature", geometry: point, properties: {} }],
      }),
    ]);
    render(<ObjectMap objectType={Office} defaultSelectedObjectKeys={["a"]} />);
    expect(baseProps().features[0].geometry).toEqual({
      type: "GeometryCollection",
      geometries: [point],
    });
    expect(baseProps().selectedIds).toBeUndefined();
    expect(baseProps().defaultSelectedIds).toEqual([objectMapFeatureId("a")]);
  });

  it("requires an explicit property when geometry is ambiguous", () => {
    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      metadata: metadata({
        location: { type: "geopoint" },
        boundary: { type: "geoshape" },
      }),
    });
    const { rerender } = render(<ObjectMap objectType={Office} />);
    expect(baseProps().error?.message).toContain(
      "multiple geometry properties",
    );
    expect(baseProps().onRetry).toBeUndefined();
    expect(vi.mocked(useObjectSet).mock.calls.at(-1)?.[1]?.enabled).toBe(false);
    rerender(<ObjectMap objectType={Office} geometryProperty="location" />);
    expect(baseProps().error).toBeUndefined();
    expect(baseProps().features).toHaveLength(1);
  });

  it("reports missing or non-geometry properties and invalid page sizes", () => {
    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      metadata: metadata({ name: { type: "string" } }),
    });
    const { rerender } = render(<ObjectMap objectType={Office} />);
    expect(baseProps().error?.message).toContain(
      "no single geopoint or geoshape",
    );
    rerender(<ObjectMap objectType={Office} geometryProperty="name" />);
    expect(baseProps().error?.message).toContain(
      "must be a single geopoint or geoshape",
    );
    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      metadata: metadata({ location: { type: "geopoint" } }),
    });
    rerender(<ObjectMap objectType={Office} pageSize={0} />);
    expect(baseProps().error?.message).toBe(
      "pageSize must be a positive integer.",
    );
    expect(baseProps().onRetry).toBeUndefined();
  });

  it("renders metadata loading and errors without fetching objects early", () => {
    vi.mocked(useOsdkMetadata).mockReturnValue({ loading: true });
    const { rerender } = render(<ObjectMap objectType={Office} />);
    expect(baseProps().isLoading).toBe(true);
    expect(vi.mocked(useObjectSet).mock.calls.at(-1)?.[1]?.enabled).toBe(false);
    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      error: "Metadata unavailable",
    });
    rerender(<ObjectMap objectType={Office} />);
    expect(baseProps().error?.message).toBe("Metadata unavailable");
  });

  it("retries metadata failures by resetting the failed metadata subscription", () => {
    let metadataAvailable = false;
    vi.mocked(useOsdkMetadata).mockImplementation(function useMockMetadata() {
      // The real hook retains either its successful metadata or its first
      // error. A fresh mount is needed to issue another metadata request.
      const [result] = React.useState(() =>
        metadataAvailable
          ? {
              loading: false,
              metadata: metadata({ location: { type: "geopoint" } }),
            }
          : { loading: false, error: "Metadata unavailable" },
      );
      return result;
    });
    render(<ObjectMap objectType={Office} />);
    expect(baseProps().error?.message).toBe("Metadata unavailable");
    expect(baseProps().onRetry).toBeDefined();
    metadataAvailable = true;
    act(() => baseProps().onRetry?.());
    expect(baseProps().error).toBeUndefined();
    expect(baseProps().features).toHaveLength(1);
    expect(refetch).not.toHaveBeenCalled();
  });

  it("reports page failures and retries without an unhandled rejection", async () => {
    fetchMore.mockRejectedValueOnce(new Error("Page unavailable"));
    render(<ObjectMap objectType={Office} />);
    await act(async () => {
      baseProps().onLoadMore?.();
      await expect(fetchMore.mock.results.at(-1)?.value).rejects.toThrow(
        "Page unavailable",
      );
    });
    expect(baseProps().error?.message).toBe("Page unavailable");
    expect(baseProps().features).toHaveLength(1);
    await act(async () => {
      baseProps().onRetry?.();
      await refetch.mock.results.at(-1)?.value;
    });
    expect(refetch).toHaveBeenCalledOnce();
    expect(baseProps().error).toBeUndefined();
  });
});
