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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react";
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
    objects: ReadonlyArray<unknown> | undefined,
  ) => void;
}

/**
 * Headless loader rendered once per selected object type. Calls
 * `useOsdkObjects` unconditionally (so React's rules of hooks hold) and
 * lifts the fetched objects to its parent. Renders nothing; the parent
 * mounts one of these only while a type is selected, so deselecting a
 * type unmounts its loader and clears its contribution to the prompt.
 */
export function AipAgentChatContextLoader({
  objectType,
  onLoaded,
}: AipAgentChatContextLoaderProps): null {
  const { data } = useOsdkObjects(objectType);
  const apiName = objectType.apiName;

  React.useEffect(() => {
    onLoaded(apiName, data);
  }, [apiName, data, onLoaded]);

  React.useEffect(() => {
    return () => onLoaded(apiName, undefined);
  }, [apiName, onLoaded]);

  return null;
}
