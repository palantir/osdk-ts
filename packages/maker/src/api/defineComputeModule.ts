/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import {
  type AnnotatedEndpoint,
  type DeployedAppMarketplaceBlockDataV1,
  type HttpMethod,
  type ServerEndpointsSpec,
  type StringPart,
  type StringParts,
} from "@osdk/client.unstable";
import { execa } from "execa";
import invariant from "tiny-invariant";
import { URL } from "url";
import { updateOntology } from "./defineOntology.js";
import {
  type BodyInfo,
  type ComputeModuleDefinition,
  type ComputeModuleType,
  type ContainerResource,
  type DataType,
  type FoundryContainerizedApplication,
  type FunctionInputType,
  type FunctionOutputType,
  OntologyEntityTypeEnum,
  type ParametersInfo,
} from "./types.js";

export async function defineComputeModule(
  computeModuleDefinition: ComputeModuleDefinition,
): Promise<ComputeModuleType> {
  const serverEndpointsSpec = convertOpenApiToFunctionSpec(
    JSON.parse(await inspectDockerImage(computeModuleDefinition.container)),
  );

  const computeModule: DeployedAppMarketplaceBlockDataV1 = {
    runtimeParameters: {
      type: "runtimeParamsV1",
      runtimeParamsV1: {
        scalingConfig: computeModuleDefinition.scalingConfig,
        foundryServiceAccess: [],
        networkPolicies: [],
      },
    },
    computationParameters: {
      type: "computationParamsV1",
      computationParamsV1: {
        foundryContainerizedApplication: createFoundryContainerizedApplication(
          computeModuleDefinition,
        ),
        foundryDataAccess: false,
        runtime: "COMPUTE_MODULE_RUNTIME_V1",
        authMode: computeModuleDefinition.authMode,
        computeModuleInputs: [],
        computeModuleInputsV2: [],
        computeModuleOutputs: [],
        computeModuleOutputsV2: [],
        externalSources: [],
        securityScopes: [],
        telemetrySessionTags: [],
        serverEndpointsSpec: serverEndpointsSpec,
      },
    },
    numberOfFunctionsRegistered:
      Object.keys(serverEndpointsSpec.queriesToEndpoints).length,
  };
  const computeModuleType: ComputeModuleType = {
    ...computeModule,
    apiName: computeModuleDefinition.apiName,
    __type: OntologyEntityTypeEnum.COMPUTE_MODULE_TYPE,
  };
  updateOntology(computeModuleType);
  return computeModuleType;
}

async function inspectDockerImage(imageName: string): Promise<string> {
  try {
    // First run docker inspect
    const { stdout: inspectOutput } = await execa("docker", [
      "inspect",
      imageName,
    ]);

    // Then pipe the output to jq
    const { stdout: jqOutput } = await execa("jq", [
      ".[0].Config.Labels[\"server.openapi\"]",
    ], {
      input: inspectOutput,
    });

    return jqOutput.trim();
  } catch (error) {
    throw new Error(
      `Failed to inspect Docker image: ${(error as Error).message}`,
    );
  }
}

function createFoundryContainerizedApplication(
  computeModuleDefinition: ComputeModuleDefinition,
): FoundryContainerizedApplication {
  const version = computeModuleDefinition.container.split(":").at(-1);
  invariant(
    version !== undefined,
    "container name must have version at the end",
  );
  return {
    containers: [
      {
        name: computeModuleDefinition.container,
        image: {
          name: computeModuleDefinition.container,
          tagOrDigest: {
            type: "tag",
            tag: version,
          },
          imagePullMetadata: {
            type: "foundryArtifacts",
            foundryArtifacts: {
              artifactsRepoRid: "ri.redacted.redacted.redacted.redacted",
            },
          },
        },
        additionalConfig: {
          resources: createContainerResources(computeModuleDefinition),
          commands: [],
          arguments: [],
          env: [],
          ports: [],
          volumeMounts: [],
        },
      },
    ],
    volumes: [],
  };
}

