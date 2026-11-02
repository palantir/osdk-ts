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

import type * as WorkshopEmbed from "@osdk/workshop-embed";
import { connectToWorkshopModule } from "@osdk/workshop-embed";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BaseWorkshopModule } from "../BaseWorkshopModule.js";

type WorkshopModuleConnection = WorkshopEmbed.WorkshopModuleConnection;

vi.mock("@osdk/workshop-embed", async (importOriginal) => ({
  ...(await importOriginal<typeof WorkshopEmbed>()),
  connectToWorkshopModule: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
  vi.restoreAllMocks();
});

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
          branchRid="ri.branch..branch.example"
        />,
      );

      expect(screen.getByTitle("Workshop module").getAttribute("src")).toBe(
        `https://foundry.example.com/workspace/module/view/${pathVersion}/ri.workshop.main.module.example?embedded=true&workshopEmbed=1&foundry-branch-rid=ri.branch..branch.example`,
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
      "https://foundry.example.com/workspace/module/view/latest/ri.workshop.main.module.other?embedded=true&workshopEmbed=1&foundry-branch-rid=&themeOverride=DARK_MODE",
    );
  });

  it("navigates between branches and explicitly returns to main", () => {
    const props = {
      foundryUrl: "https://foundry.example.com",
      moduleRid: "ri.workshop.main.module.example",
    };
    const { rerender } = render(
      <BaseWorkshopModule {...props} branchRid="ri.branch..branch.first" />,
    );
    const iframe = screen.getByTitle<HTMLIFrameElement>("Workshop module");
    expect(new URL(iframe.src).searchParams.get("foundry-branch-rid")).toBe(
      "ri.branch..branch.first",
    );

    rerender(
      <BaseWorkshopModule {...props} branchRid="ri.branch..branch.second" />,
    );
    expect(new URL(iframe.src).searchParams.get("foundry-branch-rid")).toBe(
      "ri.branch..branch.second",
    );

    rerender(<BaseWorkshopModule {...props} />);
    expect(screen.getByTitle("Workshop module")).toBe(iframe);
    // An omitted parameter would let Workshop restore its previous branch.
    expect(new URL(iframe.src).searchParams.get("foundry-branch-rid")).toBe("");
  });

  describe("messaging", () => {
    const props = {
      foundryUrl: "https://foundry.example.com",
      moduleRid: "ri.workshop.main.module.example",
    };

    beforeEach(() => {
      // Iframe page loading is disabled; provide a window for the connection.
      vi.spyOn(
        HTMLIFrameElement.prototype,
        "contentWindow",
        "get",
      ).mockReturnValue(window);
    });

    it("sends the latest inputs after connecting and only changed fields afterward", async () => {
      const pending = Promise.withResolvers<WorkshopModuleConnection>();
      const connection = createConnection();
      vi.mocked(connectToWorkshopModule).mockReturnValue(pending.promise);
      const { rerender } = render(
        <BaseWorkshopModule
          {...props}
          variables={{ searchText: "Ada", count: 25 }}
        />,
        { wrapper: React.StrictMode },
      );
      const iframe = screen.getByTitle<HTMLIFrameElement>("Workshop module");
      const initialSrc = iframe.src;
      expect(connectToWorkshopModule).not.toHaveBeenCalled();
      fireEvent.load(iframe);
      expect(connectToWorkshopModule).toHaveBeenCalledExactlyOnceWith({
        targetWindow: iframe.contentWindow,
        targetOrigin: "https://foundry.example.com",
        hostWindow: window,
        signal: expect.any(AbortSignal),
      });
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ searchText: "Grace", count: 25 }}
        />,
      );
      expect(connection.setVariables).not.toHaveBeenCalled();
      await act(() => pending.resolve(connection));
      expect(connection.setVariables).toHaveBeenCalledExactlyOnceWith({
        searchText: "Grace",
        count: 25,
      });
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ searchText: "Grace", count: 25 }}
        />,
      );
      expect(connection.setVariables).toHaveBeenCalledOnce();
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ searchText: null, count: 25 }}
        />,
      );
      expect(connection.setVariables).toHaveBeenLastCalledWith({
        searchText: null,
      });
      rerender(<BaseWorkshopModule {...props} variables={{ count: 25 }} />);
      rerender(<BaseWorkshopModule {...props} />);
      expect(connection.setVariables).toHaveBeenCalledTimes(2);
      expect(connectToWorkshopModule).toHaveBeenCalledOnce();
      expect(screen.getByTitle("Workshop module")).toBe(iframe);
      expect(iframe.src).toBe(initialSrc);
    });

    it("merges Workshop edits without echoing them and can explicitly restore an earlier input", async () => {
      const connection = createConnection();
      vi.mocked(connectToWorkshopModule).mockResolvedValue(connection);
      const onVariablesChanged = vi.fn();
      const { rerender } = render(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 25, searchText: "Ada" }}
          onVariablesChanged={onVariablesChanged}
        />,
      );
      await act(() => {
        fireEvent.load(screen.getByTitle("Workshop module"));
      });
      const receiveChanges = connection.onVariablesSet.mock.calls[0][0];
      act(() => receiveChanges({ count: 50 }));
      expect(onVariablesChanged).toHaveBeenCalledExactlyOnceWith({ count: 50 });

      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 50, searchText: "Ada" }}
          onVariablesChanged={onVariablesChanged}
        />,
      );
      expect(connection.setVariables).toHaveBeenCalledOnce();
      act(() => receiveChanges({ count: 50, searchText: "Ada" }));
      expect(onVariablesChanged).toHaveBeenCalledOnce();

      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 25, searchText: "Ada" }}
          onVariablesChanged={onVariablesChanged}
        />,
      );
      expect(connection.setVariables).toHaveBeenCalledTimes(2);
      expect(connection.setVariables).toHaveBeenLastCalledWith({ count: 25 });
      expect(connectToWorkshopModule).toHaveBeenCalledOnce();
    });

    it("uses the latest callback for partial Workshop changes without reconnecting", async () => {
      const connection = createConnection();
      vi.mocked(connectToWorkshopModule).mockResolvedValue(connection);
      const oldHandler = vi.fn();
      const onVariablesChanged = vi.fn();
      const { rerender } = render(
        <BaseWorkshopModule {...props} onVariablesChanged={oldHandler} />,
      );
      await act(() => {
        fireEvent.load(screen.getByTitle("Workshop module"));
      });
      rerender(
        <BaseWorkshopModule
          {...props}
          onVariablesChanged={onVariablesChanged}
        />,
      );
      const receiveChanges = connection.onVariablesSet.mock.calls[0][0];
      act(() => receiveChanges({ count: 50, searchText: "Ada" }));
      act(() => receiveChanges({ searchText: null }));
      expect(oldHandler).not.toHaveBeenCalled();
      expect(onVariablesChanged.mock.calls).toEqual([
        [{ count: 50, searchText: "Ada" }],
        [{ searchText: null }],
      ]);
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 50, searchText: null }}
          onVariablesChanged={onVariablesChanged}
        />,
      );
      expect(connection.setVariables).not.toHaveBeenCalled();
      expect(connection.onVariablesSet).toHaveBeenCalledOnce();
      expect(connectToWorkshopModule).toHaveBeenCalledOnce();
    });

    it("cancels on reload, navigation, and unmount and replays inputs after a fresh load", async () => {
      const first = createConnection();
      const second = createConnection();
      const third = createConnection();
      vi.mocked(connectToWorkshopModule)
        .mockResolvedValueOnce(first)
        .mockResolvedValueOnce(second)
        .mockResolvedValueOnce(third);
      const variables = { count: 1 };
      const { rerender, unmount } = render(
        <BaseWorkshopModule {...props} variables={variables} />,
      );
      const iframe = screen.getByTitle("Workshop module");
      await act(() => {
        fireEvent.load(iframe);
      });
      expect(first.setVariables).toHaveBeenCalledExactlyOnceWith(variables);
      await act(() => {
        fireEvent.load(iframe);
      });
      expect(
        vi.mocked(connectToWorkshopModule).mock.calls[0][0].signal?.aborted,
      ).toBe(true);
      expect(first.onVariablesSet.mock.results[0].value).toHaveBeenCalledOnce();
      expect(second.setVariables).toHaveBeenCalledExactlyOnceWith(variables);
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={variables}
          moduleRid="ri.workshop.main.module.other"
        />,
      );
      expect(
        vi.mocked(connectToWorkshopModule).mock.calls[1][0].signal?.aborted,
      ).toBe(true);
      expect(
        second.onVariablesSet.mock.results[0].value,
      ).toHaveBeenCalledOnce();
      expect(connectToWorkshopModule).toHaveBeenCalledTimes(2);
      rerender(<BaseWorkshopModule {...props} variables={variables} />);
      expect(connectToWorkshopModule).toHaveBeenCalledTimes(2);
      await act(() => {
        fireEvent.load(iframe);
      });
      expect(third.setVariables).toHaveBeenCalledExactlyOnceWith(variables);
      unmount();
      expect(
        vi.mocked(connectToWorkshopModule).mock.calls[2][0].signal?.aborted,
      ).toBe(true);
      expect(third.onVariablesSet.mock.results[0].value).toHaveBeenCalledOnce();
    });

    it("ignores a connection that resolves after the iframe navigates", async () => {
      const pending = Promise.withResolvers<WorkshopModuleConnection>();
      const stale = createConnection();
      const current = createConnection();
      const onConnectionError = vi.fn();
      vi.mocked(connectToWorkshopModule)
        .mockReturnValueOnce(pending.promise)
        .mockResolvedValueOnce(current);
      const { rerender } = render(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 1 }}
          onConnectionError={onConnectionError}
        />,
      );
      const iframe = screen.getByTitle("Workshop module");
      fireEvent.load(iframe);
      rerender(
        <BaseWorkshopModule
          {...props}
          moduleRid="ri.workshop.main.module.other"
          variables={{ count: 2 }}
          onConnectionError={onConnectionError}
        />,
      );
      await act(() => {
        fireEvent.load(iframe);
      });
      await act(() => pending.resolve(stale));
      expect(stale.disconnect).toHaveBeenCalledOnce();
      expect(stale.setVariables).not.toHaveBeenCalled();
      expect(stale.onVariablesSet).not.toHaveBeenCalled();
      expect(current.setVariables).toHaveBeenCalledExactlyOnceWith({
        count: 2,
      });
      expect(onConnectionError).not.toHaveBeenCalled();
    });

    it("does not report intentional cancellation as a connection error", async () => {
      const pending = Promise.withResolvers<WorkshopModuleConnection>();
      vi.mocked(connectToWorkshopModule).mockReturnValue(pending.promise);
      const onConnectionError = vi.fn();
      const { unmount } = render(
        <BaseWorkshopModule {...props} onConnectionError={onConnectionError} />,
      );
      fireEvent.load(screen.getByTitle("Workshop module"));
      unmount();
      await act(() =>
        pending.reject(new DOMException("Aborted", "AbortError")),
      );
      expect(onConnectionError).not.toHaveBeenCalled();
    });

    it("reports handshake and send failures to the current callback while keeping the iframe visible", async () => {
      const pending = Promise.withResolvers<WorkshopModuleConnection>();
      const connection = createConnection();
      vi.mocked(connectToWorkshopModule)
        .mockReturnValueOnce(pending.promise)
        .mockResolvedValueOnce(connection);
      const oldHandler = vi.fn();
      const onConnectionError = vi.fn();
      const { rerender } = render(
        <BaseWorkshopModule {...props} onConnectionError={oldHandler} />,
      );
      const iframe = screen.getByTitle<HTMLIFrameElement>("Workshop module");
      fireEvent.load(iframe);
      rerender(
        <BaseWorkshopModule {...props} onConnectionError={onConnectionError} />,
      );
      const error = new Error("Workshop handshake timed out.");
      await act(() => pending.reject(error));
      expect(oldHandler).not.toHaveBeenCalled();
      expect(onConnectionError).toHaveBeenCalledExactlyOnceWith(error);
      await act(() => {
        fireEvent.load(iframe);
      });
      const sendError = new TypeError("Invalid variable input.");
      connection.setVariables.mockImplementationOnce(() => {
        throw sendError;
      });
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ count: Number.NaN }}
          onConnectionError={onConnectionError}
        />,
      );
      expect(onConnectionError).toHaveBeenLastCalledWith(sendError);
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 2 }}
          onConnectionError={onConnectionError}
        />,
      );
      expect(connection.setVariables).toHaveBeenLastCalledWith({ count: 2 });
      expect(connectToWorkshopModule).toHaveBeenCalledTimes(2);
      expect(iframe.hidden).toBe(false);
      expect(screen.getByTitle("Workshop module")).toBe(iframe);
    });
  });
});

function createConnection() {
  return {
    sessionId: "test-session",
    port: {} as MessagePort,
    setVariables: vi.fn<WorkshopModuleConnection["setVariables"]>(),
    onVariablesSet: vi.fn<WorkshopModuleConnection["onVariablesSet"]>(() =>
      vi.fn(),
    ),
    disconnect: vi.fn(),
  } satisfies WorkshopModuleConnection;
}
