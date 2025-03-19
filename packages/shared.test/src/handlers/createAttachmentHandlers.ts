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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { randomUUID } from "node:crypto";

import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { handleOpenApiCall } from "./util/handleOpenApiCall.js";
import { requireSearchParams } from "./util/requireSearchParams.js";

export const createAttachmentHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Upload attachment
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.upload,
    [],
    async ({ request }) => {
      const { filename } = requireSearchParams(["filename"], request);

      return fauxFoundry.attachments.registerAttachment({
        buffer: await request.arrayBuffer(),
        filename,
        mediaType: request.headers.get("Content-Type")
          ?? "application/octet-stream",
        rid: `ri.attachments.main.attachment.${randomUUID()}`,
      });
    },
    baseUrl,
  ),

  /**
   * Get attachment metadata V1
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.get,
    ["attachmentRid"],
    async ({ params }) => {
      return fauxFoundry
        .attachments
        .getAttachmentMetadataByRid(params.attachmentRid);
    },
    baseUrl,
  ),

  /**
   * Get attachment metadata V2
   */
  handleOpenApiCall(
    OntologiesV2.AttachmentPropertiesV2.getAttachment,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async (
      { params: { ontologyApiName, primaryKey, objectType, propertyName } },
    ) => {
      return {
        ...fauxFoundry.getDataStore(ontologyApiName)
          .getAttachmentMetadata(objectType, primaryKey, propertyName),
        type: "single" as const,
      };
    },
    baseUrl,
  ),

  /**
   * Read attachment content V1
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.read,
    ["attachmentRid"],
    async ({ params }) => {
      return new Response(fauxFoundry
        .attachments.getAttachmentBuffer(params.attachmentRid));
    },
    baseUrl,
  ),

  /**
   * Read attachment content V2
   */
  handleOpenApiCall(
    OntologiesV2.AttachmentPropertiesV2.readAttachment,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async (
      { params: { ontologyApiName, primaryKey, objectType, propertyName } },
    ) => {
      return new Response(
        fauxFoundry.getDataStore(ontologyApiName).getAttachmentBuffer(
          objectType,
          primaryKey,
          propertyName,
        ),
      );
    },
    baseUrl,
  ),
];
