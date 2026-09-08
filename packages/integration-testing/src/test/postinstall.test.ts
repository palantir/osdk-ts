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

import consola from "consola";
import { beforeEach, expect, it, vi } from "vitest";

import { installFoundryCli } from "../scripts/download.js";
import { readGitRemoteUrl } from "../scripts/gitRemote.js";
import { postinstall } from "../scripts/postinstall.js";
import { checkFoundryCliVersion } from "../utils/foundry-cli.js";

vi.mock("consola", () => ({
  default: {
    info: vi.fn(),
    warn: vi.fn(),
  },
}));
vi.mock("../utils/foundry-cli.js", () => ({
  checkFoundryCliVersion: vi.fn(),
  MIN_FOUNDRY_CLI_VERSION: "0.224.0",
}));
vi.mock("../scripts/gitRemote.js", () => ({
  readGitRemoteUrl: vi.fn(),
}));
vi.mock("../scripts/download.js", () => ({
  installFoundryCli: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(readGitRemoteUrl).mockResolvedValue(undefined);
});

it("warns without failing when Foundry CLI installation fails", async () => {
  const error = new Error("installation failed");
  vi.mocked(checkFoundryCliVersion).mockResolvedValue({ type: "not-found" });
  vi.mocked(installFoundryCli).mockRejectedValue(error);

  await expect(postinstall()).resolves.toBeUndefined();

  expect(installFoundryCli).toHaveBeenCalledOnce();
  expect(consola.warn).toHaveBeenCalledWith(
    "Failed to install Foundry CLI. It must be installed before creating an integration client.",
    error,
  );
});
