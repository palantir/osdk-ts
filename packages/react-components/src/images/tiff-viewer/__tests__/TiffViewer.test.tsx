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

import { useMediaContents } from "../../../shared/hooks/useMediaContents.js";
import { BaseTiffViewer } from "../BaseTiffViewer.js";
import { TiffViewer } from "../TiffViewer.js";

vi.mock("../BaseTiffViewer.js", () => ({
  BaseTiffViewer: vi.fn(() => null),
}));
vi.mock("../../../shared/hooks/useMediaContents.js", () => ({
  useMediaContents: vi.fn(),
}));

const mockedBaseTiffViewer = vi.mocked(BaseTiffViewer);
const mockedUseMediaContents = vi.mocked(useMediaContents);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Pins the prop name the wrapper forwards under. The deprecated `content` alias
// behaves identically, so without this a revert to the old name would leave
// every other test green.
describe("TiffViewer", () => {
  it("should forward the fetched bytes as src", () => {
    const bytes = new Uint8Array(8);
    mockedUseMediaContents.mockReturnValue({
      data: bytes,
      loading: false,
      error: undefined,
    });

    render(<TiffViewer media={{} as unknown as Media} />);

    const props = mockedBaseTiffViewer.mock.calls[0]?.[0];
    expect(props).toMatchObject({ src: bytes });
  });
});
