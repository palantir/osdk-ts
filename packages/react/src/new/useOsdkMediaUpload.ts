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

import type { ActionDefinition, MediaReference } from "@osdk/api";
import { ensureError } from "@osdk/client";
import React from "react";
import { useOsdkAction } from "./useOsdkAction.js";

export interface UseOsdkMediaUploadOptions {
  /**
   * Called after successful upload.
   * Note: MediaReference is undefined when using actions (action responses don't include it).
   */
  onSuccess?: (mediaRef: MediaReference | undefined) => void;

  /** Called on upload failure */
  onError?: (error: Error) => void;

  /** Called with progress updates (0-100) */
  onProgress?: (progress: number) => void;

  /** Called when upload starts */
  onUploadStart?: () => void;

  /** Upload as preview (default: true) or full resolution (false) */
  preview?: boolean;
}

export interface UseOsdkMediaUploadResult {
  /** Upload a file via the action */
  uploadMedia: (
    file: File | Blob,
    mediaParamName: string,
    otherParams?: Record<string, unknown>,
  ) => Promise<void>;

  /** True while uploading */
  isUploading: boolean;

  /** Upload error */
  error: Error | undefined;

  /** Progress (not available when using actions) */
  uploadProgress: number;

  /** Reset state (clear error) */
  reset: () => void;
}

interface UploadState {
  isUploading: boolean;
  uploadProgress: number;
  error: Error | undefined;
}

/**
 * Hook for uploading media to object properties via an action.
 *
 * Media uploads to object properties MUST go through a Foundry action.
 * Create an action in Foundry that accepts a MediaUpload parameter and
 * modifies the object to set the media property.
 *
 * For reading media, use `useOsdkMediaQuery`.
 *
 * @param action - Foundry action that accepts MediaUpload parameter
 * @param options - Callback options for upload lifecycle events
 * @returns Upload function and state
 *
 * @example
 * // Simple upload via action
 * const { uploadMedia, isUploading } = useOsdkMediaUpload($Actions.uploadEmployeeMedia);
 * await uploadMedia(file, "media", { employee: employeeInstance });
 *
 * @example
 * // With callbacks
 * const { url, refresh } = useOsdkMediaQuery(employee.profilePhoto);
 * const { uploadMedia, error } = useOsdkMediaUpload(
 *   $Actions.uploadEmployeeMedia,
 *   {
 *     onSuccess: () => refresh(),
 *     onError: (err) => console.error(err)
 *   }
 * );
 * await uploadMedia(file, "media", { employee });
 */
export function useOsdkMediaUpload<A extends ActionDefinition>(
  action: A,
  options?: UseOsdkMediaUploadOptions,
): UseOsdkMediaUploadResult {
  const { applyAction, isPending, error: actionError } = useOsdkAction(action);

  const { onSuccess, onError, onUploadStart } = options || {};

  const [uploadError, setUploadError] = React.useState<Error | undefined>(
    undefined,
  );

  const uploadMedia = React.useCallback(
    async (
      file: File | Blob,
      mediaParamName: string,
      otherParams?: Record<string, unknown>,
    ) => {
      setUploadError(undefined);
      onUploadStart?.();

      try {
        // Pass the raw File/Blob directly to applyAction.
        // The applyAction implementation will detect the parameter type from
        // runtime ActionMetadata and create the correct upload object
        // (AttachmentUpload or MediaUpload) based on the parameter definition.
        const actionParams = {
          ...otherParams,
          [mediaParamName]: file,
        };

        await applyAction(actionParams);

        onSuccess?.(undefined);
      } catch (error) {
        const err = ensureError(error);
        setUploadError(err);
        onError?.(err);
        throw err;
      }
    },
    [applyAction, onSuccess, onError, onUploadStart],
  );

  const reset = React.useCallback(() => {
    setUploadError(undefined);
  }, []);

  const combinedError = uploadError
    || (actionError instanceof Error
      ? actionError
      : actionError
      ? new Error(JSON.stringify(actionError))
      : undefined);

  return {
    uploadMedia,
    isUploading: isPending,
    uploadProgress: 0, // Progress not available when using actions
    error: combinedError,
    reset,
  };
}
