/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Media, MediaReference, MediaUpload } from "@osdk/api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from "@osdk/api/unstable";
import { $Actions, MnayanOsdkMediaObject } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

async function runReadMediaTest(ref: Media): Promise<Blob> {
  const mediaMetadata = await ref.fetchMetadata();
  if (mediaMetadata.sizeBytes !== 18484484) {
    throw (new Error(
      `Media Metadata was incorrect: expected: 18484484 bytes and got ${mediaMetadata.sizeBytes} bytes`,
    ));
  }
  if (mediaMetadata.mediaType !== "imagery") {
    throw (new Error(
      `Media Metadata was incorrect: expected type imagery and got ${mediaMetadata.mediaType}`,
    ));
  }

  const mediaContents = await ref.fetchContents();

  if (!mediaContents.ok) {
    throw (new Error("Failed to fetch media contents"));
  }

  const mediaMimeType = mediaContents.headers.get("Content-Type");
  if (mediaMimeType !== "image/png") {
    throw (new Error(
      `MediaMimeType was incorrect: expected image/png and got ${mediaMimeType} instead`,
    ));
  }

  return mediaContents.blob();
}

async function runCreateMediaReferenceTest(
  data: Blob,
): Promise<MediaReference> {
  // should not work
  // Won't allow property keys not of media ref type
  await client(
    __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,
  )
    .createMediaReference({
      data: data,
      fileName: "test15.png",
      objectType: MnayanOsdkMediaObject,
      // @ts-expect-error
      propertyType: "path",
    }).then((_) => {
      throw (new Error(
        "This create media reference should not resolve as it is not being assigned to a media reference property",
      ));
    });

  // should work
  return client(__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference)
    .createMediaReference({
      data,
      fileName: "test15.png",
      objectType: MnayanOsdkMediaObject,
      propertyType: "mediaReference",
    });
}

async function runUploadMediaTest(data: Blob): Promise<void> {
  const payload: MediaUpload = { data, path: "test15.png" };

  const result = await client($Actions.createMediaViaFunction).applyAction({
    mediaItem: payload,
  }, { $returnEdits: true });
}

export async function runMediaTest(): Promise<void> {
  const result = await client(MnayanOsdkMediaObject).fetchOne(
    "7c2aa4e0-9cd6-48c1-9d09-653249feb4e7",
  );

  console.log("Object id:", result?.id);
  console.log(
    "Object Media reference:",
    result?.mediaReference?.getMediaReference(),
  );

  if (!result.mediaReference) {
    throw (new Error("Object does not contain expected media reference"));
  }

  const testImage: Blob = await runReadMediaTest(result.mediaReference);
  const mediaRef: MediaReference = await runCreateMediaReferenceTest(testImage);

  // test applying via a function backed action
  await client(
    $Actions.createMediaViaFunction,
  )
    .applyAction({
      mediaItem: mediaRef,
    }, {
      $returnEdits: true,
    });
  // test creating object via an action
  await client($Actions.createMediaObject).applyAction({
    path: "test9",
    media_reference: mediaRef,
  }, {
    $returnEdits: true,
  });

  // test direct media upload
  await runUploadMediaTest(testImage);
}

void runMediaTest();
