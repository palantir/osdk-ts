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

import { beforeEach, describe, expect, it, vi } from "vitest";
// Semver is used indirectly through the mocked functions
import * as execa from "execa";
import * as fs from "fs/promises";
import {
  calculateAndPublish,
  determinePublishTag,
  getHighestPublishedVersion,
  getPackagesToPublish,
  getPreReleaseInfo,
} from "./calculateReleaseTag.js";

// Mock external dependencies
vi.mock("fs/promises");
vi.mock("execa");
vi.mock("consola", () => ({
  default: {
    info: vi.fn(),
    warn: vi.fn(),
    success: vi.fn(),
    error: vi.fn(),
    start: vi.fn(),
  },
}));

// Mock runPublishCommand to avoid actually running the publish
vi.mock("./calculateReleaseTag.js", async () => {
  const actual = await vi.importActual("./calculateReleaseTag.js");
  return {
    ...(actual as object),
    runPublishCommand: vi.fn().mockImplementation(async () => {
      await Promise.resolve();
      return undefined;
    }),
  };
});

describe("Release Tag Calculation", () => {
  const mockPackageInfo = { name: "@osdk/test-package", version: "1.2.3" };
  const mockClientPackageInfo = { name: "@osdk/client", version: "1.3.0" };

  describe("getPreReleaseInfo", () => {
    it("returns pre-release info when in pre-release mode", async () => {
      vi.mocked(fs.readFile).mockResolvedValueOnce(
        JSON.stringify({
          mode: "pre",
          tag: "next",
        }),
      );

      const result = await getPreReleaseInfo();
      expect(result).toEqual({ mode: "pre", tag: "next" });
    });

    it("returns null when not in pre-release mode", async () => {
      vi.mocked(fs.readFile).mockResolvedValueOnce(
        JSON.stringify({ mode: "exit" }),
      );

      const result = await getPreReleaseInfo();
      expect(result).toBeNull();
    });

    it("returns null when pre.json does not exist", async () => {
      vi.mocked(fs.readFile).mockRejectedValueOnce(new Error("File not found"));

      const result = await getPreReleaseInfo();
      expect(result).toBeNull();
    });
  });

  describe("getHighestPublishedVersion", () => {
    it("returns highest stable version", async () => {
      vi.mocked(execa.execa).mockResolvedValueOnce({
        stdout: JSON.stringify(["1.0.0", "1.1.0", "2.0.0-beta.1", "1.2.0"]),
      } as any);

      const result = await getHighestPublishedVersion("@osdk/test-package");
      expect(result).toBe("1.2.0");
    });

    it("filters out pre-release versions", async () => {
      vi.mocked(execa.execa).mockResolvedValueOnce({
        stdout: JSON.stringify(["1.0.0-beta", "2.0.0-alpha", "0.1.0"]),
      } as any);

      const result = await getHighestPublishedVersion("@osdk/test-package");
      expect(result).toBe("0.1.0");
    });

    it("returns null when no versions exist", async () => {
      vi.mocked(execa.execa).mockResolvedValueOnce({
        stdout: JSON.stringify([]),
      } as any);

      const result = await getHighestPublishedVersion("@osdk/test-package");
      expect(result).toBeNull();
    });

    it("handles npm registry errors gracefully", async () => {
      vi.mocked(execa.execa).mockRejectedValueOnce(new Error("Registry error"));

      const result = await getHighestPublishedVersion("@osdk/test-package");
      expect(result).toBeNull();
    });
  });

  describe("determinePublishTag", () => {
    it("uses pre-release tag when in pre-release mode", async () => {
      const preReleaseInfo = { mode: "pre", tag: "beta" };

      const tag = await determinePublishTag(
        mockPackageInfo,
        preReleaseInfo,
        undefined,
      );

      expect(tag).toBe("beta");
    });

    it("uses 'latest' tag when version is in patch range of highest stable", async () => {
      vi.mocked(execa.execa).mockResolvedValueOnce({
        stdout: JSON.stringify(["1.2.0", "1.2.1", "1.2.2"]),
      } as any);

      const tag = await determinePublishTag(
        { name: "@osdk/test-package", version: "1.2.3" },
        null,
        undefined,
      );

      expect(tag).toBe("latest");
    });

    it("uses 'next' tag when version is not in patch range of highest stable", async () => {
      vi.mocked(execa.execa).mockResolvedValueOnce({
        stdout: JSON.stringify(["1.1.0", "1.1.9"]),
      } as any);

      const tag = await determinePublishTag(
        { name: "@osdk/test-package", version: "1.2.0" },
        null,
        undefined,
      );

      expect(tag).toBe("next");
    });

    it("uses 'next' tag for pre-release versions", async () => {
      vi.mocked(execa.execa).mockResolvedValueOnce({
        stdout: JSON.stringify(["1.2.0"]),
      } as any);

      const tag = await determinePublishTag(
        { name: "@osdk/test-package", version: "1.3.0-beta.1" },
        null,
        undefined,
      );

      expect(tag).toBe("next");
    });

    it("appends release branch version to tag", async () => {
      vi.mocked(execa.execa).mockResolvedValueOnce({
        stdout: JSON.stringify(["1.2.0"]),
      } as any);

      const tag = await determinePublishTag(
        { name: "@osdk/test-package", version: "1.2.1" },
        null,
        "release/3.x",
      );

      expect(tag).toBe("latest-3.x");
    });
  });

  describe("calculateAndPublish", () => {
    // Import the mocked function for testing
    let runPublishCommandMock: any;

    beforeEach(() => {
      // Reset all mocks before each test
      vi.resetAllMocks();

      // Get reference to the mocked runPublishCommand function
      runPublishCommandMock =
        require("./calculateReleaseTag.js").runPublishCommand;
    });

    it("uses @osdk/client package for tag determination when available", async () => {
      // Mock getPackagesToPublish to return packages including @osdk/client
      vi.mocked(getPackagesToPublish).mockResolvedValue([
        { name: "@osdk/other-package", version: "1.0.0" },
        { name: "@osdk/client", version: "1.3.0" },
        { name: "@osdk/another-package", version: "2.0.0" },
      ]);

      // Mock getPreReleaseInfo
      vi.mocked(getPreReleaseInfo).mockResolvedValue(null);

      // Mock git branch command
      vi.mocked(execa.execa).mockResolvedValue({
        stdout: "main",
      } as any);

      // Mock determinePublishTag
      vi.mocked(determinePublishTag).mockImplementation(
        async (pkg: any, preReleaseInfo: any, releaseBranch?: string) => {
          // Verify it's called with the client package
          expect(pkg.name).toBe("@osdk/client");
          expect(pkg.version).toBe("1.3.0");
          await Promise.resolve(); // Add await to satisfy linter
          return "latest";
        },
      );

      // Execute the function under test
      await calculateAndPublish();

      // Verify the publish command was called with the correct tag
      expect(runPublishCommandMock).toHaveBeenCalledWith("latest");
    });

    it("falls back to first package when @osdk/client is not available", async () => {
      // Mock getPackagesToPublish to return packages without @osdk/client
      vi.mocked(getPackagesToPublish).mockResolvedValue([
        { name: "@osdk/other-package", version: "1.0.0" },
        { name: "@osdk/another-package", version: "2.0.0" },
      ]);

      // Mock getPreReleaseInfo
      vi.mocked(getPreReleaseInfo).mockResolvedValue(null);

      // Mock git branch command
      vi.mocked(execa.execa).mockResolvedValue({
        stdout: "main",
      } as any);

      // Mock determinePublishTag
      vi.mocked(determinePublishTag).mockImplementation(
        async (pkg: any, preReleaseInfo: any, releaseBranch?: string) => {
          // Verify it's called with the first package
          expect(pkg.name).toBe("@osdk/other-package");
          expect(pkg.version).toBe("1.0.0");
          await Promise.resolve(); // Add await to satisfy linter
          return "next";
        },
      );

      // Execute the function under test
      await calculateAndPublish();

      // Verify the publish command was called with the correct tag
      expect(runPublishCommandMock).toHaveBeenCalledWith("next");
    });
  });
});
