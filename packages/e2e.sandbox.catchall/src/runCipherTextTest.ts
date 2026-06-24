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

import { CipherTextTest } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import { eaOntologyClient } from "./client.js";

export async function runCipherTextTest(): Promise<void> {
  const nonNullPk = "784691a7-2203-4088-8c0c-43b5cb25e563";
  const result = await eaOntologyClient(CipherTextTest).fetchOne(
    nonNullPk,
  );
  const plaintextTruth = result.plaintext;
  const plaintext = await result.encrypted?.decrypt();
  invariant(
    plaintext === plaintextTruth,
    "Expected plaintext == plaintextTruth",
  );

  const { data: nullFilterTestData } = await eaOntologyClient(
    CipherTextTest,
  ).where({
    encrypted: {
      $isNull: true,
    },
  }).fetchPage();

  invariant(
    typeof nullFilterTestData?.[0]?.plaintext === "undefined",
    "Expected null object to have empty plaintext",
  );

  const { data: nonNullFilterTestData } = await eaOntologyClient(CipherTextTest)
    .where({
      encrypted: {
        $eq:
          "CIPHER::ri.bellaso.main.cipher-channel.fac3283c-c2c1-4570-b7ca-f9ec5fd9df80::oZ7g+aCWqU+CZjzhl5F3FspKSa0ijiiNuFcZ6c6IV8LOHH9VQ2Y3NcVPB7QOZNCgjHOShA==::CIPHER",
      },
    }).fetchPage();

  invariant(
    nonNullFilterTestData?.[0]?.pk === nonNullPk,
    "Expected non-null object to have same pk",
  );

  console.log("All tests passed!");
}

void runCipherTextTest();
