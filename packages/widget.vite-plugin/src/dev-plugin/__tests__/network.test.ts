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

import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("../getFoundryToken.js", () => ({
  getFoundryToken: vi.fn(() => "test-token"),
}));

import type { DevModeManifest } from "../buildDevModeManifest.js";
import { enableDevMode, setWidgetSetManifest } from "../network.js";

const MOCK_MANIFEST: DevModeManifest = {
  manifestVersion: "1.0.0",
  devSettings: {
    baseHref: "http://localhost:8080/",
    widgets: {},
  },
};

function getFetchedUrl(fetchMock: ReturnType<typeof vi.fn>): string {
  const arg = fetchMock.mock.calls[0][0];
  return arg instanceof URL ? arg.toString() : String(arg);
}

describe("network", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  describe.each([
    ["with trailing slash", "https://example.palantirfoundry.com/"],
    ["without trailing slash", "https://example.palantirfoundry.com"],
  ])("setWidgetSetManifest %s", (_, foundryUrl) => {
    test("fetches the expected URL", async () => {
      await setWidgetSetManifest(
        foundryUrl,
        "ri.widgetregistry..widget-set.test",
        MOCK_MANIFEST,
        undefined,
      );
      expect(getFetchedUrl(fetchMock)).toBe(
        "https://example.palantirfoundry.com/api/v2/widgets/devModeSettingsV2/setWidgetSetManifest?preview=true",
      );
    });
  });

  describe.each([
    ["with trailing slash", "https://example.palantirfoundry.com/"],
    ["without trailing slash", "https://example.palantirfoundry.com"],
  ])("enableDevMode %s", (_, foundryUrl) => {
    test("fetches the expected URL", async () => {
      await enableDevMode(foundryUrl, undefined);
      expect(getFetchedUrl(fetchMock)).toBe(
        "https://example.palantirfoundry.com/api/v2/widgets/devModeSettingsV2/enable?preview=true",
      );
    });
  });
});
