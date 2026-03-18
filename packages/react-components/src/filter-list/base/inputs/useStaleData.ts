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

import { useRef } from "react";

export function useStaleData<T extends { length: number }>(
  data: T,
  isLoading: boolean,
): { displayData: T; isStale: boolean } {
  const staleRef = useRef(data);

  if (data.length > 0) {
    staleRef.current = data;
  } else if (!isLoading) {
    staleRef.current = data;
  }

  const isStale = data.length === 0 && isLoading && staleRef.current.length > 0;
  const displayData = isStale ? staleRef.current : data;

  return { displayData, isStale };
}
