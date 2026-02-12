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

import { createNamespace, destroyNamespace } from "cls-hooked";
import { afterEach, describe, expect, it } from "vitest";
import { getFoundryToken } from "./getFoundryToken.js";

const FUNCTIONS_NAMESPACE = "functions-typescript-runtime";

describe("getFoundryToken", () => {
  afterEach(() => {
    try {
      destroyNamespace(FUNCTIONS_NAMESPACE);
    } catch {
      // namespace may not exist
    }
  });

  it("returns the token from the runtime namespace", () => {
    const ns = createNamespace(FUNCTIONS_NAMESPACE);
    ns.run(() => {
      ns.set("FOUNDRY_TOKEN", "test-token-123");
      expect(getFoundryToken({ preview: true })).toBe("test-token-123");
    });
  });

  it("throws when the namespace does not exist", () => {
    expect(() => getFoundryToken({ preview: true })).toThrow(
      `Function runtime namespace "${FUNCTIONS_NAMESPACE}" is not available`,
    );
  });

  it("throws when the token is not set in the namespace", () => {
    const ns = createNamespace(FUNCTIONS_NAMESPACE);
    ns.run(() => {
      expect(() => getFoundryToken({ preview: true })).toThrow(
        "FOUNDRY_TOKEN is not available in the function runtime namespace",
      );
    });
  });

  it("throws when preview is not true", () => {
    expect(() =>
      getFoundryToken({ preview: false } as unknown as { preview: true })
    ).toThrow(
      "This API is in preview. You must pass { preview: true } to use it.",
    );
  });
});
