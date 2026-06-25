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
import { objectTypeWithAllPropertyTypes } from "@osdk/client.test.ontology";
import {
  LegacyFauxFoundry,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";

describe("cipherText", () => {
  let client: Client;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client } = testSetup);
    return () => {
      testSetup.apiServer.close();
    };
  });

  it("generates a CipherText-typed property", async () => {
    const { data: [object1] } = await client(objectTypeWithAllPropertyTypes)
      .where({ id: stubData.objectWithAllPropertyTypes1.id }).fetchPage();

    expectTypeOf(object1.cipherText).toEqualTypeOf<CipherText | undefined>();
    expect(typeof object1.cipherText?.decrypt).toBe("function");
    const plaintext = await object1.cipherText?.decrypt();
    // See packages/faux/src/handlers/createCipherTextHandlers.ts
    expect(plaintext).toBe(
      "decrypted:objectTypeWithAllPropertyTypes:1:cipherText",
    );
  });
});
