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

import assert from "node:assert/strict";
import { test } from "node:test";

import { findTransitivePeerConflicts } from "./transitivePeers.mjs";

function fixture(range = "^2.8.0") {
  const root = {
    name: "components",
    peerDependencies: { client: "^2.8.0" },
    dependencies: { core: "workspace:*" },
  };
  const core = {
    name: "core",
    dependencies: { models: "workspace:*" },
  };
  const models = { name: "models", peerDependencies: { client: range } };
  const packages = new Map([
    ["components", root],
    ["core", core],
    ["models", models],
    ["client", { name: "client", version: "2.67.0" }],
  ]);
  return { root, core, models, packages };
}

test("rejects a transitive workspace peer that raises the published minimum", () => {
  const { root, packages } = fixture("workspace:^");
  assert.deepEqual(findTransitivePeerConflicts(root, packages), [
    "components -> core -> models: client advertises ^2.8.0, but models requires ^2.67.0",
  ]);
});

test("accepts equal and broader transitive peer ranges", () => {
  for (const range of ["^2.8.0", "^2.0.0", "^2 || ^3"]) {
    const { root, packages } = fixture(range);
    assert.deepEqual(findTransitivePeerConflicts(root, packages), []);
  }
});

test("rejects overlapping ranges that exclude advertised versions", () => {
  const { root, packages } = fixture("^2.54.0");
  assert.equal(findTransitivePeerConflicts(root, packages).length, 1);
});

test("expands workspace shorthand and explicit ranges", () => {
  for (const range of ["workspace:*", "workspace:~", "workspace:^2.54.0"]) {
    const { root, packages } = fixture(range);
    assert.equal(findTransitivePeerConflicts(root, packages).length, 1);
  }
  const { root, packages } = fixture("workspace:^");
  root.peerDependencies.client = "workspace:^";
  assert.deepEqual(findTransitivePeerConflicts(root, packages), []);
});

test("ignores dev dependencies and registry versions of workspace packages", () => {
  const { root, packages } = fixture("^2.67.0");
  root.dependencies.core = "1.0.0";
  root.devDependencies = { models: "workspace:*" };
  assert.deepEqual(findTransitivePeerConflicts(root, packages), []);
});

test("checks optional dependencies and optional peers when advertised", () => {
  const { root, models, packages } = fixture("^2.67.0");
  root.dependencies = {};
  root.optionalDependencies = { models: "workspace:*" };
  models.peerDependenciesMeta = { client: { optional: true } };
  assert.equal(findTransitivePeerConflicts(root, packages).length, 1);
});

test("handles cycles and skips private consumers", () => {
  const { root, models, packages } = fixture("^2.67.0");
  models.dependencies = { core: "workspace:*", components: "workspace:*" };
  assert.equal(findTransitivePeerConflicts(root, packages).length, 1);
  root.private = true;
  assert.deepEqual(findTransitivePeerConflicts(root, packages), []);
});

test("fails clearly for an unsupported peer specifier", () => {
  const { root, packages } = fixture("catalog:");
  assert.throws(
    () => findTransitivePeerConflicts(root, packages),
    /Unsupported peer range/u,
  );
});
