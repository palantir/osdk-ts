/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { CipherText } from "@osdk/api";
import { decrypt as cipherTextDecrypt } from "@osdk/foundry.ontologies/CipherTextProperty";
import type { MinimalClient } from "./MinimalClientContext.js";

export class CipherTextPropertyImpl implements CipherText {
  #client: MinimalClient;
  #triplet: [string, any, string];

  constructor(args: {
    client: MinimalClient;
    objectApiName: string;
    primaryKey: any;
    propertyName: string;
  }) {
    const { client, objectApiName, primaryKey, propertyName } = args;
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
  }

  async decrypt(): Promise<string | undefined> {
    const ontologyRid = await this.#client.ontologyRid;
    const result = await cipherTextDecrypt(
      this.#client,
      ontologyRid,
      ...this.#triplet,
    );
    return result.plaintext;
  }
}
