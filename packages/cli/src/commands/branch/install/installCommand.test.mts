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

import { afterEach, describe, expect, it, vi } from "vitest";

import type { InstallArgs } from "./InstallArgs.js";
import installCommand, { type InstallDeps } from "./installCommand.mjs";

vi.mock("find-up", () => ({
  findUp: vi.fn(() => "/repo/package.json"),
}));

function args(over: Partial<InstallArgs> = {}): InstallArgs {
  return {
    verbose: 0,
    branchName: undefined,
    packageName: undefined,
    dryRun: false,
    ...over,
  };
}

function deps(over: Partial<InstallDeps> = {}): InstallDeps {
  return {
    getGitBranch: vi.fn().mockResolvedValue("my-feature"),
    npmDistTags: vi.fn().mockResolvedValue({
      latest: "0.3.0",
      "my-feature-latest": "0.3.0-20260609",
    }),
    npmInstall: vi.fn().mockResolvedValue(undefined),
    readFile: vi.fn(async (p: string) =>
      p.endsWith("package.json")
        ? JSON.stringify({ dependencies: { "@my-app/sdk": "^0.3.0" } })
        : ""
    ),
    cwd: "/repo",
    ...over,
  };
}

describe("installCommand", () => {
  afterEach(() => vi.clearAllMocks());

  it("installs out-of-sync branched SDKs with a single pinned specs array", async () => {
    const d = deps();
    await installCommand(args(), d);
    expect(d.npmInstall).toHaveBeenCalledTimes(1);
    expect(d.npmInstall).toHaveBeenCalledWith([
      { pkg: "@my-app/sdk", version: "0.3.0-20260609" },
    ]);
  });

  it("does not install under --dryRun", async () => {
    const d = deps();
    await installCommand(args({ dryRun: true }), d);
    expect(d.npmInstall).not.toHaveBeenCalled();
  });

  it("maps an npm install failure to an ExitProcessError with the underlying detail", async () => {
    const failure = Object.assign(new Error("boom"), {
      stderr: "npm error code E500",
    });
    const d = deps({ npmInstall: vi.fn().mockRejectedValue(failure) });
    await expect(installCommand(args(), d)).rejects.toThrow(
      /Failed to install 1 branched SDK/i
    );
  });
});
