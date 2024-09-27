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

export interface Attachment {
  rid: string;
  /**
   * Fetches metadata for an attachment
   */
  fetchMetadata(): Promise<AttachmentMetadata>;
  /**
   * Fetches actual content of attachment in Blob form
   */
  fetchContents(): Promise<Blob>;
}
/**
 * This interface should also accept the File object from
 * the W3C FileApi https://www.w3.org/TR/FileAPI/#file-section
 */
export interface AttachmentUpload extends Blob {
  readonly name: string;
}

export interface AttachmentMetadata {
  rid: string;
  filename: string;
  sizeBytes: number;
  mediaType: string;
}
