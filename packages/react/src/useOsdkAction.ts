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

import type { ActionDefinition } from "@osdk/client";
import { ActionValidationError } from "@osdk/client";
import type {
  ActionSignatureFromDef,
  ObservableClient,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { OsdkContext } from "./OsdkContext.js";

export interface UseOsdkActionResult<Q extends ActionDefinition<any>> {
  applyAction: (
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts: ObservableClient.ApplyActionOptions,
  ) => Promise<unknown>;

  error:
    | undefined
    | Partial<{
      actionValidation: ActionValidationError;
      unknown: unknown;
    }>;
  data: unknown;
}

export function useOsdkAction<Q extends ActionDefinition<any>>(
  actionDef: Q,
): UseOsdkActionResult<Q> {
  const { store } = React.useContext(OsdkContext);
  const [error, setError] = React.useState<UseOsdkActionResult<Q>["error"]>();
  const [data, setData] = React.useState<unknown>();

  const applyAction = React.useCallback(async function applyAction(
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts: ObservableClient.ApplyActionOptions,
  ) {
    try {
      const r = await store.applyAction(actionDef, args, opts);
      setData(r);
      return r;
    } catch (e) {
      if (e instanceof ActionValidationError) {
        setError({
          actionValidation: e,
        });
      } else {
        setError({ unknown: e });
      }
    }
  }, [store, setError]);

  return { applyAction, error, data };
}
