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

import type { OntologyDefinition, ThinClient } from "@osdk/api";
import type { AttachmentsError } from "../../ontologyProvider";
import { OntologyProvider } from "../../ontologyProvider";
import type { Result } from "../../ontologyProvider/Result";
import type { Attachment, AttachmentMetadata } from "./Attachment";

export class AttachmentProperty implements Attachment {
  public type = "Attachment" as const;
  public attachmentRid: string | undefined;

  #client: ThinClient<OntologyDefinition<any>>;
  #provider: OntologyProvider;
  #propertyName?: string;
  #apiName?: string;
  #primaryKey?: string;

  private constructor(
    client: ThinClient<OntologyDefinition<any>>,
    propertyName?: string,
    apiName?: string,
    primaryKey?: string,
    attachmentRid?: string,
  ) {
    this.#client = client;
    this.#provider = new OntologyProvider(client);
    this.#propertyName = propertyName;
    this.#apiName = apiName;
    this.#primaryKey = primaryKey;
    this.attachmentRid = attachmentRid;
  }

  static constructAttachment(
    client: ThinClient<OntologyDefinition<any>>,
    propertyName?: string,
    apiName?: string,
    primaryKey?: string,
    attachmentRid?: {
      rid: string;
    },
  ): AttachmentProperty {
    return new AttachmentProperty(
      client,
      propertyName,
      apiName,
      primaryKey,
      attachmentRid?.rid,
    );
  }

  getMetadata(): Promise<Result<AttachmentMetadata, AttachmentsError>> {
    return this.#provider.getAttachmentMetadata(
      this.#client.ontology.metadata.ontologyApiName,
      this.#apiName,
      this.#primaryKey,
      this.#propertyName,
      this.attachmentRid,
    );
  }

  read(): Promise<Result<Blob, AttachmentsError>> {
    return this.#provider.readAttachmentContent(
      this.#client.ontology.metadata.ontologyApiName,
      this.#apiName,
      this.#primaryKey,
      this.#propertyName,
      this.attachmentRid,
    );
  }
}
