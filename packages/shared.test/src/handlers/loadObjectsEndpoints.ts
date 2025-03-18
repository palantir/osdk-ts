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
import type { RequestHandler } from "msw";
import { randomUUID } from "node:crypto";
import { InvalidRequest, ObjectNotFoundError } from "../errors.js";
import {
  subSelectProperties,
  subSelectPropertiesUrl,
} from "../filterObjects.js";
import {
  fauxFoundry,
  legacyFauxDataStore,
} from "../stubs/ontologies/legacyFullOntology.js";
import { pageThroughResponseSearchParams } from "./endpointUtils.js";
import { getPaginationParamsFromUrl } from "./util/getPaginationParams.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";
import { requireParams } from "./util/requireParam.js";

export const loadObjectsEndpoints: Array<RequestHandler> = [
  // TODO MOVE THESE TO the `ontologyMetadataEndpoints` file

  /**
   * List ontologies
   */
  handleOpenApiCall(
    OntologiesV2.OntologiesV2.list,
    [],
    async () => {
      return {
        data: fauxFoundry
          .getEveryOntology()
          .map(x => x.getOntologyFullMetadata().ontology),
      };
    },
  ),

  /**
   * Get specified Ontology
   */
  handleOpenApiCall(
    OntologiesV2.OntologiesV2.get,
    ["ontologyRid"],
    async req => {
      return fauxFoundry
        .getOntology(req.params.ontologyRid)
        .getOntologyFullMetadata()
        .ontology;
    },
  ),

  /**
   * List objectTypes V2
   */
  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.list,
    ["ontologyApiName"],
    async req => {
      return {
        data: fauxFoundry
          .getOntology(req.params.ontologyApiName)
          .getAllObjectTypes()
          .map(x => x.objectType),
      };
    },
  ),

  /**
   * Load object
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectsV2.get,
    ["ontologyApiName", "objectType", "primaryKey"],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
        "primaryKey",
      ]);

      const objectType = req.params.objectType;
      const primaryKey = req.params.primaryKey;

      const response = subSelectPropertiesUrl(
        legacyFauxDataStore.getObjectOrThrow(objectType, primaryKey),
        new URL(req.request.url),
      );

      return response;
    },
  ),

  /**
   * Load all objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectsV2.list,
    ["ontologyApiName", "objectType"],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
      ]);

      const objectType = req.params.objectType;
      const url = new URL(req.request.url);

      const paginationParams = {
        pageSize: url.searchParams.get("pageSize") == null
          ? undefined
          : Number(url.searchParams.get("pageSize")),
        pageToken: url.searchParams.get("pageToken") == null
          ? undefined
          : (url.searchParams.get("pageToken") as string),
      };

      const loadObjects = pageThroughResponseSearchParams(
        legacyFauxDataStore.getObjectsOfType(objectType),
        getPaginationParamsFromUrl(req.request),
        true,
      );

      if (loadObjects) {
        return subSelectProperties(loadObjects, url, true);
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Request"));
    },
  ),

  /**
   * Load firstPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async ({ params }) => {
      const { objectType, ontologyApiName, primaryKey, propertyName } = params;
      return fauxFoundry.getDataStore(ontologyApiName)
        .getTimeSeriesData(
          objectType,
          primaryKey,
          propertyName,
        ).at(0);
    },
  ),

  /**
   * Load lastPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getLastPoint,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async ({ params }) => {
      const { objectType, ontologyApiName, primaryKey, propertyName } = params;
      return fauxFoundry.getDataStore(ontologyApiName)
        .getTimeSeriesData(
          objectType,
          primaryKey,
          propertyName,
        ).at(-1);
    },
  ),

  /**
   * stream points
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.streamPoints,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const { objectType, ontologyApiName, primaryKey, propertyName } =
        req.params;
      const requestBody = await req.request.json();

      return Response.json(
        fauxFoundry.getDataStore(ontologyApiName)
          .getTimeSeriesData(
            objectType,
            primaryKey,
            propertyName,
            requestBody,
          ),
      );
    },
  ),

  /**
   * List Linked Objects
   */
  handleOpenApiCall(
    OntologiesV2.LinkedObjectsV2.listLinkedObjects,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "linkType",
    ],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
        "primaryKey",
        "linkType",
      ]);

      const { primaryKey, linkType, objectType, ontologyApiName } = req.params;

      const linkResults = fauxFoundry
        .getDataStore(ontologyApiName)
        .getLinksOrThrow(objectType, primaryKey, linkType);

      const objects = pageThroughResponseSearchParams(
        linkResults,
        getPaginationParamsFromUrl(req.request),
        true,
      );

      if (objects) {
        return subSelectProperties(
          objects,
          new URL(req.request.url),
          false,
        );
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Request"));
    },
  ),

  /**
   * Get specific Linked Object
   */
  handleOpenApiCall(
    OntologiesV2.LinkedObjectsV2.getLinkedObject,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "linkType",
      "targetPrimaryKey",
    ],
    async req => {
      requireParams(req.params, [
        "ontologyApiName",
        "objectType",
        "primaryKey",
        "linkType",
        "targetPrimaryKey",
      ]);

      const primaryKey = req.params.primaryKey;
      const linkType = req.params.linkType;
      const objectType = req.params.objectType;
      const targetPrimaryKey = req.params.targetPrimaryKey;

      const links = fauxFoundry.getDataStore(req.params.ontologyApiName)
        .getLinksOrThrow(objectType, primaryKey, linkType);

      const object =
        links.filter(l => String(l.__primaryKey) === targetPrimaryKey)[0];
      if (!object) {
        throw new OpenApiCallError(
          404,
          ObjectNotFoundError(
            `${objectType} -> ${linkType}`,
            targetPrimaryKey,
          ),
        );
      }
      return subSelectPropertiesUrl(
        object,
        new URL(req.request.url),
      );
    },
  ),

  /**
   * Upload attachment
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.upload,
    [],
    async (req) => {
      const urlObj = new URL(req.request.url);
      const filename = urlObj.searchParams.get("filename");

      if (typeof filename !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameter"));
      }

      const body = await req.request.arrayBuffer();

      return fauxFoundry.attachments.registerAttachment({
        buffer: body,
        filename,
        mediaType: req.request.headers.get("Content-Type")
          ?? "application/octet-stream",
        rid: `ri.attachments.main.attachment.${randomUUID()}`,
      });
    },
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
        .getAttachmentMetadata(params.attachmentRid);
    },
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
    async ({ params }) => {
      const { ontologyApiName, primaryKey, objectType, propertyName } = params;

      const rid = fauxFoundry
        .getDataStore(ontologyApiName)
        .getObjectOrThrow(objectType, primaryKey)[propertyName];

      const metadata = fauxFoundry.attachments.getAttachmentMetadata(rid);

      return {
        ...metadata,
        type: "single",
      } as const;
    },
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
    async ({ params }) => {
      const { ontologyApiName, primaryKey, objectType, propertyName } = params;

      const rid = fauxFoundry
        .getDataStore(ontologyApiName)
        .getObjectOrThrow(objectType, primaryKey)[propertyName];

      return new Response(fauxFoundry.attachments.getAttachmentBuffer(rid));
    },
  ),
  /**
   * Load latestValue
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.getLatestValue,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async ({ params }) => {
      const { objectType, ontologyApiName, primaryKey, propertyName } = params;

      const ret = fauxFoundry.getDataStore(ontologyApiName)
        .getTimeSeriesData(
          objectType,
          primaryKey,
          propertyName,
        ).at(-1);

      if (!ret) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
      }

      return ret;
    },
  ),
  /**
   * stream values
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.streamValues,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const { objectType, ontologyApiName, primaryKey, propertyName } =
        req.params;
      const requestBody = await req.request.json();

      return Response.json(
        fauxFoundry.getDataStore(ontologyApiName)
          .getTimeSeriesData(
            objectType,
            primaryKey,
            propertyName,
            requestBody,
          ),
      );
    },
  ),
  /**
   * Load media metadata
   */
  handleOpenApiCall(
    OntologiesV2.MediaReferenceProperties.getMediaMetadata,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const { ontologyApiName, objectType, primaryKey, propertyName } =
        req.params;

      const { mediaType, sizeBytes, path } = fauxFoundry
        .getDataStore(ontologyApiName)
        .getMediaOrThrow(objectType, primaryKey, propertyName);

      return { mediaType, sizeBytes, path };
    },
  ),
  /**
   * Read media content
   */
  handleOpenApiCall(
    OntologiesV2.MediaReferenceProperties.getMediaContent,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async req => {
      const { ontologyApiName, objectType, primaryKey, propertyName } =
        req.params;

      const { content, mediaType } = fauxFoundry
        .getDataStore(ontologyApiName)
        .getMediaOrThrow(objectType, primaryKey, propertyName);

      return new Response(content, {
        headers: { "Content-Type": mediaType },
      });
    },
  ),
  handleOpenApiCall(
    OntologiesV2.MediaReferenceProperties.upload,
    [
      "ontologyApiName",
      "objectType",
      "propertyName",
    ],
    async ({ params, request }) => {
      const { ontologyApiName, objectType, propertyName } = params;
      const fileName = new URL(request.url).searchParams.get("mediaItemPath");

      if (typeof fileName !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const content = await request.arrayBuffer();
      const mediaType = request.headers.get("Content-Type")
        ?? "application/octet-stream";

      // This should be the correct prefix, per
      // https://github.com/palantir/osdk-ts/pull/1303#discussion_r2001989395
      const mediaItemRid = `ri.mio.main.media-item.${randomUUID()}`;

      fauxFoundry.getDataStore(ontologyApiName).registerMedia(
        objectType,
        propertyName,
        {
          content,
          mediaItemRid,
          mediaType,
          path: fileName,
        },
      );

      return {
        mimeType: mediaType,
        reference: {
          type: "mediaSetViewItem",
          mediaSetViewItem: {
            mediaItemRid,
            mediaSetRid: "ri.unimplemented.in.shared.test",
            mediaSetViewRid: "ri.unimplemented.in.shared.test",
          },
        },
      } as const;
    },
  ),
] as const;
