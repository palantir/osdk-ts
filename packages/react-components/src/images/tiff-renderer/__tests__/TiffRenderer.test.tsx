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

import { cleanup, render, screen } from "@testing-library/react";
import type { IFD } from "utif";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TiffRenderer } from "../TiffRenderer.js";

vi.mock("utif", () => ({
  decode: vi.fn(),
  decodeImage: vi.fn(),
  toRGBA8: vi.fn(),
}));

const UTIF = await import("utif");
const mockedDecode = vi.mocked(UTIF.decode);
const mockedDecodeImage = vi.mocked(UTIF.decodeImage);
const mockedToRGBA8 = vi.mocked(UTIF.toRGBA8);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

function createMockImage(width: number, height: number) {
  return { width, height } as IFD;
}

describe("TiffRenderer", () => {
  it("should render a canvas when given valid TIFF data", () => {
    const mockImage = createMockImage(100, 50);
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(100 * 50 * 4));

    const content = new Uint8Array(100);
    const { container } = render(<TiffRenderer content={content} />);

    const canvas = container.querySelector("canvas");
    expect(canvas).not.toBeNull();
    expect(canvas?.width).toBe(100);
    expect(canvas?.height).toBe(50);
  });

  it("should show error when TIFF exceeds max size", () => {
    const largeContent = new Uint8Array(26_000_000);

    render(<TiffRenderer content={largeContent} />);

    expect(screen.getByText(/exceeds maximum size/)).toBeTruthy();
  });

  it("should call onError when decoding fails", () => {
    mockedDecode.mockImplementation(() => {
      throw new Error("Bad TIFF");
    });

    const onError = vi.fn();
    const content = new Uint8Array(100);
    render(<TiffRenderer content={content} onError={onError} />);

    expect(onError).toHaveBeenCalled();
  });

  it("should show error when TIFF has no frames", () => {
    mockedDecode.mockReturnValue([]);

    const onError = vi.fn();
    const content = new Uint8Array(100);
    render(<TiffRenderer content={content} onError={onError} />);

    expect(onError).toHaveBeenCalled();
    expect(screen.getByText(/Could not render TIFF/)).toBeTruthy();
  });

  it("should call onError when image has missing dimensions", () => {
    const mockImage = {
      width: undefined,
      height: undefined,
    } as unknown as IFD;
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(0));

    const onError = vi.fn();
    const content = new Uint8Array(100);
    render(<TiffRenderer content={content} onError={onError} />);

    expect(onError).toHaveBeenCalled();
  });
});
