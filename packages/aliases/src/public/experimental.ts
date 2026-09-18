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

import type { Custom } from "../types.js";

declare const process: {
  env: { TARGET: "browser" | "node" | undefined };
};

/**
 * Browser builds retrieve aliases from the `resources.json` served with the
 * website. Functions builds retrieve aliases from runtime-provided filesystem
 * configuration. TARGET is replaced at build time, so only the implementation
 * for that build target remains.
 */
const custom: (alias: string) => Promise<Custom> =
  process.env.TARGET === "browser"
    ? async function customForBrowser(alias) {
        const { custom: customFromResources } = await import("../browser.js");
        return await customFromResources(alias);
      }
    : async function customForFunctions(alias) {
        const { custom: customForNode } = await import("../custom.js");
        return customForNode(alias);
      };

export const Aliases: {
  /**
   * Returns the resolved value for a custom alias.
   *
   * @experimental Custom aliases and the shape of this API are provisional and
   * may change.
   */
  readonly custom: typeof custom;
} = {
  custom,
};

export type { Custom } from "../types.js";
