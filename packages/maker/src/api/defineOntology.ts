/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type * as Gateway from "@osdk/gateway/types";
import type { Ontology, SharedPropertyType } from "./types.js";

/** @internal */
export let ontologyDefinition: Ontology;

/** @internal */
export let namespace: string;

export async function defineOntology(
  ns: string,
  body: () => void | Promise<void>,
) {
  namespace = ns;
  ontologyDefinition = {
    actionTypes: {},
    interfaceTypes: {},
    objectTypes: {},
    queryTypes: {},
    sharedPropertyTypes: {},
  };

  try {
    await body();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Unexpected error while processing the body of the ontology",
      e,
    );
    throw e;
  }

  return convertToWireOntology(ontologyDefinition);
}

function convertToWireOntology(ontology: Ontology) {
  return {
    ontology: {
      apiName: "IDK",
      description: "IDK",
      displayName: "IDK",
      rid: "ri.ontology.main.generated-object.foo",
    },
    ...ontology,
    sharedPropertyTypes: Object.fromEntries(
      Object.entries(
        ontology.sharedPropertyTypes,
      )
        .map<[string, Gateway.SharedPropertyType]>((
          [apiName, spt],
        ) => [apiName, convertSpt(spt)]),
    ),
    interfaceTypes: Object.fromEntries(
      Object.entries(
        ontology.interfaceTypes,
      )
        .map<[string, Gateway.InterfaceType]>(
          ([apiName, { displayName, description, properties }]) => {
            return [apiName, {
              rid: "ri.ontology.main.generated-object.foo",
              apiName,
              displayName: displayName ?? apiName,
              description,
              extendsInterfaces: [],
              links: {},
              properties: Object.fromEntries(
                Object.entries(properties)
                  .map<[string, Gateway.SharedPropertyType]>(
                    ([apiName, spt]) => [apiName, convertSpt(spt)],
                  ),
              ),
            }];
          },
        ),
    ),
  };
}

export function dumpOntologyFullMetadata(): Gateway.OntologyFullMetadata {
  return convertToWireOntology(ontologyDefinition);
}

function convertSpt(
  { type, array, description, apiName, displayName }: SharedPropertyType,
): Gateway.SharedPropertyType {
  return {
    rid: "ri.ontology.main.generated-object.foo",
    apiName,
    displayName: displayName ?? apiName,
    description,
    dataType: array
      ? { type: "array" as const, subType: { type } }
      : { type },
  };
}