function createContainerResources(
  computeModuleDefinition: ComputeModuleDefinition,
): ContainerResource[] {
  return computeModuleDefinition.resourceConfig.map(resource => {
    switch (resource.type) {
      case "cpu":
        return {
          resourceType: { type: "cpu", cpu: {} },
          request: resource.request,
          ...resource.limit && { limit: resource.limit },
        };
      case "memory":
        return {
          resourceType: { type: "memory", memory: {} },
          request: resource.request,
          ...resource.limit && { limit: resource.limit },
        };
      case "gpu":
        return {
          resourceType: { type: "gpu", gpu: {} },
          request: resource.request,
          ...resource.limit && { limit: resource.limit },
        };
    }
  });
}
// OpenAPI type definitions
interface OpenAPIServer {
  url: string;
  description?: string;
}

interface OpenAPIParameter {
  name: string;
  in: "query" | "header" | "path" | "cookie";
  required?: boolean;
  schema: OpenAPISchema;
  description?: string;
}

interface OpenAPIRequestBody {
  content: Record<string, OpenAPIMediaType>;
  required?: boolean;
  description?: string;
}

interface OpenAPIResponse {
  description: string;
  content?: Record<string, OpenAPIMediaType>;
}

interface OpenAPIMediaType {
  schema: OpenAPISchema;
}

interface OpenAPISchema {
  type?: string;
  types?: string[];
  properties?: Record<string, OpenAPISchema>;
  items?: OpenAPISchema;
  description?: string;
}

interface OpenAPIOperation {
  operationId?: string;
  parameters?: OpenAPIParameter[];
  requestBody?: OpenAPIRequestBody;
  responses: Record<string, OpenAPIResponse>;
  summary?: string;
  description?: string;
}

interface OpenAPIPathItem {
  get?: OpenAPIOperation;
  put?: OpenAPIOperation;
  post?: OpenAPIOperation;
  delete?: OpenAPIOperation;
  patch?: OpenAPIOperation;
  head?: OpenAPIOperation;
  options?: OpenAPIOperation;
  trace?: OpenAPIOperation;
  parameters?: OpenAPIParameter[];
  $ref?: string;
}

interface OpenAPISpec {
  openapi: string;
  info: {
    title: string;
    version: string;
  };
  servers?: OpenAPIServer[];
  paths?: Record<string, OpenAPIPathItem>;
}

/**
 * Converts an OpenAPI specification to a function specification
 * @param contents - The OpenAPI specification as a string
 * @returns A ServerEndpointsSpec object
 */
export function convertOpenApiToFunctionSpec(
  contents: string,
): ServerEndpointsSpec {
  const validationErrors: string[] = [];

  // Parse the OpenAPI spec
  let openApi: OpenAPISpec;
  try {
    // Parse JSON and cast to OpenAPISpec
    openApi = JSON.parse(contents) as OpenAPISpec;
  } catch (error) {
    throw new Error(`Could not parse OpenAPI spec: ${error}`);
  }

  const port = getPort(openApi.servers, validationErrors);

  // Process each path and operation to create endpoints
  const queriesToEndpoints: Record<string, AnnotatedEndpoint> = {};

  if (openApi.paths) {
    for (const [path, pathItem] of Object.entries(openApi.paths)) {
      if (!pathItem) {
        validationErrors.push("No path item defined");
        continue;
      }

      for (const [method, operation] of Object.entries(pathItem)) {
        if (method === "parameters" || method === "$ref" || !operation) {
          continue;
        }

        const httpMethod = method.toUpperCase() as PathItemHttpMethod;
        const endpoint = createEndpoint(
          httpMethod,
          path,
          port,
          operation as OpenAPIOperation,
          validationErrors,
        );

        if (endpoint) {
          queriesToEndpoints[endpoint.key] = endpoint.value;
        }
      }
    }
  }

  if (validationErrors.length > 0) {
    throw new Error(
      `There were validation errors: ${validationErrors.join(", ")}`,
    );
  }

  return {
    queriesToEndpoints,
    specFileContents: [contents],
  };
}

type PathItemHttpMethod =
  | "GET"
  | "PUT"
  | "POST"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "TRACE";

/**
 * Creates an endpoint from an OpenAPI operation
 */
