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

import type { Documentation, Example } from "./Common";
import type { ParameterValue } from "./ParameterValue";

export interface Namespace {
  name: string;
  resources: Resource[];
}

export interface Resource {
  component: string;
  staticOperations: StaticOperation[];
}

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface Auth {
  includeAuthHeader: boolean;
  scopes: string[];
}

export enum InputType {
  HEADER = "HEADER",
  PATH = "PATH",
  QUERY = "QUERY",
  BODY = "BODY",
}

export interface Parameter {
  name: string;
  documentation: Documentation;
  inputType: InputType;
  type: ParameterValue;
}

export type MediaType = "application/json" | "*/*";

export interface ComponentRequestType {
  type: "component";
  component: {
    mediaType: MediaType;
    type: ParameterValue;
    example?: Example;
  };
}

export interface ComponentResponseType {
  type: "component";
  component: {
    mediaType: MediaType;
    type: ParameterValue;
    documentation: Documentation;
    example?: Example;
  };
}

export interface BinaryResponseType {
  type: "binary";
  binary: {
    mediaType: string;
  };
}

export interface NoContentResponseBody {
  type: "noContent";
  noContent: Record<string, never>;
}

export interface ReferenceResponseType {
  mediaType: string;
  type: ParameterValue;
  documentation: Documentation;
}

export type ResponseType =
  | ComponentResponseType
  | BinaryResponseType
  | ReferenceResponseType;

export interface OkResponseBody {
  type: "ok";
  ok: {
    responseType: ResponseType;
    required: boolean;
  };
}

export interface AcceptedResponseBody {
  type: "accepted";
  accepted: {
    responseType: ResponseType;
  };
}

export type ResponseBody =
  | OkResponseBody
  | NoContentResponseBody
  | AcceptedResponseBody;

export type RequestBodyType = ComponentRequestType | BinaryResponseType;

export interface RequestBody {
  body: {
    requestType: RequestBodyType;
  };
}

export interface Response {
  documentation: Documentation;
  body: ResponseBody;
  code: string;
}

export interface StaticOperation {
  name: string;
  verb?:
    | "create"
    | "get"
    | "iterator"
    | "delete"
    | "commit"
    | "abort"
    | "upload"
    | "binary"
    | "getMetadata"
    | "getContent"
    | "apply"
    | "applyAsync"
    | "getOperationStatus"
    | "validate"
    | "execute"
    | "search"
    | "aggregate"
    | "complete"
    | "files"
    | "exportCheckpoint"
    | "count"
    | "getContentV2"
    | "firstPoint"
    | "lastPoint"
    | "transform"
    | "load"
    | "streamPoints"
    | "uploadFile"
    | "getFileContent"; // Why is this optional?
  path: string;
  documentation?: Documentation;
  httpMethod: HttpMethod;
  parameters: Parameter[];
  requestBody?: RequestBody;
  response: Response;
  auth: Auth;
}
