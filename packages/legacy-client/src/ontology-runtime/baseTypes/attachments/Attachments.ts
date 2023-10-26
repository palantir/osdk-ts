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
import type { Attachment } from "./Attachment";

export class Attachments {
  #provider: OntologyProvider;

  private constructor(
    auth: Auth,
    stack: string,
    ontologyMetadata: OntologyMetadata,
  ) {
    this.#provider = new OntologyProvider(auth, stack, ontologyMetadata);
  }

  public static initializeAttachmentsClient(
    auth: Auth,
    stack: string,
    ontologyMetadata: OntologyMetadata,
  ): Attachments {
    return new Attachments(auth, stack, ontologyMetadata);
  }

  public async upload(
    fileName: string,
    data: Blob,
  ): Promise<Result<Attachment, AttachmentsError>> {
    return this.#provider.uploadAttachment(fileName, data);
  }

  public static isAttachment(obj: any): boolean {
    return obj?.type === "Attachment";
  }
}
