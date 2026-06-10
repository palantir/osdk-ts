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

import { Errors, OpenApiCallError } from "@osdk/faux";
import type { FauxActionImpl, FauxDataStoreBatch } from "@osdk/faux";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import stableStringify from "json-stable-stringify";
import invariant from "tiny-invariant";

/**
 * I don't think this should be used long term, but it provides a stop gap for
 * migrating the existing actions to the new API.
 */
export function createLazyDoNothingActionImpl(
  reqRespPairs: Array<
    | [
      OntologiesV2.ApplyActionRequestV2,
      OntologiesV2.SyncApplyActionResponseV2 | undefined,
    ]
    | [
      OntologiesV2.BatchApplyActionRequestV2,
      OntologiesV2.BatchApplyActionResponseV2 | undefined,
    ]
  >,
): FauxActionImpl {
  const stableToRet = new Map(
    reqRespPairs.map(pair => [
      stableStringify(pair[0]),
      pair[1],
    ]),
  );

  return (
    batch: FauxDataStoreBatch,
    payload:
      | OntologiesV2.ApplyActionRequestV2
      | OntologiesV2.BatchApplyActionRequestV2,
  ):
    | OntologiesV2.SyncApplyActionResponseV2
    | OntologiesV2.BatchApplyActionResponseV2 =>
  {
    const key = stableStringify(payload);
    // in some cases we intentionally put undefined in so this lets us error
    // differently if its an unregistered req/resp pair
    invariant(
      stableToRet.has(key),
      "No response registered for req payload: " + key,
    );
    const resp = stableToRet.get(key);
    if (resp === undefined) {
      // this is the "normal" (or at least previously normal) error when the result
      // was undefined.
      throw new OpenApiCallError(400, Errors.ApplyActionFailedError);
    }

    return resp;
  };
}
