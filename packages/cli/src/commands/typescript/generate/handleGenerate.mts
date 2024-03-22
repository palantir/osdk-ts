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

import {
  getOntologyFullMetadata,
  listOntologiesV2,
} from "@osdk/gateway/requests";
import type { MinimalFs, WireOntologyDefinition } from "@osdk/generator";
import {
  generateClientSdkVersionOneDotOne,
  generateClientSdkVersionTwoPointZero,
} from "@osdk/generator";
import { createClientContext, createOpenApiRequest } from "@osdk/shared.net";
import { consola } from "consola";
import { findUp } from "find-up";
import * as fs from "node:fs";
import { mkdir, readdir } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { ExitProcessError } from "../../../ExitProcessError.js";
import { YargsCheckError } from "../../../YargsCheckError.js";
import invokeLoginFlow from "../../auth/login/loginFlow.js";
import type { TypescriptGenerateArgs } from "./TypescriptGenerateArgs.js";

const USER_AGENT = `osdk-cli/${process.env.PACKAGE_VERSION}`;

export default async function handleGenerate(args: TypescriptGenerateArgs) {
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
  const { fetch } = createClientContext(
    {
      metadata: {
        userAgent: USER_AGENT,
      },
    },
    args.foundryUrl!,
    () => token.access_token,
    USER_AGENT,
  );

  try {
    const ontologies = await listOntologiesV2(
      createOpenApiRequest(foundryUrl, fetch),
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

    const ontology = await getOntologyFullMetadata(
      createOpenApiRequest(foundryUrl, fetch),
      ontologies.data[0].apiName,
    );

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
      await generateSourceFiles(args, ontology, createNormalFs());
      return true;
    }

    const packageName = args.packageName;
    if (!packageName) throw new Error("Package name is require");
    const version = args.version;

    for (const packageType of ["module", "commonjs"] as const) {
      const outDir = path.join(args.outDir, "dist", packageType);

      // source files per type
      await generateSourceFiles(
        {
          ...args,
          outDir,
          packageType,
        },
        ontology,
        minimalFs,
      );

      await fs.promises.mkdir(outDir, { recursive: true });
      await writeJson(
        path.join(outDir, "package.json"),
        { type: packageType },
      );

      await writeJson(
        path.join(outDir, `tsconfig.json`),
        {
          compilerOptions: getTsCompilerOptions(packageType),
        },
      );
    }

    await writeJson(
      path.join(args.outDir, "package.json"),
      await getPackageJsonContents(packageName, version, args.beta ? 2 : 1),
    );

    // we need to shim for the node10 resolver
    await fs.promises.mkdir(path.join(args.outDir, "ontology"), {
      recursive: true,
    });
    await fs.promises.writeFile(
      path.join(args.outDir, "ontology/objects.js"),
      `module.exports = require("../../dist/module/ontology/objects")`,
    );
    await fs.promises.writeFile(
      path.join(args.outDir, "ontology/objects.d.ts"),
      `export * from "../dist/module/ontology/objects"`,
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

function getTsCompilerOptions(packageType: "commonjs" | "module") {
  const commonTsconfig = {
    importHelpers: true,

    declaration: true,

    isolatedModules: true,
    esModuleInterop: true,

    forceConsistentCasingInFileNames: true,
    strict: true,

    skipLibCheck: true,
  };

  const compilerOptions = packageType === "commonjs"
    ? {
      ...commonTsconfig,
      module: "commonjs",
      target: "es2018",
    }
    : {
      ...commonTsconfig,
      module: "NodeNext",
      target: "ES2020",
    };
  return compilerOptions;
}

async function getPackageJsonContents(
  name: string,
  version: string,
  sdkVersion: 1 | 2,
) {
  const ourPackageJsonPath = await getOurPackageJsonPath();

  const ourPackageJson = JSON.parse(
    await fs.promises.readFile(ourPackageJsonPath, "utf-8"),
  );

  const esmPrefix = "./dist/module";
  const commonjsPrefix = "./dist/commonjs";

  return {
    name,
    version,
    main: `${commonjsPrefix}/index.js`,
    module: `${esmPrefix}/index.js`,
    exports: {
      ".": {
        import: `${esmPrefix}/index.js`,
        require: `${commonjsPrefix}/index.js`,
      },
      "./ontology/objects": {
        import: `${esmPrefix}/ontology/objects${
          sdkVersion === 2 ? "" : "/index"
        }.js`,
        require: `${commonjsPrefix}/ontology/objects${
          sdkVersion === 2 ? "" : "/index"
        }.js`,
      },
    },
    scripts: {
      prepack:
        `tsc -p ${esmPrefix}/tsconfig.json && tsc -p ${commonjsPrefix}/tsconfig.json`,
      check: "npm exec attw $(npm pack)",
    },
    devDependencies: {
      "typescript": ourPackageJson.devDependencies.typescript,
      "tslib": ourPackageJson.dependencies.tslib,
      "@arethetypeswrong/cli":
        ourPackageJson.dependencies["@arethetypeswrong/cli"],
      "@osdk/api": `^${process.env.PACKAGE_API_VERSION}`,
      ...(sdkVersion === 2
        ? {
          "@osdk/client": `^${process.env.PACKAGE_CLIENT_VERSION}`,
        }
        : {
          "@osdk/legacy-client":
            `^${process.env.PACKAGE_LEGACY_CLIENT_VERSION}`,
        }),
    },
    peerDependencies: {
      "@osdk/api": `^${process.env.PACKAGE_API_VERSION}`,
      ...(sdkVersion === 2
        ? {
          "@osdk/client": `^${process.env.PACKAGE_CLIENT_VERSION}`,
        }
        : {
          "@osdk/legacy-client":
            `^${process.env.PACKAGE_LEGACY_CLIENT_VERSION}`,
        }),
    },
    files: [
      "**/*.js",
      "**/*.d.ts",
      "dist/**/package.json",
    ],
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
  await (args.beta
    ? generateClientSdkVersionTwoPointZero
    : generateClientSdkVersionOneDotOne)(
      ontology,
      getUserAgent(args.version),
      fs,
      args.outDir,
      args.packageType,
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

function createInMemoryFs(): [{ [fileName: string]: string }, MinimalFs] {
  const files: { [fileName: string]: string } = {};
  return [files, {
    writeFile: async (path, contents) => {
      files[path.normalize(path)] = contents;
    },
    mkdir: async (path, _options?: { recursive: boolean }) => {
      await mkdir(path.normalize(path), { recursive: true });
    },
    readdir: async (path) => await readdir(path),
  }];
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

async function writeJson(filePath: string, body: unknown) {
  consola.info(`Writing ${filePath}`);
  consola.debug(`Writing ${filePath} with body`, body);
  return await fs.promises.writeFile(
    filePath,
    JSON.stringify(body, undefined, 2) + "\n",
  );
}
