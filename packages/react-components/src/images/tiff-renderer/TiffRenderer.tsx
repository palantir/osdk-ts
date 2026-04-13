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
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import * as UTIF from "utif";
import styles from "./TiffRenderer.module.css";
import type { TiffRendererProps } from "./types.js";

const MAX_IMAGE_SIZE = 25_000_000;
const MAX_IMAGE_SIZE_MB_STRING = (MAX_IMAGE_SIZE / 1_000_000).toFixed(1);

interface TiffImageData {
  content: Uint8Array;
  width: number;
  height: number;
}

interface CanvasProps {
  width: number;
  height: number;
  renderCallback: (ctx: CanvasRenderingContext2D) => void;
}

const Canvas: React.FunctionComponent<CanvasProps> = React.memo(
  ({ width, height, renderCallback }) => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      if (ref.current == null) {
        return;
      }

      const ctx = ref.current.getContext("2d");
      if (ctx == null) {
        return;
      }

      renderCallback(ctx);
    });

    return (
      <canvas
        className={styles.canvas}
        width={width}
        height={height}
        ref={ref}
      />
    );
  },
);

function renderError(message: string) {
  return (
    <div className={styles.errorContainer}>
      <ErrorIcon className={styles.errorIcon} />
      {message}
    </div>
  );
}

export const TiffRenderer: React.FunctionComponent<TiffRendererProps> = React
  .memo(
    ({ content, onError }) => {
      const tiffImageData = useMemo<TiffImageData | undefined>(() => {
        try {
          const buffer = content.buffer as ArrayBuffer;
          const ifds = UTIF.decode(buffer);
          const image = ifds[0];
          if (image == null) {
            onError?.();
            return undefined;
          }
          UTIF.decodeImage(buffer, image);
          const rgba = UTIF.toRGBA8(image);

          if (image.width == null || image.height == null) {
            onError?.();
            return undefined;
          }

          return { width: image.width, height: image.height, content: rgba };
        } catch {
          onError?.();
          return undefined;
        }
      }, [content, onError]);

      const canvasRenderCallback = useCallback(
        (ctx: CanvasRenderingContext2D) => {
          if (tiffImageData == null) {
            return;
          }
          try {
            const renderedImageData = ctx.createImageData(
              tiffImageData.width,
              tiffImageData.height,
            );
            renderedImageData.data.set(tiffImageData.content);
            ctx.putImageData(renderedImageData, 0, 0);
          } catch {
            onError?.();
          }
        },
        [tiffImageData, onError],
      );

      if (content.byteLength > MAX_IMAGE_SIZE) {
        return renderError(
          `TIFF file exceeds maximum size of ${MAX_IMAGE_SIZE_MB_STRING}MB`,
        );
      }

      if (tiffImageData == null) {
        return renderError(
          "Could not render TIFF file (it may be corrupted)",
        );
      }

      return (
        <Canvas
          renderCallback={canvasRenderCallback}
          width={tiffImageData.width}
          height={tiffImageData.height}
        />
      );
    },
  );
