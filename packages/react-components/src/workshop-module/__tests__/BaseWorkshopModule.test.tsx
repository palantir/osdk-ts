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

import { connectToWorkshopModule } from "@osdk/workshop-embed";
import type { WorkshopModuleConnection } from "@osdk/workshop-embed";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import defer from "p-defer";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BaseWorkshopModule } from "../BaseWorkshopModule.js";

vi.mock(import("@osdk/workshop-embed"), async (importOriginal) => ({
  ...(await importOriginal()),
  connectToWorkshopModule: vi.fn(),
}));

const props = {
  foundryUrl: "https://foundry.example.com",
  moduleRid: "ri.workshop.main.module.example",
};
const channels: MessageChannel[] = [];

beforeEach(() => {
  vi.mocked(connectToWorkshopModule).mockImplementation(
    () => new Promise(() => {}),
  );
});

afterEach(() => {
  cleanup();
  for (const channel of channels.splice(0)) {
    channel.port1.close();
    channel.port2.close();
  }
  vi.restoreAllMocks();
  vi.clearAllMocks();
});

async function loadFrame(iframe: HTMLElement): Promise<void> {
  await act(() => {
    fireEvent.load(iframe);
    return Promise.resolve();
  });
}

function createConnection() {
  const channel = new MessageChannel();
  channels.push(channel);
  const unsubscribe = vi.fn();
  const connection: WorkshopModuleConnection = {
    sessionId: "test-session",
    port: channel.port1,
    setVariables: vi.fn(),
    onVariablesSet: vi.fn(() => unsubscribe),
    disconnect: vi.fn(),
  };
  return { connection, unsubscribe };
}

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
    let targetFrame: HTMLIFrameElement;

    beforeEach(() => {
      // Happy DOM does not create a contentWindow for disabled remote iframe loads.
      targetFrame = document.createElement("iframe");
      targetFrame.srcdoc = "<html></html>";
      document.body.append(targetFrame);
      vi.spyOn(
        HTMLIFrameElement.prototype,
        "contentWindow",
        "get",
      ).mockReturnValue(targetFrame.contentWindow);
    });

    afterEach(() => targetFrame.remove());

    it("connects after loading and sends the latest inputs, including explicit same-value updates", async () => {
      const pending = defer<WorkshopModuleConnection>();
      const { connection } = createConnection();
      vi.mocked(connectToWorkshopModule).mockReturnValueOnce(pending.promise);
      const { rerender } = render(
        <BaseWorkshopModule {...props} variables={{ count: 1 }} />,
      );
      const iframe = screen.getByTitle<HTMLIFrameElement>("Workshop module");
      expect(connectToWorkshopModule).not.toHaveBeenCalled();

      fireEvent.load(iframe);
      expect(connectToWorkshopModule).toHaveBeenCalledWith({
        targetWindow: iframe.contentWindow,
        hostWindow: window,
        targetOrigin: "https://foundry.example.com",
        signal: expect.any(AbortSignal),
      });
      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 2, searchText: null }}
        />,
      );
      await act(() => {
        pending.resolve(connection);
        return pending.promise;
      });
      expect(connection.setVariables).toHaveBeenLastCalledWith({
        count: 2,
        searchText: null,
      });

      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ count: 2, searchText: null }}
        />,
      );
      expect(connection.setVariables).toHaveBeenCalledTimes(2);
      expect(connectToWorkshopModule).toHaveBeenCalledTimes(1);
      expect(screen.getByTitle("Workshop module")).toBe(iframe);
    });

    it("uses the latest callback and sends the full merged inputs after a Workshop edit", async () => {
      const { connection } = createConnection();
      vi.mocked(connectToWorkshopModule).mockResolvedValueOnce(connection);
      const originalCallback = vi.fn();
      const currentCallback = vi.fn();
      const variables = { count: 1, searchText: "Ada" };
      const { rerender } = render(
        <BaseWorkshopModule
          {...props}
          variables={variables}
          onVariablesChanged={originalCallback}
        />,
      );
      await loadFrame(screen.getByTitle("Workshop module"));

      rerender(
        <BaseWorkshopModule
          {...props}
          variables={variables}
          onVariablesChanged={currentCallback}
        />,
      );
      const receive = vi.mocked(connection.onVariablesSet).mock.calls[0][0];
      act(() => receive({ count: 3 }));
      expect(currentCallback).toHaveBeenCalledWith({ count: 3 });
      expect(originalCallback).not.toHaveBeenCalled();
      expect(connection.setVariables).toHaveBeenCalledTimes(1);

      rerender(
        <BaseWorkshopModule
          {...props}
          variables={{ ...variables, count: 3 }}
          onVariablesChanged={currentCallback}
        />,
      );
      expect(connection.setVariables).toHaveBeenLastCalledWith({
        count: 3,
        searchText: "Ada",
      });
      expect(connectToWorkshopModule).toHaveBeenCalledTimes(1);
    });

    it("disconnects on navigation and waits for a new load even when returning to the same URL", async () => {
      const { connection, unsubscribe } = createConnection();
      vi.mocked(connectToWorkshopModule).mockResolvedValue(connection);
      const { rerender, unmount } = render(
        <BaseWorkshopModule {...props} variables={{ count: 1 }} />,
      );
      const iframe = screen.getByTitle("Workshop module");
      await loadFrame(iframe);
      const firstSignal = vi.mocked(connectToWorkshopModule).mock.calls[0][0]
        .signal;

      rerender(
        <BaseWorkshopModule
          {...props}
          moduleRid="ri.workshop.main.module.other"
          variables={{ count: 2 }}
        />,
      );
      expect(firstSignal?.aborted).toBe(true);
      expect(unsubscribe).toHaveBeenCalledTimes(1);
      expect(connection.setVariables).toHaveBeenCalledTimes(1);
      rerender(<BaseWorkshopModule {...props} variables={{ count: 3 }} />);
      expect(connectToWorkshopModule).toHaveBeenCalledTimes(1);

      await loadFrame(iframe);
      expect(connectToWorkshopModule).toHaveBeenCalledTimes(2);
      expect(connection.setVariables).toHaveBeenLastCalledWith({ count: 3 });
      const nextSignal = vi.mocked(connectToWorkshopModule).mock.calls[1][0]
        .signal;
      unmount();
      expect(nextSignal?.aborted).toBe(true);
      expect(unsubscribe).toHaveBeenCalledTimes(2);
    });

    it("reconnects on an iframe reload without a prop change", async () => {
      const first = createConnection();
      const second = createConnection();
      vi.mocked(connectToWorkshopModule)
        .mockResolvedValueOnce(first.connection)
        .mockResolvedValueOnce(second.connection);
      render(<BaseWorkshopModule {...props} variables={{ count: 7 }} />);
      const iframe = screen.getByTitle("Workshop module");
      await loadFrame(iframe);
      await loadFrame(iframe);

      expect(
        vi.mocked(connectToWorkshopModule).mock.calls[0][0].signal?.aborted,
      ).toBe(true);
      expect(first.unsubscribe).toHaveBeenCalledTimes(1);
      expect(second.connection.setVariables).toHaveBeenCalledWith({ count: 7 });
    });

    it("cancels a pending handshake and closes a late connection after unmount", async () => {
      const pending = defer<WorkshopModuleConnection>();
      const { connection } = createConnection();
      vi.mocked(connectToWorkshopModule).mockReturnValueOnce(pending.promise);
      const { unmount } = render(
        <BaseWorkshopModule {...props} variables={{ count: 1 }} />,
      );
      fireEvent.load(screen.getByTitle("Workshop module"));
      unmount();
      expect(
        vi.mocked(connectToWorkshopModule).mock.calls[0][0].signal?.aborted,
      ).toBe(true);

      await act(() => {
        pending.resolve(connection);
        return pending.promise;
      });
      expect(connection.disconnect).toHaveBeenCalledTimes(1);
      expect(connection.setVariables).not.toHaveBeenCalled();
      expect(connection.onVariablesSet).not.toHaveBeenCalled();
    });

    it("reports a failed handshake without removing the iframe", async () => {
      const error = new Error("Workshop handshake timed out.");
      const report = vi.spyOn(console, "error").mockImplementation(() => {});
      vi.mocked(connectToWorkshopModule).mockRejectedValueOnce(error);
      render(<BaseWorkshopModule {...props} />);
      const iframe = screen.getByTitle("Workshop module");
      await loadFrame(iframe);

      expect(report).toHaveBeenCalledWith(
        "Workshop module messaging failed.",
        error,
      );
      expect(screen.getByTitle("Workshop module")).toBe(iframe);
    });
  });
});
