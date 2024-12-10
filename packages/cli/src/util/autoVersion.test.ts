/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { findUp } from "find-up";
import { exec } from "node:child_process";
import { promises as fsPromises } from "node:fs";
import { promisify } from "node:util";
import { describe, expect, it, vi } from "vitest";
import { autoVersion } from "./autoVersion.js";

vi.mock("find-up");
vi.mock("node:child_process");
vi.mock("node:fs");
const execAsync = promisify(exec);

describe("autoVersion", () => {
  const execMock = vi.mocked(execAsync);
  const execReturnValue = (out: string) => ({ stdout: out, stderr: "" });

  it("should return a valid SemVer version from package.json", async () => {
    const validPackageJsonVersion = "1.2.3";
    vi.mocked(findUp).mockResolvedValue("/path/package.json");
    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify({ version: validPackageJsonVersion }),
    );
    const version = await autoVersion({
      type: "package-json",
    });
    expect(version).toBe("1.2.3");
  });

  it("should return a valid SemVer version from git describe", async () => {
    const validGitVersion = "1.2.3";
    execMock.mockResolvedValue(execReturnValue(validGitVersion));

    const version = await autoVersion({
      type: "git-describe",
    });
    expect(version).toBe("1.2.3");
  });

  it("should replace default prefix v from git describe output", async () => {
    const validGitVersion = "v1.2.3";
    execMock.mockResolvedValue(execReturnValue(validGitVersion));

    const version = await autoVersion({
      type: "git-describe",
    });
    expect(version).toBe("1.2.3");
  });

  it("should replace the prefix from the found git tag", async () => {
    const validGitVersion = "@package@1.2.3";
    execMock.mockResolvedValue(execReturnValue(validGitVersion));

    const version = await autoVersion({
      type: "git-describe",
      tagPrefix: "@package@",
    });
    expect(version).toBe("1.2.3");
  });

  it("should only replace the prefix if found at the start of the tag only", async () => {
    const validGitVersion = "1.2.3-package";
    execMock.mockResolvedValue(execReturnValue(validGitVersion));

    const version = await autoVersion({
      type: "git-describe",
      tagPrefix: "@package@",
    });
    expect(version).toBe("1.2.3-package");
  });

  it("should throw an error if git describe returns a non-SemVer string", async () => {
    const nonSemVerGitVersion = "not-semver";
    execMock.mockResolvedValue(execReturnValue(nonSemVerGitVersion));

    await expect(autoVersion({
      type: "git-describe",
    })).rejects.toThrowError();
  });

  it("should throw an error if git isn't found", async () => {
    execMock.mockImplementation(() => {
      throw new Error("Command not found");
    });

    await expect(autoVersion({
      type: "git-describe",
    })).rejects.toThrowError(
      "git is not installed",
    );
  });

  it("should throw an error if the current directory is not a git repository", async () => {
    execMock.mockImplementation(() => {
      throw new Error("fatal: not a git repository");
    });

    await expect(autoVersion({
      type: "git-describe",
    })).rejects.toThrowError(
      "the current directory is not a git repository",
    );
  });

  it("should throw an error if no git tags are found", async () => {
    execMock.mockImplementation(() => {
      throw new Error("fatal: no names found, cannot describe anything.");
    });

    await expect(autoVersion({
      type: "git-describe",
    })).rejects.toThrowError(
      "no matching tags were found.",
    );
  });
});
