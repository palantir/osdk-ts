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

import { execSync } from "node:child_process";
import { describe, expect, it, vi } from "vitest";
import { autoVersion } from "./autoVersion.js";

vi.mock("node:child_process");

describe("autoVersion", () => {
  const execSyncMock = vi.mocked(execSync);

  it("should return a valid SemVer version from git describe", async () => {
    const validGitVersion = "1.2.3";
    execSyncMock.mockReturnValue(validGitVersion);

    const version = await autoVersion();
    expect(version).toBe("1.2.3");

    expect(execSyncMock).toHaveBeenCalledWith(
      "git describe --tags --first-parent --dirty",
      { encoding: "utf8" },
    );
  });

  it("should replace default prefix v from git describe output", async () => {
    const validGitVersion = "v1.2.3";
    execSyncMock.mockReturnValue(validGitVersion);
    const version = await autoVersion();

    expect(version).toBe("1.2.3");
    expect(execSyncMock).toHaveBeenCalledWith(
      "git describe --tags --first-parent --dirty",
      { encoding: "utf8" },
    );
  });

  it("should replace the prefix from the found git tag", async () => {
    const validGitVersion = "@package@1.2.3";
    execSyncMock.mockReturnValue(validGitVersion);

    const version = await autoVersion("@package@");

    expect(version).toBe("1.2.3");
    expect(execSyncMock).toHaveBeenCalledWith(
      "git describe --tags --first-parent --dirty --match=\"/^@package@/*\"",
      { encoding: "utf8" },
    );
  });

  it("should only replace the prefix if found at the start of the tag only", async () => {
    const validGitVersion = "1.2.3-package";
    execSyncMock.mockReturnValue(validGitVersion);

    const version = await autoVersion("-package");

    expect(version).toBe("1.2.3-package");
    expect(execSyncMock).toHaveBeenCalledWith(
      "git describe --tags --first-parent --dirty --match=\"/^-package/*\"",
      { encoding: "utf8" },
    );
  });

  it("should throw an error if git describe returns a non-SemVer string", async () => {
    const nonSemVerGitVersion = "not-semver";
    execSyncMock.mockReturnValue(nonSemVerGitVersion);

    await expect(autoVersion()).rejects.toThrow();
  });
});
