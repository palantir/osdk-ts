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

import type { AttachmentRid } from "../components/AttachmentRid";

/**
 * The requested attachment is not found, or the client token does not have access to it.
 * Attachments that are not attached to any objects are deleted after two weeks.
 * Attachments that have not been attached to an object can only be viewed by the user who uploaded them.
 * Attachments that have been attached to an object can be viewed by users who can view the object.
 */
export interface AttachmentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AttachmentNotFound";
  errorInstanceId: string;
  parameters: {
    attachmentRid: AttachmentRid;
  };
}
