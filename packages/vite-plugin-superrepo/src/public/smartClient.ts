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

/// <reference types="vite/client" />

import type { Client } from "@osdk/client";
import type {
  BucketKey,
  ExecuteFunctionResponse,
  FailedResult,
  SingleBucket,
  Value,
} from "@osdk/client.unstable/functionExecutor";

// Vite serves under `import.meta.env.BASE_URL` (trailing slash); the direct
// fetches below hit the same-origin proxies the plugin installs, so they must
// carry that prefix to route through Vite when it is served under a path.
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/u, "");
const withBase = (path: string): string => `${BASE_PATH}${path}`;

interface RuntimeConfig {
  name: "TypeScript" | "Python";
  specsEndpoint: string;
  executeEndpoint: string;
}

const TS_RUNTIME: RuntimeConfig = {
  name: "TypeScript",
  specsEndpoint:
    "/local-functions/functions-typescript-runtime/api/functions/preview/specs",
  executeEndpoint:
    "/local-functions/functions-typescript-runtime/api/functions/runtime/execute",
};

const PY_RUNTIME: RuntimeConfig = {
  name: "Python",
  specsEndpoint: "/local-python-functions/api/functions/preview/specs",
  executeEndpoint: "/local-python-functions/api/functions/runtime/execute",
};

const LOCAL_RUNTIME_TOKEN = "Bearer fake-local-dev-token";

// Queue for serializing Python calls — the runtime can only handle one at a time
let pythonQueue: Promise<unknown> = Promise.resolve();

function enqueue<T>(fn: () => Promise<T>): Promise<T> {
  const result = pythonQueue.then(fn, fn);
  pythonQueue = result.then(
    () => {},
    () => {},
  );
  return result;
}

function camelToSnakeCase(str: string): string {
  return str.replace(/[A-Z]/gu, (letter) => `_${letter.toLowerCase()}`);
}

function hasEntries(o: unknown): boolean {
  return (
    o != null &&
    typeof o === "object" &&
    Object.keys(o as Record<string, unknown>).length > 0
  );
}

function outputContainsOntologyEdit(func: FunctionSpec): boolean {
  const dt = func?.output?.single?.dataType;
  if (!dt) return false;
  if (dt.type === "ontologyEdit") return true;
  if (dt.type === "list") return dt.list?.elementsType?.type === "ontologyEdit";
  if (dt.type === "set") return dt.set?.elementsType?.type === "ontologyEdit";
  return false;
}

function isOsdkObject(
  value: unknown,
): value is { $apiName: string; $primaryKey: unknown } {
  return (
    value != null &&
    typeof value === "object" &&
    "$apiName" in value &&
    "$primaryKey" in value
  );
}

