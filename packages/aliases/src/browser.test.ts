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

import { afterEach, describe, expect, it, vi } from "vitest";

import {
  custom,
  DEFAULT_RESOURCES_PATH,
  initAliases,
  resetAliasesCache,
} from "./browser.js";

interface FakeResponseInit {
  ok?: boolean;
  status?: number;
  statusText?: string;
  body?: unknown;
  text?: string;
}

function fakeResponse(init: FakeResponseInit): Response {
  return {
    ok: init.ok ?? true,
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    text: () =>
      Promise.resolve(
        init.text ?? (init.body === undefined ? "" : JSON.stringify(init.body)),
      ),
  } as unknown as Response;
}

function mockFetch(init: FakeResponseInit): typeof globalThis.fetch {
  return vi.fn(() =>
    Promise.resolve(fakeResponse(init)),
  ) as unknown as typeof fetch;
}

const RESOURCES_JSON = {
  aliases: {
    custom: {
      apiBaseUrl: {
        value: "https://api.example.com",
        description: "Base URL for the partner API",
        required: true,
      },
      featureXEnabled: { value: "false" },
    },
  },
};

describe("browser aliases", () => {
  afterEach(() => {
    resetAliasesCache();
    vi.unstubAllGlobals();
  });

  describe("custom", () => {
    it("loads resources.json, ignores metadata, and returns values", async () => {
      vi.stubGlobal("fetch", mockFetch({ body: RESOURCES_JSON }));

      await expect(custom("apiBaseUrl")).resolves.toBe(
        "https://api.example.com",
      );
      await expect(custom("featureXEnabled")).resolves.toBe("false");
    });

    it("lists available aliases when a key is unknown", async () => {
      await initAliases({ fetch: mockFetch({ body: RESOURCES_JSON }) });

      await expect(custom("missing")).rejects.toThrow(
        "Custom alias 'missing' not found. Available aliases: " +
          "[apiBaseUrl, featureXEnabled]",
      );
    });

    const INHERITED_NAMES = [
      "toString",
      "constructor",
      "__proto__",
      "hasOwnProperty",
      "valueOf",
    ];

    it.each(INHERITED_NAMES)(
      "does not resolve inherited property %s",
      async (name) => {
        await initAliases({ fetch: mockFetch({ body: RESOURCES_JSON }) });

        await expect(custom(name)).rejects.toThrow(
          `Custom alias '${name}' not found`,
        );
      },
    );

    it.each(INHERITED_NAMES)("resolves a real alias named %s", async (name) => {
      await initAliases({
        fetch: mockFetch({
          body: { aliases: { custom: { [name]: { value: "real-value" } } } },
        }),
      });

      await expect(custom(name)).resolves.toBe("real-value");
    });
  });

  describe("loading", () => {
    it("fetches resources.json", async () => {
      const fetchImpl = mockFetch({ body: RESOURCES_JSON });

      await initAliases({ fetch: fetchImpl });

      expect(fetchImpl).toHaveBeenCalledOnce();
      expect(fetchImpl).toHaveBeenCalledWith(DEFAULT_RESOURCES_PATH);
    });

    it("resolves resources.json relative to document.baseURI", async () => {
      vi.stubGlobal("document", {
        baseURI: "https://example.com/apps/my-app/",
      });
      const fetchImpl = mockFetch({ body: RESOURCES_JSON });

      await initAliases({ fetch: fetchImpl });

      expect(fetchImpl).toHaveBeenCalledWith(
        "https://example.com/apps/my-app/resources.json",
      );
    });

    it("fetches only once across repeated calls", async () => {
      const fetchImpl = mockFetch({ body: RESOURCES_JSON });

      await initAliases({ fetch: fetchImpl });
      await initAliases({ fetch: fetchImpl });

      expect(fetchImpl).toHaveBeenCalledOnce();
    });

    it("deduplicates concurrent calls", async () => {
      const fetchImpl = mockFetch({ body: RESOURCES_JSON });

      await Promise.all([
        initAliases({ fetch: fetchImpl }),
        initAliases({ fetch: fetchImpl }),
        initAliases({ fetch: fetchImpl }),
      ]);

      expect(fetchImpl).toHaveBeenCalledOnce();
    });

    it("re-fetches after resetting the cache", async () => {
      const fetchImpl = mockFetch({ body: RESOURCES_JSON });

      await initAliases({ fetch: fetchImpl });
      resetAliasesCache();
      await initAliases({ fetch: fetchImpl });

      expect(fetchImpl).toHaveBeenCalledTimes(2);
    });

    it("allows retry after a failed request", async () => {
      await expect(
        initAliases({
          fetch: mockFetch({
            ok: false,
            status: 500,
            statusText: "Internal Server Error",
          }),
        }),
      ).rejects.toThrow("Failed to load aliases");

      await initAliases({ fetch: mockFetch({ body: RESOURCES_JSON }) });
      await expect(custom("apiBaseUrl")).resolves.toBe(
        "https://api.example.com",
      );
    });

    it("treats a missing resources.json as no aliases", async () => {
      await initAliases({
        fetch: mockFetch({
          ok: false,
          status: 404,
          statusText: "Not Found",
        }),
      });

      await expect(custom("anything")).rejects.toThrow("Available aliases: []");
    });

    it.each(["<!doctype html><html></html>", "  <HTML><body></body></html>"])(
      "handles an SPA fallback as a missing resources.json: %s",
      async (text) => {
        await initAliases({ fetch: mockFetch({ text }) });

        await expect(custom("anything")).rejects.toThrow(
          "Available aliases: []",
        );
      },
    );

    it("does not mistake malformed JSON for a missing file", async () => {
      await expect(
        initAliases({ fetch: mockFetch({ text: "{ not json" }) }),
      ).rejects.toThrow("not valid JSON");
    });

    it("does not mistake other markup for an SPA fallback", async () => {
      await expect(
        initAliases({
          fetch: mockFetch({
            text: "<Error><Code>AccessDenied</Code></Error>",
          }),
        }),
      ).rejects.toThrow("not valid JSON");
    });
  });

  describe("resources.json validation", () => {
    it("treats an absent aliases block as empty", async () => {
      await initAliases({ fetch: mockFetch({ body: {} }) });

      await expect(custom("anything")).rejects.toThrow("Available aliases: []");
    });

    it("treats a null aliases block as empty", async () => {
      await initAliases({ fetch: mockFetch({ body: { aliases: null } }) });

      await expect(custom("anything")).rejects.toThrow("Available aliases: []");
    });

    it("treats an absent custom block as empty", async () => {
      await initAliases({ fetch: mockFetch({ body: { aliases: {} } }) });

      await expect(custom("anything")).rejects.toThrow("Available aliases: []");
    });

    it("treats a null custom block as empty", async () => {
      await initAliases({
        fetch: mockFetch({ body: { aliases: { custom: null } } }),
      });

      await expect(custom("anything")).rejects.toThrow("Available aliases: []");
    });

    it("treats an empty custom block as empty", async () => {
      await initAliases({
        fetch: mockFetch({ body: { aliases: { custom: {} } } }),
      });

      await expect(custom("anything")).rejects.toThrow("Available aliases: []");
    });

    it.each([null, [], "not an object"])(
      "rejects a non-object file: %j",
      async (body) => {
        await expect(
          initAliases({ fetch: mockFetch({ body }) }),
        ).rejects.toThrow("expected a JSON object");
      },
    );

    it("rejects a non-object aliases block", async () => {
      await expect(
        initAliases({ fetch: mockFetch({ body: { aliases: [] } }) }),
      ).rejects.toThrow(
        `'aliases' to look like { "custom": { "myAlias": { "value": "..." } } }`,
      );
    });

    it("rejects a non-object custom block", async () => {
      await expect(
        initAliases({
          fetch: mockFetch({ body: { aliases: { custom: [] } } }),
        }),
      ).rejects.toThrow(
        `'aliases.custom' to map alias names to declarations, for example ` +
          `{ "myAlias": { "value": "..." } }`,
      );
    });

    it.each([null, [], "not an object"])(
      "rejects a non-object declaration: %j",
      async (declaration) => {
        await expect(
          initAliases({
            fetch: mockFetch({
              body: { aliases: { custom: { key: declaration } } },
            }),
          }),
        ).rejects.toThrow(
          `expected its declaration to be an object, for example ` +
            `{ "value": "..." }`,
        );
      },
    );

    it.each([
      [5, "number"],
      [true, "boolean"],
      [null, "object"],
      [{}, "object"],
      [[], "array"],
    ])("rejects non-string value %j", async (value, type) => {
      await expect(
        initAliases({
          fetch: mockFetch({
            body: { aliases: { custom: { key: { value } } } },
          }),
        }),
      ).rejects.toThrow(`Alias 'key' must be a string, got ${type}`);
    });

    it("treats a missing value as an empty string", async () => {
      await initAliases({
        fetch: mockFetch({
          body: { aliases: { custom: { needsValue: {} } } },
        }),
      });

      await expect(custom("needsValue")).resolves.toBe("");
    });
  });
});
