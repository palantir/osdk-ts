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

import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";
import { act, cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import { OsdkThemeProvider } from "../../theme/OsdkThemeProvider.js";
import { WorkshopModule } from "../WorkshopModule.js";

const client = createClient(
  "https://provider.example.com/",
  "ri.ontology.main.ontology.example",
  () => Promise.resolve("test-token"),
);
const initialUrl = window.location.href;

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  window.history.replaceState(null, "", initialUrl);
});

describe("WorkshopModule", () => {
  it("uses the client's Foundry origin and defaults to the published version", () => {
    render(
      <OsdkProvider client={client}>
        <WorkshopModule
          moduleRid="ri.workshop.main.module.example"
          title="Embedded dashboard"
        />
      </OsdkProvider>,
    );

    expect(screen.getByTitle("Embedded dashboard").getAttribute("src")).toBe(
      "https://provider.example.com/workspace/module/view/latest/ri.workshop.main.module.example?embedded=true&foundry-branch-rid=",
    );
  });

  it.each([
    [undefined, "ri.branch..branch.from-url"],
    ["ri.branch..branch.explicit", "ri.branch..branch.explicit"],
    [null, ""],
  ])(
    "inherits the client's resolved branch with option %s",
    (branch, expected) => {
      window.history.replaceState(
        null,
        "",
        "?foundryBranchRid=ri.branch..branch.from-url",
      );
      const branchClient = createClient(
        "https://provider.example.com",
        "ri.ontology.main.ontology.example",
        () => Promise.resolve("test-token"),
        { UNSTABLE_DO_NOT_USE_BRANCH: branch },
      );
      window.history.replaceState(
        null,
        "",
        "?foundryBranchRid=ri.branch..branch.another",
      );
      const workshopModule = (
        <WorkshopModule moduleRid="ri.workshop.main.module.example" />
      );
      const { rerender } = render(
        <OsdkProvider client={branchClient}>{workshopModule}</OsdkProvider>,
      );
      const iframe = screen.getByTitle<HTMLIFrameElement>("Workshop module");
      expect(new URL(iframe.src).searchParams.get("foundry-branch-rid")).toBe(
        expected,
      );

      rerender(<OsdkProvider client={client}>{workshopModule}</OsdkProvider>);
      expect(screen.getByTitle("Workshop module")).toBe(iframe);
      expect(new URL(iframe.src).searchParams.get("foundry-branch-rid")).toBe(
        "",
      );
    },
  );

  it.each(["light", "dark"] as const)(
    "inherits the initial %s theme without reloading when the provider changes",
    (theme) => {
      const workshopModule = (
        <OsdkProvider client={client}>
          <WorkshopModule moduleRid="ri.workshop.main.module.example" />
        </OsdkProvider>
      );
      const { rerender } = render(
        <OsdkThemeProvider theme={theme}>{workshopModule}</OsdkThemeProvider>,
      );
      const iframe = screen.getByTitle<HTMLIFrameElement>("Workshop module");
      const initialSrc = iframe.src;

      expect(new URL(initialSrc).searchParams.get("themeOverride")).toBe(
        theme === "dark" ? "DARK_MODE" : "LIGHT_MODE",
      );

      rerender(
        <OsdkThemeProvider theme={theme === "dark" ? "light" : "dark"}>
          {workshopModule}
        </OsdkThemeProvider>,
      );

      expect(screen.getByTitle("Workshop module")).toBe(iframe);
      expect(iframe.src).toBe(initialSrc);
    },
  );

  it("defers iframe loading until the browser's system theme is resolved", () => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    Object.defineProperty(mediaQueryList, "matches", {
      configurable: true,
      value: true,
    });
    vi.spyOn(window, "matchMedia").mockReturnValue(mediaQueryList);

    const workshopModule = (
      <OsdkProvider client={client}>
        <OsdkThemeProvider>
          <WorkshopModule moduleRid="ri.workshop.main.module.example" />
        </OsdkThemeProvider>
      </OsdkProvider>
    );
    const container = document.createElement("div");
    container.innerHTML = renderToString(workshopModule);
    document.body.append(container);
    const initialIframe = container.querySelector("iframe");
    expect(initialIframe?.hasAttribute("src")).toBe(false);
    expect(initialIframe?.hidden).toBe(true);

    const onRecoverableError = vi.fn();
    render(workshopModule, { container, hydrate: true, onRecoverableError });

    const iframe = screen.getByTitle<HTMLIFrameElement>("Workshop module");
    expect(iframe).toBe(initialIframe);
    expect(iframe.hidden).toBe(false);
    const initialSrc = iframe.src;
    expect(new URL(initialSrc).searchParams.get("themeOverride")).toBe(
      "DARK_MODE",
    );
    expect(onRecoverableError).not.toHaveBeenCalled();

    act(() => {
      Object.defineProperty(mediaQueryList, "matches", { value: false });
      mediaQueryList.dispatchEvent(new Event("change"));
    });

    expect(iframe.src).toBe(initialSrc);
  });
});
