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

import { Error as ErrorIcon } from "@blueprintjs/icons";
import React, { useCallback } from "react";

import { useTiffRenderer } from "./hooks/useTiffRenderer.js";
import type { TiffImageData } from "./hooks/useTiffRenderer.js";
import type { TiffRendererProps } from "./types.js";

import styles from "./TiffRenderer.module.css";

const ErrorMessage: React.FunctionComponent<{ message: string }> = React.memo(
  ({ message }) => (
    <div className={styles.errorContainer}>
      <ErrorIcon className={styles.errorIcon} />
      {message}
    </div>
  )
);

const TiffCanvas: React.FunctionComponent<{ imageData: TiffImageData }> =
  React.memo(({ imageData }) => {
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
          imageData.height
        );
        renderedImageData.data.set(imageData.content);
        ctx.putImageData(renderedImageData, 0, 0);
      },
      [imageData]
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

export const TiffRenderer: React.FunctionComponent<TiffRendererProps> =
  React.memo(({ content, onError }) => {
    const { result } = useTiffRenderer({ content, onError });

    if (result.status === "error") {
      return <ErrorMessage message={result.message} />;
    }

    return <TiffCanvas imageData={result.data} />;
  });
