/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ViteDevServer } from "vite";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { extractWidgetConfig } from "../extractWidgetConfig.js";
import * as validateWidgetConfigModule from "../validateWidgetConfig.js";

const MOCK_SERVER = {
  ssrLoadModule: vi.fn(),
} as unknown as ViteDevServer;

describe("extractWidgetConfig", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("extracts valid widget configuration", async () => {
    vi.mocked(MOCK_SERVER.ssrLoadModule).mockResolvedValue({
      default: MOCK_CONFIG,
    });

    const validateSpy = vi.spyOn(
      validateWidgetConfigModule,
      "validateWidgetConfig",
    );

    const result = await extractWidgetConfig("/path/to/config.ts", MOCK_SERVER);
    expect(result).toEqual(MOCK_CONFIG);
    expect(validateSpy).toHaveBeenCalledWith(MOCK_CONFIG);
  });

  test("throws for invalid widget configuration", async () => {
    const INVALID_CONFIG = {
      id: "Invalid-Id", // Invalid ID format
      name: "Test Widget",
      type: "workshop",
      parameters: {},
    };

    vi.mocked(MOCK_SERVER.ssrLoadModule).mockResolvedValue({
      default: INVALID_CONFIG,
    });

    vi.spyOn(validateWidgetConfigModule, "validateWidgetConfig")
      .mockImplementation(config => {
        throw new Error(
          `Widget id "${config.id}" does not match allowed pattern (must be camelCase)`,
        );
      });

    await expect(extractWidgetConfig("/path/to/config.ts", MOCK_SERVER))
      .rejects.toThrow(
        expect.objectContaining({
          message: "Failed to load widget config from /path/to/config.ts",
          cause: expect.objectContaining({
            message:
              `Widget id "Invalid-Id" does not match allowed pattern (must be camelCase)`,
          }),
        }),
      );
  });

  test("throws for missing default export", async () => {
    vi.mocked(MOCK_SERVER.ssrLoadModule).mockResolvedValue({
      notDefault: { id: "test" },
    });

    await expect(extractWidgetConfig("/path/to/config.ts", MOCK_SERVER))
      .rejects.toThrow(
        expect.objectContaining({
          message: "Failed to load widget config from /path/to/config.ts",
          cause: expect.objectContaining({
            message: "No default export found in /path/to/config.ts",
          }),
        }),
      );
  });

  test("throws for invalid module path", async () => {
    vi.mocked(MOCK_SERVER.ssrLoadModule).mockRejectedValue(
      new Error("Module loading failed"),
    );

    await expect(extractWidgetConfig("/invalid/path/config.ts", MOCK_SERVER))
      .rejects.toThrow("Failed to load widget config");
  });
});

const MOCK_CONFIG = {
  id: "testWidget",
  name: "Test Widget",
  description: "A test widget",
  type: "workshop",
  parameters: {
    paramOne: {
      displayName: "Parameter One",
      type: "string",
    },
    paramTwo: {
      displayName: "Parameter Two",
      type: "string",
    },
  },
  events: {
    updateParameters: {
      displayName: "Update Parameters",
      parameterUpdateIds: ["paramOne", "paramTwo"],
    },
  },
};
