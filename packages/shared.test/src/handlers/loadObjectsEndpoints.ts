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

import type { LinkTypeSide } from "@osdk/internal.foundry.core";
import * as OntologiesV1 from "@osdk/internal.foundry.ontologies";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import stableStringify from "json-stable-stringify";
import type { HttpResponseResolver, PathParams, RequestHandler } from "msw";
import type { BaseAPIError } from "../BaseError.js";
import {
  AttachmentNotFoundError,
  AttachmentSizeExceededLimitError,
  InvalidContentTypeError,
  InvalidRequest,
  LinkTypeNotFound,
  ObjectNotFoundError,
  ObjectTypeDoesNotExistError,
} from "../errors.js";
import {
  filterObjectProperties,
  filterObjectsProperties,
} from "../filterObjects.js";
import {
  attachmentContentRequest,
  attachmentMetadataRequest,
  attachmentUploadRequest,
  attachmentUploadRequestBody,
} from "../stubs/attachments.js";
import {
  latestValueRequestHandlers,
  streamValuesRequestHandlers,
} from "../stubs/geotimeseriesrequests.js";
import { linkResponseMap } from "../stubs/links.js";
import { linkTypesResponseMap } from "../stubs/linkTypes.js";
import { loadRequestHandlersV2 } from "../stubs/loadRequests.js";
import { objectLoadResponseMap } from "../stubs/objects.js";
import {
  employeeObjectType,
  equipmentObjectType,
  objectTypeWithAllPropertyTypes,
  objectTypeWithTimestampPrimaryKey,
  officeObjectType,
} from "../stubs/objectTypes.js";
import { ObjectTypesV2 } from "../stubs/objectTypeV2.js";
import { defaultOntology } from "../stubs/ontologies.js";
import {
  firstPointRequestHandlers,
  lastPointRequestHandlers,
  streamPointsRequestHandlers,
} from "../stubs/timeseriesRequests.js";
import {
  areArrayBuffersEqual,
  pageThroughResponseSearchParams,
} from "./endpointUtils.js";
import { getOntology } from "./ontologyMetadataEndpoints.js";
import type { ExtractBody } from "./util/handleOpenApiCall.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export const loadObjectsEndpoints: Array<RequestHandler> = [
  /**
   * List ontologies
   */
  handleOpenApiCall(
    OntologiesV1.Ontologies.list,
    [],
    async () => {
      return {
        data: [defaultOntology],
      };
    },
  ),

  /**
   * Get specified Ontology
   */
  handleOpenApiCall(
    OntologiesV1.Ontologies.get,
    ["ontologyRid"],
    async req => {
      return defaultOntology;
    },
  ),

  /**
   * List objectTypes
   */
  handleOpenApiCall(
    OntologiesV1.ObjectTypes.list,
    ["ontologyRid"],
    async req => {
      getOntology(req.params.ontologyRid as string);

      return {
        data: [
          employeeObjectType,
          objectTypeWithAllPropertyTypes,
          officeObjectType,
          objectTypeWithTimestampPrimaryKey,
          equipmentObjectType,
        ],
      };
    },
  ),

  /**
   * List objectTypes V2
   */
  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.list,
    ["ontologyApiName"],
    async req => {
      // will throw if bad name
      getOntology(req.params.ontologyApiName as string);

      return {
        data: ObjectTypesV2,
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
      // will throw if bad name
      getOntology(req.params.ontologyApiName as string);

      const objectType = req.params.objectType;
      const primaryKey = req.params.primaryKey;
      if (typeof objectType !== "string" || typeof primaryKey !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
      }

      if (
        !objectLoadResponseMap[objectType]
        || !objectLoadResponseMap[objectType][primaryKey]
      ) {
        throw new OpenApiCallError(
          404,
          ObjectNotFoundError(objectType, primaryKey),
        );
      }

      const response = filterObjectProperties(
        objectLoadResponseMap[objectType][primaryKey],
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
      const objectType = req.params.objectType;
      if (typeof objectType !== "string") {
        throw new OpenApiCallError(
          400,
          ObjectTypeDoesNotExistError(JSON.stringify(objectType)),
        );
      }

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
        loadRequestHandlersV2,
        objectType,
        paginationParams.pageSize,
        paginationParams.pageToken,
        true,
      );

      if (
        req.params.ontologyApiName === defaultOntology.apiName && loadObjects
      ) {
        return filterObjectsProperties(loadObjects, url, true);
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid Request"));
    },
  ),

  /**
   * Load firstPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint,
    [
      "ontologyApiName",
      "objectType",
      "primaryKey",
      "propertyName",
    ],
    async req => {
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };

      const firstPointResp =
        firstPointRequestHandlers[JSON.stringify(pointParams)];
      if (
        (req.params.ontologyApiName === defaultOntology.apiName
          || req.params.ontologyApiName === defaultOntology.rid)
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return firstPointResp;
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
    },
  ),

  /**
   * Load lastPoint
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.getLastPoint,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };
      const lastPointResp =
        lastPointRequestHandlers[JSON.stringify(pointParams)];
      if (
        (req.params.ontologyApiName === defaultOntology.apiName
          || req.params.ontologyApiName === defaultOntology.rid)
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return lastPointResp;
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
    },
  ),

  /**
   * stream points
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesPropertiesV2.streamPoints,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      return handleStreamValues(req, false);
    },
  ),

  /**
   * Get linkType
   */
  handleOpenApiCall(
    OntologiesV1.ObjectTypes.getOutgoingLinkType,
    [
      "ontologyRid",
      "objectType",
      "linkType",
    ],
    async req => {
      // will throw if bad name
      getOntology(req.params.ontologyRid);

      const objectTypeApiName = req.params.objectType;
      const linkTypeApiName = req.params.linkType;
      if (
        typeof objectTypeApiName !== "string"
        || typeof linkTypeApiName !== "string"
      ) {
        throw new OpenApiCallError(
          400,
          InvalidRequest(
            "Invalid parameters for objectTypeApiName linkTypeApiName",
          ),
        );
      }

      if (linkTypesResponseMap[objectTypeApiName]) {
        const linkTypes: ReadonlyArray<{
          apiName: string;
          status: string;
          objectTypeApiName: string;
          cardinality: string;
        }> = linkTypesResponseMap[objectTypeApiName].data;
        const foundLinkType = linkTypes.find(linkType =>
          linkType.apiName === linkTypeApiName
        );

        if (foundLinkType) {
          return foundLinkType as LinkTypeSide;
        }
      }

      throw new OpenApiCallError(
        400,
        LinkTypeNotFound(objectTypeApiName, linkTypeApiName),
      );
    },
  ),

  /**
   * List linkTypes
   */
  handleOpenApiCall(
    OntologiesV1.ObjectTypes.listOutgoingLinkTypes,
    ["ontologyRid", "objectType"],
    async req => {
      // will throw if bad name
      getOntology(req.params.ontologyRid as string);

      const objectType = req.params.objectType;
      if (typeof objectType !== "string") {
        throw new OpenApiCallError(
          400,
          InvalidRequest("Invalid parameter objectType"),
        );
      }

      const transformedMap = Object.fromEntries(
        Object.entries(linkTypesResponseMap).map(
          linkMap => [linkMap[0].toLowerCase(), linkMap[1]],
        ),
      );

      if (transformedMap[objectType.toLowerCase()]) {
        return transformedMap[objectType.toLowerCase()];
      }
      return {
        data: [],
      };
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
      // will throw if bad name
      getOntology(req.params.ontologyApiName as string);

      const primaryKey = req.params.primaryKey;
      const linkType = req.params.linkType;
      const objectType = req.params.objectType;

      if (
        typeof primaryKey !== "string" || typeof linkType !== "string"
        || typeof objectType !== "string"
      ) {
        throw new OpenApiCallError(
          400,
          InvalidRequest("Invalid path parameters sent"),
        );
      }

      if (!linkResponseMap[objectType]) {
        throw new OpenApiCallError(
          400,
          ObjectTypeDoesNotExistError(objectType),
        );
      }

      if (!linkResponseMap[objectType][linkType]) {
        throw new OpenApiCallError(
          400,
          LinkTypeNotFound(objectType, linkType),
        );
      }

      if (!linkResponseMap[objectType][linkType][primaryKey]) {
        return {
          data: [],
        };
      }
      return filterObjectsProperties(
        linkResponseMap[objectType][linkType][primaryKey],
        new URL(req.request.url),
        false,
      );
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
      // will throw if bad name
      getOntology(req.params.ontologyApiName as string);

      const primaryKey = req.params.primaryKey;
      const linkType = req.params.linkType;
      const objectType = req.params.objectType;
      const targetPrimaryKey = req.params.targetPrimaryKey;

      if (
        typeof primaryKey !== "string" || typeof linkType !== "string"
        || typeof objectType !== "string"
        || typeof targetPrimaryKey !== "string"
      ) {
        throw new OpenApiCallError(
          400,
          InvalidRequest("Invalid path parameters sent"),
        );
      }

      if (!linkResponseMap[objectType]) {
        throw new OpenApiCallError(
          400,
          ObjectTypeDoesNotExistError(objectType),
        );
      }

      if (!linkResponseMap[objectType][linkType]) {
        throw new OpenApiCallError(400, LinkTypeNotFound(objectType, linkType));
      }

      if (!linkResponseMap[objectType][linkType][primaryKey]) {
        return {
          data: [],
        };
      }

      const object = linkResponseMap[objectType][linkType][primaryKey].data
        .find((o: any) => o.__primaryKey.toString() === targetPrimaryKey);

      if (!object) {
        throw new OpenApiCallError(
          404,
          ObjectNotFoundError(
            linkResponseMap[objectType][linkType][primaryKey].data[0]
              ?.__apiName
              ?? `${objectType} -> ${linkType}`,
            targetPrimaryKey,
          ),
        );
      }

      return filterObjectProperties(
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
    async req => {
      const urlObj = new URL(req.request.url);
      const fileName = urlObj.searchParams.get("filename");

      if (typeof fileName !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameter"));
      }

      const attachmentsUploadResponse = attachmentUploadRequest[fileName];
      const body = await req.request.arrayBuffer();

      if (attachmentsUploadResponse) {
        const expectedBody = attachmentUploadRequestBody[fileName];
        const expectedBodyArray = await expectedBody.arrayBuffer();

        if (!areArrayBuffersEqual(body, expectedBodyArray)) {
          throw new OpenApiCallError(400, InvalidContentTypeError);
        }

        return attachmentsUploadResponse as any; // fixme
      }
      throw new OpenApiCallError(400, AttachmentSizeExceededLimitError);
    },
  ),

  /**
   * Get attachment metadata V1
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.get,
    ["attachmentRid"],
    async req => {
      const attachmentRid = req.params.attachmentRid;

      if (typeof attachmentRid !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentMetadataResponse =
        attachmentMetadataRequest[attachmentRid];
      if (getAttachmentMetadataResponse) {
        return getAttachmentMetadataResponse as any; // fixme
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
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
    async req => {
      const ontologyApiName = req.params.ontologyApiName;
      const primaryKey = req.params.primaryKey;
      const objectType = req.params.objectType;
      const propertyName = req.params.propertyName;

      if (
        typeof primaryKey !== "string"
        || typeof ontologyApiName !== "string"
        || typeof objectType !== "string"
        || typeof propertyName !== "string"
      ) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentMetadataResponse =
        attachmentMetadataRequest[propertyName];
      if (getAttachmentMetadataResponse) {
        return {
          ...getAttachmentMetadataResponse,
          type: "single" as const,
        } as any; // fixme
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
    },
  ),

  /**
   * Read attachment content V1
   */
  handleOpenApiCall(
    OntologiesV2.Attachments.read,
    ["attachmentRid"],
    async req => {
      const attachmentRid = req.params.attachmentRid;

      if (typeof attachmentRid !== "string") {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentContentResponse =
        attachmentContentRequest[attachmentRid];

      if (getAttachmentContentResponse) {
        return new Response(JSON.stringify(getAttachmentContentResponse));
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
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
    async req => {
      const ontologyApiName = req.params.ontologyApiName;
      const primaryKey = req.params.primaryKey;
      const objectType = req.params.objectType;
      const propertyName = req.params.propertyName;

      if (
        typeof primaryKey !== "string"
        || typeof ontologyApiName !== "string"
        || typeof objectType !== "string"
        || typeof propertyName !== "string"
      ) {
        throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
      }

      const getAttachmentContentResponse =
        attachmentContentRequest[propertyName];
      if (getAttachmentContentResponse) {
        return new Response(JSON.stringify(getAttachmentContentResponse));
      }

      throw new OpenApiCallError(404, AttachmentNotFoundError);
    },
  ),
  /**
   * Load latestValue
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.getLatestValue,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };
      const lastPointResp =
        latestValueRequestHandlers[JSON.stringify(pointParams)];
      if (
        (req.params.ontologyApiName === defaultOntology.apiName
          || req.params.ontologyApiName === defaultOntology.rid)
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return lastPointResp;
      }
      throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
    },
  ),
  /**
   * stream values
   */
  handleOpenApiCall(
    OntologiesV2.TimeSeriesValueBankProperties.streamValues,
    ["ontologyApiName", "objectType", "primaryKey", "propertyName"],
    async req => {
      return handleStreamValues(req, true);
    },
  ),
] as const;

async function handleStreamValues(
  req: Parameters<
    HttpResponseResolver<
      PathParams<string>,
      | ExtractBody<typeof OntologiesV2.TimeSeriesPropertiesV2.streamPoints>
      | Blob
      | BaseAPIError
    >
  >[0],
  useGeotime?: boolean,
) {
  const requestBody = await req.request.json();
  const streamPointsResp = useGeotime
    ? streamValuesRequestHandlers[stableStringify(requestBody)]
    : streamPointsRequestHandlers[stableStringify(requestBody)];
  if (
    streamPointsResp
    && (req.params.ontologyApiName === defaultOntology.apiName
      || req.params.ontologyApiName === defaultOntology.rid)
    && req.params.objectType === employeeObjectType.apiName
  ) {
    return new Response(JSON.stringify(streamPointsResp));
  }
  throw new OpenApiCallError(400, InvalidRequest("Invalid request"));
}
