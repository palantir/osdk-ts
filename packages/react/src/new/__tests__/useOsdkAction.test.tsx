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

import type { ActionDefinition, ActionEditResponse } from "@osdk/client";
import { ActionValidationError } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { act, renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkContext2 } from "../OsdkContext2.js";
import { useOsdkAction } from "../useOsdkAction.js";

const MOCK_ACTION_DEF: ActionDefinition<never> = {
  type: "action",
  apiName: "testAction",
};

const MOCK_EDIT_RESPONSE: ActionEditResponse = {
  type: "edits",
  editedObjectTypes: [],
  addedObjects: [],
  modifiedObjects: [],
  addedLinks: [],
  deletedObjectsCount: 0,
  deletedLinksCount: 0,
};

function createMockObservableClient(
  overrides?: Partial<ObservableClient>,
): ObservableClient {
  return {
    applyAction: vi.fn().mockResolvedValue(MOCK_EDIT_RESPONSE),
    validateAction: vi.fn().mockResolvedValue({ result: "VALID" }),
    ...overrides,
  } as unknown as ObservableClient;
}

function createWrapper(observableClient: ObservableClient) {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <OsdkContext2.Provider
        value={{ client: {} as never, observableClient }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };
}

describe("useOsdkAction", () => {
  let mockObservableClient: ObservableClient;

  beforeEach(() => {
    mockObservableClient = createMockObservableClient();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("resolves with ActionEditResponse on success", async () => {
    const { result } = renderHook(
      () => useOsdkAction(MOCK_ACTION_DEF),
      { wrapper: createWrapper(mockObservableClient) },
    );

    let actionResult: ActionEditResponse | undefined;
    await act(async () => {
      actionResult = await result.current.applyAction({});
    });

    expect(actionResult).toEqual(MOCK_EDIT_RESPONSE);
    expect(result.current.data).toEqual(MOCK_EDIT_RESPONSE);
    expect(result.current.error).toBeUndefined();
  });

  it("rejects on ActionValidationError", async () => {
    const validationError = new ActionValidationError({
      result: "INVALID",
      submissionCriteria: [],
      parameters: {},
    });
    mockObservableClient = createMockObservableClient({
      applyAction: vi.fn().mockRejectedValue(validationError),
    });

    const { result } = renderHook(
      () => useOsdkAction(MOCK_ACTION_DEF),
      { wrapper: createWrapper(mockObservableClient) },
    );

    await act(async () => {
      await expect(result.current.applyAction({})).rejects.toThrow(
        validationError,
      );
    });

    expect(result.current.error?.actionValidation).toBe(validationError);
    expect(result.current.error?.unknown).toBeUndefined();
    expect(result.current.data).toBeUndefined();
  });

  it("rejects on unknown errors", async () => {
    const unknownError = new Error("Network failure");
    mockObservableClient = createMockObservableClient({
      applyAction: vi.fn().mockRejectedValue(unknownError),
    });

    const { result } = renderHook(
      () => useOsdkAction(MOCK_ACTION_DEF),
      { wrapper: createWrapper(mockObservableClient) },
    );

    await act(async () => {
      await expect(result.current.applyAction({})).rejects.toThrow(
        unknownError,
      );
    });

    expect(result.current.error?.unknown).toBe(unknownError);
    expect(result.current.error?.actionValidation).toBeUndefined();
  });

  it("sets isPending during execution", async () => {
    let resolveAction!: (value: ActionEditResponse) => void;
    const pendingPromise = new Promise<ActionEditResponse>((resolve) => {
      resolveAction = resolve;
    });
    mockObservableClient = createMockObservableClient({
      applyAction: vi.fn().mockReturnValue(pendingPromise),
    });

    const { result } = renderHook(
      () => useOsdkAction(MOCK_ACTION_DEF),
      { wrapper: createWrapper(mockObservableClient) },
    );

    expect(result.current.isPending).toBe(false);

    let applyPromise: Promise<ActionEditResponse | undefined>;
    act(() => {
      applyPromise = result.current.applyAction({});
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await act(async () => {
      resolveAction(MOCK_EDIT_RESPONSE);
      await applyPromise;
    });

    expect(result.current.isPending).toBe(false);
  });

  it("clears error on new applyAction call", async () => {
    const error = new Error("first failure");
    const applyActionMock = vi.fn()
      .mockRejectedValueOnce(error)
      .mockResolvedValueOnce(MOCK_EDIT_RESPONSE);
    mockObservableClient = createMockObservableClient({
      applyAction: applyActionMock,
    });

    const { result } = renderHook(
      () => useOsdkAction(MOCK_ACTION_DEF),
      { wrapper: createWrapper(mockObservableClient) },
    );

    // First call fails
    await act(async () => {
      await expect(result.current.applyAction({})).rejects.toThrow(error);
    });
    expect(result.current.error?.unknown).toBe(error);

    // Second call succeeds and clears error
    await act(async () => {
      await result.current.applyAction({});
    });
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toEqual(MOCK_EDIT_RESPONSE);
  });

  describe("batch actions", () => {
    it("resolves with ActionEditResponse for batch calls", async () => {
      const { result } = renderHook(
        () => useOsdkAction(MOCK_ACTION_DEF),
        { wrapper: createWrapper(mockObservableClient) },
      );

      let actionResult: ActionEditResponse | undefined;
      await act(async () => {
        actionResult = await result.current.applyAction([{}, {}]);
      });

      expect(actionResult).toEqual(MOCK_EDIT_RESPONSE);
      expect(result.current.data).toEqual(MOCK_EDIT_RESPONSE);
    });

    it("rejects for batch calls on error", async () => {
      const error = new Error("batch failed");
      mockObservableClient = createMockObservableClient({
        applyAction: vi.fn().mockRejectedValue(error),
      });

      const { result } = renderHook(
        () => useOsdkAction(MOCK_ACTION_DEF),
        { wrapper: createWrapper(mockObservableClient) },
      );

      await act(async () => {
        await expect(result.current.applyAction([{}, {}])).rejects.toThrow(
          error,
        );
      });

      expect(result.current.error?.unknown).toBe(error);
    });
  });
});
