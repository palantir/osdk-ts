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

import type { ActionDefinition } from "@osdk/api";
import React from "react";
import { useOsdkAction } from "./useOsdkAction.js";

export interface FileInfo {
  name: string;
  size: number;
  type: string;
}

export type UploadStatus = "idle" | "uploading" | "success" | "error";

export interface UseOsdkMediaUploadResult {
  uploadMedia: (
    file: File | Blob,
    mediaParamName: string,
    otherParams?: Record<string, any>,
  ) => Promise<void>;
  status: UploadStatus;
  isUploading: boolean;
  isSuccess: boolean;
  isError: boolean;
  fileInfo: FileInfo | undefined;
  previewUrl: string | undefined;
  error: Error | undefined;
  reset: () => void;
}

export function useOsdkMediaUpload<A extends ActionDefinition>(
  action: A,
): UseOsdkMediaUploadResult {
  const { applyAction, error: actionError } = useOsdkAction(action);

  const [status, setStatus] = React.useState<UploadStatus>("idle");
  const [fileInfo, setFileInfo] = React.useState<FileInfo | undefined>();
  const [previewUrl, setPreviewUrl] = React.useState<string | undefined>();
  const [uploadError, setUploadError] = React.useState<Error | undefined>();

  const previewUrlRef = React.useRef<string | undefined>();

  React.useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  const uploadMedia = React.useCallback(
    async (
      file: File | Blob,
      mediaParamName: string,
      otherParams?: Record<string, any>,
    ) => {
      setUploadError(undefined);

      const info: FileInfo = {
        name: file instanceof File ? file.name : "blob",
        size: file.size,
        type: file.type,
      };
      setFileInfo(info);

      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
        previewUrlRef.current = undefined;
      }

      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        previewUrlRef.current = url;
        setPreviewUrl(url);
      } else {
        setPreviewUrl(undefined);
      }

      setStatus("uploading");

      try {
        await applyAction({
          ...otherParams,
          [mediaParamName]: file,
        });

        setStatus("success");
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        setStatus("error");
        setUploadError(err);
        throw err;
      }
    },
    [applyAction],
  );

  const reset = React.useCallback(() => {
    setStatus("idle");
    setFileInfo(undefined);
    setUploadError(undefined);
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = undefined;
    }
    setPreviewUrl(undefined);
  }, []);

  const error = uploadError
    ?? (actionError?.unknown instanceof Error
      ? actionError.unknown
      : undefined);

  return {
    uploadMedia,
    status,
    isUploading: status === "uploading",
    isSuccess: status === "success",
    isError: status === "error",
    fileInfo,
    previewUrl,
    error,
    reset,
  };
}
