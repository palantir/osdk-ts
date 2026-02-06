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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import type { InvalidationEvent } from "@osdk/client/unstable-do-not-use";
import { getWireObjectSet } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOnInvalidationOptions {
  objectTypes?: string[];
  objectSets?: Array<ObjectSet<ObjectTypeDefinition>>;
}

export function useOnInvalidation(
  callback: (event: InvalidationEvent) => void,
  options?: UseOnInvalidationOptions,
): void {
  const { observableClient } = React.useContext(OsdkContext2);
  const callbackRef = React.useRef(callback);
  callbackRef.current = callback;

  const stableObjectTypes = React.useMemo(
    () => options?.objectTypes,
    [JSON.stringify(options?.objectTypes)],
  );

  const stableObjectSets = React.useMemo(
    () => options?.objectSets,
    [JSON.stringify(options?.objectSets?.map(os => getWireObjectSet(os)))],
  );

  React.useEffect(() => {
    if (!observableClient) {
      return;
    }
    const listenerOptions = (stableObjectTypes || stableObjectSets)
      ? {
        objectTypes: stableObjectTypes,
        objectSets: stableObjectSets,
      }
      : undefined;
    const sub = observableClient.onInvalidation(
      (event) => callbackRef.current(event),
      listenerOptions,
    );
    return () => sub.unsubscribe();
  }, [observableClient, stableObjectTypes, stableObjectSets]);
}
