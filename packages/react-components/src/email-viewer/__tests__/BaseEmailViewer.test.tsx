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
import { afterEach, describe, expect, it } from "vitest";

import { BaseEmailViewer } from "../BaseEmailViewer.js";
import type { ParsedEmail } from "../EmailViewerApi.js";

afterEach(() => {
  cleanup();
});

function parsedEmail(overrides: Partial<ParsedEmail> = {}): ParsedEmail {
  return {
    subject: "Quarterly report",
    from: { name: "Alice", address: "alice@example.com" },
    to: [{ name: "Bob", address: "bob@example.com" }],
    cc: [],
    date: "2026-01-15T10:30:00Z",
    html: undefined,
    text: "Numbers attached.",
    ...overrides,
  };
}

describe("BaseEmailViewer", () => {
  it("should render headers and the text body from content", () => {
    render(<BaseEmailViewer content={parsedEmail()} />);
    expect(screen.getByText("Quarterly report")).toBeTruthy();
    expect(screen.getByText("Alice <alice@example.com>")).toBeTruthy();
    expect(screen.getByText("Bob <bob@example.com>")).toBeTruthy();
    expect(screen.getByText("Numbers attached.")).toBeTruthy();
  });

  it("should render an html body in a sandboxed iframe", () => {
    render(
      <BaseEmailViewer
        content={parsedEmail({ html: "<p>Hello Bob!</p>", text: undefined })}
      />,
    );
    const iframe = screen.getByTitle("Email body");
    expect(iframe.getAttribute("sandbox")).toBe("allow-same-origin");
    expect(iframe.getAttribute("srcdoc")).toBe("<p>Hello Bob!</p>");
  });

  it("should render from the deprecated email prop", () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
    render(<BaseEmailViewer email={parsedEmail()} />);
    expect(screen.getByText("Quarterly report")).toBeTruthy();
    expect(screen.getByText("Numbers attached.")).toBeTruthy();
  });

  it("should prefer content over the deprecated email prop", () => {
    render(
      <BaseEmailViewer
        content={parsedEmail({ subject: "From content" })}
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
        email={parsedEmail({ subject: "From email" })}
      />,
    );
    expect(screen.getByText("From content")).toBeTruthy();
    expect(screen.queryByText("From email")).toBeNull();
  });

  it("should render the empty state when neither prop is set", () => {
    render(<BaseEmailViewer />);
    expect(screen.getByText("No content")).toBeTruthy();
  });
});
