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

import { apiServer } from "@osdk/shared.test";
import { rm } from "fs/promises";
import { join } from "path";
import { GeneratePackageCommand } from "../generate/index.js";

const dir = `${__dirname}/../generatedNoCheck/`;
export async function setup() {
  apiServer.listen();

  try {
    await rm(join(dir, "@test-app"), { recursive: true });
  } catch (e) {
    // Only needed for regenerations
  }

  try {
    await rm(join(dir, "@test-app2"), { recursive: true });
  } catch (e) {
    // Only needed for regenerations
  }

  const generatePackageCommand = new GeneratePackageCommand();
  await generatePackageCommand.handler({
    packageName: "@test-app/osdk",
    packageVersion: "0.0.1",
    outputDir: dir,
    authToken: "myAccessToken",
    foundryHostname: "https://stack.palantir.com",
    ontology: "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
    objectTypes: [
      "employee",
      "office",
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
  });

  await generatePackageCommand.handler({
    packageName: "@test-app2/osdk",
    packageVersion: "0.0.1",
    outputDir: dir,
    authToken: "myAccessToken",
    foundryHostname: "https://stack.palantir.com",
    ontology: "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
    objectTypes: [
      "employee",
      "office",
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
    beta: true,
    linkTypes: ["employee.peeps", "employee.lead", "employee.officeLink"],
    palantirOnlyTest: true,
    _: [],
    $0: "",
  });
}

export async function teardown() {
  // eslint-disable-next-line no-console
  console.log("Test teardown: stopping API server");
  apiServer.close();
}
