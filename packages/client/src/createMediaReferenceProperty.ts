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

import type { Media, MediaMetadata, MediaReference } from "@osdk/api";
import type { MediaReference as CoreMediaReference } from "@osdk/foundry.core";
import * as MediaReferenceProperties from "@osdk/foundry.ontologies/MediaReferenceProperty";
import type { MinimalClient } from "./MinimalClientContext.js";

export class MediaReferencePropertyImpl implements Media {
  #mediaReference: MediaReference;
  #triplet: [string, any, string];
  #client: MinimalClient;

  constructor(args: {
    client: MinimalClient;
    objectApiName: string;
    primaryKey: any;
    propertyName: string;
    mediaReference: CoreMediaReference;
  }) {
    const {
      client,
      objectApiName,
      primaryKey,
      propertyName,
      mediaReference,
    } = args;
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
    this.#mediaReference = mediaReference;
  }

  public async fetchContents(): Promise<Response> {
    return MediaReferenceProperties.getMediaContent(
      this.#client,
      await this.#client.ontologyRid,
      ...this.#triplet,
      {
        preview: true, // TODO: Can turn this back off when backend is no longer in beta.
      },
    );
  }

  public async fetchMetadata(): Promise<MediaMetadata> {
    const r = await MediaReferenceProperties.getMediaMetadata(
      this.#client,
      await this.#client.ontologyRid,
      ...this.#triplet,
      {
        preview: true, // TODO: Can turn this back off when backend is no longer in beta.
      },
    );
    return {
      path: r.path as string,
      sizeBytes: Number(r.sizeBytes),
      mediaType: r.mediaType,
    };
  }

  public getMediaReference(): MediaReference {
    return this.#mediaReference;
  }
}
