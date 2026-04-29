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

export interface LoadingState {
  isLoading: boolean;
  error: Error | undefined;
}

/**
 * Combines multiple loading states into a single state. First error wins;
 * loading is true if any input is loading. Data stays on each individual
 * hook result — this only merges the loading/error signals.
 *
 * @example
 * const listA = useOsdkObjects(MyType, { rids: [rid] });
 * const listB = useOsdkObjects(MyType, { pivotTo: "relatedObjects" });
 * const linksResult = useLinks(objects, "linkedItems");
 *
 * const { isLoading, error } = combineLoadingStates(listA, listB, linksResult);
 */
export function combineLoadingStates(...states: LoadingState[]): LoadingState {
  return {
    error: states.find((s) => s.error != null)?.error,
    isLoading: states.some((s) => s.isLoading),
  };
}
