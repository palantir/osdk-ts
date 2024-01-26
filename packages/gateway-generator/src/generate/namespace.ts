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
  Directory,
  FunctionDeclarationStructure,
  ParameterDeclarationStructure,
  Project,
  SourceFile,
} from "ts-morph";
import { StructureKind, VariableDeclarationKind } from "ts-morph";
import type {
  AcceptedResponseBody,
  BinaryResponseType,
  ComponentRequestType,
  MediaType,
  Namespace,
  NoContentResponseBody,
  OkResponseBody,
  Parameter,
  RequestBody,
  Resource,
  Response,
  ResponseType,
  StaticOperation,
} from "../spec";
import { InputType } from "../spec";
import {
  sanitizeParameterName,
  shouldSanitizePameterName,
  visitTypeUnion,
} from "./common";
import { getJsDocs } from "./getJsDocs";
import { generateType, isOptional } from "./types";

export function generateNamespaces(
  namespaces: Namespace[],
  outputDir: string,
  project: Project,
) {
  const directory = project.createDirectory(`${outputDir}/namespaces`);
  namespaces.forEach(namespace => generateNamespace(namespace, directory));
}

const UNDEFINED_CONSTANT = "__undefined";
const APPLICATION_JSON_CONSTANT = `__applicationJson`;
const ANY_MEDIA_TYPE_CONSTANT = `__anyMediaType`;

export function generateNamespace(namespace: Namespace, directory: Directory) {
  const sourceFile = directory.createSourceFile(`${namespace.name}.ts`);
  const referenceSet = new Set<string>();

  namespace.resources.forEach(resource =>
    generateResource(resource, sourceFile, referenceSet)
  );

  // This should be a
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: ANY_MEDIA_TYPE_CONSTANT,
        type: "string",
        initializer: `"*/*"`,
      },
    ],
  });

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: APPLICATION_JSON_CONSTANT,
        type: "string",
        initializer: `"application/json"`,
      },
    ],
  });

  // Concept borrowed from conjure typescript
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    docs: [
      "Constant reference to `undefined` that we expect to get minified and therefore reduce total code size",
    ],
    declarations: [{
      name: UNDEFINED_CONSTANT,
      type: "undefined",
      initializer: "undefined",
    }],
  });

  sourceFile.addImportDeclarations(
    Array.from(referenceSet).map(reference => {
      return {
        moduleSpecifier: `../components/${reference}`,
        isTypeOnly: true,
        namedImports: [reference],
      };
    }),
  );

  sourceFile.addImportDeclaration({
    moduleSpecifier: "../request",
    namedImports: ["OpenApiRequest"],
  });
}

export function generateResource(
  resource: Resource,
  sourceFile: SourceFile,
  referenceSet: Set<string>,
) {
  const getMethods = resource.staticOperations.map(staticOperation =>
    generateOperationAsFunction(staticOperation, referenceSet)
  );
  getMethods.forEach(method => {
    sourceFile.addFunction(method);
  });
  return sourceFile;
}

