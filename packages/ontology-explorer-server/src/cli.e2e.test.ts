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

import { type ChildProcess, spawn } from "child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "fs";
import net from "net";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

// Runs the published bin against the built package, the way the Foundry CLI
// launches it. Run the package's `build` first.
const packageDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const bin = path.join(packageDir, "bin", "ontology-explorer.mjs");
const artifactsDir = path.join(packageDir, "reports", "e2e");

const DEFAULT_PORT = 8083;
const STARTUP_TIMEOUT_MS = 10_000;
// Unanchored at the start: under CI, consola prefixes the line with `[log] `.
const STARTUP_LINE = /Ontology Explorer listening on http:\/\/(.+):(\d+)$/u;

// The no-flags case needs the default port; skip it rather than fail when
// something else on the machine holds it.
const isDefaultPortFree = await isPortFree(DEFAULT_PORT);

// Launch as the Foundry CLI would, outside vitest's test environment.
const launchEnv: NodeJS.ProcessEnv = {
  ...process.env,
  NODE_ENV: undefined,
  TEST: undefined,
  VITEST: undefined,
};

describe("ontology-explorer bin", { timeout: 2 * STARTUP_TIMEOUT_MS }, () => {
  let workDir: string;
  const running: ChildProcess[] = [];

  beforeAll(() => {
    rmSync(artifactsDir, { recursive: true, force: true });
    mkdirSync(artifactsDir, { recursive: true });
    // No foundry.yml anywhere above, as when started outside a SuperRepo.
    workDir = mkdtempSync(path.join(os.tmpdir(), "ontology-explorer-e2e-"));
  });

  afterEach(() => {
    for (const child of running.splice(0)) {
      child.kill();
    }
  });

  afterAll(() => {
    rmSync(workDir, { recursive: true, force: true });
  });

  it.skipIf(!isDefaultPortFree)(
    "serves the app on 127.0.0.1:8083 with no flags",
    async () => {
      const explorer = await start([], workDir, running);
      const base = `http://127.0.0.1:${DEFAULT_PORT}`;

      const root = await fetch(`${base}/`);
      const html = await root.text();
      const deepLink = await fetch(`${base}/some/route`);
      const api = await fetch(`${base}/api/v2/ontologies`);
      const lan = lanAddress();
      const reachableFromLan =
        lan == null ? undefined : await canConnect(lan, DEFAULT_PORT);

      writeArtifact("no-flags.html", html);
      writeArtifact(
        "no-flags.json",
        JSON.stringify(
          {
            startupLine: explorer.startupLine,
            "GET /": root.status,
            "GET /some/route": deepLink.status,
            "GET /api/v2/ontologies": api.status,
            reachableFromLan: reachableFromLan ?? "no LAN address to test",
          },
          undefined,
          2,
        ),
      );

      expect(explorer.host).toBe("127.0.0.1");
      expect(explorer.port).toBe(DEFAULT_PORT);
      expect(root.status).toBe(200);
      expect(html).toContain("<title>Ontology Explorer</title>");
      expect(deepLink.status).toBe(200);
      expect(api.status).toBe(404);
      if (reachableFromLan != null) {
        expect(reachableFromLan).toBe(false);
      }
    },
  );

  it("accepts the Foundry CLI's launch flags and ignores unknown ones", async () => {
    // Contract 1 is --port, --host and --project-root. A host other than the
    // default shows that --host is read; --port 0 lets the OS pick a port.
    const explorer = await start(
      [
        "--port",
        "0",
        "--host",
        "0.0.0.0",
        "--project-root",
        workDir,
        "--flag-from-a-newer-cli",
        "value",
      ],
      workDir,
      running,
    );

    const root = await fetch(`http://127.0.0.1:${explorer.port}/`);
    writeArtifact(
      "launch-flags.json",
      JSON.stringify(
        {
          startupLine: explorer.startupLine.replace(
            String(explorer.port),
            "<port>",
          ),
          "GET /": root.status,
        },
        undefined,
        2,
      ),
    );

    expect(explorer.host).toBe("0.0.0.0");
    expect(explorer.port).toBeGreaterThan(0);
    expect(root.status).toBe(200);
  });

  it("exits with an error when the port is taken", async () => {
    const blocker = net.createServer();
    await new Promise<void>((resolve) =>
      blocker.listen(0, "127.0.0.1", resolve),
    );
    const { port } = blocker.address() as net.AddressInfo;

    try {
      const child = spawn(process.execPath, [bin, "--port", String(port)], {
        cwd: workDir,
        env: launchEnv,
      });
      running.push(child);
      const stderr = collect(child.stderr);
      // `close`, not `exit`: it waits for stdio to end, so stderr is complete.
      const exitCode = await new Promise<number | null>((resolve) =>
        child.on("close", resolve),
      );
      writeArtifact(
        "port-taken.json",
        JSON.stringify(
          {
            exitCode,
            // consola's prefix differs locally and under CI; keep the message.
            error: stderr()
              .split("\n")
              .find((line) => line.includes("already in use"))
              ?.replace(/^.*?(Error:)/u, "$1")
              .replace(String(port), "<port>"),
          },
          undefined,
          2,
        ),
      );

      expect(exitCode).toBe(1);
      expect(stderr()).toContain(`Port ${port} is already in use`);
    } finally {
      blocker.close();
    }
  });
});

interface StartedExplorer {
  startupLine: string;
  host: string;
  port: number;
}

function start(
  args: string[],
  cwd: string,
  running: ChildProcess[],
): Promise<StartedExplorer> {
  const child = spawn(process.execPath, [bin, ...args], {
    cwd,
    env: launchEnv,
  });
  running.push(child);
  const stdout = collect(child.stdout);
  const stderr = collect(child.stderr);

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Explorer didn't start:\n${stdout()}\n${stderr()}`));
    }, STARTUP_TIMEOUT_MS);

    child.stdout?.on("data", () => {
      for (const line of stdout().split("\n")) {
        const match = STARTUP_LINE.exec(line.trim());
        if (match != null) {
          clearTimeout(timeout);
          resolve({
            startupLine: match[0],
            host: match[1],
            port: Number(match[2]),
          });
          return;
        }
      }
    });
    child.on("exit", (code) => {
      clearTimeout(timeout);
      reject(
        new Error(`Explorer exited with ${code}:\n${stdout()}\n${stderr()}`),
      );
    });
  });
}

function collect(stream: NodeJS.ReadableStream | null): () => string {
  let output = "";
  stream?.setEncoding("utf-8");
  stream?.on("data", (chunk: string) => {
    output += chunk;
  });
  return () => output;
}

function writeArtifact(name: string, contents: string): void {
  writeFileSync(path.join(artifactsDir, name), `${contents}\n`);
}

function isPortFree(port: number): Promise<boolean> {
  const server = net.createServer();
  return new Promise((resolve) => {
    server.once("error", () => resolve(false));
    server.listen(port, "127.0.0.1", () => server.close(() => resolve(true)));
  });
}

function lanAddress(): string | undefined {
  return Object.values(os.networkInterfaces())
    .flat()
    .find((info) => info != null && info.family === "IPv4" && !info.internal)
    ?.address;
}

function canConnect(host: string, port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = net.connect({ host, port, timeout: 1000 });
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => resolve(false));
    socket.once("timeout", () => {
      socket.destroy();
      resolve(false);
    });
  });
}
