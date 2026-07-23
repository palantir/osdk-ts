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

import { runInNewContext } from "node:vm";

import type {
  IndexHtmlTransformContext,
  IndexHtmlTransformResult,
  Plugin,
} from "vite";
import { describe, expect, it } from "vitest";

import { codeWorkspacePreviewPlugin } from "./codeWorkspacePreviewPlugin.js";
import { installReporter, REPORTER_SCRIPT } from "./reporterScript.js";
import { installRouteSync, ROUTE_SYNC_SCRIPT } from "./routeSyncScript.js";

function runTransform(
  plugin: Plugin,
  mode: string | undefined
): IndexHtmlTransformResult | undefined {
  const hook = plugin.transformIndexHtml;
  if (typeof hook !== "function") {
    throw new TypeError("expected transformIndexHtml to be a function hook");
  }
  const ctx = {
    path: "/index.html",
    filename: "index.html",
    server: mode === undefined ? undefined : { config: { mode } },
  } as unknown as IndexHtmlTransformContext;
  return hook("", ctx) as IndexHtmlTransformResult | undefined;
}

describe("codeWorkspacePreviewPlugin", () => {
  it("injects nothing outside the active mode", () => {
    const plugin = codeWorkspacePreviewPlugin();
    expect(runTransform(plugin, "development")).toBeUndefined();
    expect(runTransform(plugin, "production")).toBeUndefined();
    expect(runTransform(plugin, undefined)).toBeUndefined();
  });

  it("injects the reporter and route-sync as head-prepend scripts in code-workspaces mode", () => {
    const plugin = codeWorkspacePreviewPlugin();
    expect(runTransform(plugin, "code-workspaces")).toEqual([
      { tag: "script", children: REPORTER_SCRIPT, injectTo: "head-prepend" },
      { tag: "script", children: ROUTE_SYNC_SCRIPT, injectTo: "head-prepend" },
    ]);
  });

  it("honors a custom activation mode", () => {
    const plugin = codeWorkspacePreviewPlugin({ mode: "preview" });
    expect(runTransform(plugin, "code-workspaces")).toBeUndefined();
    expect(runTransform(plugin, "preview")).toHaveLength(2);
  });

  it("is dev-only", () => {
    expect(codeWorkspacePreviewPlugin().apply).toBe("serve");
  });
});

interface PostedMessage {
  source?: string;
  kind?: string;
  message?: string;
  stack?: string;
  [key: string]: unknown;
}
type Listener = (event: unknown) => void;
interface Poster {
  postMessage(data: PostedMessage, targetOrigin: string): void;
}
interface FakeWindow extends Poster {
  parent: Poster;
  addEventListener(type: string, listener: Listener, capture?: boolean): void;
  setTimeout(handler: () => void): void;
}
interface FakeDocument {
  querySelector(selector: string): { childElementCount: number } | null;
}

/**
 * Drives installReporter directly with fake browser globals so we can assert
 * what it posts to the parent frame without a full DOM. The fake window's
 * setTimeout runs synchronously so the deferred blank-check resolves at once.
 */
function runReporter(options: { framed: boolean; hasContent?: boolean }): {
  posted: PostedMessage[];
  listeners: Map<string, Listener>;
  win: FakeWindow;
} {
  const posted: PostedMessage[] = [];
  const listeners = new Map<string, Listener>();
  const parentFrame: Poster = {
    postMessage: (data) => {
      posted.push(data);
    },
  };
  const win: FakeWindow = {
    postMessage: (data) => {
      posted.push(data);
    },
    parent: parentFrame,
    addEventListener: (type, listener) => {
      listeners.set(type, listener);
    },
    setTimeout: (handler) => {
      handler();
    },
  };
  // Not framed => window.parent === window, which the reporter uses to bail out.
  win.parent = options.framed ? parentFrame : win;
  const document: FakeDocument = {
    querySelector: (selector) =>
      selector === "#root"
        ? { childElementCount: options.hasContent === true ? 1 : 0 }
        : null,
  };
  installReporter(win as unknown as Window, document as unknown as Document);
  return { posted, listeners, win };
}

