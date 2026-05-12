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

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  DISCOVERY_DIR,
  type DiscoveryEntry,
  discoveryPath,
  findSuperrepoRoot,
  inspectDiscovery,
  readDiscovery,
} from "./discovery.js";

let workDir: string;

beforeEach(() => {
  workDir = fs.mkdtempSync(path.join(os.tmpdir(), "vps-discovery-test-"));
});
afterEach(() => {
  fs.rmSync(workDir, { recursive: true, force: true });
});

function makeSuperrepo(): string {
  fs.writeFileSync(
    path.join(workDir, "foundry.yml"),
    "minCliVersion: \"0.0.0\"\n",
  );
  return workDir;
}

function writeDiscovery(
  root: string,
  name: string,
  entry: DiscoveryEntry,
): void {
  const dir = path.join(root, DISCOVERY_DIR);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, `.${name}-discovery.json`),
    JSON.stringify(entry),
  );
}

describe("findSuperrepoRoot", () => {
  it("returns the directory containing foundry.yml", () => {
    const root = makeSuperrepo();
    const nested = path.join(root, "a", "b", "c");
    fs.mkdirSync(nested, { recursive: true });
    expect(findSuperrepoRoot(nested)).toBe(root);
  });

  it("returns undefined when no foundry.yml is reachable", () => {
    expect(findSuperrepoRoot(workDir)).toBeUndefined();
  });

  it("returns the nearest ancestor when superrepos are nested", () => {
    // Create an outer superrepo AND an inner one — the walk-up must stop
    // at the inner one. (Matches the Rust `find_superrepo_root` semantics.)
    makeSuperrepo();
    const inner = path.join(workDir, "apps", "inner");
    fs.mkdirSync(inner, { recursive: true });
    fs.writeFileSync(
      path.join(inner, "foundry.yml"),
      "minCliVersion: \"0.0.0\"\n",
    );
    const deeper = path.join(inner, "src");
    fs.mkdirSync(deeper, { recursive: true });
    expect(findSuperrepoRoot(deeper)).toBe(inner);
  });
});

describe("discoveryPath", () => {
  it("composes <root>/.palantir/.<service>-discovery.json", () => {
    expect(discoveryPath("/some/root", "typescript-functions")).toBe(
      "/some/root/.palantir/.typescript-functions-discovery.json",
    );
    expect(discoveryPath("/some/root", "status-server")).toBe(
      "/some/root/.palantir/.status-server-discovery.json",
    );
  });
});

describe("readDiscovery", () => {
  it("returns the parsed entry when the file is present and PID is alive", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", {
      pid: process.pid,
      url: "https://127.0.0.1:54321",
      caCertPath: "/tmp/ca.cer",
    });
    const out = readDiscovery(root, "ontology");
    expect(out).toEqual({
      pid: process.pid,
      url: "https://127.0.0.1:54321",
      caCertPath: "/tmp/ca.cer",
    });
  });

  it("returns undefined when the file is missing", () => {
    const root = makeSuperrepo();
    expect(readDiscovery(root, "ontology")).toBeUndefined();
  });

  it("returns undefined when the recorded PID is dead", () => {
    const root = makeSuperrepo();
    // PID 0 is reserved on every supported platform.
    writeDiscovery(root, "ontology", {
      pid: 0,
      url: "https://127.0.0.1:1",
    });
    expect(readDiscovery(root, "ontology")).toBeUndefined();
  });

  it("returns undefined for malformed JSON", () => {
    const root = makeSuperrepo();
    const dir = path.join(root, DISCOVERY_DIR);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, ".ontology-discovery.json"), "not json");
    expect(readDiscovery(root, "ontology")).toBeUndefined();
  });

  it("returns undefined when required fields are missing", () => {
    const root = makeSuperrepo();
    const dir = path.join(root, DISCOVERY_DIR);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, ".ontology-discovery.json"),
      JSON.stringify({ pid: process.pid }), // no url
    );
    expect(readDiscovery(root, "ontology")).toBeUndefined();
  });

  it("returns an entry without caCertPath for plain-HTTP services", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "python-functions", {
      pid: process.pid,
      url: "http://127.0.0.1:12345",
    });
    expect(readDiscovery(root, "python-functions")).toEqual({
      pid: process.pid,
      url: "http://127.0.0.1:12345",
    });
  });
});

describe("inspectDiscovery", () => {
  it("reports 'missing' when the file does not exist", () => {
    const root = makeSuperrepo();
    expect(inspectDiscovery(root, "ontology")).toEqual({ kind: "missing" });
  });

  it("reports 'malformed' when JSON parsing fails", () => {
    const root = makeSuperrepo();
    const dir = path.join(root, DISCOVERY_DIR);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, ".ontology-discovery.json"), "not json");
    const r = inspectDiscovery(root, "ontology");
    expect(r.kind).toBe("malformed");
    if (r.kind === "malformed") expect(r.reason).toMatch(/invalid JSON/);
  });

  it("reports 'malformed' when required fields are missing", () => {
    const root = makeSuperrepo();
    const dir = path.join(root, DISCOVERY_DIR);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, ".ontology-discovery.json"),
      JSON.stringify({ pid: process.pid }), // missing url
    );
    const r = inspectDiscovery(root, "ontology");
    expect(r.kind).toBe("malformed");
    if (r.kind === "malformed") expect(r.reason).toMatch(/required fields/);
  });

  it("reports 'stale' when the recorded PID is dead", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", { pid: 0, url: "https://127.0.0.1:1" });
    const r = inspectDiscovery(root, "ontology");
    expect(r.kind).toBe("stale");
    if (r.kind === "stale") expect(r.pid).toBe(0);
  });

  it("reports 'ok' with the parsed entry for a live process", () => {
    const root = makeSuperrepo();
    writeDiscovery(root, "ontology", {
      pid: process.pid,
      url: "https://127.0.0.1:54321",
    });
    const r = inspectDiscovery(root, "ontology");
    expect(r.kind).toBe("ok");
    if (r.kind === "ok") {
      expect(r.entry.pid).toBe(process.pid);
      expect(r.entry.url).toBe("https://127.0.0.1:54321");
    }
  });

  it("rejects non-finite pid (NaN, Infinity)", () => {
    const root = makeSuperrepo();
    const dir = path.join(root, DISCOVERY_DIR);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, ".ontology-discovery.json"),
      // NaN cannot survive JSON, but the parser may receive a string
      // payload that decodes to one if someone crafts the JSON manually.
      // Verify our type guard catches `null` (which represents NaN/Infinity
      // when JSON.stringify is involved) and similar non-finite shapes.
      "{\"pid\": null, \"url\": \"http://127.0.0.1:1\"}",
    );
    expect(inspectDiscovery(root, "ontology").kind).toBe("malformed");
  });
});
