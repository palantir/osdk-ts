/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

/* eslint-disable @typescript-eslint/require-await */

import { randomUUID } from "node:crypto";
import { OntologiesV2 } from "../mock/index.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { requireSearchParams } from "./util/requireSearchParams.js";

/** In-memory store for mock transformation jobs */
const transformationJobs = new Map<
  string,
  { status: "PENDING" | "SUCCESSFUL" | "FAILED"; content: ArrayBuffer }
>();

export const createMediaRefHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Load media metadata
   */
  OntologiesV2.MediaReferenceProperties.getMediaMetadata(
    baseUrl,
    async ({
      params: { ontologyApiName, objectType, primaryKey, propertyName },
    }) => {
      return fauxFoundry
        .getDataStore(ontologyApiName)
        .getMediaOrThrow(objectType, primaryKey, propertyName).metaData;
    },
  ),
  /**
   * Read media content
   */
  OntologiesV2.MediaReferenceProperties.getMediaContent(
    baseUrl,
    async ({
      params: { ontologyApiName, objectType, primaryKey, propertyName },
    }) => {
      const {
        content,
        metaData: { mediaType },
      } = fauxFoundry
        .getDataStore(ontologyApiName)
        .getMediaOrThrow(objectType, primaryKey, propertyName);

      return new Response(content, {
        headers: { "Content-Type": mediaType },
      });
    },
  ),

  OntologiesV2.MediaReferenceProperties.upload(
    baseUrl,
    async ({
      params: { ontologyApiName, objectType, propertyName },
      request,
    }) => {
      const { mediaItemPath } = requireSearchParams(["mediaItemPath"], request);

      return fauxFoundry
        .getDataStore(ontologyApiName)
        .registerMedia(
          objectType,
          propertyName,
          await request.arrayBuffer(),
          request.headers.get("Content-Type") ?? "application/octet-stream",
          mediaItemPath,
        );
    },
  ),

  /**
   * Initiate a media transformation job
   */
  OntologiesV2.MediaReferenceProperties.transform(baseUrl, async () => {
    const jobId = randomUUID();
    transformationJobs.set(jobId, {
      status: "SUCCESSFUL",
      content: new TextEncoder().encode("transformed-content").buffer,
    });
    return {
      jobId,
      status: "SUCCESSFUL" as const,
    };
  }),

  /**
   * Get transformation job status
   */
  OntologiesV2.MediaReferenceProperties.getTransformStatus(
    baseUrl,
    async ({ params: { transformationJobId } }) => {
      const job = transformationJobs.get(transformationJobId);
      if (!job) {
        return { jobId: transformationJobId, status: "FAILED" as const };
      }
      return { jobId: transformationJobId, status: job.status };
    },
  ),

  /**
   * Get transformation job result
   */
  OntologiesV2.MediaReferenceProperties.getTransformResult(
    baseUrl,
    async ({ params: { transformationJobId } }) => {
      const job = transformationJobs.get(transformationJobId);
      if (!job) {
        return new Response("Not found", { status: 404 });
      }
      return new Response(job.content, {
        headers: { "Content-Type": "application/octet-stream" },
      });
    },
  ),
];
