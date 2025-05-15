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

import { promises as fs } from "fs";
import mockFs from "mock-fs";
import * as path from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { generateJemmaFolderWithContent } from "./generateJemmaFolderWithContent.js";

describe("generateJemmaFolderWithContent", () => {
  beforeEach(() => {
    // Setup a mock file system
    mockFs({
      "/test-output": {},
    });
  });

  afterEach(() => {
    // Restore the real file system
    mockFs.restore();
  });

  it("should create a .jemma directory with the required scripts", async () => {
    const testDir = "/test-output";
    const success = await generateJemmaFolderWithContent(testDir);
    expect(success).toBe(true);

    const jemmaPath = path.join(testDir, ".jemma");
    const files = await fs.readdir(jemmaPath);

    expect(files).toContain("download-node.py");
    expect(files).toContain("install-node.sh");
    expect(files).toContain("setting.sh");

    const downloadNodeContent = await fs.readFile(
      path.join(jemmaPath, "download-node.py"),
      "utf8",
    );
    const installNodeContent = await fs.readFile(
      path.join(jemmaPath, "install-node.sh"),
      "utf8",
    );
    const settingContent = await fs.readFile(
      path.join(jemmaPath, "setting.sh"),
      "utf8",
    );

    expect(downloadNodeContent).toContain("#!/usr/bin/env python3");
    expect(installNodeContent).toContain("#!/usr/bin/env bash");
    expect(settingContent).toContain("{{REPOSITORY_RID}}");
  });

  it("should return false if the directory creation fails", async () => {
    const testDir = "/test-output";

    // Simulate a failure by having a file where the directory should be
    mockFs({
      "/test-output": {
        ".jemma": "This is a file, not a directory",
      },
    });

    const success = await generateJemmaFolderWithContent(testDir);
    expect(success).toBe(false);
  });

  it("should replace the existing setting.sh file if .jemma already exists", async () => {
    const testDir = "/test-output";

    // Setup the initial state with an existing .jemma directory and setting.sh file
    mockFs({
      "/test-output": {
        ".jemma": {
          "setting.sh":
            "export NODE_INSTALLATION_VERSION=old-version\nexport REPOSITORY_RID=old-rid\n",
        },
      },
    });

    const success = await generateJemmaFolderWithContent(testDir);
    expect(success).toBe(true);

    const jemmaPath = path.join(testDir, ".jemma");
    const files = await fs.readdir(jemmaPath);

    expect(files).toContain("setting.sh");

    const settingContent = await fs.readFile(
      path.join(jemmaPath, "setting.sh"),
      "utf8",
    );

    // Check that the content of setting.sh has been replaced
    expect(settingContent).toContain("{{REPOSITORY_RID}}");
    expect(settingContent).not.toContain("old-version");
  });
});
