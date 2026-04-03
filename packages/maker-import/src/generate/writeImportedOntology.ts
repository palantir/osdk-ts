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

import { OntologyEntityTypeEnum } from "@osdk/maker";
import * as fs from "node:fs";
import * as path from "node:path";
import { convertActionType } from "./convertActionType.js";
import { convertInterfaceType } from "./convertInterfaceType.js";
import { convertObjectType } from "./convertObjectType.js";
import { convertSharedPropertyType } from "./convertSharedPropertyType.js";
import { camel, withoutNamespace } from "./utils.js";

interface OntologyFullMetadata {
  objectTypes: Record<string, {
    objectType: {
      apiName: string;
      displayName?: string;
      description?: string;
      primaryKey: string;
      titleProperty: string;
      status: string;
      visibility?: string;
      properties: Record<
        string,
        {
          displayName?: string;
          description?: string;
          dataType: { type: string; [key: string]: unknown };
        }
      >;
    };
    sharedPropertyTypeMapping?: Record<string, string>;
  }>;
  actionTypes: Record<string, {
    apiName: string;
    displayName?: string;
    description?: string;
    status: string;
    parameters: Record<string, {
      displayName?: string;
      description?: string;
      dataType: { type: string; [key: string]: unknown };
      required: boolean;
    }>;
    operations: Array<{ type: string; [key: string]: unknown }>;
  }>;
  interfaceTypes: Record<string, {
    apiName: string;
    displayName?: string;
    description?: string;
    extendsInterfaces: ReadonlyArray<string>;
    properties: Record<string, {
      apiName: string;
      displayName?: string;
      description?: string;
      dataType: { type: string; [key: string]: unknown };
    }>;
    links: Record<string, {
      apiName: string;
      displayName?: string;
      description?: string;
      cardinality: string;
      required: boolean;
      linkedEntityApiName: { type: string; apiName?: string };
    }>;
  }>;
  sharedPropertyTypes: Record<string, {
    apiName: string;
    displayName?: string;
    description?: string;
    dataType: { type: string; [key: string]: unknown };
  }>;
}

const TYPE_NAME_MAP: Record<string, string> = {
  [OntologyEntityTypeEnum.OBJECT_TYPE]: "ObjectType",
  [OntologyEntityTypeEnum.ACTION_TYPE]: "ActionType",
  [OntologyEntityTypeEnum.INTERFACE_TYPE]: "InterfaceType",
  [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: "SharedPropertyType",
};

const DIR_NAME_MAP: Record<string, string> = {
  [OntologyEntityTypeEnum.OBJECT_TYPE]: "object-types",
  [OntologyEntityTypeEnum.ACTION_TYPE]: "action-types",
  [OntologyEntityTypeEnum.INTERFACE_TYPE]: "interface-types",
  [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: "shared-property-types",
};

/**
 * Generates TypeScript files from OntologyFullMetadata, replicating
 * the pattern from maker's writeStaticObjects().
 *
 * Each entity gets its own file with wrapWithProxy, plus an index.ts
 * that re-exports everything.
 */
export function writeImportedOntology(
  metadata: OntologyFullMetadata,
  outputDir: string,
): void {
  const codegenDir = path.resolve(outputDir, "codegen");

  // Clean and create directories
  for (const dirName of Object.values(DIR_NAME_MAP)) {
    const dirPath = path.join(codegenDir, dirName);
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
    }
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const topLevelExports: string[] = [];

  // Convert and write shared property types
  for (const [_apiName, spt] of Object.entries(metadata.sharedPropertyTypes)) {
    const converted = convertSharedPropertyType(spt);
    if (converted) {
      writeEntityFile(
        codegenDir,
        OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
        converted.apiName,
        converted,
        topLevelExports,
      );
    }
  }

  // Convert and write interface types
  for (const [_apiName, iface] of Object.entries(metadata.interfaceTypes)) {
    const converted = convertInterfaceType(iface, metadata.interfaceTypes);
    writeEntityFile(
      codegenDir,
      OntologyEntityTypeEnum.INTERFACE_TYPE,
      converted.apiName,
      converted,
      topLevelExports,
    );
  }

  // Convert and write object types
  for (const [_apiName, objFull] of Object.entries(metadata.objectTypes)) {
    const converted = convertObjectType(objFull);
    writeEntityFile(
      codegenDir,
      OntologyEntityTypeEnum.OBJECT_TYPE,
      converted.apiName,
      converted,
      topLevelExports,
    );
  }

  // Convert and write action types
  for (const [_apiName, action] of Object.entries(metadata.actionTypes)) {
    const converted = convertActionType(action);
    writeEntityFile(
      codegenDir,
      OntologyEntityTypeEnum.ACTION_TYPE,
      converted.apiName,
      converted,
      topLevelExports,
    );
  }

  // Write index.ts
  if (topLevelExports.length > 0) {
    const indexContent = topLevelExports.join("\n") + "\n";
    const indexPath = path.join(outputDir, "index.ts");
    fs.writeFileSync(indexPath, indexContent, { flag: "w" });
  }
}

function writeEntityFile(
  codegenDir: string,
  entityType: OntologyEntityTypeEnum,
  apiName: string,
  entity: unknown,
  topLevelExports: string[],
): void {
  const typeName = TYPE_NAME_MAP[entityType];
  const dirName = DIR_NAME_MAP[entityType];
  const varName = camel(withoutNamespace(apiName));

  const entityJSON = JSON.stringify(entity, null, 2).replace(
    /("__type"\s*:\s*)"([^"]*)"/g,
    (_, prefix, value) => `${prefix}OntologyEntityTypeEnum.${value}`,
  );

  const content =
    `import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
import type { ${typeName} } from '@osdk/maker';

/** @type {import('@osdk/maker').${typeName}} */
const ${varName}_base: ${typeName} = ${entityJSON} as unknown as ${typeName};

export const ${varName}: ${typeName} = wrapWithProxy(${varName}_base);
`;

  const filePath = path.join(codegenDir, dirName, `${varName}.ts`);
  fs.writeFileSync(filePath, content, { flag: "w" });

  topLevelExports.push(
    `export { ${varName} } from "./codegen/${dirName}/${varName}.js";`,
  );
}
