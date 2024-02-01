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
import { execSync } from "node:child_process";
import { promises as fsPromises } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import * as versionModule from "../versionUtils.js";

vi.mock("node:child_process", () => ({
  execSync: vi.fn(),
}));

vi.mock("find-up", () => ({
  findUp: vi.fn(),
}));

vi.mock("node:fs", () => ({
  promises: {
    readFile: vi.fn(),
  },
}));

describe("getAutoVersion", () => {
  it("should return a valid SemVer version from git describe", async () => {
    const validGitVersion = "1.2.3";
    vi.mocked(execSync).mockReturnValue(validGitVersion);

    const version = await versionModule.getAutoVersion();

    expect(version).toBe("1.2.3");
  });

  it("should throw an error if git describe returns a non-SemVer string", async () => {
    const nonSemVerGitVersion = "not-semver";
    vi.mocked(execSync).mockReturnValue(nonSemVerGitVersion);

    await expect(versionModule.getAutoVersion()).rejects.toThrow();
  });

  it("should return the version from package.json if git describe fails", async () => {
    const packageJsonVersion = { version: "2.0.0" };
    vi.mocked(execSync).mockImplementation(() => {
      throw new Error("git describe failed");
    });
    vi.mocked(findUp).mockResolvedValue("package.json");
    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(packageJsonVersion),
    );

    const version = await versionModule.getAutoVersion();

    expect(version).toBe("2.0.0");
  });

  it("should throw an error if package.json version is not SemVer compliant", async () => {
    const packageJsonVersion = { version: "not-semver" };
    vi.mocked(execSync).mockImplementation(() => {
      throw new Error("git describe failed");
    });
    vi.mocked(findUp).mockResolvedValue("path/to/package.json");
    vi.mocked(fsPromises.readFile).mockResolvedValue(
      JSON.stringify(packageJsonVersion),
    );

    await expect(versionModule.getAutoVersion()).rejects.toThrow(
      "Unable to determine the version automatically. Please supply a --version argument.",
    );
  });

  it("should throw an error if package.json is not found", async () => {
    vi.mocked(execSync).mockImplementation(() => {
      throw new Error("git describe failed");
    });
    vi.mocked(findUp).mockResolvedValue(undefined);

    await expect(versionModule.getAutoVersion()).rejects.toThrow(
      "Unable to determine the version automatically. Please supply a --version argument.",
    );
  });
});

// Duplicated here instead of exporting the function.
function isSemVerCompliant(version: string): boolean {
  const semVerRegex =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
  return semVerRegex.test(version);
}

describe("isSemVerCompliant", () => {
  it("should return true for a valid SemVer version", () => {
    const validVersion = "1.0.0";
    expect(isSemVerCompliant(validVersion)).toBe(true);
  });

  it("should return true for a valid SemVer version with prerelease", () => {
    const validVersionWithPrerelease = "1.0.0-alpha.1";
    expect(isSemVerCompliant(validVersionWithPrerelease)).toBe(true);
  });

  it("should return true for a valid SemVer version with build metadata", () => {
    const validVersionWithBuild = "1.0.0+20130313144700";
    expect(isSemVerCompliant(validVersionWithBuild)).toBe(true);
  });

  it("should return false for a version missing patch number", () => {
    const invalidVersionMissingPatch = "1.0";
    expect(isSemVerCompliant(invalidVersionMissingPatch)).toBe(false);
  });

  it("should return false for a version with non-numeric components", () => {
    const invalidVersionNonNumeric = "1.a.b";
    expect(isSemVerCompliant(invalidVersionNonNumeric)).toBe(false);
  });

  it("should return false for a completely non-compliant string", () => {
    const nonCompliantString = "not-a-version";
    expect(isSemVerCompliant(nonCompliantString)).toBe(false);
  });
});
