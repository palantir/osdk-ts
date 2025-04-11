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

import { OntologiesV2 } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
import { handleOpenApiCall } from "../../handlers/util/handleOpenApiCall.js";

export const getFullMetadata: CallFactory<
  "ontologyApiName",
  typeof OntologiesV2.getFullMetadata
> = handleOpenApiCall(
  OntologiesV2.getFullMetadata,
  ["ontologyApiName"],
);

export const list: CallFactory<never, typeof OntologiesV2.list> =
  handleOpenApiCall(
    OntologiesV2.list,
    [],
  );

/**
 * Get specified Ontology
 */
export const get: CallFactory<
  "ontologyRid",
  typeof OntologiesV2.get
> = handleOpenApiCall(
  OntologiesV2.get,
  ["ontologyRid"],
);
