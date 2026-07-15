import type { Media } from "@osdk/api";
import { useTiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";
import React, { useCallback, useMemo } from "react";

import { useMediaBytes } from "./useMediaBytes.js";

interface CustomTiffViewerProps {
  /** A media property (e.g. `employee.employeeMedia`) holding a .tiff image. */
  media: Media;
}

/*
 * Fully custom (headless) TIFF viewer:
 *
 *   useMediaBytes     fetches the media's bytes in the page (our own fetch)
 *   useTiffRenderer   decodes the bytes to RGBA + tracks the decode result
 *
 * Rendering (a <canvas> plus a dimensions caption) is entirely bespoke here
 * rather than using the shipped `TiffRenderer` component.
 */
export function CustomTiffViewer({
  media,
}: CustomTiffViewerProps): React.ReactElement {
  const { data, loading, error } = useMediaBytes(media);

  return (
    <div className="w-full">
      {loading && (
        <div className="text-sm italic text-gray-500">Loading image…</div>
      )}
      {error != null && (
        <div className="text-sm text-red-600">
          Failed to load: {error.message}
        </div>
      )}
      {data != null && <TiffCanvas content={data} />}
    </div>
  );
}

function TiffCanvas({ content }: { content: ArrayBuffer }): React.ReactElement {
  const bytes = useMemo(() => new Uint8Array(content), [content]);
  const { result } = useTiffRenderer({ content: bytes });

  const canvasRef = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      if (canvas == null || result == null || result.status !== "ok") {
        return;
      }
      const ctx = canvas.getContext("2d");
      if (ctx == null) {
        return;
      }
      const image = ctx.createImageData(result.data.width, result.data.height);
      image.data.set(result.data.content);
      ctx.putImageData(image, 0, 0);
    },
    [result]
  );

  if (result == null) {
    return <div className="text-sm italic text-gray-500">Decoding…</div>;
  }
  if (result.status === "error") {
    return <div className="text-sm text-red-600">{result.message}</div>;
  }

  return (
    <figure className="m-0">
      <canvas
        ref={canvasRef}
        width={result.data.width}
        height={result.data.height}
        className="max-w-full border border-gray-200"
      />
      <figcaption className="text-xs text-gray-400 mt-1">
        {result.data.width} × {result.data.height}px
      </figcaption>
    </figure>
  );
}