function generateParameters(
  parameters: Parameter[],
  referenceSet: Set<string>,
  requestBody?: string,
): ParameterDeclarationStructure[] {
  // Group into query, path, and header parameters

  const queryParameters: Parameter[] = [];
  const pathParameters: Parameter[] = [];
  const headerParameters: Parameter[] = [];
  parameters.forEach(parameter => {
    if (parameter.inputType === "QUERY") {
      queryParameters.push(parameter);
    } else if (parameter.inputType === "PATH") {
      pathParameters.push(parameter);
    } else if (parameter.inputType === "HEADER") {
      headerParameters.push(parameter);
    } else {
      throw new Error(`Unknown input type: ${parameter.inputType}`);
    }
  });

  const transformedParameters: ParameterDeclarationStructure[] = [];

  const pathParameterStructures: ParameterDeclarationStructure[] =
    pathParameters.map(parameter => generateParameter(parameter, referenceSet));

  if (requestBody) {
    pathParameterStructures.push({
      kind: StructureKind.Parameter,
      name: "request",
      type: requestBody,
    });
  }

  transformedParameters.push(...pathParameterStructures);

  if (queryParameters.length > 0) {
    transformedParameters.push({
      name: "queryParameters",
      kind: StructureKind.Parameter,
      hasQuestionToken: queryParameters.every(param =>
        isOptional(param.type.type)
      ),
      type: w => {
        w.block(() => {
          queryParameters.forEach(param => {
            w.writeLine(
              `${param.name}${isOptional(param.type.type) ? "?" : ""}: ${
                generateType(
                  param.type.type,
                  referenceSet,
                )
              },`,
            );
          });
        });
      },
    });
  }

  if (headerParameters.length > 0) {
    transformedParameters.push({
      name: "additionalHeaders",
      kind: StructureKind.Parameter,
      hasQuestionToken: headerParameters.every(param =>
        isOptional(param.type.type)
      ),
      type: w => {
        w.block(() => {
          headerParameters.forEach(param => {
            w.writeLine(
              `"${param.name}"${isOptional(param.type.type) ? "?" : ""}: ${
                generateType(
                  param.type.type,
                  referenceSet,
                )
              },`,
            );
          });
        });
      },
    });
  }

  return transformedParameters.sort((a, b) => {
    if (a.hasQuestionToken && !b.hasQuestionToken) {
      return 1;
    } else if (!a.hasQuestionToken && b.hasQuestionToken) {
      return -1;
    } else {
      return 0;
    }
  });
}

function generateParameter(
  parameter: Parameter,
  referenceSet: Set<string>,
): ParameterDeclarationStructure {
  return {
    kind: StructureKind.Parameter,
    name: shouldSanitizePameterName(parameter.name)
      ? sanitizeParameterName(parameter.name)
      : parameter.name,
    type: generateType(parameter.type.type, referenceSet),
    hasQuestionToken: shouldMakeParameterOptional(parameter),
  };
}

function shouldMakeParameterOptional(parameter: Parameter): boolean {
  if (parameter.inputType === InputType.QUERY) {
    return true;
  }
  return false;
}