async function fetchPkPropertyNames(): Promise<Map<string, string>> {
  const response = await fetch(
    withBase("/api/v2/ontologies/ontology/objectTypes"),
    { headers: { Authorization: LOCAL_RUNTIME_TOKEN } },
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch object types: ${response.status}`);
  }
  const data = (await response.json()) as Record<string, unknown>;
  const objectTypes = data.data ?? data.objectTypes;
  if (!Array.isArray(objectTypes)) {
    throw new Error("Unexpected response format from object types endpoint");
  }
  const map = new Map<string, string>();
  for (const ot of objectTypes as Record<string, string>[]) {
    const pkProp = ot.primaryKeyPropertyApiName ?? ot.primaryKey;
    if (ot.apiName && pkProp) {
      map.set(ot.apiName, pkProp);
    }
  }
  return map;
}

function wrapObjectLocator(
  obj: { $apiName: string; $primaryKey: unknown },
  pkNames: Map<string, string>,
): unknown {
  const apiName = obj.$apiName;
  const pkProperty = pkNames.get(apiName);
  if (!pkProperty) {
    throw new Error(
      `No primary key property found for object type "${apiName}"`,
    );
  }
  return {
    type: "objectLocator",
    objectLocator: {
      typeId: apiName,
      primaryKey: { [pkProperty]: obj.$primaryKey },
    },
  };
}

function wrapPrimitive(value: number | string | boolean): {
  type: string;
  [key: string]: number | string | boolean;
} {
  if (typeof value === "number") {
    const type = Number.isInteger(value) ? "integer" : "double";
    return { type, [type]: value };
  }
  return { type: typeof value, [typeof value]: value };
}

function wrapValue(value: unknown, pkNames: Map<string, string>): unknown {
  if (
    typeof value === "number" ||
    typeof value === "string" ||
    typeof value === "boolean"
  ) {
    return wrapPrimitive(value);
  }
  if (isOsdkObject(value)) {
    return wrapObjectLocator(value, pkNames);
  }
  if (Array.isArray(value) && value.length > 0 && value.every(isOsdkObject)) {
    return {
      type: "list",
      list: {
        values: value.map((item) => wrapObjectLocator(item, pkNames)),
      },
    };
  }
  return value;
}

function transformParametersToLocal(
  parameters: Record<string, unknown>,
  isPython: boolean,
  pkNames: Map<string, string>,
): Record<string, unknown> {
  const transformed: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(parameters)) {
    const paramName = isPython ? camelToSnakeCase(key) : key;
    transformed[paramName] = wrapValue(value, pkNames);
  }
  return transformed;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

function decodeBucketKey(key: BucketKey): unknown {
  return key.type === "range"
    ? {
        startValue:
          key.range.min == null ? undefined : decodeRuntimeValue(key.range.min),
        endValue:
          key.range.max == null ? undefined : decodeRuntimeValue(key.range.max),
      }
    : decodeRuntimeValue(key);
}

function decodeAggregationBuckets(buckets: SingleBucket[]): unknown[] {
  return (buckets ?? []).map(({ key, value }) => ({
    key: decodeBucketKey(key),
    value: decodeRuntimeValue(value),
  }));
}

function decodeRuntimeValue(value: Value): unknown {
  if (
    !isRecord(value) ||
    typeof value.type !== "string" ||
    !Object.hasOwn(value, value.type)
  ) {
    throw new Error("Unexpected return value from local runtime");
  }
  switch (value.type) {
    case "null":
      return undefined;
    case "boolean":
      return value.boolean;
    case "byte":
      return value.byte;
    case "short":
      return value.short;
    case "integer":
      return value.integer;
    case "long":
      return value.long;
    case "float":
      return value.float;
    case "double":
      return value.double;
    case "string":
      return value.string;
    case "date":
      return value.date;
    case "timestamp":
      return value.timestamp;
    case "decimal":
      return value.decimal;
    case "binary":
      return value.binary;
    case "user":
      return value.user;
    case "group":
      return value.group;
    case "geoShape":
      return value.geoShape;
    case "range":
      return {
        min:
          value.range.min == null
            ? undefined
            : decodeRuntimeValue(value.range.min),
        max:
          value.range.max == null
            ? undefined
            : decodeRuntimeValue(value.range.max),
      };
    case "vector":
      return (value.vector.values ?? []).map((element) => element.double);
    case "twoDimensionalAggregation":
      return decodeAggregationBuckets(value.twoDimensionalAggregation.buckets);
    case "threeDimensionalAggregation":
      return (value.threeDimensionalAggregation.buckets ?? []).map(
        ({ key, buckets }) => ({
          key: decodeBucketKey(key),
          groups: decodeAggregationBuckets(buckets),
        }),
      );
    case "customType":
      return Object.fromEntries(
        Object.entries(value.customType).map(([key, field]) => [
          key,
          decodeRuntimeValue(field),
        ]),
      );
    case "list":
      return (value.list.values ?? []).map(decodeRuntimeValue);
    case "set":
      return (value.set.values ?? []).map(decodeRuntimeValue);
    case "map":
      return Object.fromEntries(
        (value.map.entries ?? []).map((entry) => {
          const key = decodeRuntimeValue(entry.key);
          if (typeof key !== "string" && typeof key !== "number") {
            throw new Error(
              "Unsupported map key from local runtime: expected a string or number",
            );
          }
          return [key, decodeRuntimeValue(entry.value)];
        }),
      );
    case "attachment":
    case "mediaReference":
    case "objectRid":
    case "objectLocator":
    case "objectLocatorWithData":
    case "objectSetRid":
    case "ontologyEdit":
    case "ontologyEditV2":
    case "action":
    case "principal":
    case "notification":
    case "modelGraphRid":
    case "timeSeriesRid":
    case "marking":
      throw new Error(
        `Unsupported return value type from local runtime: ${value.type}. Return primitive values or collections of primitives instead.`,
      );
    default: {
      value satisfies never;
      throw new Error(
        `Unsupported return value from local runtime: ${JSON.stringify(value)}`,
      );
    }
  }
}

function formatRuntimeFailure(failure: FailedResult): string {
  let details: unknown;
  switch (failure.type) {
    case "runtimeError":
      if (failure.runtimeError?.message) return failure.runtimeError.message;
      details = failure.runtimeError;
      break;
    case "userFacingError":
      if (failure.userFacingError?.message)
        return failure.userFacingError.message;
      details = failure.userFacingError;
      break;
    case "functionNotSupportedWithTransaction":
      if (failure.functionNotSupportedWithTransaction?.message) {
        return failure.functionNotSupportedWithTransaction.message;
      }
      details = failure.functionNotSupportedWithTransaction;
      break;
    case "invalidInputs":
      details = failure.invalidInputs;
      break;
    case "invalidOutput":
      details = failure.invalidOutput;
      break;
    case "resourceLimitExceeded":
      details = failure.resourceLimitExceeded;
      break;
    case "dataLoadingNotAllowed":
      details = failure.dataLoadingNotAllowed;
      break;
    case "undeclaredObjectTypesEdited":
      details = failure.undeclaredObjectTypesEdited;
      break;
    case "structuredError":
      details = failure.structuredError;
      break;
    case "deploymentError":
      details = failure.deploymentError;
      break;
    case "consistentSnapshotError":
      details = failure.consistentSnapshotError;
      break;
    case "userCanceled":
      details = failure.userCanceled;
      break;
    default: {
      failure satisfies never;
      return `Function execution failed: ${JSON.stringify(failure)}`;
    }
  }
  return details == null
    ? `Function execution failed with no error message (${failure.type})`
    : `Function execution failed (${failure.type}): ${JSON.stringify(details)}`;
}

function transformResponseFromLocal(
  response: ExecuteFunctionResponse,
): unknown {
  if (!isRecord(response) || !isRecord(response.executionResult)) {
    throw new Error("Unexpected response format from local runtime");
  }
  const result = response.executionResult;

  if (result.type === "success" && isRecord(result.success)) {
    const { returnValue } = result.success;
    if (returnValue == null) return returnValue;
    return decodeRuntimeValue(returnValue);
  }

  if (
    result.type === "failed" &&
    isRecord(result.failed) &&
    typeof result.failed.type === "string"
  ) {
    throw new Error(formatRuntimeFailure(result.failed));
  }

  throw new Error("Unexpected response format from local runtime");
}

interface FunctionLocator {
  type: "typescript" | "python";
  typescript?: { filePath: string };
  python?: { moduleName: string; functionName: string };
}

interface FunctionSpec {
  locator: {
    type: "typescript" | "python";
    typescript?: {
      functionName: string;
      sourceProvenance?: { stemma?: { filePath: string } };
    };
    python?: {
      moduleName: string;
      functionName: string;
    };
  };
  ontologyProvenance?: {
    editedObjects?: Record<string, unknown>;
    editedLinks?: Record<string, unknown>;
    editedInterfaces?: Record<string, unknown>;
  };
  output?: {
    single?: {
      dataType?: {
        type: string;
        list?: { elementsType?: { type: string } };
        set?: { elementsType?: { type: string } };
      };
    };
  };
}

interface RuntimeSpecs {
  functions?: FunctionSpec[];
}

function createFunctionLocator(
  functionName: string,
  specs: RuntimeSpecs,
): FunctionLocator {
  const funcSpec = specs?.functions?.find((f) => {
    const locator = f.locator;
    if (locator?.type === "typescript") {
      return locator.typescript?.functionName === functionName;
    }
    if (locator?.type === "python") {
      return locator.python?.functionName === functionName;
    }
    return false;
  });

  if (!funcSpec?.locator) {
    throw new Error(`Function "${functionName}" not found in specs`);
  }

  const locator = funcSpec.locator;

  if (locator.type === "python" && locator.python) {
    return {
      type: "python",
      python: {
        moduleName: locator.python.moduleName,
        functionName: locator.python.functionName,
      },
    };
  }

  if (locator.type === "typescript" && locator.typescript) {
    const filePath = locator.typescript.sourceProvenance?.stemma?.filePath;
    if (filePath) {
      return {
        type: "typescript",
        typescript: { filePath },
      };
    }
  }

  throw new Error(`Could not create locator for function "${functionName}"`);
}

const SPECS_TIMEOUT_MS = 30_000;

async function fetchSpecs(
  runtime: RuntimeConfig,
): Promise<RuntimeSpecs | null> {
  try {
    const response = await fetch(withBase(runtime.specsEndpoint), {
      method: "GET",
      headers: { Authorization: LOCAL_RUNTIME_TOKEN },
      signal: AbortSignal.timeout(SPECS_TIMEOUT_MS),
    });
    if (!response.ok) return null;
    return (await response.json()) as RuntimeSpecs;
  } catch {
    return null;
  }
}

interface FunctionInfo {
  runtime: RuntimeConfig;
  specs: RuntimeSpecs;
  isEditFunction: boolean;
}

async function discoverFunctions(): Promise<Map<string, FunctionInfo>> {
  const map = new Map<string, FunctionInfo>();

  function detectEditFunction(func: FunctionSpec, isPython: boolean): boolean {
    const prov = func.ontologyProvenance;
    return (
      hasEntries(prov?.editedObjects) ||
      hasEntries(prov?.editedLinks) ||
      hasEntries(prov?.editedInterfaces) ||
      // Fallback: the Python runtime may not populate ontologyProvenance,
      // but edit functions return list[OntologyEdit] which shows up in the
      // output data type.
      (isPython && outputContainsOntologyEdit(func))
    );
  }

  const tsSpecs = await fetchSpecs(TS_RUNTIME);
  if (tsSpecs?.functions) {
    for (const func of tsSpecs.functions) {
      const functionName = func.locator?.typescript?.functionName;
      if (functionName) {
        map.set(functionName, {
          runtime: TS_RUNTIME,
          specs: tsSpecs,
          isEditFunction: detectEditFunction(func, false),
        });
      }
    }
  }

  const pySpecs = await enqueue(() => fetchSpecs(PY_RUNTIME));
  if (pySpecs?.functions) {
    for (const func of pySpecs.functions) {
      const functionName = func.locator?.python?.functionName;
      if (functionName) {
        map.set(functionName, {
          runtime: PY_RUNTIME,
          specs: pySpecs,
          isEditFunction: detectEditFunction(func, true),
        });
      }
    }
  }

  return map;
}

async function postJsonToLocalRuntime(
  url: string,
  body: unknown,
): Promise<Response> {
  const response = await fetch(withBase(url), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: LOCAL_RUNTIME_TOKEN,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request to ${url} failed: ${response.status} - ${errorText}`,
    );
  }

  return response;
}

