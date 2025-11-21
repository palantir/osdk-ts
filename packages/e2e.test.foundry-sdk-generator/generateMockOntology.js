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

// polyfill localStorage for MSW compatibility with Node.js
// @ts-ignore - minimal polyfill, MSW only needs getItem/setItem
globalThis.localStorage = { getItem: () => null };

async function setup() {
  const {
    __testSeamOnly_NotSemverStable__GeneratePackageCommand:
      GeneratePackageCommand,
  } = await import(
    "@osdk/foundry-sdk-generator"
  );
  const { LegacyFauxFoundry, startNodeApiServer } = await import(
    "@osdk/shared.test"
  );
  const { $ } = await import("execa");
  const fs = await import("node:fs/promises");
  const { tmpdir } = await import("node:os");
  const path = await import("node:path");
  const { fileURLToPath } = await import("node:url");

  const dir = await fs.mkdtemp(
    path.join(tmpdir(), "osdk-e2e-foundry-sdk-generator-"),
  );

  const testSetup = startNodeApiServer(new LegacyFauxFoundry(), undefined);

  const testAppDir = path.join(dir, "@test-app");
  const testApp2Dir = path.join(dir, "@test-app2");
  const testApp2BetaDir = path.join(dir, "@test-app2-beta");

  await rmRf(testAppDir, fs);
  await rmRf(testApp2Dir, fs);
  await rmRf(testApp2BetaDir, fs);

  await safeStat(testAppDir, "should not exist", fs);
  await safeStat(testApp2Dir, "should not exist", fs);
  await safeStat(testApp2BetaDir, "should not exist", fs);

  await fs.mkdir(dir, { recursive: true });

  const generatePackageCommand = new GeneratePackageCommand();

  /** @type Parameters<typeof generatePackageCommand["handler"]>[0]  */
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
      "BarInterface",
    ],
    linkTypes: ["employee.peeps", "employee.lead", "employee.officeLink"],
    palantirOnlyTest: true,
    _: [],
    $0: "",
    packageRid: "ri.third-party-applications.main.sdk-package.123",
    branch: "ri.ontologies.main.sdk-ontology.123",
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

  await safeStat(testApp2Dir, "should exist", fs);
  await safeStat(testApp2BetaDir, "should exist", fs);

  await $({
    stdout: "inherit",
    stderr: "inherit",
  })`attw --pack ${path.join(testApp2Dir, "osdk")}`;

  await $({
    stdout: "inherit",
    stderr: "inherit",
  })`attw --pack ${path.join(testApp2BetaDir, "osdk")}`;

  const finalOutDir = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "build",
    "codegen",
  );

  await fs.rm(finalOutDir, { recursive: true, force: true });
  await fs.cp(dir, finalOutDir, { recursive: true });

  // eslint-disable-next-line no-console
  console.log("teardown: stopping API server");
  testSetup.apiServer.close();
}

await setup();

/**
 * @param {string} testAppDir
 * @param {typeof import("node:fs/promises")} fs
 */
async function rmRf(testAppDir, fs) {
  try {
    await fs.rm(testAppDir, { recursive: true, force: true });
  } catch (e) {
    // console.debug("rm error", e);
    // Only needed for regenerations
  }
}

/**
 * @param {string} filePath
 * @param {"should exist" | "should not exist"} type
 * @param {typeof import("node:fs/promises")} fs
 * @returns
 */
async function safeStat(filePath, type, fs) {
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
