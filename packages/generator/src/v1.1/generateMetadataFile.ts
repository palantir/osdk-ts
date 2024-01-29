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

import path from "node:path";
import type { MinimalFs } from "../MinimalFs";
import { commaSeparatedIdentifiers } from "../util/commaSeparatedIdentifiers";
import { commaSeparatedTypeIdentifiers } from "../util/commaSeparatedTypeIdentifiers";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";

export async function generateMetadataFile(
  ontology: WireOntologyDefinition,
  userAgent: string,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
) {
  const objectNames = Object.keys(ontology.objectTypes);
  const actionNames = Object.keys(ontology.actionTypes);
  const queryNames = Object.keys(ontology.queryTypes);

  const actionAltNames = new Map<string, string>();
  const queryAltNames = new Map<string, string>();

  const seenIdentifiers = new Set(objectNames);
  for (const actionName of actionNames) {
    if (seenIdentifiers.has(actionName)) {
      actionAltNames.set(actionName, `${actionName}Action`);
    } else {
      seenIdentifiers.add(actionName);
    }
  }

  for (const queryName of queryNames) {
    if (seenIdentifiers.has(queryName)) {
      queryAltNames.set(queryName, `${queryName}Query`);
    }
  }

  const getImportClause = (
    name: string,
    altNames: ReadonlyMap<string, string>,
  ) => {
    const alt = altNames.get(name);
    if (alt) {
      return `${name} as ${alt}`;
    } else {
      return name;
    }
  };

  await fs.writeFile(
    path.join(outDir, "Ontology.ts"),
    await formatTs(`
  import type { OntologyDefinition } from "@osdk/api";
  import type { Ontology as ClientOntology } from "@osdk/legacy-client";
  import type { Objects } from "./ontology/objects/Objects${importExt}";
  import type { Actions } from "./ontology/actions/Actions${importExt}";
  import type { Queries } from "./ontology/queries/Queries${importExt}";
  ${
      objectNames.map((name) =>
        `import {${name}} from "./ontology/objects/${name}${importExt}";`
      )
        .join("\n")
    }
  ${
      actionNames.map((name) =>
        `import {${
          getImportClause(name, actionAltNames)
        }} from "./ontology/actions/${name}${importExt}";`
      )
        .join("\n")
    }
  ${
      queryNames.map(name =>
        `import {${
          getImportClause(name, queryAltNames)
        }} from "./ontology/queries/${name}${importExt}";`
      ).join(
        "\n",
      )
    }

  export const Ontology : {
    metadata: {
      ontologyRid: "${ontology.ontology.rid}",
      ontologyApiName: "${ontology.ontology.apiName}",
      userAgent: "${userAgent}",
    },
    objects: {
      ${commaSeparatedTypeIdentifiers(objectNames)}
    },
    actions: {
      ${commaSeparatedTypeIdentifiers(actionNames, actionAltNames)}
    },
    queries: {
      ${commaSeparatedTypeIdentifiers(queryNames, queryAltNames)}
    },
  } = {
    metadata: {
        ontologyRid: "${ontology.ontology.rid}" as const,
        ontologyApiName: "${ontology.ontology.apiName}" as const,
        userAgent: "${userAgent}" as const,
    },
    objects: {
        ${commaSeparatedIdentifiers(objectNames)}
    },
    actions: {
        ${commaSeparatedIdentifiers(actionNames, actionAltNames)}
    },
    queries: {
        ${commaSeparatedIdentifiers(queryNames, queryAltNames)}
    }
  } satisfies OntologyDefinition<
      ${stringUnionFrom(objectNames)},
      ${
      stringUnionFrom(
        Object.values(ontology.actionTypes).map(actionType =>
          actionType.apiName
        ),
      )
    },
      ${
      stringUnionFrom(
        Object.values(ontology.queryTypes).map(queryType => queryType.apiName),
      )
    }>;
    
export interface Ontology extends ClientOntology<typeof Ontology> {
    objects: Objects;
    actions: Actions;
    queries: Queries;
}`),
  );
}

function stringUnionFrom(values: readonly string[]) {
  if (values.length === 0) {
    return "never";
  }
  return values.map(n => `"${n}"`).join("|");
}
