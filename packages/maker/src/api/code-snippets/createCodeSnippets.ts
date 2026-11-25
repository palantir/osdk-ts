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

import * as fs from "fs";
import * as path from "path";

import { TYPESCRIPT_OSDK_SNIPPETS } from "@osdk/typescript-sdk-docs";
import { consola } from "consola";
import Mustache from "mustache";

import { API_NAME_PATTERN } from "../../util/ApiNameValidator.js";
import type { ActionType } from "../action/ActionType.js";
import type { OntologyDefinition } from "../common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { withoutNamespace } from "../defineOntology.js";
import { getFlattenedInterfaceProperties } from "../interface/getFlattenedInterfaceProperties.js";
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
  const identifier = withoutNamespace(interfaceType.apiName);
  const interfaceContext = {
    interfaceApiName: identifier,
    packageName: packageName,
    objectOrInterfaceApiName: identifier,
    propertyNames: Object.keys(interfaceType.propertiesV3),
    property: interfacePropertyKey(interfaceType),
    interfaceName: interfaceType.displayMetadata.displayName,
  };

  return getSnippets(interfaceSnippets, interfaceContext);
}

// Examples write the property key bare and HTML escape it, so a namespaced key
// can't be quoted. The SDK drops the interface's own namespace from property
// keys but keeps any other namespace, so this picks a plain identifier.
function interfacePropertyKey(interfaceType: InterfaceType): string {
  const namespacePrefix = interfaceType.apiName.slice(
    0,
    interfaceType.apiName.lastIndexOf(".") + 1,
  );
  const keys = Object.keys(getFlattenedInterfaceProperties(interfaceType)).map(
    (apiName) =>
      apiName.startsWith(namespacePrefix)
        ? apiName.slice(namespacePrefix.length)
        : apiName,
  );
  return keys.find((key) => API_NAME_PATTERN.test(key)) ?? "propertyName";
}

function generateObjectSnippet(objectType: ObjectType, packageName: string) {
  const identifier = withoutNamespace(objectType.apiName);
  const objectContext = {
    objectType: identifier,
    packageName: packageName,
    objectOrInterfaceApiName: identifier,
    // Objects also render the interface ordering example, which reads the type
    // name from the interface key.
    interfaceApiName: identifier,
    property: objectType.titlePropertyApiName,
    titleProperty: objectType.titlePropertyApiName,
    primaryKeyPropertyValueV2: primaryKeySampleValue(objectType),
  };
  return getSnippets(objectSnippets, objectContext);
}

// The SDK types long primary keys as strings, so only these take a number.
const NUMERIC_PRIMARY_KEY_TYPES = new Set([
  "byte",
  "double",
  "float",
  "integer",
  "short",
]);

function primaryKeySampleValue(objectType: ObjectType): string {
  const type = objectType.properties?.find(
    (property) => property.apiName === objectType.primaryKeyPropertyApiName,
  )?.type;
  return typeof type === "string" && NUMERIC_PRIMARY_KEY_TYPES.has(type)
    ? "0"
    : `"primaryKeyValue"`;
}

function generateActionSnippet(actionType: ActionType, packageName: string) {
  const actionContext = {
    actionApiName: actionIdentifier(actionType.apiName),
    packageName: packageName,
    // Maker has no sample values to fill in, and an empty parameter object
    // doesn't compile when the action has required parameters.
    hasTypedParameters: (actionType.parameters?.length ?? 0) > 0,
  };
  return getSnippets(actionSnippets, actionContext);
}

// Snippets must use the name the TypeScript SDK generator exports. It drops
// each hyphen and capitalizes the next character, but leaves the first letter
// and any underscores alone.
function actionIdentifier(apiName: string): string {
  return withoutNamespace(apiName).replace(/-./gu, (segment) =>
    segment.charAt(1).toUpperCase(),
  );
}

function getSnippets(
  snippetType:
    | typeof interfaceSnippets
    | typeof actionSnippets
    | typeof objectSnippets,
  context: {},
) {
  const allSnippets: Record<string, string> = {};
  for (const templateName of Object.keys(snippetType).filter((key) =>
    isNaN(Number(key)),
  )) {
    const versions = Object.values(TYPESCRIPT_OSDK_SNIPPETS.versions);
    const latestTemplate =
      versions
        .slice()
        .reverse()
        .find((v) => v.snippets[templateName])
        ?.snippets[templateName].at(-1)?.template ?? "";
    const renderedTemplate = Mustache.render(latestTemplate, context);
    const snippetName = snippetNameMapping.get(templateName);

    allSnippets[
      snippetName !== undefined
        ? Mustache.render(snippetName, context)
        : templateName
    ] = renderedTemplate;
  }
  return allSnippets;
}
