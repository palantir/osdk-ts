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

import { describe, expect, it } from "vitest";

import { cli } from "./cli.js";

describe(cli, () => {
  it("requires the generate command", async () => {
    await expect(cli([])).rejects.toThrow("Expected generate command");
  });

  it("requires a configuration path", () => {
    expect(() => cli(["generate"])).toThrow("Missing --config");
  });

  it("exposes the unimplemented generate command", async () => {
    await expect(cli(["generate", "--config", "sdk.yml"])).rejects.toThrow(
      "Platform SDK generation is not implemented yet",
    );
  });
});
