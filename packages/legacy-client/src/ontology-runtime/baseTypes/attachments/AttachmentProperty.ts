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
import type { Result } from "../../ontologyProvider/Result";
import type { Attachment, AttachmentMetadata } from "./Attachment";
export class AttachmentProperty implements Attachment {
  #private;
  private propertyName?;
  private apiName?;
  private primaryKey?;
  type: "Attachment";
  attachmentRid: string | undefined;
  private constructor() {
    throw new Error("not implemented");
  }
  static constructAttachment(
    authClient: Auth,
    ontologyMetadata: OntologyMetadata,
    propertyName?: string,
    apiName?: string,
    primaryKey?: string,
    attachmentRid?: {
      rid: string;
    },
  ): AttachmentProperty {
    throw new Error("not implemented");
  }
  getMetadata(): Promise<Result<AttachmentMetadata, AttachmentsError>> {
    throw new Error("not implemented");
  }
  read(): Promise<Result<Blob, AttachmentsError>> {
    throw new Error("not implemented");
  }
}