function createEndpoint(
  httpMethod: PathItemHttpMethod,
  rawPath: string,
  port: number,
  operation: OpenAPIOperation,
  validationErrors: string[],
): { key: string; value: AnnotatedEndpoint } | null {
  const parametersInfo = getParameters(
    operation.parameters || [],
    validationErrors,
  );
  const body = getBody(operation.requestBody, validationErrors);

  // Combine inputs from parameters and body
  const inputs: FunctionInputType[] = [
    ...parametersInfo.inputs,
    ...(body ? [body.inputType] : []),
  ];

  const operationId = operation.operationId
    || (() => {
      validationErrors.push("Missing operationId");
      return crypto.randomUUID();
    })();

  return {
    key: operationId,
    value: {
      endpoint: {
        type: "httpEndpoint",
        httpEndpoint: {
          httpMethod: getHttpMethod(httpMethod, validationErrors),
          port,
          path: getPath(rawPath),
          headers: parametersInfo.headers,
          queryParameters: parametersInfo.queryParameters,
          body: body?.body || null,
        },
      },
      inputs,
      output: getOutputType(operation.responses, validationErrors),
    },
  };
}

/**
 * Gets the port from server information
 */
function getPort(
  servers: OpenAPIServer[] | undefined,
  validationErrors: string[],
): number {
  const DEFAULT_PORT = -1;
  const SERVER_HOSTNAME = "localhost";

  if (!servers || servers.length !== 1) {
    validationErrors.push("Must specify exactly one server");
    return DEFAULT_PORT;
  }

  const server = servers[0];
  if (!server.url) {
    validationErrors.push("Server does not specify a URL");
    return DEFAULT_PORT;
  }

  try {
    const url = new URL(server.url);

    if (url.port === "") {
      validationErrors.push("Server URL must specify a port number");
      return DEFAULT_PORT;
    } else if (url.hostname !== SERVER_HOSTNAME) {
      validationErrors.push(`Server URL host must be ${SERVER_HOSTNAME}`);
    } else if (url.pathname !== "/") {
      validationErrors.push("Server URL cannot specify context path");
    }

    return parseInt(url.port, 10);
  } catch {
    validationErrors.push("Server URL is malformed");
    return DEFAULT_PORT;
  }
}

/**
 * Maps OpenAPI HTTP method to HttpMethod
 */
function getHttpMethod(
  httpMethod: PathItemHttpMethod,
  validationErrors: string[],
): HttpMethod {
  switch (httpMethod) {
    case "POST":
      return { type: "static", static: "POST" };
    case "GET":
      return { type: "static", static: "GET" };
    case "PUT":
      return { type: "static", static: "PUT" };
    case "DELETE":
      return { type: "static", static: "DELETE" };
    case "PATCH":
    case "HEAD":
    case "OPTIONS":
    case "TRACE":
      validationErrors.push("Invalid HTTP method");
      return { type: "static", static: "GET" };
    default:
      validationErrors.push("Unsupported HTTP method");
      return { type: "static", static: "GET" };
  }
}

/**
 * Converts a path template to StringParts
 */
function getPath(parameterizedPath: string): StringParts {
  const result: StringPart[] = [];

  // Split by '/' and process each segment
  const segments = parameterizedPath.split("/").filter((s) => s !== "");

  for (const segment of segments) {
    // Add leading slash
    result.push({ type: "stringValue", stringValue: "/" });

    // Check if segment is a path parameter
    if (segment.startsWith("{") && segment.endsWith("}")) {
      result.push({
        type: "inputParameterName",
        inputParameterName: segment.substring(1, segment.length - 1),
      });
    } else {
      result.push({ type: "stringValue", stringValue: segment });
    }
  }

  return result;
}

/**
 * Processes parameters from an OpenAPI operation
 */
