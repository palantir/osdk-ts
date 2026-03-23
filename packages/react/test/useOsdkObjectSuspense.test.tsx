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

import type { ObjectTypeDefinition } from "@osdk/api";
import type { Observer } from "@osdk/client/unstable-do-not-use";
import { act, render, screen } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vitest } from "vitest";
import { useOsdkObject } from "../src/new/useOsdkObject.js";
import {
  cleanupSuspenseTests,
  createMockObservableClient,
  mockObjectPayload,
  TestSuspenseWrapper,
} from "./suspenseTestUtils.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

describe("useOsdkObject with { suspense: true }", () => {
  let mockObserveObject: ReturnType<typeof vitest.fn>;
  let capturedObserver:
    | Observer<Record<string, unknown> | undefined>
    | undefined;
  let mockPeekObjectData: ReturnType<typeof vitest.fn>;

  beforeEach(() => {
    capturedObserver = undefined;
    mockObserveObject = vitest.fn(
      (
        _type: unknown,
        _pk: unknown,
        _opts: unknown,
        observer: Observer<Record<string, unknown> | undefined>,
      ) => {
        capturedObserver = observer;
        return { unsubscribe: vitest.fn() };
      },
    );
    mockPeekObjectData = vitest.fn(() => undefined);
  });

  afterEach(cleanupSuspenseTests);

  function createObservableClient() {
    return createMockObservableClient({
      observeObject: mockObserveObject,
      peekObjectData: mockPeekObjectData,
    });
  }

  function ObjectComponent({ pk }: { pk: string }) {
    const { object } = useOsdkObject(MockObjectType, pk, { suspense: true });
    return React.createElement(
      "div",
      { "data-testid": "object" },
      (object as Record<string, unknown>).name as string,
    );
  }

  it("should render object data after loading completes", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    expect(screen.getByTestId("loading")).toBeDefined();

    act(() => {
      capturedObserver?.next(mockObjectPayload("Test Object", "pk-1"));
    });

    const el = await screen.findByTestId("object");
    expect(el.textContent).toBe("Test Object");
  });

  it("should show error boundary when error occurs", async () => {
    const client = createObservableClient();

    render(
      React.createElement(
        TestSuspenseWrapper,
        { observableClient: client },
        React.createElement(ObjectComponent, { pk: "pk-1" }),
      ),
    );

    act(() => {
      capturedObserver?.error(new Error("Network failure"));
    });

    const el = await screen.findByTestId("error");
    expect(el.textContent).toBe("Network failure");
  });
});
