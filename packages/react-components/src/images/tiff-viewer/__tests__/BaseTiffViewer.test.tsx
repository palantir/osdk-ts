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

import { act, cleanup, render, screen } from "@testing-library/react";
import type { IFD } from "utif";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BaseTiffViewer } from "../BaseTiffViewer.js";

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

describe("BaseTiffViewer", () => {
  it("should render a canvas when given valid TIFF data", async () => {
    const mockImage = createMockImage(100, 50);
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(100 * 50 * 4));

    const bytes = new Uint8Array(100);
    let container: HTMLElement;
    await act(() => {
      ({ container } = render(<BaseTiffViewer src={bytes} />));
    });

    const canvas = container!.querySelector("canvas");
    expect(canvas).not.toBeNull();
    expect(canvas?.width).toBe(100);
    expect(canvas?.height).toBe(50);
  });

  it("should show error when TIFF exceeds max size", async () => {
    const largeBytes = new Uint8Array(26_000_000);

    await act(() => {
      render(<BaseTiffViewer src={largeBytes} />);
    });

    expect(screen.getByText(/exceeds maximum size/u)).toBeTruthy();
  });

  it("should call onError when decoding fails", async () => {
    mockedDecode.mockImplementation(() => {
      throw new Error("Bad TIFF");
    });

    const onError = vi.fn();
    const bytes = new Uint8Array(100);
    await act(() => {
      render(<BaseTiffViewer src={bytes} onError={onError} />);
    });

    expect(onError).toHaveBeenCalled();
  });

  it("should show error when TIFF has no frames", async () => {
    mockedDecode.mockReturnValue([]);

    const onError = vi.fn();
    const bytes = new Uint8Array(100);
    await act(() => {
      render(<BaseTiffViewer src={bytes} onError={onError} />);
    });

    expect(onError).toHaveBeenCalled();
    expect(screen.getByText(/Could not render TIFF/u)).toBeTruthy();
  });

  it("should call onError when image has missing dimensions", async () => {
    const mockImage = {
      width: undefined,
      height: undefined,
    } as unknown as IFD;
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(0));

    const onError = vi.fn();
    const bytes = new Uint8Array(100);
    await act(() => {
      render(<BaseTiffViewer src={bytes} onError={onError} />);
    });

    expect(onError).toHaveBeenCalled();
  });

  it("should not decode when src exceeds max size", async () => {
    const largeBytes = new Uint8Array(26_000_000);
    const onError = vi.fn();

    await act(() => {
      render(<BaseTiffViewer src={largeBytes} onError={onError} />);
    });

    expect(mockedDecode).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalled();
  });

  it("should render from the deprecated content prop", async () => {
    const mockImage = createMockImage(100, 50);
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(100 * 50 * 4));

    const bytes = new Uint8Array(100);
    let container: HTMLElement;
    await act(() => {
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
      ({ container } = render(<BaseTiffViewer content={bytes} />));
    });

    expect(container!.querySelector("canvas")).not.toBeNull();
    expect(mockedDecode).toHaveBeenCalledWith(bytes.buffer);
  });

  it("should prefer src over the deprecated content prop", async () => {
    const mockImage = createMockImage(100, 50);
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(100 * 50 * 4));

    const fromSrc = new Uint8Array(100);
    const fromContent = new Uint8Array(200);
    await act(() => {
      render(
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- covers the pre-rename fallback
        <BaseTiffViewer src={fromSrc} content={fromContent} />,
      );
    });

    // Only `src` is decoded. The two inputs are distinguished by byte length
    // rather than identity, because both are zero-filled.
    expect(mockedDecode).toHaveBeenCalledTimes(1);
    const decoded = mockedDecode.mock.calls[0]![0] as ArrayBuffer;
    expect(decoded.byteLength).toBe(fromSrc.byteLength);
  });

  it("should render nothing when neither prop is set", async () => {
    let container: HTMLElement;
    await act(() => {
      ({ container } = render(<BaseTiffViewer />));
    });

    expect(container!.querySelector("canvas")).toBeNull();
    expect(mockedDecode).not.toHaveBeenCalled();
  });
});
