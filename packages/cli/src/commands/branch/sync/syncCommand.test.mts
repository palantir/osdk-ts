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

import resolvePackagePath from "resolve-package-path";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { SyncArgs } from "./SyncArgs.js";
import syncCommand, { type SyncDeps } from "./syncCommand.mjs";

vi.mock("find-up", () => ({ findUp: vi.fn(() => "/repo/package.json") }));
vi.mock("resolve-package-path");

function args(over: Partial<SyncArgs> = {}): SyncArgs {
  return {
    verbose: 0,
    branchName: undefined,
    packageName: undefined,
    dryRun: false,
    ...over,
  };
}

/**
 * Build injected deps. `installed` is the SDK's installed package.json (its
 * `osdk` block drives discovery); `declared` is the root dependency spec.
 */
function deps(
  installed: Record<string, unknown>,
  declared: string,
  over: Partial<SyncDeps> = {}
): SyncDeps {
  const files: Record<string, unknown> = {
    "/repo/package.json": { dependencies: { "@my-app/sdk": declared } },
    "/repo/node_modules/@my-app/sdk/package.json": installed,
  };
  vi.mocked(resolvePackagePath).mockImplementation((name: string) =>
    name === "@my-app/sdk"
      ? "/repo/node_modules/@my-app/sdk/package.json"
      : null
  );
  return {
    cwd: "/repo",
    readFile: vi.fn((p: string) =>
      Promise.resolve(JSON.stringify(files[p] ?? {}))
    ),
    getGitBranch: vi.fn().mockResolvedValue("my-feature"),
    npmDistTags: vi.fn().mockResolvedValue({
      latest: "0.3.0",
      "my-feature-latest": "0.3.0-20260609",
    }),
    npmInstall: vi.fn().mockResolvedValue(undefined),
    ...over,
  };
}

const stableBuild = {
  name: "@my-app/sdk",
  version: "0.3.0",
  osdk: {},
};
const branchBuild = {
  name: "@my-app/sdk",
  version: "0.3.0-20260609",
  osdk: { branch: "ri.branch..branch.abc" },
};

describe("syncCommand", () => {
  afterEach(() => vi.clearAllMocks());

  it("on a branch, pins an SDK with a branch release to the branch build", async () => {
    const d = deps(stableBuild, "^0.3.0");
    await syncCommand(args(), d);
    expect(d.npmInstall).toHaveBeenCalledWith([
      { pkg: "@my-app/sdk", version: "0.3.0-20260609" },
    ]);
  });

  it("off a branch (main), resets a currently-branched SDK to stable latest", async () => {
    const d = deps(branchBuild, "0.3.0-20260609", {
      getGitBranch: vi.fn().mockResolvedValue("main"),
    });
    await syncCommand(args(), d);
    expect(d.npmInstall).toHaveBeenCalledWith([
      { pkg: "@my-app/sdk", version: "0.3.0" },
    ]);
  });

  it("off a branch (main), leaves a pure-stable SDK untouched", async () => {
    const d = deps(stableBuild, "0.3.0", {
      getGitBranch: vi.fn().mockResolvedValue("main"),
    });
    await syncCommand(args(), d);
    expect(d.npmInstall).not.toHaveBeenCalled();
  });

  it("on a branch with no build published, leaves a branched SDK untouched (never resets while on a branch)", async () => {
    const d = deps(branchBuild, "0.3.0-20260609", {
      getGitBranch: vi.fn().mockResolvedValue("other-feature"),
      npmDistTags: vi.fn().mockResolvedValue({ latest: "0.3.0" }),
    });
    await syncCommand(args(), d);
    expect(d.npmInstall).not.toHaveBeenCalled();
  });

  it("does not install under --dryRun", async () => {
    const d = deps(stableBuild, "^0.3.0");
    await syncCommand(args({ dryRun: true }), d);
    expect(d.npmInstall).not.toHaveBeenCalled();
  });

  it("maps an npm install failure to an ExitProcessError with the underlying detail", async () => {
    const d = deps(stableBuild, "^0.3.0", {
      npmInstall: vi
        .fn()
        .mockRejectedValue(
          Object.assign(new Error("boom"), { stderr: "npm error code E500" })
        ),
    });
    await expect(syncCommand(args(), d)).rejects.toThrow(
      /Failed to install 1 SDK/iu
    );
  });
});
