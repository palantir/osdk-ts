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

import type { MediaReference } from "@osdk/api";
import React from "react";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOsdkMediaUploadResult {
  upload: (
    file: File | Blob,
    options?: { fileName?: string },
  ) => Promise<MediaReference>;
  data: MediaReference | undefined;
  isPending: boolean;
  error: Error | undefined;
  reset: () => void;
}

export function useOsdkMediaUpload(): UseOsdkMediaUploadResult {
  const { observableClient } = React.useContext(OsdkContext2);
  const [data, setData] = React.useState<MediaReference>();
  const [error, setError] = React.useState<Error>();
  const [isPending, setIsPending] = React.useState(false);

  const upload = React.useCallback(async (
    file: File | Blob,
    options?: { fileName?: string },
  ): Promise<MediaReference> => {
    setIsPending(true);
    setError(undefined);

    try {
      const fileName = options?.fileName
        ?? (file instanceof File ? file.name : "upload");
      const result = await observableClient.uploadMedia(file, {
        fileName,
      });
      setData(result);
      return result;
    } catch (err) {
      const uploadError = err instanceof Error
        ? err
        : new Error(String(err));
      setError(uploadError);
      throw uploadError;
    } finally {
      setIsPending(false);
    }
  }, [observableClient]);

  const reset = React.useCallback(() => {
    setData(undefined);
    setError(undefined);
    setIsPending(false);
  }, []);

  return React.useMemo((): UseOsdkMediaUploadResult => ({
    upload,
    data,
    isPending,
    error,
    reset,
  }), [upload, data, isPending, error, reset]);
}
