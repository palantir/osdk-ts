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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { FauxDataStoreBatch } from "./FauxDataStoreBatch.js";

export type Automation = {
  apiName: string;
};

export type AutomationImpl = {
  // This is a very simplified example of an automation that currently fits nicely into the faux foundry.
  // Actions currently mutate the FauxDataStoreBatch directly, so we predicate on that.
  postActionPredicate(actionReturnType: FauxDataStoreBatch): boolean;
  effect: {
    type: "action";
    definition: OntologiesV2.ActionTypeV2;
    request: OntologiesV2.ApplyActionRequestV2;
  } | {
    type: "generic";
    execute: (
      latestEdit: OntologiesV2.ObjectEdit,
      req: OntologiesV2.ApplyActionRequestV2,
    ) => void;
  };
};