function generateOperationAsFunction(
  operation: StaticOperation,
  referenceSet: Set<string>,
): FunctionDeclarationStructure {
  const queryParameters: string[] = [];
  const pathParameters: string[] = [];
  const headerParameters: string[] = [];

  operation.parameters.forEach(parameter => {
    if (parameter.inputType === "QUERY") {
      queryParameters.push(parameter.name);
    } else if (parameter.inputType === "PATH") {
      pathParameters.push(parameter.name);
    } else if (parameter.inputType === "HEADER") {
      headerParameters.push(parameter.name);
    } else {
      throw new Error(`Unknown input type: ${parameter.inputType}`);
    }
  });

  const request = generateRequestBody(referenceSet, operation.requestBody);
  const parameters = generateParameters(
    operation.parameters,
    referenceSet,
    operation.requestBody ? request.body : undefined,
  );

  const response = generateResponse(referenceSet, operation.response);

  const path = operation.path.replace(/{/g, "${");

  const shouldWriteResponseContentType = response.contentType
    && response.contentType !== APPLICATION_JSON_CONSTANT;
  const shouldWriteRequestContentType = shouldWriteResponseContentType
    || (request.contentType
      && request.contentType !== APPLICATION_JSON_CONSTANT);

  return {
    kind: StructureKind.Function,
    isExported: true,
    name: operation.name,
    docs: operation.documentation
      ? getJsDocs(operation.documentation)
      : undefined,
    typeParameters: [{ name: "TResponse" }],
    returnType: `Promise<TResponse>`,
    parameters: [
      {
        name: "_request",
        kind: StructureKind.Parameter,
        type: `OpenApiRequest<${response.body}, TResponse>`,
      },
      ...parameters,
    ],
    statements: writer => {
      writer.writeLine("return _request(");
      writer.setIndentationLevel(writer.getIndentationLevel() + 1);
      writer.writeLine(`"${operation.httpMethod}",`);
      writer.writeLine(`\`${path}\`,`);
      writer.writeLine(
        `${operation.requestBody ? `request` : UNDEFINED_CONSTANT},`,
      );
      if (queryParameters.length > 0) {
        writer.write(`queryParameters,`).newLine();
      } else {
        writer.write(`${UNDEFINED_CONSTANT},`).newLine();
      }
      if (headerParameters.length > 0) {
        writer.writeLine(`additionalHeaders,`).newLine();
      } else {
        writer.write(`${UNDEFINED_CONSTANT},`).newLine();
      }
      if (shouldWriteRequestContentType) {
        writer.writeLine(`${request.contentType ?? UNDEFINED_CONSTANT},`);
      }
      if (shouldWriteResponseContentType) {
        writer.writeLine(`${response.contentType ?? UNDEFINED_CONSTANT}`);
      }
      writer.setIndentationLevel(writer.getIndentationLevel() - 1);
      writer.writeLine(");");
    },
  };
}

function generateRequestBody(
  referenceSet: Set<string>,
  requestBody?: RequestBody,
): { body: string; contentType?: string } {
  if (!requestBody) {
    return { body: "undefined" };
  }

  const requestType = requestBody.body.requestType;
  return visitTypeUnion(requestType, {
    binary(_type: BinaryResponseType): { body: string; contentType: string } {
      return {
        body: `ReadableStream<Uint8Array> | Blob`,
        contentType: ANY_MEDIA_TYPE_CONSTANT,
      };
    },
    component(
      type: ComponentRequestType,
    ): { body: string; contentType: string } {
      const componentType = type.component;
      return {
        body: generateType(componentType.type.type, referenceSet),
        contentType: getContentTypeFromMediaType(componentType.mediaType),
      };
    },
    unknown(type: { type: string }): { body: string; contentType: string } {
      throw new Error(`Unknown request type: ${type.type}`);
    },
  });
}

function generateResponse(
  referenceSet: Set<string>,
  response?: Response,
): { body: string; contentType?: string } {
  if (!response) {
    return { body: "undefined" };
  }

  return visitTypeUnion(response.body, {
    ok(type: OkResponseBody): { body: string; contentType: string } {
      return generateResponseType(referenceSet, type.ok.responseType);
    },
    noContent(
      _type: NoContentResponseBody,
    ): { body: string; contentType: string } {
      return { body: "undefined", contentType: APPLICATION_JSON_CONSTANT };
    },
    accepted(
      type: AcceptedResponseBody,
    ): { body: string; contentType: string } {
      return generateResponseType(referenceSet, type.accepted.responseType);
    },
    unknown(type: { type: string }): { body: string; contentType: string } {
      throw new Error(`Unknown request type: ${type.type}`);
    },
  });
}

function generateResponseType(
  referenceSet: Set<string>,
  responseType: ResponseType,
): { body: string; contentType: string } {
  if (responseType.type === "binary") {
    return {
      body: "ReadableStream<Uint8Array> | Blob",
      contentType: ANY_MEDIA_TYPE_CONSTANT,
    };
  } else if (responseType.type === "component") {
    const type = {
      body: generateType(responseType.component.type.type, referenceSet),
      contentType: `${
        getContentTypeFromMediaType(responseType.component.mediaType)
      }`,
    };
    return type;
  } else {
    const type = generateType(responseType.type.type, referenceSet);
    return { body: type, contentType: ANY_MEDIA_TYPE_CONSTANT };
  }
}

function getContentTypeFromMediaType(mediaType: MediaType) {
  switch (mediaType) {
    case "application/json":
      return APPLICATION_JSON_CONSTANT;
    case "*/*":
      return ANY_MEDIA_TYPE_CONSTANT;
  }
}