function getParameters(
  parameters: OpenAPIParameter[],
  validationErrors: string[],
): ParametersInfo {
  const inputs: FunctionInputType[] = [];
  const headers: Record<string, StringParts> = {};
  const queryParameters: Record<string, StringParts> = {};

  if (!parameters || parameters.length === 0) {
    return { inputs, headers, queryParameters };
  }

  for (const param of parameters) {
    if (!param.in || !param.name || !param.schema) {
      validationErrors.push("Param missing in/name/schema field");
      continue;
    }

    inputs.push({
      name: param.name,
      dataType: schemaToDataType(param.schema, validationErrors),
      required: param.required !== false, // default to true if not specified
    });

    const stringPart: StringPart = {
      type: "inputParameterName",
      inputParameterName: param.name,
    };

    switch (param.in) {
      case "header":
        headers[param.name] = [stringPart];
        break;
      case "query":
        queryParameters[param.name] = [stringPart];
        break;
      case "path":
        // Path parameters are handled in getPath
        break;
      case "cookie":
        validationErrors.push("Unsupported parameter location");
        break;
      default:
        validationErrors.push("Unsupported parameter location");
        break;
    }
  }

  return { inputs, headers, queryParameters };
}

/**
 * Processes request body from an OpenAPI operation
 */
function getBody(
  requestBody: OpenAPIRequestBody | undefined,
  validationErrors: string[],
): BodyInfo | undefined {
  const BODY_INPUT_NAME = "body";

  if (!requestBody || !requestBody.content) {
    return undefined;
  }

  const schema = schemaFromContent(requestBody.content, validationErrors);
  if (!schema) {
    return undefined;
  }

  return {
    body: {
      type: "jsonStringBody",
      jsonStringBody: {
        jsonString: [
          { type: "inputParameterName", inputParameterName: BODY_INPUT_NAME },
        ],
      },
    },
    inputType: {
      name: BODY_INPUT_NAME,
      dataType: schemaToDataType(schema, validationErrors),
      required: true,
    },
  };
}

/**
 * Extracts schema from content object
 */
function schemaFromContent(
  content: Record<string, OpenAPIMediaType>,
  validationErrors: string[],
): OpenAPISchema | undefined {
  // Find application/json content type
  const jsonEntry = Object.entries(content).find(
    ([mimeType]) => mimeType.toLowerCase() === "application/json",
  );

  if (!jsonEntry) {
    validationErrors.push("No content matching 'application/json'");
    return undefined;
  }

  const [, mediaType] = jsonEntry;

  if (!mediaType.schema) {
    validationErrors.push("Media type missing 'schema' field");
    return undefined;
  }

  return mediaType.schema;
}

/**
 * Processes response to extract output type
 */
function getOutputType(
  responses: Record<string, OpenAPIResponse>,
  validationErrors: string[],
): FunctionOutputType | undefined {
  if (!responses || Object.keys(responses).length === 0) {
    return undefined;
  }

  if (Object.keys(responses).length > 1) {
    validationErrors.push("Operation can have at most one response definition");
  }

  // Get the first response
  const response = Object.values(responses)[0];
  if (!response || !response.content) {
    return undefined;
  }

  const schema = schemaFromContent(response.content, validationErrors);
  if (!schema) {
    return undefined;
  }

  const dataType = schemaToDataType(schema, validationErrors);

  return {
    type: "single",
    single: {
      description: null,
      dataType,
    },
  };
}

/**
 * Converts OpenAPI schema to DataType
 */
function schemaToDataType(
  schema: OpenAPISchema,
  validationErrors: string[],
): DataType {
  // For OpenAPI >= 3.1, handle the types field
  const type = schema.type
    || (schema.types && schema.types.length === 1
      ? schema.types[0]
      : (() => {
        validationErrors.push("Schema does not specify a single type");
        return "integer";
      })());

  switch (type) {
    case "boolean":
      return { type: "boolean" };
    case "number":
      return { type: "double" };
    case "string":
      return { type: "string", string: {} };
    case "integer":
      return { type: "integer" };
    case "array":
      if (!schema.items) {
        validationErrors.push("Array schema missing items definition");
        return { type: "string" };
      }
      return {
        type: "list",
        list: schemaToDataType(schema.items, validationErrors),
      };
    case "object": {
      const fields: Record<string, DataType> = {};
      if (schema.properties) {
        for (const [name, propSchema] of Object.entries(schema.properties)) {
          fields[name] = schemaToDataType(propSchema, validationErrors);
        }
      }
      return {
        type: "anonymousCustomType",
        anonymousCustomType: { fields, fieldMetadata: null },
      };
    }
    default:
      validationErrors.push("Unsupported schema type");
      return { type: "string" };
  }
}
