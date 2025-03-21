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
import { OntologiesV2 } from "@osdk/foundry.ontologies";
import { __UNSTABLE_generateClientSdkPackage, generateClientSdkVersionTwoPointZero, getExpectedDependencies } from "@osdk/generator";
import { createSharedClientContext } from "@osdk/shared.client.impl";
import { consola } from "consola";
import deepEqual from "fast-deep-equal";
import { findUp } from "find-up";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
const USER_AGENT = `osdk-cli.cmd.typescript/${"0.26.0-beta.9"}`;
export async function handleGenerate(args) {
  let success = false;
  if (args.ontologyPath) {
    success = await generateFromLocalFile(args);
  } else if (args.foundryUrl && args.clientId) {
    success = await generateFromStack(args);
  } else {
    throw new YargsCheckError("Must have specified ontologyPath or stack and clientId");
  }
  if (success) {
    consola.info("OSDK Generated!");
  } else {
    throw new ExitProcessError(1, "Failed to generate the TypeScript SDK");
  }
}
async function generateFromLocalFile(args) {
  if (!fs.existsSync(args.ontologyPath)) {
    consola.error(`Ontology file does not exist: ${args.ontologyPath}`);
    return false;
  }
  const ontology = JSON.parse(await fs.promises.readFile(args.ontologyPath, "utf-8"));
  return await generateClientSdk(ontology, args);
}
async function generateFromStack(args) {
  const {
    foundryUrl,
    clientId,
    ontologyWritePath
  } = args;
  const token = await invokeLoginFlow({
    clientId,
    foundryUrl,
    verbose: 0
  });
  const ctx = createSharedClientContext(args.foundryUrl, async () => token.access_token, USER_AGENT);
  try {
    const ontologies = await OntologiesV2.list(ctx);
    if (args.ontologyRid) {
      ontologies.data = ontologies.data.filter(o => o.rid === args.ontologyRid);
    }
    if (ontologies.data.length !== 1) {
      consola.error(`Could not look up ontology with these credentials. Found ${ontologies.data.length} ontologies.`);
      return false;
    }
    const ontology = await OntologiesV2.getFullMetadata(ctx, ontologies.data[0].apiName);
    function sortKeys(obj, mutateValue) {
      const sorted = Object.entries(obj).sort(([a], [b]) => a.localeCompare(b));
      const mutated = mutateValue ? sorted.map(([k, v]) => [k, mutateValue(v)]) : sorted;
      return Object.fromEntries(mutated); //
    }
    ontology.actionTypes = sortKeys(ontology.actionTypes, x => {
      return {
        ...x,
        parameters: sortKeys(x.parameters)
      };
    });
    ontology.objectTypes = sortKeys(ontology.objectTypes, x => {
      return {
        ...x,
        linkTypes: [...x.linkTypes].sort((a, b) => a.apiName.localeCompare(b.apiName)),
        implementsInterfaces2: sortKeys(x.implementsInterfaces2),
        sharedPropertyTypeMapping: sortKeys(x.sharedPropertyTypeMapping),
        objectType: {
          ...x.objectType,
          properties: sortKeys(x.objectType.properties)
        }
      };
    });
    ontology.interfaceTypes = sortKeys(ontology.interfaceTypes, x => {
      return {
        ...x,
        extendsInterfaces: [...x.extendsInterfaces].sort(),
        properties: sortKeys(x.allProperties ?? x.properties)
      };
    });
    ontology.queryTypes = sortKeys(ontology.queryTypes, x => {
      return {
        ...x,
        parameters: sortKeys(x.parameters)
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
async function generateClientSdk(ontology, args) {
  const minimalFs = createNormalFs();
  try {
    if (args.clean) {
      consola.info("Cleaning output directory", args.outDir);
      await fs.promises.rm(args.outDir, {
        recursive: true,
        force: true
      });
    }
    if (!args.asPackage) {
      await generateSourceFiles(args, ontology, minimalFs);
      const packageJsonPath = await findUp("package.json", {
        cwd: args.outDir
      });
      if (!packageJsonPath) {
        return true;
      }
      const packageJsonOriginal = JSON.parse(await fs.promises.readFile(packageJsonPath, "utf-8"));
      const packageJson = JSON.parse(await fs.promises.readFile(packageJsonPath, "utf-8"));
      const dependencyVersions = await getDependencyVersions();
      if (args.internal) {
        dependencyVersions.osdkApiVersion = "workspace:~";
        dependencyVersions.osdkClientVersion = "workspace:~";
        dependencyVersions.osdkLegacyClientVersion = "workspace:~";
      }
      const expectedDeps = getExpectedDependencies(dependencyVersions);
      for (const [type, deps] of Object.entries(expectedDeps)) {
        if (!(type in packageJson)) {
          packageJson[type] = deps;
        } else {
          Object.assign(packageJson[type], deps);
        }
      }
      updateVersionsIfTheyExist(packageJson, {
        "@osdk/client": dependencyVersions.osdkClientVersion,
        "@osdk/api": dependencyVersions.osdkApiVersion
      });

      // only write if changed
      if (!deepEqual(packageJsonOriginal, packageJson)) {
        await fs.promises.writeFile(packageJsonPath, JSON.stringify(packageJson, undefined, 2) + "\n");
      }
      return true;
    }
    await __UNSTABLE_generateClientSdkPackage(args.packageName, args.version, args.beta ? "2.0" : "1.1", args.outDir, ontology, minimalFs, await getDependencyVersions(), "0.26.0-beta.9", args.externalObjects, args.externalInterfaces);
    return true;
  } catch (e) {
    consola.error("OSDK generation failed", e.message, e.stack);
    return false;
  }
} //

export function updateVersionsIfTheyExist(packageJson, versions) {
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
  const ourPackageJson = JSON.parse(await fs.promises.readFile(ourPackageJsonPath, "utf-8"));
  const typescriptVersion = ourPackageJson.devDependencies.typescript;
  const tslibVersion = ourPackageJson.dependencies.tslib;
  const areTheTypesWrongVersion = ourPackageJson.dependencies["@arethetypeswrong/cli"];
  const osdkLegacyClientVersion = `^${process.env.PACKAGE_LEGACY_CLIENT_VERSION}`;
  return {
    typescriptVersion,
    tslibVersion,
    areTheTypesWrongVersion,
    osdkApiVersion: `^${"2.2.0-beta.9"}`,
    osdkClientVersion: `^${"2.2.0-beta.9"}`,
    osdkLegacyClientVersion
  };
}
let cachedOurPackageJsonPath;
async function getOurPackageJsonPath() {
  if (cachedOurPackageJsonPath) return cachedOurPackageJsonPath;
  const __dir = path.dirname(fileURLToPath(import.meta.url));
  // todo replace with find package json alt from sid
  const ourPackageJsonPath = await findUp("package.json", {
    cwd: __dir
  });
  if (!ourPackageJsonPath) {
    throw new Error("Could not find our package.json");
  }
  return cachedOurPackageJsonPath = ourPackageJsonPath;
}
async function generateSourceFiles(args, ontology, fs) {
  await generateClientSdkVersionTwoPointZero(ontology, getUserAgent(args.version), fs, args.outDir, args.packageType, args.externalObjects, args.externalInterfaces);
}

// If the user passed us `dev` as our version, we use that for both our generated package version AND the cli version.
// This makes it so that releases don't force us to have to regenerate the code when the version strings change.
function getUserAgent(version) {
  if (version === "dev") {
    return "typescript-sdk/dev osdk-cli/dev";
  } else {
    return `typescript-sdk/${version} ${USER_AGENT}`;
  }
}
function createNormalFs() {
  return {
    writeFile: (path, contents) => {
      return fs.promises.writeFile(path, contents, "utf-8");
    },
    mkdir: async (path, options) => {
      await fs.promises.mkdir(path, options);
    },
    readdir: async path => fs.promises.readdir(path)
  };
}
//# sourceMappingURL=handleGenerate.mjs.map