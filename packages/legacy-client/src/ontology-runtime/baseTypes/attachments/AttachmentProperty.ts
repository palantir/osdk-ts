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

import type { Auth } from "../../../oauth-client";
import type {
  AttachmentsError,
  OntologyMetadata,
} from "../../ontologyProvider";
import { OntologyProvider } from "../../ontologyProvider";
import type { Result } from "../../ontologyProvider/Result";
import type { Attachment, AttachmentMetadata } from "./Attachment";

export class AttachmentProperty implements Attachment {
  public type = "Attachment" as const;
  public attachmentRid: string | undefined;

  #ontologyMetadata: OntologyMetadata;
  #provider: OntologyProvider;

  private constructor(
    authClient: Auth,
    stack: string,
    ontologyMetadata: OntologyMetadata,
    private propertyName?: string,
    private apiName?: string,
    private primaryKey?: string,
    attachmentRid?: string,
  ) {
    this.#ontologyMetadata = ontologyMetadata;
    this.#provider = new OntologyProvider(authClient, stack, ontologyMetadata);
    this.attachmentRid = attachmentRid;
  }

  static constructAttachment(
    authClient: Auth,
    stack: string,
    ontologyMetadata: OntologyMetadata,
    propertyName?: string,
    apiName?: string,
    primaryKey?: string,
    attachmentRid?: {
      rid: string;
    },
  ): AttachmentProperty {
    return new AttachmentProperty(
      authClient,
      stack,
      ontologyMetadata,
      propertyName,
      apiName,
      primaryKey,
      attachmentRid?.rid,
    );
  }

  getMetadata(): Promise<Result<AttachmentMetadata, AttachmentsError>> {
    return this.#provider.getAttachmentMetadata(
      this.#ontologyMetadata.ontologyApiName,
      this.apiName,
      this.primaryKey,
      this.propertyName,
      this.attachmentRid,
    );
  }

  read(): Promise<Result<Blob, AttachmentsError>> {
    return this.#provider.readAttachmentContent(
      this.#ontologyMetadata.ontologyApiName,
      this.apiName,
      this.primaryKey,
      this.propertyName,
      this.attachmentRid,
    );
  }
}
