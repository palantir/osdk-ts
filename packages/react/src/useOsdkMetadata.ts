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

export function useOsdkMetadata<T extends ObjectOrInterfaceDefinition>(
  type: T,
): {
  loading: boolean;
  metadata?: MetadataFor<T>;
} {
  const client = useOsdkClient();
  const [metadata, setMetadata] = React.useState<
    MetadataFor<T> | undefined
  >(undefined);

  if (!metadata) {
    client.fetchMetadata(type).then((fetchedMetadata) => {
      setMetadata(fetchedMetadata as MetadataFor<T>);
    }).catch((error: unknown) => {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch metadata", error);
    });
    return { loading: true };
  }

  return { loading: false, metadata };
}
