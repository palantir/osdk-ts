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

import type {
  Attachment,
  AttachmentV2,
  ExecuteQueryResponse,
  LinkTypeSide,
  ListLinkedObjectsResponse,
  ListObjectsResponseV2,
  ListObjectTypesResponse,
  ListObjectTypesV2Response,
  ListOntologiesResponse,
  ListOutgoingLinkTypesResponse,
  ListOutgoingLinkTypesResponseV2,
  ListQueryTypesResponseV2,
  Ontology,
  OntologyObjectV2,
} from "@osdk/gateway/types";
import type {
  DefaultBodyType,
  MockedRequest,
  ResponseComposition,
  RestHandler,
} from "msw";
import { rest } from "msw";
import type { BaseAPIError } from "../BaseError.js";
import {
  AttachmentNotFoundError,
  AttachmentSizeExceededLimitError,
  InvalidContentTypeError,
  InvalidRequest,
  LinkTypeNotFound,
  ObjectNotFoundError,
  ObjectTypeDoesNotExistError,
  OntologyNotFoundError,
  QueryNotFoundError,
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
import { queryRequestHandlers } from "../stubs/queries.js";
import { queryTypes } from "../stubs/queryTypes.js";
import {
  firstPointRequestHandlers,
  lastPointRequestHandlers,
} from "../stubs/timeseriesRequests.js";
import { authHandlerMiddleware } from "./commonHandlers.js";
import {
  areArrayBuffersEqual,
  pageThroughResponseSearchParams,
} from "./endpointUtils.js";

export const loadObjectsEndpoints: RestHandler<
  MockedRequest<DefaultBodyType>
>[] = [
  /**
   * List ontologies
   */
  rest.get(
    "https://stack.palantir.com/api/v1/ontologies",
    authHandlerMiddleware(
      async (_req, res: ResponseComposition<ListOntologiesResponse>, ctx) => {
        return res(
          ctx.json({
            data: [defaultOntology],
          }),
        );
      },
    ),
  ),

  /**
   * Get specified Ontology
   */
  rest.get(
    "https://stack.palantir.com/api/v1/ontologies/:ontologyRid",
    authHandlerMiddleware(
      async (_req, res: ResponseComposition<Ontology>, ctx) => {
        return res(ctx.json(defaultOntology));
      },
    ),
  ),

  /**
   * List objectTypes
   */
  rest.get(
    "https://stack.palantir.com/api/v1/ontologies/:ontologyRid/objectTypes",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListObjectTypesResponse | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyRid !== defaultOntology.rid) {
          return res(
            ctx.status(404),
            ctx.json(OntologyNotFoundError(req.params.ontologyRid as string)),
          );
        }

        return res(
          ctx.json({
            data: [
              employeeObjectType,
              objectTypeWithAllPropertyTypes,
              officeObjectType,
              objectTypeWithTimestampPrimaryKey,
              equipmentObjectType,
            ],
          }),
        );
      },
    ),
  ),

  /**
   * List objectTypes V2
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objectTypes",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListObjectTypesV2Response | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== defaultOntology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }

        return res(
          ctx.json({
            data: ObjectTypesV2,
          }),
        );
      },
    ),
  ),

  /**
   * Load object
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType/:primaryKey",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<OntologyObjectV2 | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== defaultOntology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }

        const objectType = req.params.objectType;
        const primaryKey = req.params.primaryKey;
        if (typeof objectType !== "string" || typeof primaryKey !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid request")),
          );
        }

        if (
          !objectLoadResponseMap[objectType]
          || !objectLoadResponseMap[objectType][primaryKey]
        ) {
          return res(
            ctx.status(404),
            ctx.json(ObjectNotFoundError(objectType, primaryKey)),
          );
        }

        const response = filterObjectProperties(
          objectLoadResponseMap[objectType][primaryKey],
          req.url,
        );

        return res(ctx.json(response));
      },
    ),
  ),

  /**
   * Load all objects
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListObjectsResponseV2 | BaseAPIError>,
        ctx,
      ) => {
        if (!req || !res) {
          return res(
            ctx.status(500),
            ctx.json(InvalidRequest("Request or response not found")),
          );
        }

        const objectType = req.params.objectType;
        if (typeof objectType !== "string") {
          return res(
            ctx.status(400),
            ctx.json(ObjectTypeDoesNotExistError(JSON.stringify(objectType))),
          );
        }

        const paginationParams = {
          pageSize: req.url.searchParams.get("pageSize") === null
            ? undefined
            : Number(req.url.searchParams.get("pageSize")),
          pageToken: req.url.searchParams.get("pageToken") === null
            ? undefined
            : (req.url.searchParams.get("pageToken") as string),
        };

        const loadObjects = pageThroughResponseSearchParams(
          loadRequestHandlersV2,
          objectType,
          paginationParams.pageSize,
          paginationParams.pageToken,
        );

        if (
          req.params.ontologyApiName === defaultOntology.apiName && loadObjects
        ) {
          return res(ctx.json(filterObjectsProperties(loadObjects, req.url)));
        }
        return res(
          ctx.status(400),
          ctx.json(InvalidRequest("Invalid Request")),
        );
      },
    ),
  ),

  /**
   * Load firstPoint
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType/:primaryKey/timeseries/:propertyName/firstPoint",
    authHandlerMiddleware(async (req, res, ctx) => {
      if (!req || !res) {
        return res(ctx.status(500, "Request or response not found"));
      }
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };
      const firstPointResp =
        firstPointRequestHandlers[JSON.stringify(pointParams)];
      if (
        req.params.ontologyApiName === defaultOntology.apiName
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return res(ctx.json(firstPointResp));
      }
      return res(ctx.status(400), ctx.json({ message: "Invalid request" }));
    }),
  ),

  /**
   * Load lastPoint
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType/:primaryKey/timeseries/:propertyName/lastPoint",
    authHandlerMiddleware(async (req, res, ctx) => {
      if (!req || !res) {
        return res(ctx.status(500, "Request or response not found"));
      }
      const pointParams = {
        primaryKey: req.params.primaryKey,
        propertyName: req.params.propertyName,
      };
      const lastPointResp =
        lastPointRequestHandlers[JSON.stringify(pointParams)];
      if (
        req.params.ontologyApiName === "default-ontology"
        && req.params.objectType === employeeObjectType.apiName
      ) {
        return res(ctx.json(lastPointResp));
      }
      return res(ctx.status(400), ctx.json({ message: "Invalid request" }));
    }),
  ),

  /**
   * Get linkType
   */
  rest.get(
    "https://stack.palantir.com/api/v1/ontologies/:ontologyRid/objectTypes/:objectType/outgoingLinkTypes/:linkType",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<LinkTypeSide | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyRid !== defaultOntology.rid) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(JSON.stringify(req.params.ontologyRid)),
            ),
          );
        }

        const objectTypeApiName = req.params.objectType;
        const linkTypeApiName = req.params.linkType;
        if (
          typeof objectTypeApiName !== "string"
          || typeof linkTypeApiName !== "string"
        ) {
          return res(
            ctx.status(400),
            ctx.json(
              InvalidRequest(
                "Invalid parameters for objectTypeApiName linkTypeApiName",
              ),
            ),
          );
        }

        if (linkTypesResponseMap[objectTypeApiName]) {
          const linkTypes: Array<{
            apiName: string;
            status: string;
            objectTypeApiName: string;
            cardinality: string;
          }> = linkTypesResponseMap[objectTypeApiName].data;
          const foundLinkType = linkTypes.find(linkType =>
            linkType.apiName === linkTypeApiName
          );

          if (foundLinkType) {
            return res(ctx.json(foundLinkType as LinkTypeSide));
          }
        }

        return res(
          ctx.json(LinkTypeNotFound(objectTypeApiName, linkTypeApiName)),
        );
      },
    ),
  ),

  /**
   * List linkTypes
   */
  rest.get(
    "https://stack.palantir.com/api/v1/ontologies/:ontologyRid/objectTypes/:objectType/outgoingLinkTypes",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListOutgoingLinkTypesResponse | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyRid !== defaultOntology.rid) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(JSON.stringify(req.params.ontologyRid)),
            ),
          );
        }

        const objectType = req.params.objectType;
        if (typeof objectType !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameter objectType")),
          );
        }

        const transformedMap = Object.fromEntries(
          Object.entries(linkTypesResponseMap).map(
            linkMap => [linkMap[0].toLowerCase(), linkMap[1]],
          ),
        );

        if (transformedMap[objectType.toLowerCase()]) {
          return res(ctx.json(transformedMap[objectType.toLowerCase()]));
        }
        return res(
          ctx.json({
            data: [],
          }),
        );
      },
    ),
  ),

  /**
   * List linkTypes
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objectTypes/:objectType/outgoingLinkTypes",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<
          ListOutgoingLinkTypesResponseV2 | BaseAPIError
        >,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== defaultOntology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(JSON.stringify(req.params.ontologyApiName)),
            ),
          );
        }

        const objectType = req.params.objectType;
        if (typeof objectType !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameter objectType")),
          );
        }

        const transformedMap = Object.fromEntries(
          Object.entries(linkTypesResponseMap).map(
            linkMap => [linkMap[0].toLowerCase(), linkMap[1]],
          ),
        );

        if (transformedMap[objectType]) {
          return res(ctx.json(transformedMap[objectType]));
        }
        return res(
          ctx.json({
            data: [],
          }),
        );
      },
    ),
  ),

  /**
   * List Linked Objects
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType/:primaryKey/links/:linkType",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListLinkedObjectsResponse | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== defaultOntology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(JSON.stringify(req.params.ontologyApiName)),
            ),
          );
        }

        const primaryKey = req.params.primaryKey;
        const linkType = req.params.linkType;
        const objectType = req.params.objectType;

        if (
          typeof primaryKey !== "string" || typeof linkType !== "string"
          || typeof objectType !== "string"
        ) {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid path parameters sent")),
          );
        }

        if (!linkResponseMap[objectType]) {
          return res(
            ctx.status(400),
            ctx.json(ObjectTypeDoesNotExistError(objectType)),
          );
        }

        if (!linkResponseMap[objectType][linkType]) {
          return res(
            ctx.status(400),
            ctx.json(LinkTypeNotFound(objectType, linkType)),
          );
        }

        if (!linkResponseMap[objectType][linkType][primaryKey]) {
          return res(
            ctx.json({
              data: [],
            }),
          );
        }
        return res(
          ctx.json(
            filterObjectsProperties(
              linkResponseMap[objectType][linkType][primaryKey],
              req.url,
            ),
          ),
        );
      },
    ),
  ),

  /**
   * Get specific Linked Object
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType/:primaryKey/links/:linkType/:targetPrimaryKey",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListLinkedObjectsResponse | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== defaultOntology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(JSON.stringify(req.params.ontologyApiName)),
            ),
          );
        }

        const primaryKey = req.params.primaryKey;
        const linkType = req.params.linkType;
        const objectType = req.params.objectType;
        const targetPrimaryKey = req.params.targetPrimaryKey;

        if (
          typeof primaryKey !== "string" || typeof linkType !== "string"
          || typeof objectType !== "string"
          || typeof targetPrimaryKey !== "string"
        ) {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid path parameters sent")),
          );
        }

        if (!linkResponseMap[objectType]) {
          return res(
            ctx.status(400),
            ctx.json(ObjectTypeDoesNotExistError(objectType)),
          );
        }

        if (!linkResponseMap[objectType][linkType]) {
          return res(
            ctx.status(400),
            ctx.json(LinkTypeNotFound(objectType, linkType)),
          );
        }

        if (!linkResponseMap[objectType][linkType][primaryKey]) {
          return res(
            ctx.json({
              data: [],
            }),
          );
        }

        const object = linkResponseMap[objectType][linkType][primaryKey].data
          .find((o: any) => o.__primaryKey.toString() === targetPrimaryKey);

        if (!object) {
          return res(
            ctx.status(404),
            ctx.json(
              ObjectNotFoundError(
                linkResponseMap[objectType][linkType][primaryKey].data[0]
                  ?.__apiName
                  ?? `${objectType} -> ${linkType}`,
                targetPrimaryKey,
              ),
            ),
          );
        }

        return res(
          ctx.json(
            filterObjectProperties(
              object,
              req.url,
            ),
          ),
        );
      },
    ),
  ),

  /**
   * List Queries
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/queryTypes",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ListQueryTypesResponseV2 | BaseAPIError>,
        ctx,
      ) => {
        if (req.params.ontologyApiName !== defaultOntology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }
        return res(
          ctx.json({
            data: queryTypes,
          }),
        );
      },
    ),
  ),

  /**
   * Execute Queries
   */
  rest.post(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/queries/:queryApiName/execute",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<ExecuteQueryResponse | BaseAPIError>,
        ctx,
      ) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }
        const body = await req.text();
        const parsedBody = JSON.parse(body);
        const queryApiName = req.params.queryApiName;

        if (typeof queryApiName !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameters queryApiName")),
          );
        }

        const queryResponses = queryRequestHandlers[queryApiName];
        if (!queryResponses) {
          return res(
            ctx.status(404),
            ctx.json(QueryNotFoundError(queryApiName)),
          );
        }

        const queryResponse = queryResponses[JSON.stringify(parsedBody)];
        if (
          req.params.ontologyApiName === defaultOntology.apiName
          && queryResponse
        ) {
          return res(ctx.json(queryResponse));
        }
        return res(
          ctx.status(400),
          ctx.json(InvalidRequest("Invalid Query Request")),
        );
      },
    ),
  ),

  /**
   * Upload attachment
   */
  rest.post(
    "https://stack.palantir.com/api/v1/attachments/upload",
    authHandlerMiddleware(
      async (req, res: ResponseComposition<Attachment | BaseAPIError>, ctx) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }
        const urlObj = new URL(req.url);
        const fileName = urlObj.searchParams.get("filename");

        if (typeof fileName !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameter fileName")),
          );
        }

        const attachmentsUploadResponse = attachmentUploadRequest[fileName];
        const body = await req.arrayBuffer();

        if (attachmentsUploadResponse) {
          const expectedBody = attachmentUploadRequestBody[fileName];
          const expectedBodyArray = await expectedBody.arrayBuffer();

          if (!areArrayBuffersEqual(body, expectedBodyArray)) {
            return res(ctx.status(400), ctx.json(InvalidContentTypeError));
          }

          return res(ctx.json(attachmentsUploadResponse));
        }
        return res(ctx.status(400), ctx.json(AttachmentSizeExceededLimitError));
      },
    ),
  ),

  /**
   * Get attachment metadata V1
   */
  rest.get(
    "https://stack.palantir.com/api/v1/attachments/:attachmentRid",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<AttachmentV2 | BaseAPIError>,
        ctx,
      ) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }

        const attachmentRid = req.params.attachmentRid;

        if (typeof attachmentRid !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameters")),
          );
        }

        const getAttachmentMetadataResponse =
          attachmentMetadataRequest[attachmentRid];
        if (getAttachmentMetadataResponse) {
          return res(ctx.json(getAttachmentMetadataResponse));
        }

        return res(ctx.status(404), ctx.json(AttachmentNotFoundError));
      },
    ),
  ),

  /**
   * Get attachment metadata V2
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType/:primaryKey/attachments/:propertyName",
    authHandlerMiddleware(
      async (
        req,
        res: ResponseComposition<AttachmentV2 | BaseAPIError>,
        ctx,
      ) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }

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
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameters")),
          );
        }

        const getAttachmentMetadataResponse =
          attachmentMetadataRequest[propertyName];
        if (getAttachmentMetadataResponse) {
          return res(ctx.json(getAttachmentMetadataResponse));
        }

        return res(ctx.status(404), ctx.json(AttachmentNotFoundError));
      },
    ),
  ),

  /**
   * Read attachment content V1
   */
  rest.get(
    "https://stack.palantir.com/api/v1/attachments/:attachmentRid/content",
    authHandlerMiddleware(
      async (req, res: ResponseComposition<Blob | BaseAPIError>, ctx) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }

        const attachmentRid = req.params.attachmentRid;

        if (typeof attachmentRid !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameters")),
          );
        }

        const getAttachmentContentResponse =
          attachmentContentRequest[attachmentRid];

        if (getAttachmentContentResponse) {
          const blob = new Blob(
            [JSON.stringify(getAttachmentContentResponse)],
            { type: "application/json" },
          );
          return res(ctx.body(blob));
        }

        return res(ctx.status(404), ctx.json(AttachmentNotFoundError));
      },
    ),
  ),

  /**
   * Read attachment content V2
   */
  rest.get(
    "https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/objects/:objectType/:primaryKey/attachments/:propertyName/content",
    authHandlerMiddleware(
      async (req, res: ResponseComposition<Blob | BaseAPIError>, ctx) => {
        if (!req || !res) {
          return res(ctx.status(500, "Request or response not found"));
        }

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
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameters")),
          );
        }

        const getAttachmentContentResponse =
          attachmentContentRequest[propertyName];
        if (getAttachmentContentResponse) {
          const blob = new Blob(
            [JSON.stringify(getAttachmentContentResponse)],
            { type: "application/json" },
          );
          return res(ctx.body(blob));
        }

        return res(ctx.status(404), ctx.json(AttachmentNotFoundError));
      },
    ),
  ),
];
