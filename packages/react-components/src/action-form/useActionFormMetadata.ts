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

import type { Client } from "@osdk/client";
import type { ActionFormMetadata } from "@osdk/client/unstable-do-not-use";
import { fetchActionFormMetadata } from "@osdk/client/unstable-do-not-use";
import React from "react";

export interface UseActionFormMetadataResult {
  formMetadata?: ActionFormMetadata;
  loading: boolean;
  error?: unknown;
}

/**
 * Fetches rich action form metadata (sections, ordering, display messages)
 * from the ontology-metadata internal API once the action RID is available.
 *
 * Temporary hook — will be removed when these fields are available through
 * the public Foundry API on ActionMetadata.
 */
export function useActionFormMetadata(
  client: Client,
  actionRid: string | undefined,
): UseActionFormMetadataResult {
  const [formMetadata, setFormMetadata] = React.useState<
    ActionFormMetadata | undefined
  >(undefined);
  const [error, setError] = React.useState<unknown>(undefined);

  // Mirrors useOsdkMetadata's fetch-in-render pattern: fire once per actionRid
  if (actionRid != null && formMetadata == null && error == null) {
    fetchActionFormMetadata(client, actionRid).then(
      (result: ActionFormMetadata) => {
        setFormMetadata(result);
      },
    ).catch((fetchError: unknown) => {
      setError(fetchError);
    });
    return { loading: true };
  }

  return {
    formMetadata,
    loading: false,
    error,
  };
}
