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
import type { WireOntologyDefinition } from "@osdk/generator";
import {
  generateClientSdkVersionOneDotOne,
  generateClientSdkVersionTwoPointZero,
} from "@osdk/generator";
import { createClientContext, createOpenApiRequest } from "@osdk/shared.net";
import { consola } from "consola";
import * as fs from "node:fs";
import invokeLoginFlow from "../../auth/login/loginFlow.js";
import type { TypescriptGenerateArgs } from "./TypescriptGenerateArgs.js";

export default async function handleGenerate(args: TypescriptGenerateArgs) {
  if (args.ontologyPath) {
    await generateFromLocalFile(args);
  } else if (args.stack && args.clientId) {
    await generateFromStack(args);
  } else {
    throw new Error("Must have specified ontologyPath or stack and clientId");
  }

  consola.info("OSDK Generated!");
}

async function generateFromLocalFile(args: TypescriptGenerateArgs) {
  const ontology = JSON.parse(
    await fs.promises.readFile(args.ontologyPath!, "utf-8"),
  );
  await generateClientSdk(ontology, args);
}

async function generateFromStack(args: TypescriptGenerateArgs) {
  const { stack, clientId } = args as { stack: string; clientId: string };

  const token = await invokeLoginFlow({
    applicationId: clientId,
    baseUrl: stack,
    verbose: 0,
  });
  const { fetch } = createClientContext(
    {
      metadata: {
        userAgent: "@osdk/cli/0.0.0 ()",
      },
    },
    args.stack!,
    () => token.access_token,
  );

  try {
    const ontologies = await listOntologiesV2(
      createOpenApiRequest(stack, fetch),
    );

    if (ontologies.data.length !== 1) {
      consola.error(
        `Could not look up ontology with these credentials. Found ${ontologies.data.length} ontologies.`,
      );
    }

    const ontology = await getOntologyFullMetadata(
      createOpenApiRequest(stack, fetch),
      ontologies.data[0].apiName,
    );

    await generateClientSdk(ontology, args);
  } catch (e) {
    consola.error("Failed to download the ontology", e);
  }
}

async function generateClientSdk(
  ontology: WireOntologyDefinition,
  args: TypescriptGenerateArgs,
) {
  if (args.beta) {
    await generateClientSdkVersionTwoPointZero(
      ontology,
      {
        writeFile: (path, contents) => {
          return fs.promises.writeFile(path, contents, "utf-8");
        },
        mkdir: async (path, options) => {
          await fs.promises.mkdir(path, options);
        },
      },
      args.outDir,
      args.packageType,
    );
  } else {
    await generateClientSdkVersionOneDotOne(
      ontology,
      {
        writeFile: (path, contents) => {
          return fs.promises.writeFile(path, contents, "utf-8");
        },
        mkdir: async (path, options) => {
          await fs.promises.mkdir(path, options);
        },
      },
      args.outDir,
      args.packageType,
    );
  }
}
