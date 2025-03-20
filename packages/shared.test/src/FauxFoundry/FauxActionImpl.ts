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
import type { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import type { FauxDataStoreBatch } from "./FauxDataStoreBatch.js";
import type { TH_ApplyActionRequestV2 } from "./typeHelpers/TH_ApplyActionRequestV2.js";

export type FauxActionImpl<
  Q extends OntologiesV2.ActionTypeV2 = OntologiesV2.ActionTypeV2,
> = (
  batch: FauxDataStoreBatch,
  payload: TH_ApplyActionRequestV2<Q>,
  ctx: {
    def: Q;
    attachments: FauxAttachmentStore;
  },
) => unknown;
