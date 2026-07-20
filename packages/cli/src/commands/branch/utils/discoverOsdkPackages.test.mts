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

import resolvePackagePath from "resolve-package-path";
import { describe, expect, it, vi } from "vitest";

import {
  type DiscoverDeps,
  discoverOsdkPackages,
} from "./discoverOsdkPackages.mjs";

vi.mock("find-up", () => ({ findUp: vi.fn(() => "/repo/package.json") }));
vi.mock("resolve-package-path");

const PATHS: Record<string, string> = {
  "@my/sdk": "/repo/node_modules/@my/sdk/package.json",
  "@other/sdk": "/repo/node_modules/@other/sdk/package.json",
  react: "/repo/node_modules/react/package.json",
};

function deps(files: Record<string, unknown>): DiscoverDeps {
  vi.mocked(resolvePackagePath).mockImplementation(
    (name: string) => PATHS[name] ?? null
  );
  return {
    cwd: "/repo",
    readFile: vi.fn((p: string) => {
      if (!(p in files)) throw new Error(`unexpected read: ${p}`);
      return Promise.resolve(JSON.stringify(files[p]));
    }),
  };
}

describe("discoverOsdkPackages", () => {
  it("returns only immediate dependencies carrying an osdk block", async () => {
    const found = await discoverOsdkPackages(
      deps({
        "/repo/package.json": {
          dependencies: { "@my/sdk": "0.3.0", react: "18.0.0" },
        },
        "/repo/node_modules/@my/sdk/package.json": {
          name: "@my/sdk",
          version: "0.3.0",
          osdk: {},
        },
        "/repo/node_modules/react/package.json": {
          name: "react",
          version: "18.0.0",
        },
      })
    );
    expect(found).toEqual([
      {
        name: "@my/sdk",
        installedVersion: "0.3.0",
        branch: undefined,
        declaredVersion: "0.3.0",
      },
    ]);
  });

  it("captures the branch RID when the installed SDK is a branch build", async () => {
    const found = await discoverOsdkPackages(
      deps({
        "/repo/package.json": { dependencies: { "@my/sdk": "0.3.0-x" } },
        "/repo/node_modules/@my/sdk/package.json": {
          name: "@my/sdk",
          version: "0.3.0-x",
          osdk: { branch: "ri.branch..branch.abc" },
        },
      })
    );
    expect(found[0].branch).toBe("ri.branch..branch.abc");
  });

  it("skips dependencies that are not installed", async () => {
    const d = deps({
      "/repo/package.json": { dependencies: { "@my/sdk": "0.3.0" } },
    });
    vi.mocked(resolvePackagePath).mockReturnValue(null);
    expect(await discoverOsdkPackages(d)).toEqual([]);
  });

  it("does not recurse into transitive dependencies", async () => {
    const d = deps({
      "/repo/package.json": { dependencies: { "@my/sdk": "0.3.0" } },
      "/repo/node_modules/@my/sdk/package.json": {
        name: "@my/sdk",
        version: "0.3.0",
        osdk: { packageRid: "ri.p" },
        dependencies: { "@other/sdk": "1.0.0" },
      },
    });
    const found = await discoverOsdkPackages(d);
    expect(found.map((f) => f.name)).toEqual(["@my/sdk"]);
    expect(resolvePackagePath).not.toHaveBeenCalledWith(
      "@other/sdk",
      expect.anything()
    );
  });
});
