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
import { OsdkContext2 } from "./OsdkContext2.js";

type ApplyActionParams<Q extends ActionDefinition<any>> =
  & Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]
  & {
    [K in keyof ObservableClient.ApplyActionOptions as `$${K}`]:
      ObservableClient.ApplyActionOptions[K];
  };

export interface UseOsdkActionResult<Q extends ActionDefinition<any>> {
  applyAction: (
    args: ApplyActionParams<Q>,
  ) => Promise<unknown>;

  error:
    | undefined
    | Partial<{
      actionValidation: ActionValidationError;
      unknown: unknown;
    }>;
  data: unknown;

  isPending: boolean;
}

export function useOsdkAction<Q extends ActionDefinition<any>>(
  actionDef: Q,
): UseOsdkActionResult<Q> {
  const { store } = React.useContext(OsdkContext2);
  const [error, setError] = React.useState<UseOsdkActionResult<Q>["error"]>();
  const [data, setData] = React.useState<unknown>();
  const [isPending, setPending] = React.useState(false);

  const applyAction = React.useCallback(async function applyAction(
    hookArgs: ApplyActionParams<Q>,
  ) {
    const { $optimisticUpdate, ...args } = hookArgs;
    try {
      setPending(true);
      setError(undefined);
      const r = await store.applyAction(actionDef, args, {
        optimisticUpdate: $optimisticUpdate,
      });
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
    } finally {
      setPending(false);
    }
  }, [store, setError]);

  return { applyAction, error, data, isPending };
}
