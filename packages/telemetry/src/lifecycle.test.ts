/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expect, it, vi } from "vitest";
import { registerLifecycle } from "./lifecycle.js";

describe("registerLifecycle", () => {
  it("invokes the handler on pagehide", () => {
    const target = new EventTarget();
    const onUnload = vi.fn();
    registerLifecycle(onUnload, target);

    target.dispatchEvent(new Event("pagehide"));
    expect(onUnload).toHaveBeenCalledTimes(1);
  });

  it("stops invoking the handler after unregister", () => {
    const target = new EventTarget();
    const onUnload = vi.fn();
    const lifecycle = registerLifecycle(onUnload, target);

    lifecycle.unregister();
    target.dispatchEvent(new Event("pagehide"));
    expect(onUnload).not.toHaveBeenCalled();
  });

  it("is a no-op when no target is available", () => {
    const onUnload = vi.fn();
    const lifecycle = registerLifecycle(onUnload, undefined);
    expect(() => lifecycle.unregister()).not.toThrow();
    expect(onUnload).not.toHaveBeenCalled();
  });
});
