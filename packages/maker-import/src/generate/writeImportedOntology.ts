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
import { camel, fullCamel, withoutNamespace } from "./utils.js";

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
    propertiesV2?: Record<string, {
      type: string;
      apiName?: string;
      displayName?: string;
      description?: string;
      dataType?: { type: string; [key: string]: unknown };
      requireImplementation?: boolean;
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

interface EntityEntry {
  apiName: string;
  entityType: OntologyEntityTypeEnum;
  entity: unknown;
}

/**
 * Resolves unique variable/file names for a list of apiNames.
 *
 * First tries the short name (namespace stripped, camelCase).
 * If that collides, all colliding entries are escalated to the full
 * camelCase name (namespace included). Any remaining duplicates get
 * a numeric suffix.
 */
export function resolveVarNames(apiNames: string[]): string[] {
  const shortNames = apiNames.map(n => camel(withoutNamespace(n)));

  // Find which short names appear more than once
  const counts = new Map<string, number>();
  for (const name of shortNames) {
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }

  // Escalate conflicting names to fullCamel
  const resolved = apiNames.map((apiName, i) => {
    if (counts.get(shortNames[i])! > 1) {
      return fullCamel(apiName);
    }
    return shortNames[i];
  });

  // Handle any remaining duplicates with numeric suffixes
  const finalNames: string[] = [];
  const used = new Map<string, number>();
  for (const name of resolved) {
    const count = used.get(name) ?? 0;
    finalNames.push(count === 0 ? name : `${name}${count}`);
    used.set(name, count + 1);
  }

  return finalNames;
}

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

  // Pass 1: Convert all entities
  const entries: EntityEntry[] = [];

  for (const [_apiName, spt] of Object.entries(metadata.sharedPropertyTypes)) {
    const converted = convertSharedPropertyType(spt);
    if (converted) {
      entries.push({
        apiName: converted.apiName,
        entityType: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
        entity: converted,
      });
    }
  }

  for (const [_apiName, iface] of Object.entries(metadata.interfaceTypes)) {
    const converted = convertInterfaceType(iface, metadata.interfaceTypes);
    entries.push({
      apiName: converted.apiName,
      entityType: OntologyEntityTypeEnum.INTERFACE_TYPE,
      entity: converted,
    });
  }

  for (const [_apiName, objFull] of Object.entries(metadata.objectTypes)) {
    const converted = convertObjectType(objFull);
    entries.push({
      apiName: converted.apiName,
      entityType: OntologyEntityTypeEnum.OBJECT_TYPE,
      entity: converted,
    });
  }

  for (const [_apiName, action] of Object.entries(metadata.actionTypes)) {
    const converted = convertActionType(action);
    entries.push({
      apiName: converted.apiName,
      entityType: OntologyEntityTypeEnum.ACTION_TYPE,
      entity: converted,
    });
  }

  // Pass 2: Resolve unique variable names across all entities
  const varNames = resolveVarNames(entries.map(e => e.apiName));

  // Pass 3: Write files with resolved names
  const topLevelExports: string[] = [];
  for (let i = 0; i < entries.length; i++) {
    writeEntityFile(
      codegenDir,
      entries[i].entityType,
      entries[i].entity,
      varNames[i],
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
  entity: unknown,
  varName: string,
  topLevelExports: string[],
): void {
  const typeName = TYPE_NAME_MAP[entityType];
  const dirName = DIR_NAME_MAP[entityType];

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
