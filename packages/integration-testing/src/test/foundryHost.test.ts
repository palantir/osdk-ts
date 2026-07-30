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

import { execFile } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { resolveFoundryHost } from "../scripts/foundry-host.js";

const execFileAsync = promisify(execFile);

/**
 * An environment with nothing Foundry-ish in it. `resolveFoundryHost` reads
 * `options.env` rather than `process.env`, so each case supplies exactly the
 * variables it is about.
 */
const EMPTY_ENV: NodeJS.ProcessEnv = {};

describe("resolveFoundryHost", () => {
  let repoDir: string;

  beforeEach(async () => {
    repoDir = await mkdtemp(join(tmpdir(), "osdk-host-"));
  });

  afterEach(async () => {
    await rm(repoDir, { recursive: true, force: true });
  });

  /** A git repo whose `origin` is `remote`, for the fallback path. */
  const repoWithRemote = async (remote: string): Promise<string> => {
    await execFileAsync("git", ["init", "--quiet"], { cwd: repoDir });
    await execFileAsync("git", ["remote", "add", "origin", remote], {
      cwd: repoDir,
    });
    return repoDir;
  };

  describe("FOUNDRY_EXTERNAL_HOST", () => {
    it.each([
      // A bare hostname is the natural value for a variable named *_HOST.
      ["stack.palantirfoundry.com", "stack.palantirfoundry.com"],
      ["  stack.palantirfoundry.com  ", "stack.palantirfoundry.com"],
      ["https://stack.palantirfoundry.com", "stack.palantirfoundry.com"],
      ["https://stack.palantirfoundry.com/", "stack.palantirfoundry.com"],
      [
        "https://user:token@stack.palantirfoundry.com",
        "stack.palantirfoundry.com",
      ],
      // An explicitly configured port was configured on purpose, so it stays.
      [
        "https://stack.palantirfoundry.com:8443",
        "stack.palantirfoundry.com:8443",
      ],
      ["stack.palantirfoundry.com:8443", "stack.palantirfoundry.com:8443"],
      ["stack.palantirfoundry.com/some/path", "stack.palantirfoundry.com"],
    ])("resolves %j to %j", async (value, expected) => {
      // `cwd` is a bare temp dir, not a git repo: without it the git fallback
      // would reach whatever repo the test runner happens to be sitting in, and
      // a case that wrongly falls through would pass by accident.
      await expect(
        resolveFoundryHost({
          env: { FOUNDRY_EXTERNAL_HOST: value },
          cwd: repoDir,
        })
      ).resolves.toBe(expected);
    });

    it("takes precedence over FOUNDRY_HOSTNAME", async () => {
      await expect(
        resolveFoundryHost({
          env: {
            FOUNDRY_EXTERNAL_HOST: "external.example.com",
            FOUNDRY_HOSTNAME: "hostname.example.com",
          },
          cwd: repoDir,
        })
      ).resolves.toBe("external.example.com");
    });

    it("falls through when it yields no host at all", async () => {
      await expect(
        resolveFoundryHost({
          env: {
            FOUNDRY_EXTERNAL_HOST: "   ",
            FOUNDRY_HOSTNAME: "hostname.example.com",
          },
          cwd: repoDir,
        })
      ).resolves.toBe("hostname.example.com");
    });
  });

  describe("git remote fallback", () => {
    it.each([
      // The port here belongs to the git transport, not to Foundry.
      ["ssh://git@stack.example.com:22/repo", "stack.example.com"],
      ["https://stack.example.com/repo.git", "stack.example.com"],
      ["https://user:token@stack.example.com/repo.git", "stack.example.com"],
      // scp-like remotes are not URLs.
      ["git@stack.example.com:group/repo.git", "stack.example.com"],
    ])("reads %j as %j", async (remote, expected) => {
      const cwd = await repoWithRemote(remote);

      await expect(resolveFoundryHost({ env: EMPTY_ENV, cwd })).resolves.toBe(
        expected
      );
    });
  });

  it("explains itself when nothing resolves", async () => {
    // A repo with no origin, so the git fallback finds nothing either.
    await execFileAsync("git", ["init", "--quiet"], { cwd: repoDir });

    await expect(
      resolveFoundryHost({ env: EMPTY_ENV, cwd: repoDir })
    ).rejects.toThrow(/FOUNDRY_EXTERNAL_HOST/u);
  });
});
