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

import type { Custom, Workshop } from "../types.js";

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
    ? async (alias) => {
        const { customForBrowser } = await import("../aliasesForBrowser.js");
        return await customForBrowser(alias);
      }
    : async (alias) => {
        const { customForNode } = await import("../customForNode.js");
        return customForNode(alias);
      };

const workshop: (alias: string) => Promise<Workshop> =
  process.env.TARGET === "browser"
    ? async (alias) => {
        const { workshopForBrowser } = await import("../aliasesForBrowser.js");
        return await workshopForBrowser(alias);
      }
    : () =>
        Promise.reject(
          new Error("Workshop aliases are only supported in browser builds."),
        );

export const Aliases: {
  /**
   * Returns the resolved value for a custom alias.
   *
   * @experimental Custom aliases and the shape of this API are provisional and
   * may change.
   */
  readonly custom: typeof custom;
  /**
   * Returns the Workshop module RID from the website's `aliases.workshops`
   * declarations. Supported in browser builds only.
   *
   * @experimental Workshop aliases and the shape of this API are provisional
   * and may change.
   */
  readonly workshop: typeof workshop;
} = {
  custom,
  workshop,
};

export type { Custom, Workshop } from "../types.js";
