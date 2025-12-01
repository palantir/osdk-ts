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

import type { MediaPropertyLocation } from "@osdk/api";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { additionalContext } from "../../../Client.js";
import type { Store } from "../Store.js";
import type { UploadHandle } from "./MediaUploadManager.js";
import { createMediaUploadManager } from "./MediaUploadManager.js";

export interface MediaUploadHelper {
  uploadMedia(
    file: Blob,
    filename: string,
    coords: MediaPropertyLocation,
    options?: { preview?: boolean },
  ): UploadHandle;
  dispose(): void;
}

export function createMediaUploadHelper(store: Store): MediaUploadHelper {
  const uploadManager = createMediaUploadManager();

  function uploadMedia(
    file: Blob,
    filename: string,
    coords: MediaPropertyLocation,
    options?: { preview?: boolean },
  ): UploadHandle {
    const cacheKey = `media:${coords.objectType}:${
      JSON.stringify(
        coords.primaryKey,
      )
    }:${coords.propertyName}`;
    uploadManager.startUpload(cacheKey);

    const uploadPromise = (async () => {
      try {
        const ontologyRid = await Promise.resolve(
          store.client[additionalContext].ontologyRid,
        );

        const mediaReference = await OntologiesV2.MediaReferenceProperties
          .upload(
            store.client[additionalContext],
            ontologyRid,
            coords.objectType,
            coords.propertyName,
            file,
            {
              mediaItemPath: filename,
              preview: options?.preview ?? true,
            },
          );

        uploadManager.completeUpload(cacheKey);

        await store.invalidateObject(coords.objectType, coords.primaryKey);

        const metadataCacheKey = store.cacheKeys.get(
          "mediaMetadata",
          coords.objectType,
          coords.primaryKey,
          coords.propertyName,
        );
        store.queries.delete(metadataCacheKey);

        return mediaReference;
      } catch (error) {
        const err = error instanceof Error
          ? error
          : new Error(
            typeof error === "string"
              ? error
              : JSON.stringify(error, null, 2),
          );
        uploadManager.failUpload(cacheKey, err);
        throw err;
      }
    })();

    return {
      promise: uploadPromise,
      abort: () => {
        uploadManager.abortUpload(cacheKey);
      },
      onProgress: (callback: (progress: number) => void) => {
        return uploadManager.addProgressListener(cacheKey, callback);
      },
    };
  }

  function dispose(): void {
    uploadManager.clear();
  }

  return {
    uploadMedia,
    dispose,
  };
}
