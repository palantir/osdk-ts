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

/* cspell:words ifds */

import { Error as ErrorIcon } from "@blueprintjs/icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as UTIF from "utif";
import styles from "./TiffRenderer.module.css";
import type { TiffRendererProps } from "./types.js";

// 25 MB limit — TIFF decoding expands compressed data into a full RGBA bitmap
// in memory, so capping the input size prevents the browser from allocating an
// unreasonably large buffer.
const MAX_IMAGE_SIZE = 25_000_000;
const MAX_IMAGE_SIZE_MB_STRING = (MAX_IMAGE_SIZE / 1_000_000).toFixed(1);

interface TiffImageData {
  content: Uint8Array;
  width: number;
  height: number;
}

type DecodeResult =
  | { status: "ok"; data: TiffImageData }
  | { status: "error"; message: string };

function decodeTiff(content: Uint8Array): DecodeResult {
  if (content.byteLength > MAX_IMAGE_SIZE) {
    return {
      status: "error",
      message:
        `TIFF file exceeds maximum size of ${MAX_IMAGE_SIZE_MB_STRING}MB`,
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

const ErrorMessage: React.FunctionComponent<{ message: string }> = React.memo(
  ({ message }) => (
    <div className={styles.errorContainer}>
      <ErrorIcon className={styles.errorIcon} />
      {message}
    </div>
  ),
);

const TiffCanvas: React.FunctionComponent<{ imageData: TiffImageData }> = React
  .memo(({ imageData }) => {
    const canvasRef = useCallback(
      (canvas: HTMLCanvasElement | null) => {
        if (canvas == null) {
          return;
        }
        const ctx = canvas.getContext("2d");
        if (ctx == null) {
          return;
        }
        const renderedImageData = ctx.createImageData(
          imageData.width,
          imageData.height,
        );
        renderedImageData.data.set(imageData.content);
        ctx.putImageData(renderedImageData, 0, 0);
      },
      [imageData],
    );

    return (
      <canvas
        className={styles.canvas}
        width={imageData.width}
        height={imageData.height}
        ref={canvasRef}
      />
    );
  });

export const TiffRenderer: React.FunctionComponent<TiffRendererProps> = React
  .memo(
    ({ content, onError }) => {
      const [result, setResult] = useState<DecodeResult | undefined>(
        undefined,
      );
      const onErrorRef = useRef(onError);
      onErrorRef.current = onError;

      useEffect(() => {
        const decodeResult = decodeTiff(content);
        setResult(decodeResult);
        if (decodeResult.status === "error") {
          onErrorRef.current?.();
        }
      }, [content]);

      if (result == null) {
        return null;
      }

      if (result.status === "error") {
        return <ErrorMessage message={result.message} />;
      }

      return <TiffCanvas imageData={result.data} />;
    },
  );
