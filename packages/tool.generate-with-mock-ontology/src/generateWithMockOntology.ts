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
import { $ } from "execa";
import * as fs from "node:fs/promises";
import { tmpdir } from "node:os";
import * as path from "node:path";
import { safeStat } from "./safeStat.js";

export async function generateWithMockOntology(): Promise<void> {
  try {
    const dir = await fs.mkdtemp(
      path.join(tmpdir(), "osdk-e2e-foundry-sdk-generator-"),
    );

    apiServer.listen();

    const testApp2Dir = path.join(dir, "@test-app2");

    await fs.rm(testApp2Dir, { recursive: true, force: true });
    await safeStat(testApp2Dir, "should not exist");

    await fs.mkdir(dir, { recursive: true });

    const generatePackageCommand = new GeneratePackageCommand();

    const baseArgs: Parameters<typeof generatePackageCommand["handler"]>[0] = {
      packageName: "@test-app2/osdk",
      packageVersion: "0.0.1",
      outputDir: dir,
      authToken: "myAccessToken",
      foundryHostname: "https://stack.palantir.com",
      ontology:
        "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
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

    await safeStat(testApp2Dir, "should exist");

    await $({
      stdout: "inherit",
      stderr: "inherit",
    })`attw --pack ${
      path.join(testApp2Dir, "osdk")
    } --ignore-rules internal-resolution-error`;

    const finalOutDir = path.join(
      process.cwd(),
      "osdk",
    );

    await fs.rm(path.join(finalOutDir, "@test-app2"), {
      recursive: true,
      force: true,
    });
    await fs.cp(dir, finalOutDir, { recursive: true });
  } finally {
    // eslint-disable-next-line no-console
    console.log("teardown: stopping API server");
    apiServer.close();
  }
}
