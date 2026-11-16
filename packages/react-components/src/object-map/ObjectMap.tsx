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

import type { ObjectTypeDefinition } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import * as React from "react";

import type { ObjectMapProps } from "./ObjectMapApi.js";
import { ObjectMapContent } from "./ObjectMapContent.js";

export function ObjectMap<Q extends ObjectTypeDefinition>(
  props: ObjectMapProps<Q>,
): React.JSX.Element {
  const client = useOsdkClient();
  const [identity, setIdentity] = React.useState({ client, generation: 0 });
  const [metadataAttempt, setMetadataAttempt] = React.useState(0);
  const retryMetadata = React.useCallback(() => {
    setMetadataAttempt((attempt) => attempt + 1);
  }, []);
  if (identity.client !== client) {
    setIdentity({ client, generation: identity.generation + 1 });
  }
  // Metadata, cached objects, and uncontrolled selection belong to one client
  // and ontology type. Filters and pages retain the mounted map and camera.
  return (
    <ObjectMapContent
      key={`${identity.generation}:${props.objectType.apiName}:${metadataAttempt}`}
      {...props}
      onMetadataRetry={retryMetadata}
    />
  );
}
