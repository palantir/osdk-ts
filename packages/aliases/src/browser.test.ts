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

import {
  custom,
  DEFAULT_DECLARATIONS_PATH,
  DEFAULT_DEPLOYMENT_CONFIG_PATH,
  initAliases,
  resetAliasesCache,
} from "./browser.js";

interface FakeResponseInit {
  ok?: boolean;
  status?: number;
  statusText?: string;
  /** Served as the response body, JSON-encoded. */
  body?: unknown;
  /** Raw response body. Takes precedence over `body`. */
  text?: string;
  contentType?: string;
}

function fakeResponse(init: FakeResponseInit): Response {
  const contentType = init.contentType ?? "application/json";
  return {
    ok: init.ok ?? true,
    status: init.status ?? 200,
    statusText: init.statusText ?? "OK",
    headers: {
      get: (h: string) =>
        h.toLowerCase() === "content-type" ? contentType : null,
    },
    text: () =>
      Promise.resolve(
        init.text ?? (init.body === undefined ? "" : JSON.stringify(init.body)),
      ),
  } as unknown as Response;
}

const INDEX_HTML = "<!doctype html>\n<html><body></body></html>";

/** A single-page-app host answering 200 with index.html for an unknown path. */
const SPA_FALLBACK: FakeResponseInit = {
  contentType: "text/html",
  text: INDEX_HTML,
};

function mockFetch(init: FakeResponseInit): typeof globalThis.fetch {
  return vi.fn(() =>
    Promise.resolve(fakeResponse(init)),
  ) as unknown as typeof fetch;
}

/**
 * Serves a different response per path, so the 404 fallback can be exercised.
 * Any path not listed responds 404.
 */
function mockFetchByPath(
  responses: Record<string, FakeResponseInit>,
): typeof globalThis.fetch {
  return vi.fn((input: unknown) => {
    const url = String(input);
    const match = Object.entries(responses).find(([path]) =>
      url.endsWith(path),
    );
    return Promise.resolve(
      fakeResponse(
        match?.[1] ?? { ok: false, status: 404, statusText: "Not Found" },
      ),
    );
  }) as unknown as typeof fetch;
}

const CONFIG_WITH_ALIASES = {
  clientId: "client-123",
  foundryUrl: "https://foundry.example.com",
  aliases: JSON.stringify({
    apiBaseUrl: "https://api.prod.internal",
    featureXEnabled: "false",
  }),
};

