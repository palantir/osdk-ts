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

import { mkdtemp, realpath, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { afterEach, expect, it, vi } from "vitest";

import { loadOntologySource } from "./loadOntologySource.js";

const source = vi.hoisted(() => ({
  loadOntologySource: vi.fn(() => Promise.resolve({ value: "source" })),
}));
vi.mock("../source/load.js", () => source);

const version = Object.getOwnPropertyDescriptor(process.versions, "node")!;
const directories: string[] = [];
afterEach(async () => {
  Object.defineProperty(process.versions, "node", version);
  source.loadOntologySource.mockClear();
  await Promise.all(
    directories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

it("selects source-aware loading at the Node 24 boundary", async () => {
  Object.defineProperty(process.versions, "node", { value: "24.0.0" });
  expect(await loadOntologySource("ontology.ts")).toEqual({ value: "source" });
  expect(source.loadOntologySource).toHaveBeenCalledExactlyOnceWith(
    "ontology.ts",
  );
});

it("checks whether typescript is installed", async () => {
  Object.defineProperty(process.versions, "node", { value: "24.0.0" });
  vi.doMock("typescript", () => {
    throw new Error("TypeScript is not installed");
  });

  try {
    await expect(loadOntologySource("ontology.ts")).rejects.toThrow(
      "Unable to load TypeScript for source-aware validation",
    );
    expect(source.loadOntologySource).not.toHaveBeenCalled();
  } finally {
    vi.doUnmock("typescript");
  }
});

it("uses an ordinary import below Node 24 without invoking source tooling", async () => {
  Object.defineProperty(process.versions, "node", { value: "23.11.0" });
  const directory = await realpath(
    await mkdtemp(
      join(fileURLToPath(new URL("./", import.meta.url)), "maker-import-"),
    ),
  );
  directories.push(directory);
  const file = join(directory, "ontology.mjs");
  await writeFile(
    file,
    "export const url = import.meta.url; export const value = 42;",
  );
  const result = await loadOntologySource(file);
  expect(result.value).toBe(42);
  expect(result.url).toBe(pathToFileURL(file).href);
  expect(source.loadOntologySource).not.toHaveBeenCalled();
});
