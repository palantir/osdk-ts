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

import type {
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
} from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import * as React from "react";

export interface AipAgentChatContextLoaderProps {
  /** The object type to load. */
  objectType: ObjectOrInterfaceDefinition;

  /**
   * Called whenever the loaded objects change. Reports `undefined` on
   * unmount so the parent can drop this type's context.
   *
   * @param apiName The object type's API name.
   * @param objects The fetched objects, or `undefined` while loading or
   *   on unmount.
   */
  onLoaded: (
    apiName: string,
    objects: ReadonlyArray<unknown> | undefined
  ) => void;
}

export function AipAgentChatContextLoader({
  objectType,
  onLoaded,
}: AipAgentChatContextLoaderProps): null {
  const client = useOsdkClient();

  React.useEffect(() => {
    let cancelled = false;

    // Cast to the object-type overload so TS picks a single overload;
    // both object and interface object sets expose `asyncIter()` via
    // `MinimalObjectSet`, so this is safe at runtime.
    const iterator = client(objectType as ObjectTypeDefinition).asyncIter();

    void (async () => {
      const data: unknown[] = [];
      for await (const object of iterator) {
        if (cancelled) {
          return;
        }
        data.push(object);
      }
      if (!cancelled) {
        onLoaded(objectType.apiName, data);
      }
    })();

    return () => {
      cancelled = true;
      onLoaded(objectType.apiName, undefined);
    };
  }, [client, objectType, onLoaded]);

  return null;
}
