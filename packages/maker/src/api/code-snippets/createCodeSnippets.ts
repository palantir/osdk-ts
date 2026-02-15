/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { TYPESCRIPT_OSDK_SNIPPETS } from "@osdk/typescript-sdk-docs";
import { consola } from "consola";
import * as fs from "fs";
import Mustache from "mustache";
import * as path from "path";
import type { ActionType } from "../action/ActionType.js";
import type { OntologyDefinition } from "../common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type { InterfaceType } from "../interface/InterfaceType.js";
import type { ObjectType } from "../object/ObjectType.js";
import {
  actionSnippets,
  interfaceSnippets,
  objectSnippets,
  snippetNameMapping,
} from "./snippetTypes.js";

export function createCodeSnippets(
  ontology: OntologyDefinition,
  packageName: string | undefined,
  outputDir: string | undefined,
): void {
  if (outputDir === undefined) {
    outputDir = "./code-snippets";
  }
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  if (packageName === undefined) {
    packageName = "";
  }
  consola.info("Generating code snippets to ", outputDir);
  for (const type of Object.values(OntologyEntityTypeEnum)) {
    for (const object of Object.values(ontology[type])) {
      let snippet = {};
      switch (type) {
        case OntologyEntityTypeEnum.OBJECT_TYPE:
          snippet = generateObjectSnippet(object, packageName);
          break;
        case OntologyEntityTypeEnum.ACTION_TYPE:
          snippet = generateActionSnippet(object, packageName);
          break;
        case OntologyEntityTypeEnum.INTERFACE_TYPE:
          snippet = generateInterfaceSnippet(object, packageName);
          break;
        default:
          continue;
      }
      fs.writeFileSync(
        path.join(outputDir, object.apiName),
        JSON.stringify(snippet),
      );
    }
  }
  consola.info("Finished Code Snippet Generation");
}

function generateInterfaceSnippet(
  interfaceType: InterfaceType,
  packageName: string,
) {
  const interfaceContext = {
    "interfaceApiName": interfaceType.apiName,
    "packageName": packageName,
    "objectOrInterfaceApiName": interfaceType.apiName,
    "propertyNames": [
      ...Object.keys(interfaceType.propertiesV3),
      ...Object.keys(interfaceType.propertiesV2),
    ],
    "interfaceName": interfaceType.displayMetadata.displayName,
  };

  return getSnippets(interfaceSnippets, interfaceContext);
}

function generateObjectSnippet(objectType: ObjectType, packageName: string) {
  const objectContext = {
    "objectType": objectType.apiName,
    "packageName": packageName,
    "objectOrInterfaceApiName": objectType.apiName,
  };
  return getSnippets(objectSnippets, objectContext);
}

function generateActionSnippet(actionType: ActionType, packageName: string) {
  const actionContext = {
    "actionApiName": actionType.apiName,
    "packageName": packageName,
  };
  return getSnippets(actionSnippets, actionContext);
}

function getSnippets(
  snippetType:
    | typeof interfaceSnippets
    | typeof actionSnippets
    | typeof objectSnippets,
  context: {},
) {
  const allSnippets = {};
  for (
    const templateName of Object.keys(snippetType).filter(key =>
      isNaN(Number(key))
    )
  ) {
    const versions = Object.values(TYPESCRIPT_OSDK_SNIPPETS.versions);
    const latestTemplate = versions
      .slice()
      .reverse()
      .find(v => v.snippets[templateName])
      ?.snippets[templateName]
      .at(-1)?.template ?? "";
    const renderedTemplate = Mustache.render(latestTemplate, context);
    const snippetName = snippetNameMapping.get(templateName);

    (allSnippets as any)[
      snippetName !== undefined
        ? Mustache.render(snippetName, context)
        : templateName
    ] = renderedTemplate;
  }
  return allSnippets;
}
