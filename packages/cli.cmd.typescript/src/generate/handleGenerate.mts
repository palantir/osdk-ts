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

import { ExitProcessError, YargsCheckError } from "@osdk/cli.common";
import invokeLoginFlow from "@osdk/cli.common/loginFlow";
import type { MinimalFs, WireOntologyDefinition } from "@osdk/generator";
import {
  __UNSTABLE_generateClientSdkPackage,
  generateClientSdkVersionTwoPointZero,
  getExpectedDependencies,
} from "@osdk/generator";
import type { OntologyIdentifier } from "@osdk/internal.foundry.core";
import { OntologiesV2 } from "@osdk/internal.foundry.ontologiesv2";
import { createClientContext } from "@osdk/shared.net";
import { consola } from "consola";
import deepEqual from "fast-deep-equal";
import { findUp } from "find-up";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import type { TypescriptGenerateArgs } from "./TypescriptGenerateArgs.js";

const USER_AGENT = `osdk-cli.cmd.typescript/${process.env.PACKAGE_VERSION}`;

export async function handleGenerate(args: TypescriptGenerateArgs) {
  let success = false;
  if (args.ontologyPath) {
    success = await generateFromLocalFile(args);
  } else if (args.foundryUrl && args.clientId) {
    success = await generateFromStack(args);
  } else {
    throw new YargsCheckError(
      "Must have specified ontologyPath or stack and clientId",
    );
  }

  if (success) {
    consola.info("OSDK Generated!");
  } else {
    throw new ExitProcessError(1, "Failed to generate the TypeScript SDK");
  }
}

async function generateFromLocalFile(args: TypescriptGenerateArgs) {
  if (!fs.existsSync(args.ontologyPath!)) {
    consola.error(`Ontology file does not exist: ${args.ontologyPath}`);
    return false;
  }

  const ontology = JSON.parse(
    await fs.promises.readFile(args.ontologyPath!, "utf-8"),
  );

  return await generateClientSdk(ontology, args);
}

async function generateFromStack(args: TypescriptGenerateArgs) {
  const { foundryUrl, clientId, ontologyWritePath } = args as
    & TypescriptGenerateArgs
    & { foundryUrl: string; clientId: string };

  const token = await invokeLoginFlow({
    clientId,
    foundryUrl,
    verbose: 0,
  });
  const ctx = createClientContext(
    args.foundryUrl!,
    () => token.access_token,
    USER_AGENT,
  );

  try {
    const ontologies = await OntologiesV2.listOntologiesV2(
      ctx,
    );

    if (args.ontologyRid) {
      ontologies.data = ontologies.data.filter(
        (o) => o.rid === args.ontologyRid,
      );
    }

    if (ontologies.data.length !== 1) {
      consola.error(
        `Could not look up ontology with these credentials. Found ${ontologies.data.length} ontologies.`,
      );
      return false;
    }

    const ontology = await OntologiesV2.getOntologyFullMetadata(
      ctx,
      ontologies.data[0].apiName as OntologyIdentifier,
    );

    function sortKeys<T extends Record<string, any>>(
      obj: T,
      mutateValue?: (
        x: T extends Record<string, infer Y> ? Y : never,
      ) => T extends Record<string, infer Y> ? Y : never,
    ): T {
      const sorted = Object.entries(obj).sort(([a], [b]) => a.localeCompare(b));
      const mutated = mutateValue
        ? sorted.map(([k, v]) => [k, mutateValue(v)])
        : sorted;
      return Object.fromEntries(mutated) as T; //
    }

    ontology.actionTypes = sortKeys(ontology.actionTypes, (x) => {
      return {
        ...x,
        parameters: sortKeys(x.parameters),
      };
    });

    ontology.objectTypes = sortKeys(ontology.objectTypes, (x) => {
      return {
        ...x,
        linkTypes: [...x.linkTypes].sort((a, b) =>
          a.apiName.localeCompare(b.apiName)
        ),
        implementsInterfaces2: sortKeys(x.implementsInterfaces2),
        sharedPropertyTypeMapping: sortKeys(x.sharedPropertyTypeMapping),
        objectType: {
          ...x.objectType,
          properties: sortKeys(x.objectType.properties),
        },
      };
    });

    ontology.interfaceTypes = sortKeys(ontology.interfaceTypes, (x) => {
      return {
        ...x,
        extendsInterfaces: [...x.extendsInterfaces].sort(),
        properties: sortKeys(x.properties),
      };
    });

    ontology.queryTypes = sortKeys(ontology.queryTypes, (x) => {
      return {
        ...x,
        parameters: sortKeys(x.parameters),
      };
    });

    ontology.sharedPropertyTypes = sortKeys(ontology.sharedPropertyTypes);

    if (ontologyWritePath) {
      fs.writeFileSync(ontologyWritePath, JSON.stringify(ontology, null, 2));
    }

    return await generateClientSdk(ontology, args);
  } catch (e) {
    consola.error("Failed to generate the ontology", e);
    return false;
  }
}

