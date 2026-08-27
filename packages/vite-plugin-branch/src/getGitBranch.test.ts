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

import { execFileSync } from "node:child_process";
import { mkdtempSync, realpathSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterAll, describe, expect, it } from "vitest";

import { getGitBranch } from "./getGitBranch.js";

const tempDirs: string[] = [];

function makeTempDir(): string {
  const dir = mkdtempSync(
    path.join(realpathSync(tmpdir()), "osdk-git-branch-"),
  );
  tempDirs.push(dir);
  return dir;
}

afterAll(() => {
  for (const dir of tempDirs) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe(getGitBranch, () => {
  it("reads the branch of a repository", async () => {
    const dir = makeTempDir();
    execFileSync("git", ["init", "--initial-branch", "zka/some-branch"], {
      cwd: dir,
      stdio: "ignore",
    });

    await expect(getGitBranch(dir)).resolves.toBe("zka/some-branch");
  });

  it("returns undefined outside a repository", async () => {
    await expect(getGitBranch(makeTempDir())).resolves.toBeUndefined();
  });

  it("returns undefined for a directory that does not exist", async () => {
    await expect(
      getGitBranch(path.join(makeTempDir(), "nope")),
    ).resolves.toBeUndefined();
  });
});
