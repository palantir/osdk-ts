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

/* eslint-disable no-unused-vars */

// Example: uploadAttachment

// Edit this import if your client location differs
import { client } from "./client";
import { createAttachmentUpload } from "@osdk/client";
import type { AttachmentUpload } from "@osdk/api";
import { documentEquipment } from "../../../generatedNoCheck";

// To call an action with an attachment property, you first need to upload the file
async function uploadMyFile() {
    const file = await fetch("file.json");
    const blob = await file.blob();
    return createAttachmentUpload(blob, "myFile");
}

const myAttachmentUpload: AttachmentUpload = await uploadMyFile();
// then pass the attachment to the action in the action parameter.
const actionResult = client(documentEquipment).applyAction({ 
    equipmentId: "mac-1234",
    documentFile: myAttachmentUpload
    });