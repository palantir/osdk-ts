/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

/* eslint-disable @typescript-eslint/require-await */

import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { MockOntologiesV2 } from "./MockOntologiesV2.js";
import { requireSearchParams } from "./util/requireSearchParams.js";

export const createMediaRefHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Load media metadata
   */
  MockOntologiesV2.MediaReferenceProperties.getMediaMetadata(
    baseUrl,
    async (
      { params: { ontologyApiName, objectType, primaryKey, propertyName } },
    ) => {
      return fauxFoundry
        .getDataStore(ontologyApiName)
        .getMediaOrThrow(objectType, primaryKey, propertyName)
        .metaData;
    },
  ),
  /**
   * Read media content
   */
  MockOntologiesV2.MediaReferenceProperties.getMediaContent(
    baseUrl,
    async (
      { params: { ontologyApiName, objectType, primaryKey, propertyName } },
    ) => {
      const { content, metaData: { mediaType } } = fauxFoundry
        .getDataStore(ontologyApiName)
        .getMediaOrThrow(objectType, primaryKey, propertyName);

      return new Response(content, {
        headers: { "Content-Type": mediaType },
      });
    },
  ),

  MockOntologiesV2.MediaReferenceProperties.upload(
    baseUrl,
    async (
      { params: { ontologyApiName, objectType, propertyName }, request },
    ) => {
      const { mediaItemPath } = requireSearchParams(["mediaItemPath"], request);

      return fauxFoundry
        .getDataStore(ontologyApiName)
        .registerMedia(
          objectType,
          propertyName,
          await request.arrayBuffer(),
          request.headers.get("Content-Type") ?? "application/octet-stream",
          mediaItemPath,
        );
    },
  ),
];
