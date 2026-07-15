import type { Media } from "@osdk/api";
import { useEffect, useState } from "react";

export interface UseMediaBytesResult {
  data: ArrayBuffer | undefined;
  loading: boolean;
  error: Error | undefined;
}

/*
 * Fetches the raw bytes of an OSDK Media object in the page — the same "fetch
 * your own data" role that `useObjectTableData` plays for the custom table
 * example. The bytes are then handed to the viewer hooks, which parse/decode
 * them internally. Kept local to the sandbox on purpose: it shows a consumer
 * doing the fetch themselves, using only the public OSDK `Media` API.
 */
export function useMediaBytes(media: Media): UseMediaBytesResult {
  const [data, setData] = useState<ArrayBuffer | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(undefined);
    setData(undefined);

    media
      .fetchContents()
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        if (!cancelled) {
          setData(buffer);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [media]);

  return { data, loading, error };
}
