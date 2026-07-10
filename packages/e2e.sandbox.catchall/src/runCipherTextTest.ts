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

import type {
  CipherTextValue,
  CreateCipherText,
  UpdateCipherText,
} from "@osdk/api";
import { CipherChannelStrategy } from "@osdk/api";
import {
  CipherTextInterface,
  CipherTextTest,
} from "@osdk/e2e.generated.catchall";
import type { Edits } from "@osdk/functions";
import { createEditBatch } from "@osdk/functions";
import type { CreateObject, UpdateObject } from "@osdk/functions/internal";
import invariant from "tiny-invariant";

import { cipherTextOntologyClient } from "./client.js";

export async function runCipherTextTest(): Promise<void> {
  const nonNullPk = "784691a7-2203-4088-8c0c-43b5cb25e563";
  const result =
    await cipherTextOntologyClient(CipherTextTest).fetchOne(nonNullPk);
  const plaintextTruth = result.plaintext;
  const plaintext = await result.encrypted?.decrypt();

  invariant(
    plaintext === plaintextTruth,
    "Expected plaintext == plaintextTruth"
  );

  const { data: nullFilterTestData } = await cipherTextOntologyClient(
    CipherTextTest
  )
    .where({
      encrypted: {
        $isNull: true,
      },
    })
    .fetchPage();

  invariant(
    typeof nullFilterTestData?.[0]?.plaintext === "undefined",
    "Expected null object to have empty plaintext"
  );

  const { data: nonNullFilterTestData } = await cipherTextOntologyClient(
    CipherTextTest
  )
    .where({
      encrypted: {
        $eq: "CIPHER::ri.bellaso.main.cipher-channel.fac3283c-c2c1-4570-b7ca-f9ec5fd9df80::oZ7g+aCWqU+CZjzhl5F3FspKSa0ijiiNuFcZ6c6IV8LOHH9VQ2Y3NcVPB7QOZNCgjHOShA==::CIPHER",
      },
    })
    .fetchPage();

  invariant(
    nonNullFilterTestData?.[0]?.pk === nonNullPk,
    "Expected non-null object to have same pk"
  );

  const edits = createEditBatch<
    Edits.Object<CipherTextTest> | Edits.Interface<CipherTextInterface>
  >(cipherTextOntologyClient);

  const existingPk1 = nonNullFilterTestData[0]!.pk;
  const existingPk2 = nullFilterTestData[0]!.pk;

  edits.create(CipherTextTest, {
    pk: "new-object-001",
    encrypted: {
      plaintext: "test",
    },
  });

  edits.update(
    {
      $apiName: "CipherTextTest",
      $primaryKey: existingPk1,
    },
    {
      encrypted: {
        plaintext: "new-value",
        strategy: CipherChannelStrategy.PREFER_DEFAULT,
      },
    },
  );

  edits.update(
    {
      $apiName: "CipherTextTest",
      $primaryKey: existingPk2,
    },
    {
      encrypted: result.encrypted,
    },
  );

  edits.create(CipherTextInterface, {
    $objectType: "CipherTextTest",
    encrypted: {
      plaintext: "test",
    },
  });

  const editEntries = edits.getEdits();

  const getEntryForPk = (pk: string) =>
    editEntries.find(
      (v) =>
        (v.type === "createObject" && v.properties.pk === pk)
        || (v.type === "updateObject" && v.obj.$primaryKey === pk)
        || (v.type === "deleteObject" && v.obj.$primaryKey === pk),
    );

  const createEntry = getEntryForPk(
    "new-object-001",
  ) as CreateObject<CipherTextTest>;
  invariant(
    (createEntry.properties.encrypted as CreateCipherText).plaintext === "test",
    "Expected created object to have plaintext value 'test'",
  );

  const updatePlaintextEntry = getEntryForPk(
    existingPk1,
  ) as UpdateObject<CipherTextTest>;
  invariant(
    (updatePlaintextEntry.properties.encrypted as UpdateCipherText)
          .plaintext === "new-value"
      && (updatePlaintextEntry.properties.encrypted as UpdateCipherText)
          .strategy === CipherChannelStrategy.PREFER_DEFAULT,
    "Expected updated object to have correct plaintext value and channel strategy",
  );

  const updateCipherTextEntry = getEntryForPk(
    existingPk2,
  ) as UpdateObject<CipherTextTest>;
  invariant(
    (updateCipherTextEntry.properties.encrypted as CipherTextValue)
      .ciphertext
      === (result.encrypted as unknown as { getValue(): string }).getValue(),
    "Expected updated object to contain same cipher text string",
  );

  console.log(JSON.stringify(editEntries, null, 2));
  console.log("All tests passed!");
}

void runCipherTextTest();
