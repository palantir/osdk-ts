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

import { wrapWithProxy } from "@osdk/maker";

import type { OntologyV2Result } from "../api/defineOntologyV2.js";
import { defineOntologyV2 } from "../api/defineOntologyV2.js";

type MakerEntity = Parameters<typeof wrapWithProxy>[0];
type MakerPackageExports = Record<string, MakerEntity>;

export interface SimulatedPackageDependencyOptions {
  upstreamNamespace?: string;
  downstreamNamespace?: string;
}

export interface SimulatedPackageDependencyResult {
  upstream: OntologyV2Result;
  downstream: OntologyV2Result;
}

/**
 * Runs two Maker authoring sessions and exposes the first session's returned
 * entities to the second as generated Maker package exports.
 */
export async function simulatePackageDependency<
  TExports extends MakerPackageExports,
>(
  defineUpstream: () => TExports | Promise<TExports>,
  defineDownstream: (upstream: TExports) => void | Promise<void>,
  options: SimulatedPackageDependencyOptions = {},
): Promise<SimulatedPackageDependencyResult> {
  let upstreamExports: TExports | undefined;
  const upstream = await defineOntologyV2(
    options.upstreamNamespace ?? "upstream.",
    async () => {
      upstreamExports = await defineUpstream();
    },
  );
  if (upstreamExports === undefined) {
    throw new Error("Upstream package did not return its exports");
  }

  const importedExports = proxyPackageExports(upstreamExports);
  const downstream = await defineOntologyV2(
    options.downstreamNamespace ?? "downstream.",
    () => defineDownstream(importedExports),
  );

  return { upstream, downstream };
}

function proxyPackageExports<TExports extends MakerPackageExports>(
  packageExports: TExports,
): TExports {
  // wrapWithProxy preserves each entity's concrete type, but Object.fromEntries
  // cannot retain the correlation between a record key and its value type.
  return Object.fromEntries(
    Object.keys(packageExports).map((name) => [
      name,
      wrapWithProxy(packageExports[name]),
    ]),
  ) as TExports;
}
