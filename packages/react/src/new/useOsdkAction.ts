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

import type {
  ActionDefinition,
  ActionEditResponse,
  ActionValidationResponse,
} from "@osdk/client";
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
    args: ApplyActionParams<Q> | Array<ApplyActionParams<Q>>,
  ) => Promise<ActionEditResponse | undefined>;

  error:
    | undefined
    | Partial<{
      actionValidation: ActionValidationError;
      unknown: unknown;
    }>;
  data: ActionEditResponse | undefined;

  isPending: boolean;
  isValidating: boolean;

  /**
   * Validates the action with the provided arguments without executing it.
   * Calling this function again before the previous validation finishes will cancel
   * the first validation and start a new one.
   * @param args The action arguments to validate
   * @returns A promise that resolves to the validation response, or undefined if aborted
   */
  validateAction: (
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
  ) => Promise<ActionValidationResponse | undefined>;

  validationResult?: ActionValidationResponse;
}

export function useOsdkAction<Q extends ActionDefinition<any>>(
  actionDef: Q,
): UseOsdkActionResult<Q> {
  const { observableClient } = React.useContext(OsdkContext2);
  const [error, setError] = React.useState<UseOsdkActionResult<Q>["error"]>();
  const [data, setData] = React.useState<ActionEditResponse | undefined>();
  const [isPending, setPending] = React.useState(false);
  const [isValidating, setValidating] = React.useState(false);
  const [validationResult, setValidationResult] = React.useState<
    ActionValidationResponse | undefined
  >();
  const abortControllerRef = React.useRef<AbortController | null>(null);

  const applyAction = React.useCallback(async function applyAction(
    hookArgs: ApplyActionParams<Q> | Array<ApplyActionParams<Q>>,
  ) {
    try {
      // If validation is in progress, abort it
      if (isValidating && abortControllerRef.current) {
        abortControllerRef.current.abort();
        setValidating(false);
      }

      setPending(true);
      setError(undefined);

      if (Array.isArray(hookArgs)) {
        const updates: Array<
          ObservableClient.ApplyActionOptions["optimisticUpdate"]
        > = [];
        const args = hookArgs.map(a => {
          const { $optimisticUpdate, ...args } = a;
          if ($optimisticUpdate) {
            updates.push($optimisticUpdate);
          }
          return args;
        });

        const r = await observableClient.applyAction(actionDef, args, {
          optimisticUpdate: (ctx) => {
            for (const update of updates) {
              update?.(ctx);
            }
          },
        });
        setData(r);
        return r;
      } else {
        const { $optimisticUpdate, ...args } = hookArgs;

        const r = await observableClient.applyAction(actionDef, args, {
          optimisticUpdate: $optimisticUpdate,
        });
        setData(r);
        return r;
      }
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
  }, [observableClient, actionDef, isValidating]);

  const validateAction = React.useCallback(async function validateAction(
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
  ): Promise<ActionValidationResponse | undefined> {
    try {
      // Check if action is being applied
      if (isPending) {
        return undefined;
      }

      // Abort any existing validation
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new AbortController
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      setValidating(true);
      setError(undefined);

      const result = await observableClient.validateAction(actionDef, args);

      // Check if aborted
      if (abortController.signal.aborted) {
        return undefined;
      }

      setValidationResult(result);
      return result;
    } catch (e) {
      // Check if it was aborted
      if (e instanceof Error && e.name === "AbortError") {
        return undefined;
      }

      if (e instanceof ActionValidationError) {
        setError({
          actionValidation: e,
        });
      } else {
        setError({ unknown: e });
      }
      throw e;
    } finally {
      setValidating(false);
    }
  }, [observableClient, actionDef, isPending]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return {
    applyAction,
    validateAction,
    error,
    data,
    isPending,
    isValidating,
    validationResult,
  };
}
