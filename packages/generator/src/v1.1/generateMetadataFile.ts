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
  fs: MinimalFs,
  outDir: string,
) {
  const objectNames = Object.keys(ontology.objectTypes);
  const actionNames = ontology.actionTypes.map(action => action.apiName);
  const queryNames = ontology.queryTypes.map(query => query.apiName);

  await fs.writeFile(
    path.join(outDir, "Ontology.ts"),
    await formatTs(`
  import type { OntologyDefinition } from "@osdk/api";
  import type { Ontology as ClientOntology } from "@osdk/legacy-client";
  import type { Objects } from "./ontologyObjects";
  import type { Actions } from "./ontologyActions";
  import type { Queries } from "./ontologyQueries";
  ${
      objectNames.map((name) => `import {${name}} from "./objects/${name}";`)
        .join("\n")
    }
  ${
      actionNames.map((name) => `import {${name}} from "./actions/${name}";`)
        .join("\n")
    }
  ${
      queryNames.map(name => `import {${name}} from "./queries/${name}";`).join(
        "\n",
      )
    }

  export const Ontology : {
    metadata: {
      ontologyRid: "${ontology.rid}",
      ontologyApiName: "${ontology.apiName}",
      userAgent: "foundry-typescript-osdk/0.0.1",
    },
    objects: {
      ${commaSeparatedTypeIdentifiers(objectNames)}
    },
    actions: {
      ${commaSeparatedTypeIdentifiers(actionNames)}
    },
    queries: {
      ${commaSeparatedTypeIdentifiers(queryNames)}
    },
  } = {
    metadata: {
        ontologyRid: "${ontology.rid}" as const,
        ontologyApiName: "${ontology.apiName}" as const,
        userAgent: "foundry-typescript-osdk/0.0.1" as const,
    },
    objects: {
        ${commaSeparatedIdentifiers(objectNames)}
    },
    actions: {
        ${commaSeparatedIdentifiers(actionNames)}
    },
    queries: {
        ${commaSeparatedIdentifiers(queryNames)}
    }
  } satisfies OntologyDefinition<${objectNames.map(n => `"${n}"`).join("|")}, ${
      ontology.actionTypes.map(actionType => `"${actionType.apiName}"`).join(
        "|",
      )
    }, ${
      ontology.queryTypes.map(queryType => `"${queryType.apiName}"`).join("|")
    }>;
    
export interface Ontology extends ClientOntology<typeof Ontology> {
    objects: Objects;
    actions: Actions;
    queries: Queries;
}`),
  );
}
