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

import { act, renderHook } from "@testing-library/react";
import type { IFD } from "utif";
import { afterEach, describe, expect, it, vi } from "vitest";

import { useTiffRenderer } from "../useTiffRenderer.js";

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
  vi.clearAllMocks();
});

function createMockImage(width: number, height: number) {
  return { width, height } as IFD;
}

describe("useTiffRenderer", () => {
  it("should return an ok result with decoded dimensions for valid data", () => {
    const mockImage = createMockImage(100, 50);
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    const rgba = new Uint8Array(100 * 50 * 4);
    mockedToRGBA8.mockReturnValue(rgba);

    const content = new Uint8Array(100);
    const { result } = renderHook(() => useTiffRenderer({ content }));

    expect(result.current.result).toEqual({
      status: "ok",
      data: { width: 100, height: 50, content: rgba },
    });
  });

  it("should return an error result when the TIFF exceeds the max size", () => {
    const onError = vi.fn();
    const largeContent = new Uint8Array(26_000_000);
    const { result } = renderHook(() =>
      useTiffRenderer({ content: largeContent, onError })
    );

    expect(result.current.result).toEqual({
      status: "error",
      message: expect.stringMatching(/exceeds maximum size/u),
    });
    expect(mockedDecode).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalled();
  });

  it("should call onError and return an error result when decoding throws", () => {
    mockedDecode.mockImplementation(() => {
      throw new Error("Bad TIFF");
    });
    const onError = vi.fn();
    const content = new Uint8Array(100);
    const { result } = renderHook(() => useTiffRenderer({ content, onError }));

    expect(result.current.result?.status).toBe("error");
    expect(onError).toHaveBeenCalled();
  });

  it("should return an error result when the TIFF has no frames", () => {
    mockedDecode.mockReturnValue([]);
    const onError = vi.fn();
    const content = new Uint8Array(100);
    const { result } = renderHook(() => useTiffRenderer({ content, onError }));

    expect(result.current.result).toEqual({
      status: "error",
      message: expect.stringMatching(/Could not render TIFF/u),
    });
    expect(onError).toHaveBeenCalled();
  });

  it("should call onError when the image has missing dimensions", () => {
    const mockImage = {
      width: undefined,
      height: undefined,
    } as unknown as IFD;
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(0));

    const onError = vi.fn();
    const content = new Uint8Array(100);
    const { result } = renderHook(() => useTiffRenderer({ content, onError }));

    expect(result.current.result?.status).toBe("error");
    expect(onError).toHaveBeenCalled();
  });

  it("should re-decode when content changes", () => {
    const mockImage = createMockImage(10, 10);
    mockedDecode.mockReturnValue([mockImage]);
    mockedDecodeImage.mockReturnValue(undefined);
    mockedToRGBA8.mockReturnValue(new Uint8Array(10 * 10 * 4));

    const { rerender } = renderHook(
      ({ content }: { content: Uint8Array }) => useTiffRenderer({ content }),
      { initialProps: { content: new Uint8Array(10) } }
    );
    expect(mockedDecode).toHaveBeenCalledTimes(1);

    act(() => {
      rerender({ content: new Uint8Array(20) });
    });
    expect(mockedDecode).toHaveBeenCalledTimes(2);
  });
});
