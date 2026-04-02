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
import {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait,
  type MediaTransformation,
} from "@osdk/api/unstable";
import {
  $Actions,
  $Queries,
  MnayanOsdkMediaObject,
} from "@osdk/e2e.generated.catchall";
import { uploadMedia } from "@osdk/functions";
import { client, mjClient } from "./client.js";

async function runReadMediaTest(ref: Media): Promise<Blob> {
  const mediaMetadata = await ref.fetchMetadata();
  if (mediaMetadata.sizeBytes !== 18484484) {
    throw (new Error(
      `Media Metadata was incorrect: expected: 18484484 bytes and got ${mediaMetadata.sizeBytes} bytes`,
    ));
  }
  if (mediaMetadata.mediaType !== "image/png") {
    throw (new Error(
      `Media Metadata was incorrect: expected type image/png and got ${mediaMetadata.mediaType}`,
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
    }).catch(() => {
      console.log("Request failed as expected");
    });

  console.log("Now trying to upload directly to ephemeral ");
  await uploadMedia(client, { fileName: "test15.png", data });
  console.log("ephemeral upload success!");

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
  const payload: MediaUpload = { data, fileName: "test15.png" };

  const result = await client($Actions.createUnstructuredImageExample)
    .applyAction({
      media_reference: payload,
      path: "test15.png",
    }, { $returnEdits: true });
}

async function runMediaQueryTest(): Promise<void> {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const { findUp } = await import("find-up");

  const workspaceRoot = path.dirname(
    (await findUp("pnpm-workspace.yaml")) ?? "",
  );
  const imagePath = path.join(
    workspaceRoot,
    "packages/e2e.sandbox.catchall/src/images/palantir.png",
  );
  const imageBuffer = await fs.readFile(imagePath);
  const data = new Blob([new Uint8Array(imageBuffer)], { type: "image/png" });

  // Test Direct Upload
  let output = await mjClient($Queries.kbnTsv2MediaReferenceParamOutput)
    .executeFunction({
      mediaReference: { data, fileName: "palantir.png" },
    });
  console.log(output.getMediaReference);
  console.log((await output.fetchMetadata()).sizeBytes);

  // Test Media Reference Upload
  output = await mjClient($Queries.kbnTsv2MediaReferenceParamOutput)
    .executeFunction({
      mediaReference: output.getMediaReference(),
    });
  console.log(output.getMediaReference);
  console.log((await output.fetchMetadata()).sizeBytes);

  // Test Media Upload
  output = await mjClient($Queries.kbnTsv2MediaReferenceParamOutput)
    .executeFunction({
      mediaReference: output,
    });
  console.log(output.getMediaReference);
  console.log((await output.fetchMetadata()).sizeBytes);
}

async function runTransformAndWaitTest(
  mediaReference: MediaReference,
): Promise<void> {
  const transformation: MediaTransformation = {
    $image: {
      $encoding: "png",
      $operations: [{ $resize: { $width: 50, $height: 50 } }],
    },
  };

  console.log("Input transformation:", JSON.stringify(transformation, null, 2));
  const result = await client(
    __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait,
  ).transformAndWait({
    mediaReference,
    transformation,
  });

  if (!result.ok) {
    const body = await result.text();
    throw new Error(
      `transformAndWait failed with status ${result.status}: ${body}`,
    );
  }

  const blob = await result.blob();
  console.log("Transformed blob size:", blob.size, "bytes");
  console.log("Transformed blob type:", blob.type);
}

async function runMalformedTransformTests(
  mediaReference: MediaReference,
): Promise<void> {
  // This test documents the boundary of type safety. The MediaTransformation
  // type catches invalid `type` discriminants and missing required fields at
  // compile time. But deeply nested params (typed as Record<string, unknown>)
  // are only validated by the server at runtime.
  //
  // For example, ocr `parameters` accepts Record<string, unknown> — our types
  // allow any object, but the server rejects invalid values with a 400.
  //
  // Some transformations are not available.
  // See: TransformationTranslator.java in https://github.palantir.build/foundry/api-gateway/
  const transformation: MediaTransformation = {
    $imageToText: {
      $operation: {
        $ocr: { $parameters: { totallyBogus: true } },
      },
    },
  };

  console.log("\n[invalid nested param - bogus ocr parameters]");
  console.log("transformation:", JSON.stringify(transformation));
  try {
    const result = await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait,
    ).transformAndWait({
      mediaReference,
      transformation,
      options: { pollTimeoutMs: 15000 },
    });
    if (!result.ok) {
      const body = await result.text();
      console.log(body);
    }
  } catch (e) {
    console.log(
      "caught error:",
      (e as Error).constructor.name,
      "-",
      (e as Error).message,
    );
  }
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
  console.log("Reading Media Reference");
  const testImage: Blob = await runReadMediaTest(result.mediaReference);
  console.log("SUCCESS: Reading Media Reference");

  console.log("Creating Media Reference");
  const mediaRef: MediaReference = await runCreateMediaReferenceTest(testImage);
  console.log("SUCCESS: Creating Media Reference");

  // test applying via a function backed action
  console.log("Applying Media Reference via Function Backed Action");
  await client(
    $Actions.createMediaViaFunction,
  )
    .applyAction({
      mediaItem: mediaRef,
    }, {
      $returnEdits: true,
    });
  console.log("SUCCESS: Applying Media Reference via Function Backed Action");

  // test direct media upload
  console.log("Testing Media Upload Type");
  await runUploadMediaTest(testImage);
  console.log("SUCCESS: Testing Media Upload Type");

  console.log("Testing Media Query");
  await runMediaQueryTest();
  console.log("SUCCESS: Testing Media Query");

  console.log("Testing transformAndWait");
  await runTransformAndWaitTest(result.mediaReference.getMediaReference());
  console.log("SUCCESS: Testing transformAndWait");

  console.log("\nTesting transformAndWait with malformed transformations");
  await runMalformedTransformTests(result.mediaReference.getMediaReference());
  console.log("SUCCESS: Malformed transformation tests");
}

void runMediaTest();
