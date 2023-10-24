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

import type { Auth } from "../../oauth-client";
export interface ModelQueryResponse<T> {
  result: T;
}
export interface BatchModelQueryResponse<T> {
  result: T[];
}
export interface Model<T, TParams> {
  query(params: TParams): Promise<ModelQueryResponse<T>>;
  batchQuery(params: TParams[]): Promise<BatchModelQueryResponse<T>>;
}
export class LlmModel implements
  Model<string, {
    prompt: string;
  }>
{
  private modelName;
  private client;
  private model;
  constructor(
    authClient: Auth,
    stack: string,
    modelType: string,
    modelName: string,
    userAgent: string,
  ) {
    throw new Error("not implemented");
  }

  query(params: {
    prompt: string;
  }): Promise<ModelQueryResponse<string>> {
    throw new Error("not implemented");
  }

  batchQuery(
    params: Array<{
      prompt: string;
    }>,
  ): Promise<BatchModelQueryResponse<string>> {
    throw new Error("not implemented");
  }
}
