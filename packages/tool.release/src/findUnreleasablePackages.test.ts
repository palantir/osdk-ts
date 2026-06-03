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

import type { Package } from "@manypkg/get-packages";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import {
  findUnreleasablePackagesFromList,
  markPackagesPrivate,
} from "./findUnreleasablePackages.js";

function mkPkg(
  name: string,
  opts: { private?: boolean; version?: string; dir?: string } = {},
): Package {
  return {
    dir: opts.dir ?? `/faux/${name}`,
    packageJson: {
      name,
      version: opts.version ?? "1.0.0",
      private: opts.private,
    },
  };
}

describe("findUnreleasablePackagesFromList", () => {
  it("skips packages marked private", async () => {
    const packages = [
      mkPkg("@osdk/private-thing", { private: true }),
    ];
    const lookup = async () => new Set<string>();

    const result = await findUnreleasablePackagesFromList(packages, lookup);

    expect(result).toEqual([]);
  });

  it("skips public packages that already have npm versions", async () => {
    const packages = [mkPkg("@osdk/published")];
    const lookup = async () => new Set(["1.0.0", "0.9.0"]);

    const result = await findUnreleasablePackagesFromList(packages, lookup);

    expect(result).toEqual([]);
  });

  it("flags public packages with no npm versions", async () => {
    const packages = [
      mkPkg("@osdk/brand-new", { dir: "/faux/brand-new", version: "0.1.0" }),
    ];
    const lookup = async () => new Set<string>();

    const result = await findUnreleasablePackagesFromList(packages, lookup);

    expect(result).toEqual([
      { name: "@osdk/brand-new", dir: "/faux/brand-new", version: "0.1.0" },
    ]);
  });

  it("partitions a mixed set correctly", async () => {
    const packages = [
      mkPkg("@osdk/published"),
      mkPkg("@osdk/private-thing", { private: true }),
      mkPkg("@osdk/brand-new", { dir: "/faux/brand-new", version: "0.1.0" }),
    ];
    const lookup = async (name: string) =>
      name === "@osdk/published" ? new Set(["1.0.0"]) : new Set<string>();

    const result = await findUnreleasablePackagesFromList(packages, lookup);

    expect(result.map((p) => p.name)).toEqual(["@osdk/brand-new"]);
  });

  it("treats transient lookup errors as assume-published (does not flag)", async () => {
    const packages = [mkPkg("@osdk/registry-flaky")];
    const lookup = async () => {
      throw new Error("ECONNRESET");
    };

    const result = await findUnreleasablePackagesFromList(packages, lookup);

    expect(result).toEqual([]);
  });
});

describe("markPackagesPrivate", () => {
  let tmpRoot: string;

  beforeEach(async () => {
    tmpRoot = await mkdtemp(join(tmpdir(), "find-unreleasable-test-"));
  });

  it("rewrites package.json with private: true and preserves trailing newline", async () => {
    const pkgJsonPath = join(tmpRoot, "package.json");
    const initial = JSON.stringify(
      { name: "@osdk/brand-new", version: "0.1.0" },
      null,
      2,
    ) + "\n";
    await writeFile(pkgJsonPath, initial);

    await markPackagesPrivate([
      { name: "@osdk/brand-new", dir: tmpRoot, version: "0.1.0" },
    ]);

    const rewritten = await readFile(pkgJsonPath, "utf-8");
    expect(rewritten.endsWith("\n")).toBe(true);
    expect(JSON.parse(rewritten)).toEqual({
      name: "@osdk/brand-new",
      version: "0.1.0",
      private: true,
    });
  });

  it("preserves the absence of a trailing newline", async () => {
    const pkgJsonPath = join(tmpRoot, "package.json");
    const initial = JSON.stringify(
      { name: "@osdk/brand-new", version: "0.1.0" },
      null,
      2,
    );
    await writeFile(pkgJsonPath, initial);

    await markPackagesPrivate([
      { name: "@osdk/brand-new", dir: tmpRoot, version: "0.1.0" },
    ]);

    const rewritten = await readFile(pkgJsonPath, "utf-8");
    expect(rewritten.endsWith("\n")).toBe(false);
  });
});
