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

import { exit } from "process";
import type { Arguments, Argv, CommandModule } from "yargs";
import { OntologyMetadataResolver } from "../ontologyMetadata/index.js";
import { isValidSemver } from "../utils/index.js";
import { generatePackage } from "./betaClient/generatePackage.js";
import { transformArrayArg } from "./commandUtils.js";

export interface generatePackageCommandArgs {
  authToken: string;
  foundryHostname: string;
  ontology: string;
  objectTypes?: string[];
  actionTypes?: string[];
  queryTypes?: string[];
  linkTypes?: string[];
  experimentalFeatures?: string[];
  packageName: string;
  packageVersion: string;
  outputDir: string;
}

export class GeneratePackageCommand
  implements CommandModule<{}, generatePackageCommandArgs>
{
  public command = "generatePackage";
  public describe = "Generates a new npm package which can be published";

  constructor() {}

  public builder(args: Argv): Argv<generatePackageCommandArgs> {
    return args
      .positional("authToken", {
        type: "string",
        demandOption: true,
      })
      .positional("foundryHostname", {
        type: "string",
        demandOption: true,
      })
      .positional("packageName", {
        type: "string",
        demandOption: true,
        description: "The name of the package to generate",
      })
      .positional("packageVersion", {
        type: "string",
        demandOption: true,
        description: "The version of the package to generate",
      })
      .positional("outputDir", {
        type: "string",
        demandOption: true,
        description:
          "The path where the package with the provided package name will be generated",
      })
      .positional("ontology", {
        type: "string",
        demandOption: true,
        description:
          `The ontology rid or ontology API name of the ontology to generate. Example Usage: --ontology palantirOntology`,
        default:
          "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
      })
      .options("objectTypes", {
        array: true,
        string: true,
        demandOption: false,
        description:
          `The API names of the object types to generate. Example Usage: --objectTypes Aircraft Airport`,
        default: undefined,
        defaultDescription:
          `By default, no arguments will not load any object type.`,
      })
      .options("actionTypes", {
        array: true,
        string: true,
        demandOption: false,
        description:
          `The API names of the action types to generate. Example Usage: --actionTypes schedule-airplane-maintanence`,
        default: undefined,
        defaultDescription:
          `By default, no arguments will not load any action type.`,
      })
      .options("linkTypes", {
        array: true,
        string: true,
        demandOption: false,
        description:
          `The link types to generate in the format of ObjectTypeApiName.LinkTypeApiName. Example Usage: --linkTypes Aircraft.scheduledFlight`,
        default: undefined,
        defaultDescription:
          `By default, no arguments will not load any link type.`,
      })
      .options("queryTypes", {
        array: true,
        string: true,
        demandOption: false,
        description:
          `The API Names of the query types to generate. Example Usage: --queryTypes calculateMetric`,
        default: undefined,
        defaultDescription:
          `By default, no arguments will not load any query type.`,
      })
      .options("experimentalFeatures", {
        array: true,
        string: true,
        demandOption: false,
        description:
          `Experimental features that can be modified or removed at any time. Example Usage: --experimentalFeaures realtimeUpdates`,
        default: undefined,
        defaultDescription:
          `By default, no arguments will not enable any experimental features.`,
      })
      .options("beta", {
        boolean: true,
        demandOption: false,
        hidden: true,
        default: false,
      })
      .strict();
  }

  public handler = async (args: Arguments<generatePackageCommandArgs>) => {
    const { consola } = await import("consola");
    consola.start(
      `Generating OSDK: ${args.packageName} at version: ${args.packageVersion}`,
    );
    const ontologyRid = args.ontology as string;
    const ontologyMetadataResolver = new OntologyMetadataResolver(
      args.authToken as string,
      args.foundryHostname as string,
    );

    if (!isValidSemver(args.packageVersion as string)) {
      consola.error(
        new Error(
          `Invalid argument provided for packageVersion: ${args.packageVersion}, expected valid semver`,
        ),
      );
      exit(1);
    }

    const timeStart = Date.now();

    const wireOntologyDefinition = await ontologyMetadataResolver
      .getWireOntologyDefinition(ontologyRid, {
        objectTypesApiNamesToLoad: transformArrayArg(args.objectTypes),
        actionTypesApiNamesToLoad: transformArrayArg(args.actionTypes),
        queryTypesApiNamesToLoad: transformArrayArg(args.queryTypes),
        linkTypesApiNamesToLoad: transformArrayArg(args.linkTypes),
      });

    if (wireOntologyDefinition.isErr()) {
      wireOntologyDefinition.error.forEach(err => {
        consola.error(err);
      });
      consola.error("Failed generating package");
      exit(1);
    }

    await generatePackage(wireOntologyDefinition.value, {
      packageName: args.packageName,
      packageVersion: args.packageVersion,
      outputDir: args.outputDir,
    });

    const elapsedTime = Date.now() - timeStart;
    consola.success(
      `Finished generating package in ${(elapsedTime / 1000).toFixed(2)}s`,
    );
    return;
  };
}
