/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionValidationResponse } from "@osdk/api";
import { isEqual } from "lodash-es";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

import { useDebouncedCallback } from "../shared/hooks/useDebouncedCallback.js";

// Balance responsive defaults with avoiding backend validation on every keystroke.
const VALIDATION_DEBOUNCE_MS = 500;

export interface ActionFormValidationResult {
  response: ActionValidationResponse;
  formState: Readonly<Record<string, unknown>>;
  parameters: unknown;
}

interface UseActionFormValidationOptions {
  enabled: boolean;
  formState: Readonly<Record<string, unknown>>;
  parameters: unknown;
  validateFormState: (
    formState: Readonly<Record<string, unknown>>,
  ) => Promise<ActionValidationResponse | undefined>;
  onValidationResult: (result: ActionFormValidationResult) => void;
}

interface ValidationRequest {
  formState: Readonly<Record<string, unknown>>;
  parameters: unknown;
}

interface ValidationLifecycle {
  activeRequest?: ValidationRequest;
  enabled: boolean;
  lastRequest?: ValidationRequest;
  onValidationResult: UseActionFormValidationOptions["onValidationResult"];
  paused: boolean;
  validateFormState: UseActionFormValidationOptions["validateFormState"];
}

/**
 * Validates the initial and subsequently displayed form state while rejecting
 * responses from superseded requests or metadata sessions.
 */
export function useActionFormValidation({
  enabled,
  formState,
  parameters,
  validateFormState,
  onValidationResult,
}: UseActionFormValidationOptions): { cancelValidation: () => void } {
  const lifecycleRef = useRef<ValidationLifecycle>({
    enabled: false,
    onValidationResult,
    paused: false,
    validateFormState,
  });

  const scheduleValidation = useDebouncedCallback(
    async (request: ValidationRequest) => {
      try {
        const response = await lifecycleRef.current.validateFormState(
          request.formState,
        );
        if (
          response != null &&
          lifecycleRef.current.activeRequest === request
        ) {
          lifecycleRef.current.onValidationResult({
            response,
            formState: request.formState,
            parameters: request.parameters,
          });
        }
      } catch {
        // Validation is advisory. Submission errors continue to use onError.
      }
    },
    VALIDATION_DEBOUNCE_MS,
    { leading: true, trailing: true },
  );

  const cancelValidation = useCallback(() => {
    lifecycleRef.current.activeRequest = undefined;
    lifecycleRef.current.paused = true;
    scheduleValidation.cancel();
  }, [scheduleValidation]);

  // Invalidate during commit so a response cannot be consumed between a
  // displayed-state commit and the passive effect that schedules validation.
  useLayoutEffect(function invalidateStaleValidationResult() {
    const lifecycle = lifecycleRef.current;
    lifecycle.onValidationResult = onValidationResult;
    lifecycle.validateFormState = validateFormState;
    const activeRequest = lifecycle.activeRequest;
    if (
      activeRequest != null &&
      (!enabled ||
        activeRequest.parameters !== parameters ||
        !isEqual(activeRequest.formState, formState))
    ) {
      lifecycle.activeRequest = undefined;
    }
  });

  useEffect(
    function validateDisplayedFormState() {
      const lifecycle = lifecycleRef.current;
      const hasBecomeEnabled = enabled && !lifecycle.enabled;
      lifecycle.enabled = enabled;

      if (!enabled) {
        cancelValidation();
        lifecycle.lastRequest = undefined;
        return;
      }

      const lastRequest = lifecycle.lastRequest;
      if (
        !hasBecomeEnabled &&
        lastRequest != null &&
        lastRequest.parameters === parameters &&
        isEqual(lastRequest.formState, formState)
      ) {
        if (lifecycle.paused) {
          return;
        }
        lifecycle.activeRequest = lastRequest;
        return () => {
          if (lifecycle.activeRequest === lastRequest) {
            lifecycle.activeRequest = undefined;
          }
        };
      }

      const request: ValidationRequest = {
        formState,
        parameters,
      };
      lifecycle.activeRequest = request;
      lifecycle.lastRequest = request;
      lifecycle.paused = false;
      scheduleValidation(request);

      return () => {
        if (lifecycle.activeRequest === request) {
          lifecycle.activeRequest = undefined;
        }
      };
    },
    [cancelValidation, enabled, formState, parameters, scheduleValidation],
  );

  return { cancelValidation };
}
