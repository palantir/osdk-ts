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

import type {
  DerivedProperty,
  ObjectTypeDefinition,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { ColumnDefinition } from "../../ObjectTableApi.js";
import { useColumnVisibility } from "../useColumnVisibility.js";

const TestObjectType = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TestObjectType;
type TestObjectKeys = PropertyKeys<TestObject>;

describe(useColumnVisibility, () => {
  it("returns undefined columnVisibility when no columnDefinitions provided", () => {
    const { result } = renderHook(() =>
      useColumnVisibility({
        columnDefinitions: undefined,
      })
    );

    expect(result.current).toBeUndefined();
  });

  it("returns empty columnVisibility when columnDefinitions have no isVisible properties", () => {
    const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
      },
      {
        locator: { type: "property", id: "email" as TestObjectKeys },
      },
    ];

    const { result } = renderHook(() =>
      useColumnVisibility({
        columnDefinitions,
      })
    );

    expect(result.current).toEqual({});
  });

  it("handles mixed column types with different visibility states", async () => {
    const mockRdpCreator = (() => ({})) as unknown as DerivedProperty.Creator<
      TestObject,
      SimplePropertyDef
    >;

    const columnDefinitions: Array<
      ColumnDefinition<
        TestObject,
        { myRdp: SimplePropertyDef },
        { myFunction: QueryDefinition<{}> }
      >
    > = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
        isVisible: true,
      },
      {
        locator: { type: "function", id: "myFunction" },
        isVisible: false,
      },
      {
        locator: { type: "rdp", id: "myRdp", creator: mockRdpCreator },
        isVisible: true,
      },
      {
        locator: { type: "property", id: "email" as TestObjectKeys },
      },
    ];

    const { result } = renderHook(() =>
      useColumnVisibility({
        columnDefinitions,
      })
    );

    await waitFor(() => {
      expect(result.current).toEqual({
        name: true,
        myFunction: false,
        myRdp: true,
      });
    });
  });

  it("updates columnVisibility when columnDefinitions change", async () => {
    const initialColumnDefinitions: Array<
      ColumnDefinition<TestObject, {}, {}>
    > = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
        isVisible: true,
      },
    ];

    const { result, rerender } = renderHook(
      ({ columnDefinitions }) =>
        useColumnVisibility({
          columnDefinitions,
        }),
      {
        initialProps: { columnDefinitions: initialColumnDefinitions },
      },
    );

    await waitFor(() => {
      expect(result.current).toEqual({
        name: true,
      });
    });

    const updatedColumnDefinitions: Array<
      ColumnDefinition<TestObject, {}, {}>
    > = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
        isVisible: false,
      },
      {
        locator: { type: "property", id: "email" as TestObjectKeys },
        isVisible: true,
      },
    ];

    rerender({ columnDefinitions: updatedColumnDefinitions });

    await waitFor(() => {
      expect(result.current).toEqual({
        name: false,
        email: true,
      });
    });
  });

  it("only includes columns with explicit isVisible in the visibility state", async () => {
    const columnDefinitions: Array<ColumnDefinition<TestObject, {}, {}>> = [
      {
        locator: { type: "property", id: "name" as TestObjectKeys },
        isVisible: true,
      },
      {
        locator: { type: "property", id: "email" as TestObjectKeys },
      },
      {
        locator: { type: "property", id: "age" as TestObjectKeys },
        isVisible: false,
      },
      {
        locator: { type: "property", id: "id" as TestObjectKeys },
      },
    ];

    const { result } = renderHook(() =>
      useColumnVisibility({
        columnDefinitions,
      })
    );

    await waitFor(() => {
      expect(result.current).toEqual({
        name: true,
        age: false,
      });
    });

    // Verify that columns without isVisible are not in the state
    expect(result.current).not.toHaveProperty("email");
    expect(result.current).not.toHaveProperty("id");
  });
});