// The author-maintained declaration file, as served from public/ in dev.
const DECLARATIONS_FILE = {
  aliases: {
    custom: {
      apiBaseUrl: {
        value: "https://api.dev.example.com",
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
    it("returns a resolved alias after init", async () => {
      const fetchImpl = mockFetch({ body: CONFIG_WITH_ALIASES });
      await initAliases({ fetch: fetchImpl });

      expect(custom("apiBaseUrl")).toBe("https://api.prod.internal");
      expect(custom("featureXEnabled")).toBe("false");
    });

    it("throws before init", () => {
      expect(() => custom("apiBaseUrl")).toThrow(
        "Aliases have not been initialized",
      );
    });

    it("throws on unknown alias with available list", async () => {
      await initAliases({ fetch: mockFetch({ body: CONFIG_WITH_ALIASES }) });

      expect(() => custom("nonexistent")).toThrow(
        "Custom alias 'nonexistent' not found. Available aliases: " +
          "[apiBaseUrl, featureXEnabled]",
      );
    });

    it("treats a config with no aliases key as empty", async () => {
      await initAliases({
        fetch: mockFetch({ body: { clientId: "client-123" } }),
      });

      expect(() => custom("anything")).toThrow(
        "Custom alias 'anything' not found. Available aliases: []",
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
      async (inherited) => {
        await initAliases({ fetch: mockFetch({ body: CONFIG_WITH_ALIASES }) });

        expect(() => custom(inherited)).toThrow(
          `Custom alias '${inherited}' not found`,
        );
      },
    );

    it.each(INHERITED_NAMES)(
      "resolves a real alias named %s from the deployment config",
      async (name) => {
        await initAliases({
          fetch: mockFetch({
            body: { aliases: JSON.stringify({ [name]: "real-value" }) },
          }),
        });

        expect(custom(name)).toBe("real-value");
      },
    );

    it.each(INHERITED_NAMES)(
      "resolves a real alias named %s from the declaration file",
      async (name) => {
        await initAliases({
          fetch: mockFetchByPath({
            [DEFAULT_DECLARATIONS_PATH]: {
              body: {
                aliases: { custom: { [name]: { value: "real-value" } } },
              },
            },
          }),
        });

        expect(custom(name)).toBe("real-value");
      },
    );
  });

  describe("initAliases", () => {
    it("fetches only once across repeated calls", async () => {
      const fetchImpl = mockFetch({ body: CONFIG_WITH_ALIASES });
      await initAliases({ fetch: fetchImpl });
      await initAliases({ fetch: fetchImpl });
      custom("apiBaseUrl");

      expect(fetchImpl).toHaveBeenCalledTimes(1);
    });

    it("deduplicates concurrent calls into a single fetch", async () => {
      const fetchImpl = mockFetch({ body: CONFIG_WITH_ALIASES });
      await Promise.all([
        initAliases({ fetch: fetchImpl }),
        initAliases({ fetch: fetchImpl }),
        initAliases({ fetch: fetchImpl }),
      ]);

      expect(fetchImpl).toHaveBeenCalledTimes(1);
    });

    it("re-fetches after resetAliasesCache", async () => {
      const fetchImpl = mockFetch({ body: CONFIG_WITH_ALIASES });
      await initAliases({ fetch: fetchImpl });
      resetAliasesCache();
      await initAliases({ fetch: fetchImpl });

      expect(fetchImpl).toHaveBeenCalledTimes(2);
    });

    it("throws and allows retry on a non-ok response", async () => {
      // A 500 rather than a 404: a 404 means "absent" and triggers the fallback,
      // while a server error is a genuine failure that should surface.
      const failing = mockFetch({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      });
      await expect(initAliases({ fetch: failing })).rejects.toThrow(
        "Failed to load aliases",
      );

      // A subsequent successful init should work (in-flight was cleared).
      await initAliases({ fetch: mockFetch({ body: CONFIG_WITH_ALIASES }) });
      expect(custom("apiBaseUrl")).toBe("https://api.prod.internal");
    });

    it("throws when the aliases blob is not valid JSON", async () => {
      await expect(
        initAliases({ fetch: mockFetch({ body: { aliases: "{not json" } }) }),
      ).rejects.toThrow("Failed to parse resolved aliases");
    });

    it("defaults to the deployment config path", async () => {
      const fetchImpl = mockFetch({ body: CONFIG_WITH_ALIASES });
      await initAliases({ fetch: fetchImpl });

      expect(fetchImpl).toHaveBeenCalledTimes(1);
      expect(String(vi.mocked(fetchImpl).mock.calls[0][0])).toContain(
        DEFAULT_DEPLOYMENT_CONFIG_PATH,
      );
    });
  });

  // No environment detection: the deployment config only exists on an installed
  // site, so a 404 (and only a 404) means "use the author's declared defaults".
  describe("fallback when the deployment config is absent", () => {
    let warn: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    });

    afterEach(() => {
      warn.mockRestore();
    });

    it("uses declared defaults when the deployment config 404s", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
        }),
      });

      expect(custom("apiBaseUrl")).toBe("https://api.dev.example.com");
      expect(warn).toHaveBeenCalledOnce();
    });

    it("prefers the deployment config when both files exist", async () => {
      // Both are served in production, so the installer's values must win.
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DEPLOYMENT_CONFIG_PATH]: { body: CONFIG_WITH_ALIASES },
          [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
        }),
      });

      expect(custom("apiBaseUrl")).toBe("https://api.prod.internal");
      expect(warn).not.toHaveBeenCalled();
    });

    it("throws on a server error instead of degrading to defaults", async () => {
      // The dangerous case: a transient failure must not silently swap the
      // installer's values for the developer's defaults.
      await expect(
        initAliases({
          fetch: mockFetchByPath({
            [DEFAULT_DEPLOYMENT_CONFIG_PATH]: {
              ok: false,
              status: 500,
              statusText: "Internal Server Error",
            },
            [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
          }),
        }),
      ).rejects.toThrow("Failed to load aliases");
    });

    it("treats both files missing as no aliases rather than an error", async () => {
      await initAliases({ fetch: mockFetchByPath({}) });

      expect(() => custom("anything")).toThrow("Available aliases: []");
    });

    // A dev server or static host rewrites unknown paths to index.html and
    // answers 200, so absence does not always look like a 404.
    it("falls back when the host serves index.html instead of 404ing", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DEPLOYMENT_CONFIG_PATH]: SPA_FALLBACK,
          [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
        }),
      });

      expect(custom("apiBaseUrl")).toBe("https://api.dev.example.com");
      expect(warn).toHaveBeenCalledOnce();
    });

    // Foundry website hosting types responses from the file extension and does
    // not recognize .json, so the rewritten index.html can arrive without an
    // html content type. Absence must still be detected from the body alone.
    it("falls back on markup served without an html content type", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DEPLOYMENT_CONFIG_PATH]: {
            contentType: "application/octet-stream",
            text: INDEX_HTML,
          },
          [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
        }),
      });

      expect(custom("apiBaseUrl")).toBe("https://api.dev.example.com");
    });

    it("does not mistake malformed JSON for an absent file", async () => {
      // Neither markup nor valid JSON: a real error, not a missing file, so it
      // must surface rather than silently falling back to defaults.
      await expect(
        initAliases({
          fetch: mockFetchByPath({
            [DEFAULT_DEPLOYMENT_CONFIG_PATH]: { text: "{ not json" },
            [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
          }),
        }),
      ).rejects.toThrow("not valid JSON");
    });
  });

  // Dev mode: the declaration file nests values under aliases.custom, so the
  // loader has to flatten it. Prod and dev are told apart by the runtime type of
  // `aliases` (string vs object), never by falling back between paths.
  describe("value validation", () => {
    it("rejects a non-string resolved value", async () => {
      await expect(
        initAliases({
          fetch: mockFetch({ body: { aliases: '{"apiBaseUrl":5}' } }),
        }),
      ).rejects.toThrow("Alias 'apiBaseUrl' must be a string, got number");
    });

    it("rejects a nested object resolved value", async () => {
      await expect(
        initAliases({
          fetch: mockFetch({ body: { aliases: '{"apiBaseUrl":{"a":1}}' } }),
        }),
      ).rejects.toThrow("must be a string, got object");
    });

    it("rejects a non-string declared default", async () => {
      await expect(
        initAliases({
          fetch: mockFetchByPath({
            [DEFAULT_DECLARATIONS_PATH]: {
              body: { aliases: { custom: { apiBaseUrl: { value: 5 } } } },
            },
          }),
        }),
      ).rejects.toThrow("must be a string, got number");
    });
  });

  describe("absence detection", () => {
    it("does not treat a non-html markup body as absent", async () => {
      await expect(
        initAliases({
          fetch: mockFetchByPath({
            [DEFAULT_DEPLOYMENT_CONFIG_PATH]: {
              text: "<Error><Code>AccessDenied</Code></Error>",
            },
            [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
          }),
        }),
      ).rejects.toThrow("not valid JSON");
    });

    it("treats an html document as absent", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DEPLOYMENT_CONFIG_PATH]: { text: INDEX_HTML },
          [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
        }),
      });

      expect(custom("apiBaseUrl")).toBe("https://api.dev.example.com");
    });
  });

  describe("declaration file (dev) shape", () => {
    it("flattens declared defaults", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
        }),
      });

      expect(custom("apiBaseUrl")).toBe("https://api.dev.example.com");
      expect(custom("featureXEnabled")).toBe("false");
    });

    it("ignores description and required metadata", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DECLARATIONS_PATH]: { body: DECLARATIONS_FILE },
        }),
      });

      // Metadata is for packaging, not the browser: only values come through.
      expect(custom("apiBaseUrl")).not.toContain("Base URL");
    });

    it("treats an alias with no value as empty rather than throwing", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DECLARATIONS_PATH]: {
            body: { aliases: { custom: { needsValue: {} } } },
          },
        }),
      });

      expect(custom("needsValue")).toBe("");
    });

    it("treats an empty custom block as no aliases", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DECLARATIONS_PATH]: {
            body: { aliases: { custom: {} } },
          },
        }),
      });

      expect(() => custom("anything")).toThrow("Available aliases: []");
    });

    it("treats a file with no custom block as no aliases", async () => {
      await initAliases({
        fetch: mockFetchByPath({
          [DEFAULT_DECLARATIONS_PATH]: { body: { aliases: {} } },
        }),
      });

      expect(() => custom("anything")).toThrow("Available aliases: []");
    });

    it("throws when aliases.custom is not an object", async () => {
      await expect(
        initAliases({
          fetch: mockFetchByPath({
            [DEFAULT_DECLARATIONS_PATH]: {
              body: { aliases: { custom: ["nope"] } },
            },
          }),
        }),
      ).rejects.toThrow("'aliases.custom' must be an object");
    });
  });
});
