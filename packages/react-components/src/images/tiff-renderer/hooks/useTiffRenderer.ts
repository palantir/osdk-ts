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

/* cspell:words ifds */

import { useEffect, useRef, useState } from "react";
import * as UTIF from "utif";

// 25 MB limit — TIFF decoding expands compressed data into a full RGBA bitmap
// in memory, so capping the input size prevents the browser from allocating an
// unreasonably large buffer.
const MAX_IMAGE_SIZE = 25_000_000;
const MAX_IMAGE_SIZE_MB_STRING = (MAX_IMAGE_SIZE / 1_000_000).toFixed(1);

export interface TiffImageData {
  /** Decoded RGBA pixel data */
  content: Uint8Array;
  /** Image width in pixels */
  width: number;
  /** Image height in pixels */
  height: number;
}

export type TiffDecodeResult =
  | { status: "ok"; data: TiffImageData }
  | { status: "error"; message: string };

/**
 * Decodes TIFF bytes into RGBA pixel data, rejecting inputs that exceed the
 * in-memory size cap and reporting a friendly message for corrupt files.
 */
function decodeTiff(content: Uint8Array): TiffDecodeResult {
  if (content.byteLength > MAX_IMAGE_SIZE) {
    return {
      status: "error",
      message: `TIFF file exceeds maximum size of ${MAX_IMAGE_SIZE_MB_STRING}MB`,
    };
  }

  try {
    const buffer = content.buffer as ArrayBuffer;
    const ifds = UTIF.decode(buffer);
    const image = ifds[0];
    if (image == null) {
      return {
        status: "error",
        message: "Could not render TIFF file (it may be corrupted)",
      };
    }
    UTIF.decodeImage(buffer, image);
    const rgba = UTIF.toRGBA8(image);

    if (image.width == null || image.height == null) {
      return {
        status: "error",
        message: "Could not render TIFF file (it may be corrupted)",
      };
    }

    return {
      status: "ok",
      data: { width: image.width, height: image.height, content: rgba },
    };
  } catch {
    return {
      status: "error",
      message: "Could not render TIFF file (it may be corrupted)",
    };
  }
}

export interface UseTiffRendererOptions {
  /** TIFF bytes to decode */
  content: Uint8Array;
  /** Callback fired when decoding fails */
  onError?: () => void;
}

export interface UseTiffRendererResult {
  /** The decode result, or undefined until decoding completes */
  result: TiffDecodeResult | undefined;
}

/**
 * Headless state for a TIFF renderer: decodes the given bytes into RGBA pixel
 * data whenever the content changes and invokes `onError` when decoding fails.
 */
export function useTiffRenderer({
  content,
  onError,
}: UseTiffRendererOptions): UseTiffRendererResult {
  const [result, setResult] = useState<TiffDecodeResult | undefined>(undefined);
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  useEffect(() => {
    const decodeResult = decodeTiff(content);
    setResult(decodeResult);
    if (decodeResult.status === "error") {
      onErrorRef.current?.();
    }
  }, [content]);

  return { result };
}
