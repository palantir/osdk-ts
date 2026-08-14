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

import type { Media } from "@osdk/api";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { useMediaContents } from "../../shared/hooks/useMediaContents.js";
import { BaseEmailViewer } from "../BaseEmailViewer.js";
import { EmailViewer } from "../EmailViewer.js";
import type { ParsedEmail } from "../EmailViewerApi.js";

vi.mock("../BaseEmailViewer.js", () => ({
  BaseEmailViewer: vi.fn(() => null),
}));
vi.mock("../../shared/hooks/useMediaContents.js", () => ({
  useMediaContents: vi.fn(),
}));

const mockedBaseEmailViewer = vi.mocked(BaseEmailViewer);
const mockedUseMediaContents = vi.mocked(useMediaContents);

const PARSED: ParsedEmail = {
  subject: "Quarterly report",
  from: { name: "Alice", address: "alice@example.com" },
  to: [],
  cc: [],
  date: undefined,
  html: undefined,
  text: "Numbers attached.",
};

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Pins the prop name the wrapper forwards under. The deprecated `email` alias
// behaves identically, so without this a revert to the old name would leave
// every other test green.
describe("EmailViewer", () => {
  it("should forward the fetched email as content, not as the deprecated email prop", () => {
    mockedUseMediaContents.mockReturnValue({
      data: PARSED,
      loading: false,
      error: undefined,
    });

    render(<EmailViewer media={{} as unknown as Media} />);

    const props = mockedBaseEmailViewer.mock.calls[0]?.[0];
    expect(props).toMatchObject({ content: PARSED });
  });
});
