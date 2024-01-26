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

import type { Token } from "./Token";
/**
 * An interface representing an authentication provider.
 *
 * The Auth interface is responsible for obtaining an authentication token,
 * as well as executing and running functions with a valid token. It handles
 * tasks such as token refreshing and error handling internally.
 */
export interface Auth {
  /**
   * Retrieves an authentication token.
   *
   * @returns A Promise that resolves to a Token object.
   */
  getToken: () => Promise<Token>;
  /**
   * Executes a function with a valid authentication token.
   *
   * @template T The type of the value returned by the provided function.
   * @param call A function that accepts a Token and returns a Promise with a value of type T.
   * @returns A Promise that resolves to the result of the provided function call.
   */
  executeWithToken: <T>(call: (token: Token) => Promise<T>) => Promise<T>;
  /**
   * Runs a function with a valid authentication token.
   *
   * @template T The type of the value returned by the provided function.
   * @param call A function that accepts a Token and returns a Promise without a value (void).
   * @returns A Promise that resolves once the provided function call is completed.
   */
  runWithToken: (call: (token: Token) => Promise<void>) => Promise<void>;
}
