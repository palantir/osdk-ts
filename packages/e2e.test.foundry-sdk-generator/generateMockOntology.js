/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

// @ts-check
import { __testSeamOnly_NotSemverStable__GeneratePackageCommand as GeneratePackageCommand } from "@osdk/foundry-sdk-generator";
import { apiServer } from "@osdk/shared.test";
import * as fs from "node:fs/promises";
import { tmpdir } from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

async function setup() {
  const dir = await fs.mkdtemp(
    path.join(tmpdir(), "osdk-e2e-foundry-sdk-generator-"),
  );

  apiServer.listen();

  const testAppDir = path.join(dir, "@test-app");
  const testApp2Dir = path.join(dir, "@test-app2");
  const testApp2BetaDir = path.join(dir, "@test-app2-beta");

  await rmRf(testAppDir);
  await rmRf(testApp2Dir);
  await rmRf(testApp2BetaDir);

  await safeStat(testAppDir, "should not exist");
  await safeStat(testApp2Dir, "should not exist");
  await safeStat(testApp2BetaDir, "should not exist");

  await fs.mkdir(dir, { recursive: true });

  const generatePackageCommand = new GeneratePackageCommand();

  /** @type Parameters<typeof generatePackageCommand["handler"][0]>  */
  const baseArgs = {
    packageVersion: "0.0.1",
    outputDir: dir,
    authToken: "myAccessToken",
    foundryHostname: "https://stack.palantir.com",
    ontology: "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
    objectTypes: [
      "Employee",
      "Office",
      "objectTypeWithAllPropertyTypes",
      "ObjectWithTimestampPrimaryKey",
      "equipment",
    ],
    actionTypes: [
      "createOffice",
      "moveOffice",
      "createOfficeAndEmployee",
      "actionTakesObjectSet",
    ],
    queryTypes: [
      "addOne",
      "incrementPersonAge",
      "returnsTimestamp",
      "returnsDate",
      "returnsObject",
      "twoDimensionalAggregationFunction",
      "threeDimensionalAggregationFunction",
    ],
    interfaceTypes: [
      "FooInterface",
    ],
    linkTypes: ["employee.peeps", "employee.lead", "employee.officeLink"],
    palantirOnlyTest: true,
    _: [],
    $0: "",
  };

  await generatePackageCommand.handler({
    ...baseArgs,
    packageName: "@test-app2/osdk",
    beta: false,
  });

  await generatePackageCommand.handler({
    ...baseArgs,
    packageName: "@test-app2-beta/osdk",
    beta: true,
  });

  await safeStat(testApp2Dir, "should exist");
  await safeStat(testApp2BetaDir, "should exist");

  const finalOutDir = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "src",
    "generatedNoCheck",
  );

  fs.cp(dir, finalOutDir, { recursive: true });
}

export async function teardown() {
  // eslint-disable-next-line no-console
  console.log("teardown: stopping API server");
  apiServer.close();
}

await setup();
await teardown();

/**
 * @param {string} testAppDir
 */
async function rmRf(testAppDir) {
  try {
    await fs.rm(testAppDir, { recursive: true });
  } catch (e) {
    // console.debug("rm error", e);
    // Only needed for regenerations
  }
}

/**
 * @param {string} filePath
 * @param {"should exist" | "should not exist"} type
 * @returns
 */
async function safeStat(filePath, type) {
  try {
    const ret = await fs.stat(filePath);
    if (type !== "should exist") {
      throw new Error(`Expected ${filePath} to not exist`);
    }

    // eslint-disable-next-line no-console
    console.log(`safeStat: ${filePath} exists`);
    return ret;
  } catch (e) {
    if (type === "should exist") {
      throw new Error(`Expected ${filePath} to exist`);
    }

    // eslint-disable-next-line no-console
    console.log(`safeStat: ${filePath} does not exist`);
    return undefined;
  }
}
