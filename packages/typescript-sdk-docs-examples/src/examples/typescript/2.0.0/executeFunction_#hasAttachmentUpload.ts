/**
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
 *
 * WARNING: This file is generated automatically by the generateExamples.ts script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

// Example: executeFunction (Variation: #hasAttachmentUpload)

// Edit this import if your client location differs
import { client } from "./client.js";
import type { AttachmentUpload } from "@osdk/api";
import { createAttachmentUpload } from "@osdk/client";
import { calculateTotal } from "../../../generatedNoCheck/index.js";

async function callFunctionWithAttachmentUpload() {
    async function uploadMyFile() {
        const file = await fetch("file.json");
        const blob = await file.blob();
        return createAttachmentUpload(blob, "myFile");
    }
    const attachment: AttachmentUpload = await uploadMyFile();
    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });
    return result;
}