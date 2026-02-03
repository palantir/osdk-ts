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

import type { ActionDefinition, ObjectTypeDefinition, Osdk } from "@osdk/api";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { act, renderHook, waitFor } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkAction } from "../src/new/useOsdkAction.js";

const MockActionDef: ActionDefinition<any> = {
  type: "action",
  apiName: "mockAction",
  parameters: {},
  modifiedEntities: {},
  opiVersion: undefined,
};

const MockObjectType: ObjectTypeDefinition = {
  type: "object",
  apiName: "MockObject",
  primaryKeyApiName: "id",
  primaryKeyType: "string",
  properties: {},
  links: {},
};

const AnotherObjectType: ObjectTypeDefinition = {
  type: "object",
  apiName: "AnotherObject",
  primaryKeyApiName: "id",
  primaryKeyType: "string",
  properties: {},
  links: {},
};

describe("useOsdkAction", () => {
  const mockApplyAction = vitest.fn();
  const mockValidateAction = vitest.fn();

  const createWrapper = () => {
    const observableClient: Partial<ObservableClient> = {
      applyAction: mockApplyAction,
      validateAction: mockValidateAction,
    };

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider
        value={{ observableClient: observableClient as ObservableClient }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockApplyAction.mockClear();
    mockValidateAction.mockClear();
    mockApplyAction.mockResolvedValue({ type: "edits" });
    mockValidateAction.mockResolvedValue({ result: "VALID" });
  });

  it("should call applyAction with $dependsOn and $dependsOnObjects for single call", async () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useOsdkAction(MockActionDef), {
      wrapper,
    });

    const mockObject: Osdk.Instance<ObjectTypeDefinition> = {
      $apiName: "MockObject",
      $primaryKey: "pk-123",
      $objectType: "MockObject",
      $title: "Mock Object",
    };

    await act(async () => {
      await result.current.applyAction({
        someParam: "value",
        $dependsOn: [MockObjectType],
        $dependsOnObjects: [mockObject],
      });
    });

    expect(mockApplyAction).toHaveBeenCalledTimes(1);
    expect(mockApplyAction).toHaveBeenCalledWith(
      MockActionDef,
      { someParam: "value" },
      expect.objectContaining({
        dependsOn: [MockObjectType],
        dependsOnObjects: [mockObject],
      }),
    );
  });

  it("should call applyAction with $dependsOn using string api name", async () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useOsdkAction(MockActionDef), {
      wrapper,
    });

    await act(async () => {
      await result.current.applyAction({
        someParam: "value",
        $dependsOn: ["MockObject", "AnotherObject"],
      });
    });

    expect(mockApplyAction).toHaveBeenCalledTimes(1);
    expect(mockApplyAction).toHaveBeenCalledWith(
      MockActionDef,
      { someParam: "value" },
      expect.objectContaining({
        dependsOn: ["MockObject", "AnotherObject"],
      }),
    );
  });

  it("should merge $dependsOn and $dependsOnObjects for batch calls", async () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useOsdkAction(MockActionDef), {
      wrapper,
    });

    const mockObject1: Osdk.Instance<ObjectTypeDefinition> = {
      $apiName: "MockObject",
      $primaryKey: "pk-1",
      $objectType: "MockObject",
      $title: "Object 1",
    };

    const mockObject2: Osdk.Instance<ObjectTypeDefinition> = {
      $apiName: "MockObject",
      $primaryKey: "pk-2",
      $objectType: "MockObject",
      $title: "Object 2",
    };

    await act(async () => {
      await result.current.applyAction([
        {
          someParam: "value1",
          $dependsOn: [MockObjectType],
          $dependsOnObjects: [mockObject1],
        },
        {
          someParam: "value2",
          $dependsOn: [AnotherObjectType],
          $dependsOnObjects: [mockObject2],
        },
      ]);
    });

    expect(mockApplyAction).toHaveBeenCalledTimes(1);
    expect(mockApplyAction).toHaveBeenCalledWith(
      MockActionDef,
      [{ someParam: "value1" }, { someParam: "value2" }],
      expect.objectContaining({
        dependsOn: [MockObjectType, AnotherObjectType],
        dependsOnObjects: [mockObject1, mockObject2],
      }),
    );
  });

  it("should not include dependsOn/dependsOnObjects when not provided", async () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useOsdkAction(MockActionDef), {
      wrapper,
    });

    await act(async () => {
      await result.current.applyAction({ someParam: "value" });
    });

    expect(mockApplyAction).toHaveBeenCalledTimes(1);
    const callArgs = mockApplyAction.mock.calls[0];
    const options = callArgs[2];
    expect(options.dependsOn).toBeUndefined();
    expect(options.dependsOnObjects).toBeUndefined();
  });

  it("should return undefined for merged dependencies when batch has no dependencies", async () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useOsdkAction(MockActionDef), {
      wrapper,
    });

    await act(async () => {
      await result.current.applyAction([
        { someParam: "value1" },
        { someParam: "value2" },
      ]);
    });

    expect(mockApplyAction).toHaveBeenCalledTimes(1);
    const callArgs = mockApplyAction.mock.calls[0];
    const options = callArgs[2];
    expect(options.dependsOn).toBeUndefined();
    expect(options.dependsOnObjects).toBeUndefined();
  });

  it("should omit empty dependsOnObjects from options", async () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useOsdkAction(MockActionDef), {
      wrapper,
    });

    await act(async () => {
      await result.current.applyAction({
        someParam: "value",
        $dependsOn: [MockObjectType],
        $dependsOnObjects: [],
      });
    });

    expect(mockApplyAction).toHaveBeenCalledTimes(1);
    const callArgs = mockApplyAction.mock.calls[0];
    const options = callArgs[2];
    expect(options.dependsOn).toEqual([MockObjectType]);
    expect(options).not.toHaveProperty("dependsOnObjects");
  });

  it("should set isPending while action is in progress", async () => {
    const wrapper = createWrapper();

    let resolveAction: (value: unknown) => void;
    mockApplyAction.mockImplementation(
      () =>
        new Promise(resolve => {
          resolveAction = resolve;
        }),
    );

    const { result } = renderHook(() => useOsdkAction(MockActionDef), {
      wrapper,
    });

    expect(result.current.isPending).toBe(false);

    let actionPromise: Promise<unknown>;
    act(() => {
      actionPromise = result.current.applyAction({ someParam: "value" });
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await act(async () => {
      resolveAction!({ type: "edits" });
      await actionPromise;
    });

    expect(result.current.isPending).toBe(false);
  });
});
