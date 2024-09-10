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

import { copyright } from "./copyright.js";
import { generateImports } from "./generateImports.js";
import { generateMethodJsdoc } from "./generateMethodJsdoc.js";
import { HTTP_VERB_MAP } from "./HTTP_VERB_MAP.js";
import { BinaryType } from "./model/BinaryType.js";
import type { Component } from "./model/Component.js";
import type { Model } from "./model/Model.js";
import type { Namespace } from "./model/Namespace.js";
import { OptionalType } from "./model/OptionalType.js";
import type { Resource } from "./model/Resource.js";
import type { StaticOperation } from "./model/StaticOperation.js";
import type { Type } from "./model/Type.js";
import { addAll } from "./util/addAll.js";
import { writeCode } from "./writeCode.js";

type ParameterPresence = Record<
  "pathParamsPresent" | "queryParamsPresent" | "headerParamsPresent",
  boolean
>;

export async function writeResource2(
  ns: Namespace,
  resource: Resource,
  filePath: string,
  model: Model,
): Promise<void> {
  const { out, referencedTypes } = await generateMethods(resource, model);

  return writeCode(
    filePath,
    `${copyright}\n\n
        import type { SharedClient as $Client, SharedClientContext as $ClientContext,  } from "@osdk/shared.client";
        import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
        import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
        ${
      generateImports(referencedTypes, new Map([[ns, "../_components.js"]]))
    }
        
        //
        ${out}
        `,
  );
}

async function generateMethods(resource: Resource, model: Model) {
  let out = "";
  const referencedTypes = new Set<Component>();

  for (const method of resource.operations) {
    const methodName = method.name; // method.verb ?? method.name;

    addAll(referencedTypes, method.referencedComponents);

    const innerReturnType = typeof method.responseType === "string"
      ? method.responseType
      : method.responseType.tsReferenceString;

    const returnType = `Promise<${innerReturnType}>`;

    const { parameters, parametersIncluded } = generateMethodParameters(method);
    const requestType = method.requestType;

    out += `
     const _${methodName}: $FoundryPlatformMethod<(${parameters}) => ${returnType}> = ${
      generateOperationArray(method, model)
    };
    


    ${await generateMethodJsdoc(method)}
    export function ${methodName}(
      $ctx: $Client | $ClientContext,
      ...args: [${parameters}]
    ): ${returnType}{${
      requestType !== "unknown" && requestType instanceof BinaryType
        && parametersIncluded.headerParamsPresent
        ? fillBlobHeaders(parametersIncluded)
        : ""
    }return $foundryPlatformFetch($ctx, _${methodName}, ...args); }

    `;
  }

  return { out, referencedTypes };
}

function generateMethodParameters(method: StaticOperation) {
  const requestType = method.requestType;
  const byType = method.parametersByType;

  const bodyArg = requestType === "unknown"
    ? ""
    : `$body: ${requestType.tsReferenceString},`;

  const pathParams = getParamsAsSyntaxListString(byType.PATH);
  const queryParams = getParamsAsObject("$queryParams", byType.QUERY);
  const headerParams = getParamsAsObject(
    "$headerParams",
    byType.HEADER,
    requestType === "unknown" ? undefined : requestType,
  );

  return {
    parametersIncluded: {
      pathParamsPresent: pathParams !== "",
      queryParamsPresent: queryParams !== "",
      headerParamsPresent: headerParams !== "",
    },
    parameters: `
    ${pathParams}
    ${bodyArg}
    ${queryParams}
    ${headerParams}`,
  };
}

function generateOperationArray(op: StaticOperation, model: Model) {
  const byType = op.parametersByType;
  // bit wise math
  const flag = (op.requestType !== "unknown" ? 1 : 0)
    + (byType.QUERY && byType.QUERY.length > 0 ? 2 : 0)
    + (byType.HEADER && byType.HEADER.length > 0 ? 4 : 0);

  let count = 0;
  const constParts = [
    HTTP_VERB_MAP[op.httpMethod],
    `"${op.path.replace(/{.*?}/g, () => `{${count++}}`)}"`,
    flag > 0 ? flag : "",
    op.requestMimeType,
    op.responseMimeType,
  ];

  while (constParts.at(-1) === "") {
    constParts.pop();
  }

  return `[${constParts.join(",")}]`;
}

function getParamsAsSyntaxListString(
  params: StaticOperation["parameters"] | undefined,
  quoteChar: string = "",
  requestType?: Type,
) {
  if (!params || params.length === 0) return "";

  return params.map((p) => {
    if (
      requestType instanceof BinaryType
      && (p.name === "Content-Length" || p.name === "Content-Type")
    ) {
      return "";
    }
    return `${quoteChar}${p.name}${quoteChar}${
      p.type instanceof OptionalType ? "?" : ""
    }: ${p.type.tsReferenceString},`;
  }).join("");
}

function getParamsAsObject(
  prefix: "$queryParams" | "$headerParams",
  params: StaticOperation["parameters"] | undefined,
  requestType?: Type,
) {
  if ((!params || params.length === 0)) return "";
  const opt = params.every(p => p.type instanceof OptionalType);
  return `${prefix}${opt ? "?" : ""}: { ${
    getParamsAsSyntaxListString(params, `"`, requestType)
  } },`;
}

function fillBlobHeaders(parametersPresent: ParameterPresence) {
  let index = 0;
  const bodyArgIndex = parametersPresent.pathParamsPresent ? ++index : index;
  index++;
  const headerArgIndex = parametersPresent.queryParamsPresent
    ? ++index
    : index;
  return `args[${headerArgIndex}] = {...args[${headerArgIndex}], \"Content-Type\": args[${bodyArgIndex}].type, \"Content-Length\": args[${bodyArgIndex}].size.toString()};\n`;
}
