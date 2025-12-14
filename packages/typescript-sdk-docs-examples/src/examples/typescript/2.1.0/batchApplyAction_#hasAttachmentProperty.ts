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

// Example: batchApplyAction (Variation: #hasAttachmentProperty)

// Edit this import if your client location differs
import { client } from "./client.js";
import type { AttachmentUpload  } from "@osdk/api";
import { createAttachmentUpload } from "@osdk/client";
import { documentEquipment  } from "../../../generatedNoCheck/index.js";

async function callBatchAction() {
    // Create attachment upload
    const attachmentFile = await fetch("file.json");
    const attachmentBlob = await attachmentFile.blob();
    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, "myFile");

    const result = await client(documentEquipment).batchApplyAction([
            {
                "equipmentId": "mac-1234",
                "documentType": "invoice",
                "documentFile": attachment,
            },
            {
                "equipmentId": "mac-1234",
                "documentType": "invoice",
                "documentFile": attachment,
            },
        ],
        {
            $returnEdits: true,
        }
    );
    if (result.type === "edits") {
        // use the result object to report back on action results
        const updatedObject = result.editedObjectTypes[0];
        console.log("Updated object", updatedObject);
    }
}