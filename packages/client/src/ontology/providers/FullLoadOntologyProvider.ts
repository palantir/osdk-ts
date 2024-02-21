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

import { getOntologyFullMetadata } from "@osdk/gateway/requests";
import type { OntologyFullMetadata } from "@osdk/gateway/types";
import { wireObjectTypeFullMetadataToSdkObjectTypeDefinition } from "@osdk/generator-converters";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { OntologyProviderFactory } from "../OntologyProvider.js";

export const FullLoadOntologyProvider: OntologyProviderFactory = (
  client,
) => {
  let metadata: Promise<OntologyFullMetadata> | undefined;
  async function getFullMetadata() {
    if (metadata == null) {
      metadata = getOntologyFullMetadata(
        createOpenApiRequest(client.stack, client.fetch),
        client.ontology.metadata.ontologyApiName,
      );
    }

    return await metadata;
  }

  return {
    getObjectOrInterfaceDefinition: async (apiName: string) => {
      const metadata = await getFullMetadata();
      return wireObjectTypeFullMetadataToSdkObjectTypeDefinition(
        metadata.objectTypes[apiName],
        true,
      );
    },
    maybeSeed(definition) {
      // since we are doing a full load, we are definitely not seeding
    },
  };
};
