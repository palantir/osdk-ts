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

import type { AttachmentV2 } from "./AttachmentV2.js";
import type { ListAttachmentsResponseV2 } from "./ListAttachmentsResponseV2.js";

export interface AttachmentMetadataResponse_Single extends AttachmentV2 {
  type: "single";
}

export interface AttachmentMetadataResponse_Multiple
  extends ListAttachmentsResponseV2
{
  type: "multiple";
}

export type AttachmentMetadataResponse =
  | AttachmentMetadataResponse_Single
  | AttachmentMetadataResponse_Multiple;
