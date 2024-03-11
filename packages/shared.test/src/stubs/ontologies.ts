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

import type { Ontology, OntologyFullMetadata } from "@osdk/gateway/types";
import { actionTypes, ActionTypeWithUnsupportedTypes } from "./actionsTypes";
import { FooInterface } from "./interfaces";
import { objectTypesWithLinkTypes } from "./objectTypesWithLinkTypes";
import { queryTypes } from "./queryTypes";
import { fooSpt } from "./spts";

export const defaultOntology: Ontology = {
  apiName: "default-ontology",
  displayName: "Ontology",
  description: "The default ontology",
  rid: "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
};

export const defaultOntologyForConjure = {
  apiName: defaultOntology.apiName,
  displayName: defaultOntology.displayName,
  description: defaultOntology.description,
  currentOntologyVersion: "0000000c-aaaa-bbbb-cccc-ddddeeeeffff",
  defaultBranchRid:
    "ri.ontology.main.branch.99999999-8888-7777-6666-555555555555",
};

export const fullOntology: OntologyFullMetadata = {
  ontology: defaultOntology,
  objectTypes: objectTypesWithLinkTypes,
  actionTypes: Object.fromEntries([
    ...actionTypes.map(actionType => [actionType.apiName, actionType]),
    ["unsupported-action", ActionTypeWithUnsupportedTypes],
  ]),
  queryTypes: Object.fromEntries(
    queryTypes.map(queryType => [queryType.apiName, queryType]),
  ),
  interfaceTypes: {
    FooInterface,
  },
  sharedPropertyTypes: {
    fooSpt,
  },
};
