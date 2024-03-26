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

import * as path from "node:path";
import invariant from "tiny-invariant";
import { convertIrDataTypeToTsTypeReference } from "./convertIrDataTypeToTsTypeReference";
import { copyright } from "./copyright";
import { HTTP_VERB_MAP } from "./HTTP_VERB_MAP";
import type {
  Documentation,
  Parameter,
  RequestBodyType,
  Resource,
  Response,
  StaticOperation,
} from "./ir";
import { writeCode } from "./writeCode";

type Params = Array<
  { name: string; typeReference: string; optional?: boolean }
>;

export async function generateResource(resource: Resource, nsPath: string) {
  const filePath = path.join(
    nsPath,
    `${resource.component}.ts`,
  );

  await writeCode(
    filePath,
    `${copyright}\n\n
        import type {OmniResource} from "@osdk/api";
        import type * as $C from "../components.js";
        
        ${generateResourceType(resource)}
        ${generateRuntimeConst(resource)}
        `,
  );
}

function generateMethodSignature(method: StaticOperation) {
  // Remove resource name from the function name if it ends with it
  const methodName = method.verb ?? method.name;
  const requestType = method.requestBody?.body.requestType;
  const bodyInfo = getReqBodyInfo(requestType);
  const paramInfo = getParamInfo(method.parameters);
  const respInfo = getResponseInfo(method.response);

  const bodyArg = bodyInfo.componentType != null
    ? `$body: ${bodyInfo.componentType},`
    : "";

  return `
    /**
     * ${getCleanedUpJsdoc(method.documentation)}
     * 
     * Required Scopes: [${method.auth.scopes.join(", ")}]
     * ${true ? `URL: ${method.path}` : ``}
     */
    "${methodName}": (
      ${getParamsAsSyntaxListString(paramInfo.PATH)}
      ${bodyArg}
      ${getParamsAsQuerySyntaxListString(paramInfo.QUERY)}
    )=> Promise<${respInfo.componentType}>;\n`;
}

function generateResourceType(resource: Resource) {
  let typeOutput = `
  export interface ${resource.component} {\n`;

  for (const method of resource.staticOperations) {
    typeOutput += `${generateMethodSignature(method)}`;
  }

  typeOutput += `}\n`;
  return typeOutput;
}

export function generateRuntimeConst(resource: Resource) {
  let ret = "";

  for (const method of resource.staticOperations) {
    // Remove resource name from the function name if it ends with it
    const methodName = method.verb ?? method.name;
    const requestType = method.requestBody?.body.requestType;
    const bodyInfo = getReqBodyInfo(requestType);
    const respInfo = getResponseInfo(method.response);

    let count = 0;
    const constParts = [
      HTTP_VERB_MAP[method.httpMethod],
      `"${method.path.replace(/{.*?}/g, () => `{${count++}}`)}"`,
      bodyInfo.componentType != null ? 1 : "",
      bodyInfo.mimeType,
      respInfo.mimeType,
    ];

    while (constParts.at(-1) === "") {
      constParts.pop();
    }

    ret += `${methodName}: [${constParts.join(",")}],`;
  }

  return `export const ${resource.component}: OmniResource<${resource.component}> = {
    type: "omniapi",
    methods: {
      ${ret}
    }
  }\n`;
}

interface PayloadInfo {
  /**
   * The MIME type of the payload if its not application/json, otherwise empty string.
   */
  mimeType: string;

  /**
   * The component type of the payload if it exists, otherwise undefined.
   */
  componentType: string | undefined;
}

function getCleanedUpJsdoc(doc?: Documentation) {
  if (doc?.description?.includes("*/")) {
    throw "unsupported description";
  }
  return doc?.description?.replace(/\n/g, "\n * ") ?? "";
}

function getParamInfo(irParams: Parameter[]) {
  const ret: Record<"PATH" | "QUERY", Params> = {
    PATH: [],
    QUERY: [],
  };

  for (const { name, type: { type: dataType }, inputType } of irParams) {
    invariant(
      inputType === "PATH" || inputType === "QUERY",
      "Only PATH and QUERY params are supported",
    );

    ret[inputType].push({
      name,
      typeReference: convertIrDataTypeToTsTypeReference(dataType, false, "$C"),
      optional: dataType.type === "optional",
    });
  }
  return ret;
}

/**
 * @param requestType
 * @returns
 */
function getReqBodyInfo(requestType?: RequestBodyType): PayloadInfo {
  const mimeType = requestType == null
    ? ""
    : requestType.type === "component"
    ? quoteMimeTypeOrEmpty(requestType.component.mediaType)
    : quoteMimeTypeOrEmpty(requestType.binary.mediaType);

  const componentType = requestType?.type === "component"
    ? convertIrDataTypeToTsTypeReference(
      requestType.component.type.type,
      true,
      "$C",
    )
    : undefined;

  return { mimeType, componentType };
}

function getParamsAsSyntaxListString(p: Params) {
  return p.map((z) => `${z.name}${z.optional ? "?" : ""}: ${z.typeReference},`)
    .join("");
}

function getParamsAsQuerySyntaxListString(params: Params) {
  if (params.length === 0) return "";
  const opt = params.every(p => p.optional);
  return `$queryParams${opt ? "?" : ""}: { ${
    getParamsAsSyntaxListString(params)
  } },`;
}

function getResponseInfo(response: Response) {
  if (response.body.type === "ok") {
    const { responseType, required } = response.body.ok;
    if (responseType.type === "binary") {
      return {
        mimeType: quoteMimeTypeOrEmpty(responseType.binary.mediaType),
        componentType: "unknown", // FIXME
      };
    }

    let { mediaType, type } = responseType.type === "component"
      ? responseType.component
      : responseType;

    return {
      mimeType: quoteMimeTypeOrEmpty(mediaType),
      componentType: "" + convertIrDataTypeToTsTypeReference(
        type.type,
        true,
        "$C",
      ) + (required ? "" : "| undefined"),
    };
  } else {
    return { componentType: "void", mimeType: "" };
  }
}

function quoteMimeTypeOrEmpty(s: string) {
  return s === "application/json" ? "" : `"${s}"`;
}
