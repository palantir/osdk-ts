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
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useDebouncedCallback } from "../shared/hooks/useDebouncedCallback.js";

interface ActionFormValidationResult {
  requestId: number;
  response: ActionValidationResponse;
  sessionKey: string | undefined;
  /**
   * The context identity used for this request. Consumers compare it with
   * their current context before interpreting the response.
   */
  validationContext: unknown;
}

interface UseActionFormValidationOptions {
  enabled: boolean;
  formState: Readonly<Record<string, unknown>>;
  initialFormState: Readonly<Record<string, unknown>>;
  sessionKey: string | undefined;
  /** Replace this reference whenever validation coercion or interpretation changes. */
  validationContext: unknown;
  validateFormState: (
    formState: Readonly<Record<string, unknown>>,
  ) => Promise<ActionValidationResponse | undefined>;
}

interface UseActionFormValidationResult {
  cancelValidation: () => void;
  validationResult: ActionFormValidationResult | undefined;
}

/**
 * Validates the initial and subsequently displayed form state while rejecting
 * responses from superseded requests or metadata sessions.
 */
export function useActionFormValidation({
  enabled,
  formState,
  initialFormState,
  sessionKey,
  validationContext,
  validateFormState,
}: UseActionFormValidationOptions): UseActionFormValidationResult {
  const [validationResult, setValidationResult] =
    useState<ActionFormValidationResult>();
  const generationRef = useRef(0);
  const requestIdRef = useRef(0);
  const committedFormStateRef = useRef<Readonly<Record<string, unknown>>>();
  const committedSessionKeyRef = useRef<string>();
  const committedValidationContextRef = useRef(validationContext);
  const scheduledSessionKeyRef = useRef<string>();
  const scheduledValidationContextRef = useRef(validationContext);
  const lastScheduledFormStateRef = useRef<Readonly<Record<string, unknown>>>();
  const lastScheduledGenerationRef = useRef<number>();

  const scheduleValidation = useDebouncedCallback(
    (
      nextFormState: Readonly<Record<string, unknown>>,
      generation: number,
      requestSessionKey: string | undefined,
      requestValidationContext: unknown,
    ) => {
      void validateFormState(nextFormState).then(
        (response) => {
          if (
            response == null ||
            generation !== generationRef.current ||
            requestSessionKey !== committedSessionKeyRef.current ||
            requestValidationContext !== committedValidationContextRef.current
          ) {
            return;
          }
          setValidationResult({
            requestId: ++requestIdRef.current,
            response,
            sessionKey: requestSessionKey,
            validationContext: requestValidationContext,
          });
        },
        () => {
          // Validation is advisory. Submission errors continue to use onError.
        },
      );
    },
    500,
    { leading: true, trailing: true },
  );

  const cancelValidation = useCallback(() => {
    ++generationRef.current;
    scheduleValidation.cancel();
    setValidationResult(undefined);
  }, [scheduleValidation]);

  // Invalidate during commit so an earlier promise cannot publish between a
  // form-state commit and the passive effect that schedules its validation.
  useLayoutEffect(
    function invalidateResponsesForCommittedInput() {
      const hasCommittedInputChanged =
        committedFormStateRef.current == null ||
        !isEqual(committedFormStateRef.current, formState);
      const isCommitOfScheduledFormState =
        lastScheduledGenerationRef.current === generationRef.current &&
        scheduledSessionKeyRef.current === sessionKey &&
        scheduledValidationContextRef.current === validationContext &&
        lastScheduledFormStateRef.current != null &&
        isEqual(lastScheduledFormStateRef.current, formState);
      if (
        committedSessionKeyRef.current !== sessionKey ||
        committedValidationContextRef.current !== validationContext ||
        (hasCommittedInputChanged && !isCommitOfScheduledFormState)
      ) {
        ++generationRef.current;
      }
      committedFormStateRef.current = formState;
      committedSessionKeyRef.current = sessionKey;
      committedValidationContextRef.current = validationContext;
    },
    [formState, sessionKey, validationContext],
  );

  useEffect(
    function validateDisplayedFormState() {
      const hasSessionChanged = scheduledSessionKeyRef.current !== sessionKey;
      const hasValidationContextChanged =
        scheduledValidationContextRef.current !== validationContext;
      scheduledSessionKeyRef.current = sessionKey;
      scheduledValidationContextRef.current = validationContext;

      if (!enabled) {
        cancelValidation();
        lastScheduledFormStateRef.current = undefined;
        lastScheduledGenerationRef.current = undefined;
        return;
      }

      if (hasSessionChanged) {
        cancelValidation();
        lastScheduledFormStateRef.current = initialFormState;
        const generation = ++generationRef.current;
        lastScheduledGenerationRef.current = generation;
        scheduleValidation(
          initialFormState,
          generation,
          sessionKey,
          validationContext,
        );
        return;
      }

      if (
        !hasValidationContextChanged &&
        lastScheduledFormStateRef.current != null &&
        lastScheduledGenerationRef.current === generationRef.current &&
        isEqual(lastScheduledFormStateRef.current, formState)
      ) {
        return;
      }
      lastScheduledFormStateRef.current = formState;
      const generation = ++generationRef.current;
      lastScheduledGenerationRef.current = generation;
      scheduleValidation(formState, generation, sessionKey, validationContext);
    },
    [
      cancelValidation,
      enabled,
      formState,
      initialFormState,
      scheduleValidation,
      sessionKey,
      validationContext,
    ],
  );

  useEffect(
    function invalidateValidationOnUnmount() {
      const activeGenerationRef = generationRef;
      return function invalidateValidationRequests() {
        ++activeGenerationRef.current;
        scheduleValidation.cancel();
      };
    },
    [scheduleValidation],
  );

  return { cancelValidation, validationResult };
}