interface FunctionDefinition {
  apiName?: string;
  __DefinitionMetadata?: { apiName?: string };
}

async function executeLocalFunction(
  functionDefinition: FunctionDefinition,
  parameters: Record<string, unknown>,
): Promise<unknown> {
  const functionName =
    functionDefinition.apiName ??
    functionDefinition.__DefinitionMetadata?.apiName;
  if (!functionName) {
    throw new Error("Unable to determine function name from definition");
  }

  const functions = await discoverFunctions();
  const info = functions.get(functionName);

  if (!info) {
    throw new Error(
      `Function "${functionName}" not found in any local runtime`,
    );
  }

  const isPython = info.runtime === PY_RUNTIME;
  const pkNames = await fetchPkPropertyNames();
  const transformedParams = transformParametersToLocal(
    parameters,
    isPython,
    pkNames,
  );

  // Edit functions are routed through the action endpoint
  // so edits are applied to the store by the FunctionBackedActionHandler
  if (info.isEditFunction) {
    await postJsonToLocalRuntime(
      `/api/v2/ontologies/ontology/actions/${functionName}/apply`,
      { parameters: transformedParams },
    );
    return undefined;
  }

  const locator = createFunctionLocator(functionName, info.specs);
  const requestBody = {
    locator,
    parameters: transformedParams,
    requestContext: { type: "interactive", interactive: {} },
  };

  const execute = async () => {
    const response = await postJsonToLocalRuntime(
      info.runtime.executeEndpoint,
      requestBody,
    );
    return transformResponseFromLocal(
      (await response.json()) as ExecuteFunctionResponse,
    );
  };

  return isPython ? enqueue(execute) : execute();
}

/**
 * Wraps an OSDK client to route function calls to local runtimes in development.
 */
export function smartClient<T extends Client>(client: T): T {
  return new Proxy(client as unknown as Function, {
    apply(_target, _thisArg, args) {
      const [definition] = args as [FunctionDefinition];
      const result = (client as unknown as Function)(...args);

      if (
        result &&
        typeof result === "object" &&
        typeof (result as Record<string, unknown>).executeFunction ===
          "function"
      ) {
        return new Proxy(result as object, {
          get(target, prop, receiver) {
            if (prop === "executeFunction") {
              return (parameters: Record<string, unknown>) =>
                executeLocalFunction(definition, parameters);
            }
            return Reflect.get(target, prop, receiver);
          },
        });
      }

      return result;
    },
  }) as unknown as T;
}
