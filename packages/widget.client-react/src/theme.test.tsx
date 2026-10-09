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

import {
  defineConfig,
  FoundryHostEventTarget,
  type HostMessage,
} from "@osdk/widget.client";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { FoundryWidget } from "./client.js";
import { useFoundryWidgetContext } from "./context.js";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

const TOKEN = "--bp-surface-border-radius";

const config = defineConfig({
  id: "themeTest",
  name: "Theme test",
  type: "workshop",
  parameters: {},
  events: {},
});

function ThemeDisplay() {
  const { theme } = useFoundryWidgetContext<typeof config>();
  return <span>{JSON.stringify(theme) ?? "default"}</span>;
}

describe("host theme integration", () => {
  let host: EventTarget & { sendMessage: ReturnType<typeof vi.fn> };
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    host = Object.assign(new EventTarget(), { sendMessage: vi.fn() });
    vi.stubGlobal("__PALANTIR_WIDGET_API__", host);
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    document.documentElement.style.removeProperty(TOKEN);
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  function mount() {
    act(() => {
      root.render(
        <FoundryWidget config={config}>
          <ThemeDisplay />
        </FoundryWidget>,
      );
    });
  }

  function sendTheme(theme: HostMessage.ThemeV1 | undefined) {
    host.dispatchEvent(
      new CustomEvent("message", {
        detail: { type: "host.update-theme", payload: { theme } },
      }),
    );
  }

  it("receives the theme sent in response to widget.ready", () => {
    const theme: HostMessage.ThemeV1 = { version: 1, borderRadius: "SQUARE" };
    host.sendMessage.mockImplementation((message) => {
      if (message.type === "widget.ready") {
        sendTheme(theme);
      }
    });

    mount();

    expect(container.textContent).toBe(JSON.stringify(theme));
    expect(document.documentElement.style.getPropertyValue(TOKEN)).toBe("0px");
    expect(container.firstElementChild?.tagName).toBe("SPAN");
  });

  it("updates and clears the theme through the real widget client", () => {
    mount();
    expect(container.textContent).toBe("default");

    for (const [borderRadius, radius] of [
      ["SQUARE", "0px"],
      ["REGULAR", "4px"],
      ["ROUNDED", "8px"],
    ] as const) {
      const theme: HostMessage.ThemeV1 = { version: 1, borderRadius };
      act(() => sendTheme(theme));
      expect(container.textContent).toBe(JSON.stringify(theme));
      expect(document.documentElement.style.getPropertyValue(TOKEN)).toBe(
        radius,
      );
    }

    act(() => sendTheme({ version: 1 }));
    expect(document.documentElement.style.getPropertyValue(TOKEN)).toBe("");
    act(() => sendTheme({ version: 1, borderRadius: "ROUNDED" }));
    act(() => sendTheme(undefined));
    expect(container.textContent).toBe("default");
    expect(document.documentElement.style.getPropertyValue(TOKEN)).toBe("");
  });

  it("restores pre-existing inline tokens on clearing and unmount", () => {
    const style = document.documentElement.style;
    style.setProperty(TOKEN, "12px", "important");
    mount();
    expect(style.getPropertyValue(TOKEN)).toBe("12px");

    act(() => sendTheme({ version: 1, borderRadius: "SQUARE" }));
    expect(style.getPropertyValue(TOKEN)).toBe("0px");
    act(() => sendTheme(undefined));
    expect(style.getPropertyValue(TOKEN)).toBe("12px");
    expect(style.getPropertyPriority(TOKEN)).toBe("important");

    act(() => sendTheme({ version: 1, borderRadius: "ROUNDED" }));
    act(() => root.render(null));
    expect(style.getPropertyValue(TOKEN)).toBe("12px");
    expect(style.getPropertyPriority(TOKEN)).toBe("important");
  });

  it("ignores unsupported theme versions and unknown messages", () => {
    mount();
    const theme: HostMessage.ThemeV1 = { version: 1, borderRadius: "REGULAR" };
    act(() => sendTheme(theme));

    act(() => {
      host.dispatchEvent(
        new CustomEvent("message", {
          detail: {
            type: "host.update-theme",
            payload: { theme: { version: 2 } },
          },
        }),
      );
      host.dispatchEvent(
        new CustomEvent("message", {
          detail: { type: "host.future-message", payload: {} },
        }),
      );
    });

    expect(container.textContent).toBe(JSON.stringify(theme));
  });

  it("unsubscribes from the host when the widget unmounts", () => {
    const removeListener = vi.spyOn(host, "removeEventListener");
    const removeThemeListener = vi.spyOn(
      FoundryHostEventTarget.prototype,
      "removeEventListener",
    );
    mount();
    act(() => root.render(null));

    expect(removeThemeListener).toHaveBeenCalledWith(
      "host.update-theme",
      expect.any(Function),
    );
    expect(removeListener).toHaveBeenCalledWith(
      "message",
      expect.any(Function),
    );
  });
});
