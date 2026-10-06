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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { loadBrowserAliases } from "./loaders.js";

const identifier = { rid: "ri.foundry.main.dataset.0" };
const declaration = { identifier, usage: ["READ"], alias: "myDatasetAlias" };
const resources = { version: 1, resources: { datasets: [declaration] } };

function serve(body: unknown, status = 200) {
  const fetchImpl = vi.fn().mockResolvedValue(Response.json(body, { status }));
  vi.stubGlobal("fetch", fetchImpl);
  return fetchImpl;
}

beforeEach(() => {
  vi.resetModules();
  vi.stubGlobal("document", { baseURI: "https://widgets.example.com/" });
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("browser dataset aliases", () => {
  it("loads on first lookup and shares concurrent and repeated reads", async () => {
    let respond!: (response: Response) => void;
    const fetchImpl = vi.fn(
      () =>
        new Promise<Response>((resolve) => {
          respond = resolve;
        }),
    );
    vi.stubGlobal("fetch", fetchImpl);
    const { dataset: datasetForBrowser } = await import("../public/widget.js");
    expect(fetchImpl).not.toHaveBeenCalled();
    const first = datasetForBrowser("myDatasetAlias");
    const second = datasetForBrowser("myDatasetAlias");
    expect(fetchImpl).toHaveBeenCalledOnce();
    respond(Response.json(resources));
    const result = await first;
    expect(result).toEqual(identifier);
    expect(await second).toBe(result);
    expect(await datasetForBrowser("myDatasetAlias")).toBe(result);
    expect(fetchImpl).toHaveBeenCalledOnce();
    await expect(datasetForBrowser("missing")).rejects.toThrow(
      "Dataset alias 'missing' not found. Available aliases: [myDatasetAlias]",
    );
    expect(await datasetForBrowser("myDatasetAlias")).toBe(result);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it.each(["network", "HTTP", "JSON"])(
    "shares a failed %s load and retries on the next lookup",
    async (failure) => {
      const fetchImpl = serve(resources);
      if (failure === "network") {
        fetchImpl.mockRejectedValueOnce(new Error("offline"));
      } else {
        fetchImpl.mockResolvedValueOnce(
          failure === "HTTP"
            ? new Response(null, { status: 503 })
            : new Response("invalid JSON"),
        );
      }
      const { dataset: datasetForBrowser } =
        await import("../public/widget.js");
      await Promise.all([
        expect(datasetForBrowser("myDatasetAlias")).rejects.toThrow(),
        expect(datasetForBrowser("myDatasetAlias")).rejects.toThrow(),
      ]);
      expect(fetchImpl).toHaveBeenCalledOnce();
      await expect(datasetForBrowser("myDatasetAlias")).resolves.toEqual(
        identifier,
      );
      expect(fetchImpl).toHaveBeenCalledTimes(2);
    },
  );

  it("keeps successful declarations cached until the document reloads", async () => {
    const fetchImpl = serve(resources);
    const { dataset: datasetForBrowser } = await import("../public/widget.js");
    await datasetForBrowser("myDatasetAlias");
    fetchImpl.mockResolvedValue(Response.json({ version: 1 }));
    expect(await datasetForBrowser("myDatasetAlias")).toEqual(identifier);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it.each([
    ["http://localhost:8080/", "http://localhost:8080/resources.json"],
    [
      "http://localhost:8080/widgets/",
      "http://localhost:8080/widgets/resources.json",
    ],
    [
      "https://workspace.example.com/proxy/8080/",
      "https://workspace.example.com/proxy/8080/resources.json",
    ],
  ])("resolves declarations against document base %s", async (baseURI, url) => {
    vi.stubGlobal("document", { baseURI });
    const fetchImpl = serve(resources);
    await loadBrowserAliases();
    expect(fetchImpl).toHaveBeenCalledWith(url);
  });

  it.each([
    { version: 1 },
    { version: 1, resources: {} },
    { version: 1, resources: { datasets: [] } },
  ])("allows absent datasets: %j", async (body) => {
    serve(body);
    expect(Object.keys((await loadBrowserAliases()).datasets)).toEqual([]);
  });

  it("treats a 404 as an empty map", async () => {
    serve(null, 404);
    const { dataset: datasetForBrowser } = await import("../public/widget.js");
    await expect(datasetForBrowser("myDatasetAlias")).rejects.toThrow(
      "Available aliases: []",
    );
  });

  it("skips datasets with no aliases and preserves identifier fields and alias spelling", async () => {
    const id = { ...identifier, additionalMetadata: "preserved" };
    serve({
      version: 1,
      resources: {
        datasets: [
          { identifier },
          { identifier, alias: null },
          { identifier: id, alias: " Pokemon " },
          { identifier, alias: "pokemon" },
        ],
      },
    });
    expect((await loadBrowserAliases()).datasets).toEqual({
      " Pokemon ": id,
      pokemon: identifier,
    });
  });

  it("supports prototype-like aliases without inherited lookups", async () => {
    serve({
      version: 1,
      resources: {
        datasets: ["__proto__", "constructor", "toString"].map((alias) => ({
          identifier,
          alias,
        })),
      },
    });
    const { dataset: datasetForBrowser } = await import("../public/widget.js");
    expect(await datasetForBrowser("__proto__")).toEqual(identifier);
    expect(await datasetForBrowser("constructor")).toEqual(identifier);
    await expect(datasetForBrowser("hasOwnProperty")).rejects.toThrow(
      "not found",
    );
  });

  it.each(["{ invalid"])("rejects invalid JSON: %s", async (body) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(body)));
    await expect(loadBrowserAliases()).rejects.toThrow("not valid JSON");
  });

  it("rejects HTTP errors rather than exposing an empty map", async () => {
    serve(null, 403);
    await expect(loadBrowserAliases()).rejects.toThrow(
      "https://widgets.example.com/resources.json: 403",
    );
  });

  it("propagates network failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    await expect(loadBrowserAliases()).rejects.toThrow("offline");
  });
});
