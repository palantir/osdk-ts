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

import type { Auth } from "../Auth";
import type { Token } from "../Token";

export class UserTokenAuth implements Auth {
  private options;
  constructor(options: {
    userToken: string;
  }) {
    throw new Error("not implemented");
  }

  getToken(): Promise<Token> {
    throw new Error("not implemented");
  }

  executeWithToken<T>(call: (token: Token) => Promise<T>): Promise<T> {
    throw new Error("not implemented");
  }

  runWithToken(call: (token: Token) => Promise<void>): Promise<void> {
    throw new Error("not implemented");
  }
}
