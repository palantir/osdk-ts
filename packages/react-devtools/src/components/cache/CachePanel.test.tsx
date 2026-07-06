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

import { cleanup, render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

import { createMockMonitorStore } from "../testHelpers.js";
import { CachePanel } from "./CachePanel.js";

afterEach(() => {
  cleanup();
});

describe("CachePanel", () => {
  it("mounts the cache split view with a stub store", () => {
    const store = createMockMonitorStore();
    const { container } = render(<CachePanel monitorStore={store} />);
    expect(container.firstChild).not.toBeNull();
  });
});
