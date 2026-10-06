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

import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";

describe("widget aliases entry point", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("exposes lazy, cached dataset lookup through the public namespace", async () => {
    vi.resetModules();
    const identifier = { rid: "ri.foundry.main.dataset.0" };
    const fetchImpl = vi.fn().mockResolvedValue(
      Response.json({
        version: 1,
        resources: {
          datasets: [{ identifier, alias: "myDatasetAlias", usage: ["READ"] }],
        },
      }),
    );
    vi.stubGlobal("fetch", fetchImpl);

    const { Aliases } = await import("../index.js");
    expect(Object.keys(Aliases)).toEqual(["dataset"]);
    expect(fetchImpl).not.toHaveBeenCalled();
    expectTypeOf(Aliases.dataset).returns.toEqualTypeOf<
      Promise<{ rid: string }>
    >();

    vi.stubGlobal("document", {
      baseURI: "https://widgets.example.com/proxy/8080/",
    });
    const [first, second] = await Promise.all([
      Aliases.dataset("myDatasetAlias"),
      Aliases.dataset("myDatasetAlias"),
    ]);
    expect(first).toEqual(identifier);
    expect(second).toBe(first);
    expect(await Aliases.dataset("myDatasetAlias")).toBe(first);
    expect(fetchImpl).toHaveBeenCalledOnce();
    expect(fetchImpl).toHaveBeenCalledWith(
      "https://widgets.example.com/proxy/8080/resources.json",
    );

    await expect(Aliases.dataset("missing")).rejects.toThrow(
      "Dataset alias 'missing' not found. Available aliases: [myDatasetAlias]",
    );
  });
});
