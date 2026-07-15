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
import { REPORTER_SCRIPT } from "./reporterScript.js";

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

  it("injects the reporter as a head-prepend script in code-workspaces mode", () => {
    const plugin = codeWorkspacePreviewPlugin();
    expect(runTransform(plugin, "code-workspaces")).toEqual([
      { tag: "script", children: REPORTER_SCRIPT, injectTo: "head-prepend" },
    ]);
  });

  it("honors a custom activation mode", () => {
    const plugin = codeWorkspacePreviewPlugin({ mode: "preview" });
    expect(runTransform(plugin, "code-workspaces")).toBeUndefined();
    expect(runTransform(plugin, "preview")).toHaveLength(1);
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
  addEventListener(type: string, listener: Listener): void;
}
interface FakeDocument {
  getElementById(id: string): { childElementCount: number } | null;
}

/**
 * Runs REPORTER_SCRIPT in an isolated VM context with fake browser globals so we
 * can assert what it posts to the parent frame without a full DOM. setTimeout is
 * stubbed to run synchronously so the deferred blank-check resolves immediately.
 */
function runReporter(options: { framed: boolean; hasContent?: boolean }): {
  posted: PostedMessage[];
  listeners: Map<string, Listener>;
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
  };
  // Not framed => window.parent === window, which the script uses to bail out.
  win.parent = options.framed ? parentFrame : win;
  const document: FakeDocument = {
    getElementById: (id) =>
      id === "root"
        ? { childElementCount: options.hasContent === true ? 1 : 0 }
        : null,
  };
  const setTimeoutStub = (fn: () => void): void => {
    fn();
  };
  runInNewContext(REPORTER_SCRIPT, {
    window: win,
    document,
    setTimeout: setTimeoutStub,
  });
  return { posted, listeners };
}

describe("REPORTER_SCRIPT", () => {
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
    const { posted, listeners } = runReporter({
      framed: true,
      hasContent: false,
    });
    const onError = listeners.get("error");
    expect(onError).toBeDefined();
    onError?.({ message: "boom", error: { stack: "trace" } });
    expect(posted).toContainEqual(
      expect.objectContaining({
        source: "osdk-preview",
        kind: "error",
        message: "boom",
        stack: "trace",
      })
    );
  });

  it("stays quiet when the app rendered content despite an error event", () => {
    const { posted, listeners } = runReporter({
      framed: true,
      hasContent: true,
    });
    listeners.get("error")?.({ message: "boom" });
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
