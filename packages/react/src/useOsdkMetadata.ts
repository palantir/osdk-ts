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

import type {
  InterfaceDefinition,
  InterfaceMetadata,
  ObjectMetadata,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
} from "@osdk/api";
import React from "react";
import { useOsdkClient } from "./useOsdkClient.js";

type MetadataFor<T extends ObjectOrInterfaceDefinition> = T extends
  InterfaceDefinition ? InterfaceMetadata
  : T extends ObjectTypeDefinition ? ObjectMetadata
  : never;

export interface UseOsdkMetadataResult<T extends ObjectOrInterfaceDefinition> {
  loading: boolean;
  metadata?: MetadataFor<T>;
  error?: string;
}

export function useOsdkMetadata<T extends ObjectOrInterfaceDefinition>(
  type: T,
): UseOsdkMetadataResult<T> {
  const client = useOsdkClient();
  const [loading, setLoading] = React.useState(true);
  const [metadata, setMetadata] = React.useState<
    MetadataFor<T> | undefined
  >(undefined);
  const [error, setError] = React.useState<string | undefined>();
  const abortControllerRef = React.useRef<AbortController | null>(null);

  const typeApiName = type.apiName;
  const cachedMetadata = React.useRef<MetadataFor<T> | undefined>();
  const lastTypeApiName = React.useRef<string>();

  if (lastTypeApiName.current !== typeApiName) {
    lastTypeApiName.current = typeApiName;
    cachedMetadata.current = undefined;

    // Abort any existing fetch
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    setLoading(true);
    setError(undefined);

    client.fetchMetadata(type)
      .then((fetchedMetadata) => {
        // Check if aborted
        if (abortController.signal.aborted) {
          return;
        }
        const result = fetchedMetadata as MetadataFor<T>;
        cachedMetadata.current = result;
        setMetadata(result);
        setLoading(false);
      })
      .catch((error: unknown) => {
        // Check if it was aborted
        if (abortController.signal.aborted) {
          return;
        }
        const errorMessage = error instanceof Error
          ? error.message
          : String(error);
        setError(errorMessage);
        setLoading(false);
      });
  }

  return { loading, metadata, error };
}
