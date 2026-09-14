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

import { type ChildProcess, spawn } from "node:child_process";
import { EventEmitter } from "node:events";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, beforeEach, expect, it, vi } from "vitest";

import { installFoundryCli } from "../scripts/download.js";
import { readGitRemoteUrl } from "../scripts/gitRemote.js";

vi.mock("node:child_process", () => ({ spawn: vi.fn() }));
vi.mock("../scripts/gitRemote.js", () => ({ readGitRemoteUrl: vi.fn() }));

const codeUrl = "https://ci.example.com:8443/compute/example-code/code/api";
const artifactsBaseUrl =
  "https://ci.example.com:8443/compute/example-artifacts";
const fetchMock = vi.fn<typeof fetch>();
const stdinEnd = vi.fn();
let discoveryDirectory: string;
let discoveryPath: string;

beforeEach(async () => {
  discoveryDirectory = await mkdtemp(join(tmpdir(), "foundry-discovery-"));
  discoveryPath = join(discoveryDirectory, "discovery.yml");
  vi.resetAllMocks();
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(process, "platform", "get").mockReturnValue("linux");
  fetchMock.mockResolvedValue(new Response("installer script"));
  vi.mocked(readGitRemoteUrl).mockResolvedValue(
    "https://test-token@local.example.com/repo",
  );
  vi.mocked(spawn).mockImplementation(() => {
    const child = new EventEmitter();
    queueMicrotask(() => child.emit("close", 0, null));
    return Object.assign(child, {
      stdin: { end: stdinEnd },
    }) as unknown as ChildProcess;
  });
});

afterEach(async () => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  await rm(discoveryDirectory, { recursive: true, force: true });
});

it.each([
  { name: "CI service discovery", discovery: true },
  { name: "the local Git remote", discovery: false },
])("downloads and runs the installer using $name", async ({ discovery }) => {
  if (discovery) {
    await writeFile(
      discoveryPath,
      `code:
  - ${codeUrl}/
artifacts:
  - ${artifactsBaseUrl}/artifacts/api/
`,
    );
  }

  await installFoundryCli({
    env: discovery
      ? {
          JEMMA: "true",
          JOB_TOKEN: "test-token",
          FOUNDRY_SERVICE_DISCOVERY_V2: discoveryPath,
        }
      : {},
  });

  expect(fetchMock).toHaveBeenCalledWith(
    new URL(
      `${discovery ? codeUrl : "https://local.example.com/code/api"}/extension/install-script`,
    ),
    { headers: { authorization: "Bearer test-token" } },
  );
  expect(spawn).toHaveBeenCalledWith("bash", ["-s", "--"], {
    env: expect.objectContaining({
      FOUNDRY_URL: discovery ? artifactsBaseUrl : "https://local.example.com",
      TOKEN: "test-token",
    }),
    stdio: ["pipe", "inherit", "inherit"],
  });
  expect(stdinEnd).toHaveBeenCalledWith("installer script");
  if (discovery) {
    vi.spyOn(process, "platform", "get").mockReturnValue("win32");
    await expect(
      installFoundryCli({
        env: { FOUNDRY_SERVICE_DISCOVERY_V2: discoveryPath },
      }),
    ).rejects.toThrow(
      "Foundry CLI installation using FOUNDRY_SERVICE_DISCOVERY_V2 is not supported on Windows.",
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(spawn).toHaveBeenCalledTimes(1);
    expect(readGitRemoteUrl).not.toHaveBeenCalled();
  }
});
