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

import type { ActionDefinition, ActionMetadata } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import React from "react";

export interface UseActionMetadataResult {
  isLoading: boolean;
  metadata: ActionMetadata | undefined;
  error: string | undefined;
}

export function useActionMetadata(
  actionDefinition: ActionDefinition<unknown>,
): UseActionMetadataResult {
  const client = useOsdkClient();
  const [metadata, setMetadata] = React.useState<ActionMetadata | undefined>(
    undefined,
  );
  const [error, setError] = React.useState<string | undefined>();

  if (!metadata && !error) {
    client.fetchMetadata(actionDefinition).then((fetchedMetadata) => {
      setMetadata(fetchedMetadata);
    }).catch((err: unknown) => {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
    });
    return { isLoading: true, metadata: undefined, error: undefined };
  }
  // console.log("🚀 ~ useActionMetadata ~ metadata:", metadata)

  return { isLoading: false, metadata, error };
}
