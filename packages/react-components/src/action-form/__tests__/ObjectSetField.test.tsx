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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ObjectSetField } from "../fields/ObjectSetField.js";

vi.mock("@osdk/react/experimental", () => ({
  useObjectSet: vi.fn(),
}));

vi.mock("@osdk/react", () => ({
  useOsdkMetadata: vi.fn(),
}));

const { useObjectSet } = await import("@osdk/react/experimental");
const { useOsdkMetadata } = await import("@osdk/react");

const mockUseObjectSet = vi.mocked(useObjectSet);
const mockUseOsdkMetadata = vi.mocked(useOsdkMetadata);

const TestObjectType: ObjectTypeDefinition = {
  type: "object",
  apiName: "Employee",
};

function createMockObjectSet(): ObjectSet<ObjectTypeDefinition> {
  return {
    $objectSetInternals: { def: TestObjectType },
  } as ObjectSet<ObjectTypeDefinition>;
}

afterEach(cleanup);

describe("ObjectSetField", () => {
  describe("null value", () => {
    it("renders empty state when value is null", () => {
      render(<ObjectSetField value={null} />);
      expect(screen.getByText("No objects selected")).toBeDefined();
    });

    it("passes id to the empty state element", () => {
      render(<ObjectSetField id="my-field" value={null} />);
      const el = document.getElementById("my-field");
      expect(el).not.toBeNull();
      expect(el?.textContent).toBe("No objects selected");
    });
  });

  describe("with object set value", () => {
    it("renders loading state while fetching", () => {
      mockUseOsdkMetadata.mockReturnValue({
        loading: true,
      });
      mockUseObjectSet.mockReturnValue({
        data: undefined,
        isLoading: true,
        error: undefined,
        fetchMore: undefined,
        objectSet: createMockObjectSet(),
      });

      const { container } = render(
        <ObjectSetField value={createMockObjectSet()} />,
      );
      const skeletons = container.querySelectorAll("[aria-hidden='true']");
      expect(skeletons.length).toBeGreaterThan(0);
    });

    it("renders count and plural display name from metadata", () => {
      mockUseOsdkMetadata.mockReturnValue({
        loading: false,
        metadata: {
          type: "object",
          apiName: "Employee",
          displayName: "Employee",
          pluralDisplayName: "Employees",
          description: "An employee",
          properties: {},
          rid: "rid.a.b.c",
          primaryKeyApiName: "id",
          titleProperty: "name",
          links: {},
          primaryKeyType: "string",
          icon: { type: "blueprint", name: "person", color: "#000" },
          visibility: undefined,
          status: "ACTIVE",
          interfaceMap: {},
          inverseInterfaceMap: {},
        },
      });
      mockUseObjectSet.mockReturnValue({
        data: [],
        isLoading: false,
        error: undefined,
        fetchMore: undefined,
        objectSet: createMockObjectSet(),
        totalCount: "42",
      });

      render(<ObjectSetField value={createMockObjectSet()} />);
      expect(screen.getByText("42 Employees")).toBeDefined();
    });

    it("renders dash when totalCount is undefined", () => {
      mockUseOsdkMetadata.mockReturnValue({
        loading: false,
        metadata: {
          type: "object",
          apiName: "Employee",
          displayName: "Employee",
          pluralDisplayName: "Employees",
          description: undefined,
          properties: {},
          rid: "rid.a.b.c",
          primaryKeyApiName: "id",
          titleProperty: "name",
          links: {},
          primaryKeyType: "string",
          icon: undefined,
          visibility: undefined,
          status: undefined,
          interfaceMap: {},
          inverseInterfaceMap: {},
        },
      });
      mockUseObjectSet.mockReturnValue({
        data: [],
        isLoading: false,
        error: undefined,
        fetchMore: undefined,
        objectSet: createMockObjectSet(),
      });

      render(<ObjectSetField value={createMockObjectSet()} />);
      expect(screen.getByText("\u2013 Employees")).toBeDefined();
    });

    it("passes id to the content element", () => {
      mockUseOsdkMetadata.mockReturnValue({ loading: true });
      mockUseObjectSet.mockReturnValue({
        data: undefined,
        isLoading: true,
        error: undefined,
        fetchMore: undefined,
        objectSet: createMockObjectSet(),
      });

      render(<ObjectSetField id="obj-set" value={createMockObjectSet()} />);
      expect(document.getElementById("obj-set")).not.toBeNull();
    });

    it("falls back to 'objects' when metadata has no pluralDisplayName", () => {
      mockUseOsdkMetadata.mockReturnValue({
        loading: false,
        metadata: undefined,
      });
      mockUseObjectSet.mockReturnValue({
        data: [],
        isLoading: false,
        error: undefined,
        fetchMore: undefined,
        objectSet: createMockObjectSet(),
        totalCount: "10",
      });

      render(<ObjectSetField value={createMockObjectSet()} />);
      expect(screen.getByText("10 objects")).toBeDefined();
    });
  });
});