async function generateClientSdk(
  ontology: WireOntologyDefinition,
  args: TypescriptGenerateArgs,
) {
  const minimalFs = createNormalFs();

  try {
    if (args.clean) {
      consola.info("Cleaning output directory", args.outDir);
      await fs.promises.rm(args.outDir, { recursive: true, force: true });
    }

    if (!args.asPackage) {
      await generateSourceFiles(args, ontology, minimalFs);

      const packageJsonPath = await findUp("package.json", {
        cwd: args.outDir,
      });

      if (!packageJsonPath) {
        return true;
      }
      const packageJsonOriginal = JSON.parse(
        await fs.promises.readFile(packageJsonPath, "utf-8"),
      );
      const packageJson = JSON.parse(
        await fs.promises.readFile(packageJsonPath, "utf-8"),
      );

      const dependencyVersions = await getDependencyVersions();
      if (args.internal) {
        dependencyVersions.osdkApiVersion = "workspace:~";
        dependencyVersions.osdkClientApiVersion = "workspace:~";
        dependencyVersions.osdkClientVersion = "workspace:~";
        dependencyVersions.osdkLegacyClientVersion = "workspace:~";
      }

      const expectedDeps = getExpectedDependencies(
        dependencyVersions,
      );

      for (const [type, deps] of Object.entries(expectedDeps)) {
        if (!(type in packageJson)) {
          packageJson[type] = deps;
        } else {
          Object.assign(packageJson[type], deps);
        }
      }

      updateVersionsIfTheyExist(packageJson, {
        "@osdk/client": dependencyVersions.osdkClientVersion,
        "@osdk/client.api": dependencyVersions.osdkClientApiVersion,
        "@osdk/api": dependencyVersions.osdkApiVersion,
      });

      // only write if changed
      if (!deepEqual(packageJsonOriginal, packageJson)) {
        await fs.promises.writeFile(
          packageJsonPath,
          JSON.stringify(packageJson, undefined, 2) + "\n",
        );
      }

      return true;
    }

    await __UNSTABLE_generateClientSdkPackage(
      args.packageName!,
      args.version,
      args.beta ? "2.0" : "1.1",
      args.outDir,
      ontology,
      minimalFs,
      await getDependencyVersions(),
      process.env.PACKAGE_CLI_VERSION!,
      args.ontologyApiNamespace,
      args.apiNamespaceMap,
    );
    return true;
  } catch (e) {
    consola.error(
      "OSDK generation failed",
      (e as Error).message,
      (e as Error).stack,
    );

    return false;
  }
} //

export function updateVersionsIfTheyExist(
  packageJson: any,
  versions: Record<string, string>,
) {
  for (const d of ["dependencies", "devDependencies", "peerDependencies"]) {
    for (const [key, value] of Object.entries(versions)) {
      if (packageJson?.[d]?.[key]) {
        packageJson[d][key] = value;
      }
    }
  }
}

export async function getDependencyVersions() {
  const ourPackageJsonPath = await getOurPackageJsonPath();

  const ourPackageJson = JSON.parse(
    await fs.promises.readFile(ourPackageJsonPath, "utf-8"),
  );

  const typescriptVersion = ourPackageJson.devDependencies.typescript;
  const tslibVersion = ourPackageJson.dependencies.tslib;
  const areTheTypesWrongVersion =
    ourPackageJson.dependencies["@arethetypeswrong/cli"];
  const osdkClientVersion = `^${process.env.PACKAGE_CLIENT_VERSION}`;
  const osdkClientApiVersion = `^${process.env.PACKAGE_CLIENT_API_VERSION}`;
  const osdkApiVersion = `^${process.env.PACKAGE_API_VERSION}`;
  const osdkLegacyClientVersion =
    `^${process.env.PACKAGE_LEGACY_CLIENT_VERSION}`;

  return {
    typescriptVersion,
    tslibVersion,
    areTheTypesWrongVersion,
    osdkApiVersion,
    osdkClientVersion,
    osdkClientApiVersion,
    osdkLegacyClientVersion,
  };
}

let cachedOurPackageJsonPath: string;
async function getOurPackageJsonPath() {
  if (cachedOurPackageJsonPath) return cachedOurPackageJsonPath;

  const __dir = path.dirname(fileURLToPath(import.meta.url));
  // todo replace with find package json alt from sid
  const ourPackageJsonPath = await findUp("package.json", { cwd: __dir });
  if (!ourPackageJsonPath) {
    throw new Error("Could not find our package.json");
  }
  return cachedOurPackageJsonPath = ourPackageJsonPath;
}

async function generateSourceFiles(
  args: TypescriptGenerateArgs,
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
) {
  await generateClientSdkVersionTwoPointZero(
    ontology,
    getUserAgent(args.version),
    fs,
    args.outDir,
    args.packageType,
    args.ontologyApiNamespace,
    args.apiNamespaceMap,
  );
}

// If the user passed us `dev` as our version, we use that for both our generated package version AND the cli version.
// This makes it so that releases don't force us to have to regenerate the code when the version strings change.
function getUserAgent(version: string) {
  if (version === "dev") {
    return "typescript-sdk/dev osdk-cli/dev";
  } else {
    return `typescript-sdk/${version} ${USER_AGENT}`;
  }
}

function createNormalFs(): MinimalFs {
  return {
    writeFile: (path: string, contents: string) => {
      return fs.promises.writeFile(path, contents, "utf-8");
    },
    mkdir: async (path: string, options?: { recursive: boolean }) => {
      await fs.promises.mkdir(path, options);
    },
    readdir: async (path: string) => fs.promises.readdir(path),
  };
}
