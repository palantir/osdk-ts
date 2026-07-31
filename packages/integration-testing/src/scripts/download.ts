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

import { spawn } from "node:child_process";
import { rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import consola from "consola";
import invariant from "tiny-invariant";

import { resolveFoundryHost } from "./foundry-host.js";
import {
  getFoundryToken,
  type ResolveBearerTokenOptions,
} from "./foundry-token.js";

const INSTALL_SCRIPT_PATH = "/code/api/extension/install-script";
const INSTALL_BAT_PATH = "/code/api/extension/install-bat";

const fetchInstallScript = async (
  foundryUrl: string,
  token: string,
  isWindows: boolean,
): Promise<string> => {
  const url = new URL(
    isWindows ? INSTALL_BAT_PATH : INSTALL_SCRIPT_PATH,
    foundryUrl,
  );
  consola.start(`Fetching the Foundry CLI installer from ${url.href}`);
  const response = await fetch(url, {
    headers: { authorization: `Bearer ${token}` },
  });
  invariant(
    response.ok,
    () =>
      `Failed to fetch the Foundry CLI installer from ${url.href}: ` +
      `${response.status} ${response.statusText}`,
  );
  return await response.text();
};

const run = async (
  command: string,
  args: string[],
  env: NodeJS.ProcessEnv,
  stdin?: string,
): Promise<void> => {
  await new Promise<void>((fulfil, reject) => {
    const child = spawn(command, args, {
      env,
      stdio: [stdin === undefined ? "ignore" : "pipe", "inherit", "inherit"],
    });
    child.on("error", reject);
    child.on("close", (code, signal) => {
      if (code === 0) {
        fulfil();
        return;
      }
      const reason =
        signal == null ? `code ${String(code)}` : `signal ${signal}`;
      reject(new Error(`The Foundry CLI installer exited with ${reason}`));
    });
    if (stdin !== undefined) {
      child.stdin?.end(stdin);
    }
  });
};

const runInstallScript = async (
  script: string,
  env: NodeJS.ProcessEnv,
): Promise<void> => await run("bash", ["-s", "--"], env, script);

const runInstallBat = async (
  script: string,
  env: NodeJS.ProcessEnv,
): Promise<void> => {
  const batPath = join(tmpdir(), `install-foundry-${process.pid}.bat`);
  await writeFile(batPath, script);
  try {
    await run("cmd.exe", ["/d", "/s", "/c", batPath], env);
  } finally {
    await rm(batPath, { force: true });
  }
};

/**
 * Installs the Foundry CLI by running the installer the stack serves, with the
 * resolved stack url and token injected as `FOUNDRY_URL` and `TOKEN`. Warns
 * when the installed CLI does not end up on PATH.
 */
export const installFoundryCli = async (
  options: ResolveBearerTokenOptions = {},
): Promise<void> => {
  const env = options.env ?? process.env;
  const isWindows = process.platform === "win32";

  const [host, token] = await Promise.all([
    resolveFoundryHost(options),
    getFoundryToken(options),
  ]);
  const foundryUrl = `https://${host}`;

  const script = await fetchInstallScript(foundryUrl, token, isWindows);
  const installerEnv = { ...env, FOUNDRY_URL: foundryUrl, TOKEN: token };
  if (isWindows) {
    await runInstallBat(script, installerEnv);
  } else {
    await runInstallScript(script, installerEnv);
  }
};
