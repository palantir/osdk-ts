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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
export class MediaReferencePropertyImpl {
  #triplet;
  #client;
  constructor(args) {
    const {
      client,
      objectApiName,
      primaryKey,
      propertyName
    } = args;
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
  }
  async fetchContents() {
    return OntologiesV2.MediaReferenceProperties.getMediaContent(this.#client, await this.#client.ontologyRid, ...this.#triplet, {
      preview: true // TODO: Can turn this back off when backend is no longer in beta.
    });
  }
  async fetchMetadata() {
    const r = await OntologiesV2.MediaReferenceProperties.getMediaMetadata(this.#client, await this.#client.ontologyRid, ...this.#triplet, {
      preview: true // TODO: Can turn this back off when backend is no longer in beta.
    });
    return {
      path: r.path,
      sizeBytes: Number(r.sizeBytes),
      mediaType: r.mediaType
    };
  }
}
//# sourceMappingURL=createMediaReferenceProperty.js.map