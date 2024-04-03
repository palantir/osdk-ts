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

import invariant from "tiny-invariant";
import { convertIrDataTypeToTsTypeReference } from "./convertIrDataTypeToTsTypeReference.js";
import { copyright } from "./copyright.js";
import { HTTP_VERB_MAP } from "./HTTP_VERB_MAP.js";
import type {
  Documentation,
  Parameter,
  RequestBodyType,
  Resource,
  Response,
  StaticOperation,
} from "./ir/index.js";
import { writeCode } from "./writeCode.js";

type Params = Array<
  { name: string; typeReference: string; optional?: boolean }
>;

export async function generateResource(resource: Resource, nsPath: string) {
  const filePath = nsPath
    + `_${resource.component}.ts`;

  await writeCode(
    filePath,
    `${copyright}\n\n
        import type { ClientContext as $ClientContext, OmniMethod as $OmniMethod } from "@osdk/shared.net";
        import { omniFetch as $omniFetch } from "@osdk/shared.net";
        import type * as $C from "../generated/components.js";
        
        ${generateMethods(resource)}
        `,
  );
}

function generateMethods(resource: Resource) {
  let out = "";

  for (const method of resource.staticOperations) {
    const methodName = method.name; // method.verb ?? method.name;
    const returnType = `Promise<${
      getResponseInfo(method.response).componentType
    }>`;

    out += `
     const _${methodName}: $OmniMethod<(${
      generateMethodParameters(method)
    }) => ${returnType}> = ${generateOperationArray(method)};
    


    ${generateMethodJsdoc(method)}
    export function ${methodName}(
      $ctx: $ClientContext<any>,
      ...args: [${generateMethodParameters(method)}]
    ): Promise<${
      getResponseInfo(method.response).componentType
    }>{ return $omniFetch($ctx, _${methodName}, ...args); }

    `;
  }
  return out;
}

function generateMethodJsdoc(method: StaticOperation) {
  return `/**
  * ${getCleanedUpJsdoc(method.documentation)}
  * 
  * Required Scopes: [${method.auth.scopes.join(", ")}]
  * ${true ? `URL: ${method.path}` : ``}
  */`;
}

function generateMethodParameters(method: StaticOperation) {
  // Remove resource name from the function name if it ends with it
  const requestType = method.requestBody?.body.requestType;
  const bodyInfo = getReqBodyInfo(requestType);
  const paramInfo = getParamInfo(method.parameters);

  const bodyArg = bodyInfo.componentType != null
    ? `$body: ${bodyInfo.componentType},`
    : "";

  return `
    ${getParamsAsSyntaxListString(paramInfo.PATH)}
    ${bodyArg}
    ${getParamsAsQuerySyntaxListString(paramInfo.QUERY)}
    ${getParamsAsHeaderSyntaxListString(paramInfo.HEADER)}`;
}

function generateMethodSignature(method: StaticOperation) {
  // Remove resource name from the function name if it ends with it
  const methodName = method.name; // method.verb ?? method.name;
  const respInfo = getResponseInfo(method.response);

  return `
    ${generateMethodJsdoc(method)}
    "${methodName}": (
      ${generateMethodParameters(method)}
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

function generateOperationArray(method: StaticOperation) {
  // Remove resource name from the function name if it ends with it
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

  return `[${constParts.join(",")}]`;
}

export function generateRuntimeConst(resource: Resource) {
  let ret = "";

  for (const method of resource.staticOperations) {
    // Remove resource name from the function name if it ends with it
    const methodName = method.name; // method.verb ?? method.name;
    // const requestType = method.requestBody?.body.requestType;
    // const bodyInfo = getReqBodyInfo(requestType);
    // const respInfo = getResponseInfo(method.response);

    // let count = 0;
    // const constParts = [
    //   HTTP_VERB_MAP[method.httpMethod],
    //   `"${method.path.replace(/{.*?}/g, () => `{${count++}}`)}"`,
    //   bodyInfo.componentType != null ? 1 : "",
    //   bodyInfo.mimeType,
    //   respInfo.mimeType,
    // ];

    // while (constParts.at(-1) === "") {
    //   constParts.pop();
    // }

    ret += `${methodName}: ${generateOperationArray(method)},`;
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
  const ret: Record<"PATH" | "QUERY" | "HEADER", Params> = {
    PATH: [],
    QUERY: [],
    HEADER: [],
  };

  for (const { name, type: { type: dataType }, inputType } of irParams) {
    invariant(
      inputType === "PATH" || inputType === "QUERY" || inputType === "HEADER",
      `Only PATH and QUERY params are supported, not ${inputType}`,
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

function getParamsAsSyntaxListStringQuoted(p: Params) {
  return p.map((z) =>
    `"${z.name}"${z.optional ? "?" : ""}: ${z.typeReference},`
  )
    .join("");
}

function getParamsAsQuerySyntaxListString(params: Params) {
  if (params.length === 0) return "";
  const opt = params.every(p => p.optional);
  return `$queryParams${opt ? "?" : ""}: { ${
    getParamsAsSyntaxListStringQuoted(params)
  } },`;
}

function getParamsAsHeaderSyntaxListString(params: Params) {
  if (params.length === 0) return "";
  const opt = params.every(p => p.optional);
  return `$headerParams${opt ? "?" : ""}: { ${
    getParamsAsSyntaxListStringQuoted(params)
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
