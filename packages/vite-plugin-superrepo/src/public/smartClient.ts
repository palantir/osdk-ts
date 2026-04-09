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

import type { Client } from "@osdk/client";

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
  pythonQueue = result.then(() => {}, () => {});
  return result;
}

function camelToSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function hasEntries(o: unknown): boolean {
  return o != null && typeof o === "object"
    && Object.keys(o as Record<string, unknown>).length > 0;
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
  return value != null && typeof value === "object"
    && "$apiName" in value && "$primaryKey" in value;
}

async function fetchPkPropertyNames(): Promise<Map<string, string>> {
  const response = await fetch("/api/v2/ontologies/ontology/objectTypes", {
    headers: { "Authorization": LOCAL_RUNTIME_TOKEN },
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch object types: ${response.status}`,
    );
  }
  const data = await response.json() as Record<string, unknown>;
  const objectTypes = data.data ?? data.objectTypes;
  if (!Array.isArray(objectTypes)) {
    throw new Error(
      "Unexpected response format from object types endpoint",
    );
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

function wrapPrimitive(
  value: number | string | boolean,
): { type: string; [key: string]: number | string | boolean } {
  if (typeof value === "number") {
    const type = Number.isInteger(value) ? "integer" : "double";
    return { type, [type]: value };
  }
  return { type: typeof value, [typeof value]: value };
}

function wrapValue(
  value: unknown,
  pkNames: Map<string, string>,
): unknown {
  if (
    typeof value === "number" || typeof value === "string"
    || typeof value === "boolean"
  ) {
    return wrapPrimitive(value);
  }
  if (isOsdkObject(value)) {
    return wrapObjectLocator(value, pkNames);
  }
  if (
    Array.isArray(value) && value.length > 0 && value.every(isOsdkObject)
  ) {
    return {
      type: "list",
      list: {
        values: value.map(item => wrapObjectLocator(item, pkNames)),
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

interface TypedValue {
  type: string;
  double?: number;
  integer?: number;
  string?: string;
  boolean?: boolean;
}

interface ExecutionResult {
  executionResult?: {
    type: string;
    success?: { returnValue?: TypedValue };
    failed?: { runtimeError?: { message?: string } };
  };
}

function transformResponseFromLocal(response: unknown): unknown {
  const resp = response as ExecutionResult;

  if (resp?.executionResult?.type === "success") {
    const returnValue = resp.executionResult.success?.returnValue;
    if (returnValue?.type != null && returnValue.type in returnValue) {
      return returnValue[returnValue.type as keyof TypedValue];
    }
    return returnValue;
  }

  if (resp?.executionResult?.type === "failed") {
    const msg = resp.executionResult.failed?.runtimeError?.message;
    if (!msg) {
      throw new Error("Function execution failed with no error message");
    }
    throw new Error(msg);
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

  throw new Error(
    `Could not create locator for function "${functionName}"`,
  );
}

const SPECS_TIMEOUT_MS = 30_000;

async function fetchSpecs(
  runtime: RuntimeConfig,
): Promise<RuntimeSpecs | null> {
  try {
    const response = await fetch(runtime.specsEndpoint, {
      method: "GET",
      headers: { "Authorization": LOCAL_RUNTIME_TOKEN },
      signal: AbortSignal.timeout(SPECS_TIMEOUT_MS),
    });
    if (!response.ok) return null;
    return await response.json() as RuntimeSpecs;
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
    return hasEntries(prov?.editedObjects)
      || hasEntries(prov?.editedLinks)
      || hasEntries(prov?.editedInterfaces)
      // Fallback: the Python runtime may not populate ontologyProvenance,
      // but edit functions return list[OntologyEdit] which shows up in the
      // output data type.
      || (isPython && outputContainsOntologyEdit(func));
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
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": LOCAL_RUNTIME_TOKEN,
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
  const functionName = functionDefinition.apiName
    ?? functionDefinition.__DefinitionMetadata?.apiName;
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
    return transformResponseFromLocal(await response.json());
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
        result && typeof result === "object"
        && typeof (result as Record<string, unknown>).executeFunction
          === "function"
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
