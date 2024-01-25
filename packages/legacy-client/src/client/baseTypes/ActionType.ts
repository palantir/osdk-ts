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

import type { OntologyDefinition } from "@osdk/api";
import type { SyncApplyActionResponseV2 } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { getObject } from "../../client/net/getObject.js";
import type { GetObjectError } from "../errors/index.js";
import type { Result } from "../Result.js";
import type { OntologyObject } from "./OntologyObject.js";
import type { ParameterValue } from "./ParameterValue.js";

export type ActionExecutionOptions = {
  mode: ActionExecutionMode.VALIDATE_ONLY;
} | {
  mode?: ActionExecutionMode.VALIDATE_AND_EXECUTE;
  returnEdits?: ReturnEditsMode;
};

export enum ActionExecutionMode {
  VALIDATE_ONLY = 0,
  VALIDATE_AND_EXECUTE = 1,
}

export enum ReturnEditsMode {
  ALL = 0,
  NONE = 1,
}

export enum ActionValidationResult {
  VALID = 0,
  INVALID = 1,
  UNKNOWN = 2,
}

export interface ValidationResponse {
  result: ActionValidationResult;
}

export declare type ObjectEdit<T extends OntologyObject> = {
  [K in T["__apiName"]]: {
    apiName: K;
    primaryKey: Extract<T, {
      __apiName: K;
    }>["__primaryKey"];
    get: () => Promise<Result<T, GetObjectError>>;
  };
}[T["__apiName"]];

export declare type ObjectEdits<T extends OntologyObject> = Array<
  ObjectEdit<T>
>;

export type CreatedObjectEdits<T extends OntologyObject> = ObjectEdits<
  T
>;

export type ModifiedObjectEdits<T extends OntologyObject> = ObjectEdits<
  T
>;
/**
 * Represents the edits made to ontology objects.
 *
 * @template TAddedObjects - The type of ontology objects added.
 * @template TModifiedObjects - The type of ontology objects modified.
 *
 * @property {string} type - The type of the edits. Always set to "edits".
 * @property {CreatedObjectEdits<TAddedObjects> | never} added - A collection of created objects if TAddedObjects is an ontology object, otherwise never.
 * @property {ModifiedObjectEdits<TModifiedObjects> | never} modified - A collection of modified objects if TModifiedObjects is an ontology object, otherwise never.
 *
 * @description
 * Each object in `added` and `modified` collections has a `get` method. The `get` method is a function that
 * returns a promise, which resolves to a `Result` containing the ontology object or a `GetObjectError`.
 *
 * Example usage:
 * ```typescript
 * const edit = edits.added[0];
 * edit.get().then(result => ...);
 * ```
 */

export type Edits<
  TAddedObjects extends OntologyObject | void,
  TModifiedObjects extends OntologyObject | void,
> = {
  type: "edits";
  added: TAddedObjects extends OntologyObject
    ? CreatedObjectEdits<TAddedObjects>
    : never;
  modified: TModifiedObjects extends OntologyObject
    ? ModifiedObjectEdits<TModifiedObjects>
    : never;
};

export type BulkEdits = {
  type: "bulkEdits";
};

export interface ActionResponse<
  TEdits extends Edits<any, any> | undefined = undefined,
> {
  validation: ValidationResponse;
  edits: TEdits extends undefined ? never : TEdits | BulkEdits;
}

export type ActionResponseFromOptions<
  TOptions extends ActionExecutionOptions | undefined = undefined,
  TEdits extends Edits<any, any> | undefined = undefined,
> = TOptions extends {
  returnEdits: ReturnEditsMode.ALL;
} ? ActionResponse<TEdits>
  : ActionResponse;

export const ActionResponse = {
  of: <
    TAddedObjects extends OntologyObject<string, NonNullable<ParameterValue>>,
    TModifiedObjects extends OntologyObject<
      string,
      NonNullable<ParameterValue>
    >,
  >(
    client: ClientContext<OntologyDefinition<any>>,
    response: SyncApplyActionResponseV2,
  ): ActionResponse<Edits<TAddedObjects, TModifiedObjects> | undefined> => {
    const validation = {
      result: ActionValidationResult[
        response.validation?.result as keyof typeof ActionValidationResult
      ],
    };
    if (response.edits?.type === "edits") {
      const added = [];
      const modified = [];
      for (const edit of response.edits.edits) {
        if (edit.type === "addObject") {
          added.push({
            apiName: edit.objectType,
            primaryKey: edit.primaryKey,
            get: () => getObject(client, edit.objectType, edit.primaryKey),
          });
        }
        if (edit.type === "modifyObject") {
          modified.push({
            apiName: edit.objectType,
            primaryKey: edit.primaryKey,
            get: () => getObject(client, edit.objectType, edit.primaryKey),
          });
        }
      }
      return {
        validation,
        edits: {
          type: "edits",
          added,
          modified,
        },
      } as ActionResponse<Edits<TAddedObjects, TModifiedObjects>>;
    }
    if (response.edits?.type === "largeScaleEdits") {
      return {
        validation,
        edits: {
          type: "bulkEdits",
        },
      };
    }
    return { validation } as ActionResponse;
  },
};