describe("installReporter", () => {
  it("posts a ready message on load when framed", () => {
    const { posted } = runReporter({ framed: true });
    expect(posted[0]).toMatchObject({ source: "osdk-preview", kind: "ready" });
  });

  it("does nothing when not running inside an iframe", () => {
    const { posted, listeners } = runReporter({ framed: false });
    expect(posted).toHaveLength(0);
    expect(listeners.size).toBe(0);
  });

  it("reports an uncaught error when the app rendered nothing", () => {
    const { posted, listeners, win } = runReporter({
      framed: true,
      hasContent: false,
    });
    const onError = listeners.get("error");
    expect(onError).toBeDefined();
    onError?.({ target: win, message: "boom", error: { stack: "trace" } });
    expect(posted).toContainEqual(
      expect.objectContaining({
        source: "osdk-preview",
        kind: "error",
        message: "boom",
        stack: "trace",
      })
    );
  });

  it("reports a resource load failure with the failing element's url", () => {
    const { posted, listeners } = runReporter({
      framed: true,
      hasContent: false,
    });
    listeners.get("error")?.({
      target: { tagName: "SCRIPT", src: "/assets/chunk.js" },
    });
    expect(posted).toContainEqual(
      expect.objectContaining({
        source: "osdk-preview",
        kind: "error",
        message: "Failed to load script: /assets/chunk.js",
      })
    );
  });

  it("stays quiet when the app rendered content despite an error event", () => {
    const { posted, listeners, win } = runReporter({
      framed: true,
      hasContent: true,
    });
    listeners.get("error")?.({ target: win, message: "boom" });
    // Only the initial ready message; the blank-check suppressed the error.
    expect(posted).toEqual([
      expect.objectContaining({ source: "osdk-preview", kind: "ready" }),
    ]);
  });

  it("reports an unhandled rejection", () => {
    const { posted, listeners } = runReporter({
      framed: true,
      hasContent: false,
    });
    listeners.get("unhandledrejection")?.({
      reason: { message: "nope", stack: "trace" },
    });
    expect(posted).toContainEqual(
      expect.objectContaining({
        source: "osdk-preview",
        kind: "unhandledrejection",
        message: "nope",
        stack: "trace",
      })
    );
  });
});

describe("REPORTER_SCRIPT", () => {
  // Guards the installReporter.toString() serialization: the emitted IIFE must
  // be self-contained and runnable verbatim in the browser (no references to
  // module-level names, transpiler helpers, etc.).
  it("runs verbatim as a self-contained IIFE and posts ready when framed", () => {
    const posted: PostedMessage[] = [];
    const parentFrame: Poster = {
      postMessage: (data) => {
        posted.push(data);
      },
    };
    const win = {
      postMessage: (data: PostedMessage) => {
        posted.push(data);
      },
      parent: parentFrame,
      addEventListener: () => {},
      setTimeout: (fn: () => void) => {
        fn();
      },
    };
    runInNewContext(REPORTER_SCRIPT, {
      window: win,
      document: { querySelector: () => null },
    });
    expect(posted[0]).toMatchObject({ source: "osdk-preview", kind: "ready" });
  });
});

