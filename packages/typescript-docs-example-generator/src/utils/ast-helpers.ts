/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

// Generic helpers that are not template-engine specific

/**
 * Convert ProcessingError to Error for compatibility with error collectors.
 */
export function processingErrorToError(
  processingError: { message: string; cause?: Error },
): Error {
  const error = new Error(processingError.message);
  if (processingError.cause) {
    error.cause = processingError.cause;
  }
  return error;
}

/**
 * Convert BaseTemplateContext to Record<string, unknown> for metadata storage.
 * This is a safe upcast since BaseTemplateContext is more specific.
 */
export function contextToRecord(
  context: Record<string, any>,
): Record<string, unknown> {
  return context;
}
