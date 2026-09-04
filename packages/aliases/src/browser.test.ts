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
  });

  describe("custom", () => {
    it("returns values from resources.json after loading", async () => {
      await initAliases({ fetch: mockFetch({ body: RESOURCES_JSON }) });

      expect(custom("apiBaseUrl")).toBe("https://api.example.com");
      expect(custom("featureXEnabled")).toBe("false");
    });

    it("throws before loading", () => {
      expect(() => custom("apiBaseUrl")).toThrow(
        "Aliases have not been initialized",
      );
    });

    it("lists available aliases when a key is unknown", async () => {
      await initAliases({ fetch: mockFetch({ body: RESOURCES_JSON }) });

      expect(() => custom("missing")).toThrow(
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

        expect(() => custom(name)).toThrow(`Custom alias '${name}' not found`);
      },
    );

    it.each(INHERITED_NAMES)("resolves a real alias named %s", async (name) => {
      await initAliases({
        fetch: mockFetch({
          body: { aliases: { custom: { [name]: { value: "real-value" } } } },
        }),
      });

      expect(custom(name)).toBe("real-value");
    });
  });

  describe("loading", () => {
    it("fetches root resources.json", async () => {
      const fetchImpl = mockFetch({ body: RESOURCES_JSON });

      await initAliases({ fetch: fetchImpl });

      expect(fetchImpl).toHaveBeenCalledOnce();
      expect(String(vi.mocked(fetchImpl).mock.calls[0][0])).toContain(
        DEFAULT_RESOURCES_PATH,
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
      expect(custom("apiBaseUrl")).toBe("https://api.example.com");
    });

    it("treats a missing resources.json as no aliases", async () => {
      await initAliases({
        fetch: mockFetch({
          ok: false,
          status: 404,
          statusText: "Not Found",
        }),
      });

      expect(() => custom("anything")).toThrow("Available aliases: []");
    });

    it("handles an SPA fallback as a missing resources.json", async () => {
      await initAliases({
        fetch: mockFetch({ text: "<!doctype html><html></html>" }),
      });

      expect(() => custom("anything")).toThrow("Available aliases: []");
    });

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

      expect(() => custom("anything")).toThrow("Available aliases: []");
    });

    it("treats an absent custom block as empty", async () => {
      await initAliases({ fetch: mockFetch({ body: { aliases: {} } }) });

      expect(() => custom("anything")).toThrow("Available aliases: []");
    });

    it("treats an empty custom block as empty", async () => {
      await initAliases({
        fetch: mockFetch({ body: { aliases: { custom: {} } } }),
      });

      expect(() => custom("anything")).toThrow("Available aliases: []");
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
      ).rejects.toThrow("'aliases' must be an object in resources.json");
    });

    it("rejects a non-object custom block", async () => {
      await expect(
        initAliases({
          fetch: mockFetch({ body: { aliases: { custom: [] } } }),
        }),
      ).rejects.toThrow("'aliases.custom' must be an object");
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
        ).rejects.toThrow("declaration must be an object");
      },
    );

    it("rejects a non-string value", async () => {
      await expect(
        initAliases({
          fetch: mockFetch({
            body: { aliases: { custom: { key: { value: 5 } } } },
          }),
        }),
      ).rejects.toThrow("Alias 'key' must be a string, got number");
    });

    it("ignores declaration metadata", async () => {
      await initAliases({ fetch: mockFetch({ body: RESOURCES_JSON }) });

      expect(custom("apiBaseUrl")).toBe("https://api.example.com");
    });

    it("treats a missing value as an empty string", async () => {
      await initAliases({
        fetch: mockFetch({
          body: { aliases: { custom: { needsValue: {} } } },
        }),
      });

      expect(custom("needsValue")).toBe("");
    });
  });
});