class FakePopStateEvent {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

interface FakeRouteWindow extends Poster {
  parent: Poster;
  location: { href: string };
  history: {
    pushState: (...args: unknown[]) => void;
    replaceState: (...args: unknown[]) => void;
  };
  addEventListener(type: string, listener: Listener): void;
  dispatchEvent(event: { type: string }): boolean;
  PopStateEvent: new (type: string, init?: unknown) => { type: string };
}

/**
 * Drives installRouteSync directly with fake browser globals so we can assert
 * what it posts to the parent, what it navigates to, and what it dispatches,
 * without a full DOM. Mirrors runReporter's fake-window seam.
 */
function runRouteSync(options: { framed: boolean }): {
  posted: PostedMessage[];
  listeners: Map<string, Listener>;
  pushStateCalls: unknown[][];
  dispatched: string[];
  win: FakeRouteWindow;
} {
  const posted: PostedMessage[] = [];
  const listeners = new Map<string, Listener>();
  const pushStateCalls: unknown[][] = [];
  const dispatched: string[] = [];
  const parentFrame: Poster = {
    postMessage: (data) => {
      posted.push(data);
    },
  };
  const win: FakeRouteWindow = {
    postMessage: (data) => {
      posted.push(data);
    },
    parent: parentFrame,
    location: { href: "https://preview.example/app/current" },
    history: {
      pushState: (...args) => {
        pushStateCalls.push(args);
      },
      replaceState: () => {},
    },
    addEventListener: (type, listener) => {
      listeners.set(type, listener);
    },
    dispatchEvent: (event) => {
      dispatched.push(event.type);
      return true;
    },
    PopStateEvent: FakePopStateEvent,
  };
  // Not framed => window.parent === window, which route-sync uses to bail out.
  win.parent = options.framed ? parentFrame : win;
  installRouteSync(win as unknown as Window & typeof globalThis);
  return { posted, listeners, pushStateCalls, dispatched, win };
}

describe("installRouteSync", () => {
  it("does nothing when not running inside an iframe", () => {
    const { posted, listeners } = runRouteSync({ framed: false });
    expect(posted).toHaveLength(0);
    expect(listeners.size).toBe(0);
  });

  it("announces readiness and the initial route when framed", () => {
    const { posted } = runRouteSync({ framed: true });
    expect(posted).toEqual([
      { source: "osdk-preview", type: "IFRAME_READY" },
      {
        source: "osdk-preview",
        type: "ROUTE_CHANGE",
        path: "https://preview.example/app/current",
      },
    ]);
  });

  it("reports a ROUTE_CHANGE when the app calls pushState", () => {
    const { posted, win } = runRouteSync({ framed: true });
    const before = posted.length;
    win.history.pushState({}, "", "/next");
    expect(posted.slice(before)).toEqual([
      expect.objectContaining({ source: "osdk-preview", type: "ROUTE_CHANGE" }),
    ]);
  });

  it("navigates and fires popstate on a SET_RELATIVE_PATH command", () => {
    const { listeners, pushStateCalls, dispatched } = runRouteSync({
      framed: true,
    });
    listeners.get("message")?.({
      data: { type: "SET_RELATIVE_PATH", path: "/target" },
    });
    expect(pushStateCalls).toContainEqual([{}, "", "/target"]);
    expect(dispatched).toContain("popstate");
  });

  it("ignores messages that aren't a string SET_RELATIVE_PATH command", () => {
    const { listeners, pushStateCalls } = runRouteSync({ framed: true });
    const onMessage = listeners.get("message");
    onMessage?.({ data: { type: "SOMETHING_ELSE", path: "/x" } });
    onMessage?.({ data: { type: "SET_RELATIVE_PATH", path: 42 } });
    onMessage?.({ data: null });
    expect(pushStateCalls).toHaveLength(0);
  });
});

describe("ROUTE_SYNC_SCRIPT", () => {
  // Guards the installRouteSync.toString() serialization: the emitted IIFE must
  // be self-contained and runnable verbatim in the browser.
  it("runs verbatim as a self-contained IIFE and announces readiness when framed", () => {
    const posted: PostedMessage[] = [];
    const parentFrame: Poster = {
      postMessage: (data) => {
        posted.push(data);
      },
    };
    const win = {
      postMessage: (data: PostedMessage) => {
        posted.push(data);
      },
      parent: parentFrame,
      location: { href: "https://preview.example/start" },
      history: {
        pushState: () => {},
        replaceState: () => {},
      },
      addEventListener: () => {},
      dispatchEvent: () => true,
      PopStateEvent: FakePopStateEvent,
    };
    runInNewContext(ROUTE_SYNC_SCRIPT, { window: win });
    expect(posted).toContainEqual(
      expect.objectContaining({ source: "osdk-preview", type: "IFRAME_READY" })
    );
  });
});
