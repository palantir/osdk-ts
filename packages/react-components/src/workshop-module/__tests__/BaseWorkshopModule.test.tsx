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

/** @vitest-environment-options {"settings":{"disableIframePageLoading":true}} */

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it } from "vitest";

import { BaseWorkshopModule } from "../BaseWorkshopModule.js";

afterEach(cleanup);

describe("BaseWorkshopModule", () => {
  it("rejects a JavaScript URL even when it accepts a relative path", () => {
    // oxlint-disable-next-line no-script-url -- exercises rejection of executable iframe URLs
    const foundryUrl = "javascript://example%0a%20alert(1)%3b%2f%2f";
    expect(() =>
      renderToStaticMarkup(
        <BaseWorkshopModule
          foundryUrl={foundryUrl}
          moduleRid="ri.workshop.main.module.example"
          moduleVersion="latest"
        />,
      ),
    ).toThrow("Foundry URL must use http or https.");
  });

  it.each([
    { moduleVersion: "latest", pathVersion: "dev" },
    { moduleVersion: "published", pathVersion: "latest" },
  ] as const)(
    "renders the $moduleVersion module at the Foundry origin in embedded mode",
    ({ moduleVersion, pathVersion }) => {
      render(
        <BaseWorkshopModule
          foundryUrl="https://foundry.example.com/api/v2/?ignored=true#ignored"
          moduleRid="ri.workshop.main.module.example"
          moduleVersion={moduleVersion}
        />,
      );

      expect(screen.getByTitle("Workshop module").getAttribute("src")).toBe(
        `https://foundry.example.com/workspace/module/view/${pathVersion}/ri.workshop.main.module.example?embedded=true`,
      );
    },
  );

  it("keeps the initial theme while navigating to another module", () => {
    const { rerender } = render(
      <BaseWorkshopModule
        foundryUrl="https://foundry.example.com"
        moduleRid="ri.workshop.main.module.example"
        defaultTheme="dark"
      />,
    );

    rerender(
      <BaseWorkshopModule
        foundryUrl="https://foundry.example.com"
        moduleRid="ri.workshop.main.module.other"
        defaultTheme="light"
      />,
    );

    expect(screen.getByTitle("Workshop module").getAttribute("src")).toBe(
      "https://foundry.example.com/workspace/module/view/latest/ri.workshop.main.module.other?embedded=true&themeOverride=DARK_MODE",
    );
  });
});
