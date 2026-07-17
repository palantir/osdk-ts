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

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BaseEmailViewer } from "../BaseEmailViewer.js";
import type { ParsedEmail } from "../EmailViewerApi.js";
import type { UseEmailViewerStateResult } from "../hooks/useEmailViewerState.js";

vi.mock("../hooks/useEmailViewerState.js", () => ({
  useEmailViewerState: vi.fn(),
}));

const { useEmailViewerState } = await import("../hooks/useEmailViewerState.js");
const mockedUseState = vi.mocked(useEmailViewerState);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const CONTENT = new ArrayBuffer(0);

function stateResult(
  overrides: Partial<UseEmailViewerStateResult> = {}
): UseEmailViewerStateResult {
  return {
    loading: false,
    error: undefined,
    email: undefined,
    bodyMode: "empty",
    formattedFrom: undefined,
    formattedTo: "",
    formattedCc: "",
    ...overrides,
  };
}

function makeEmail(overrides: Partial<ParsedEmail> = {}): ParsedEmail {
  return {
    subject: undefined,
    from: undefined,
    to: [],
    cc: [],
    date: undefined,
    html: undefined,
    text: undefined,
    ...overrides,
  };
}

describe("BaseEmailViewer", () => {
  it("shows a loading indicator and no header while parsing", () => {
    mockedUseState.mockReturnValue(stateResult({ loading: true }));
    render(<BaseEmailViewer content={CONTENT} />);

    expect(screen.getByText(/Loading/u)).toBeTruthy();
    expect(screen.queryByText("From:")).toBeNull();
  });

  it("shows a parse error", () => {
    mockedUseState.mockReturnValue(
      stateResult({ error: new Error("bad eml") })
    );
    render(<BaseEmailViewer content={CONTENT} />);

    expect(screen.getByText(/Failed to parse email: bad eml/u)).toBeTruthy();
    expect(screen.queryByText("From:")).toBeNull();
  });

  it("renders headers and the html body in a sandboxed iframe", () => {
    mockedUseState.mockReturnValue(
      stateResult({
        email: makeEmail({
          subject: "Hello",
          to: [{ name: "Bob", address: "bob@example.com" }],
          html: "<p>hi</p>",
        }),
        bodyMode: "html",
        formattedFrom: "Alice <alice@example.com>",
        formattedTo: "Bob <bob@example.com>",
      })
    );
    render(<BaseEmailViewer content={CONTENT} />);

    expect(screen.getByText("Hello")).toBeTruthy();
    expect(screen.getByText("From:")).toBeTruthy();
    expect(screen.getByText("Alice <alice@example.com>")).toBeTruthy();
    expect(screen.getByText("To:")).toBeTruthy();

    const iframe = screen.getByTitle("Email body");
    expect(iframe.getAttribute("srcdoc")).toBe("<p>hi</p>");
    expect(iframe.getAttribute("sandbox")).toBe("allow-same-origin");
  });

  it("renders the plain-text body", () => {
    mockedUseState.mockReturnValue(
      stateResult({
        email: makeEmail({ subject: "Notes", text: "line 1\nline 2" }),
        bodyMode: "text",
      })
    );
    render(<BaseEmailViewer content={CONTENT} />);

    expect(screen.getByText("line 1 line 2")).toBeTruthy();
    expect(screen.queryByTitle("Email body")).toBeNull();
  });

  it("shows 'No content' for an empty body", () => {
    mockedUseState.mockReturnValue(
      stateResult({ email: makeEmail({ subject: "Empty" }), bodyMode: "empty" })
    );
    render(<BaseEmailViewer content={CONTENT} />);

    expect(screen.getByText("No content")).toBeTruthy();
  });

  it("omits the To/Cc rows when there are no recipients", () => {
    mockedUseState.mockReturnValue(
      stateResult({
        email: makeEmail({ subject: "Solo" }),
        bodyMode: "empty",
      })
    );
    render(<BaseEmailViewer content={CONTENT} />);

    expect(screen.queryByText("To:")).toBeNull();
    expect(screen.queryByText("Cc:")).toBeNull();
  });
});
