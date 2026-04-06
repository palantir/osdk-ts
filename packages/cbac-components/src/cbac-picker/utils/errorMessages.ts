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

export interface CbacErrorMessage {
  title: string;
  remediation: string;
}

interface ApiErrorLike {
  statusCode?: number;
  errorDescription?: string;
}

function isApiErrorLike(error: Error): error is Error & ApiErrorLike {
  return "statusCode" in error
    && typeof (error as ApiErrorLike).statusCode === "number";
}

function formatByStatusCode(error: Error & ApiErrorLike): CbacErrorMessage {
  const statusCode = error.statusCode;
  if (statusCode === 401) {
    return {
      title: "Session expired",
      remediation: "Sign in again to continue.",
    };
  }
  if (statusCode === 403) {
    return {
      title: "Permission denied",
      remediation: "Contact your administrator for permission.",
    };
  }
  if (statusCode === 404) {
    return {
      title: "Not found",
      remediation: "The requested classification data could not be found.",
    };
  }
  if (statusCode !== undefined && statusCode >= 500) {
    return {
      title: "Server error",
      remediation: "Something went wrong. Try again later.",
    };
  }
  if (
    typeof error.errorDescription === "string"
    && error.errorDescription.length > 0
  ) {
    return {
      title: error.errorDescription,
      remediation: "Try again later.",
    };
  }
  return {
    title: "Something went wrong",
    remediation: "Try again later.",
  };
}

export function formatCbacError(error: Error): CbacErrorMessage {
  if (error instanceof AggregateError) {
    const inner = findMostSevereError(error.errors as Error[]);
    if (inner !== undefined) {
      return formatCbacError(inner);
    }
  }

  if (isApiErrorLike(error)) {
    return formatByStatusCode(error);
  }

  if (
    error.message.toLowerCase().includes("network")
    || error.message.toLowerCase().includes("fetch")
  ) {
    return {
      title: "Network error",
      remediation: "Check your connection and try again.",
    };
  }

  return {
    title: "Something went wrong",
    remediation: "Try again later.",
  };
}

function findMostSevereError(errors: Error[]): Error | undefined {
  let best: Error | undefined;
  let bestPriority = Infinity;

  for (const err of errors) {
    if (isApiErrorLike(err) && err.statusCode !== undefined) {
      const priority = statusPriority(err.statusCode);
      if (priority < bestPriority) {
        best = err;
        bestPriority = priority;
      }
    } else if (best === undefined) {
      best = err;
    }
  }

  return best;
}

function statusPriority(statusCode: number): number {
  if (statusCode === 401) {
    return 0;
  }
  if (statusCode === 403) {
    return 1;
  }
  if (statusCode >= 500) {
    return 2;
  }
  return 3;
}
