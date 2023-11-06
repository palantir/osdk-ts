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
import type { Attachment } from "./Attachment";

export class Attachments {
  #provider: OntologyProvider;

  private constructor(
    client: ThinClient<OntologyDefinition<any>>,
  ) {
    this.#provider = new OntologyProvider(client);
  }

  public static initializeAttachmentsClient(
    client: ThinClient<OntologyDefinition<any>>,
  ): Attachments {
    return new Attachments(client);
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
