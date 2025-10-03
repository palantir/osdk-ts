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

// Example: uploadMedia

import { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from "@osdk/api/unstable";
import { Equipment, documentEquipment } from "../../../generatedNoCheck/index.js"
// Edit this import if your client location differs
import { client } from "./client.js";
import type { MediaReference } from "@osdk/api";
// To upload media with 2.x, it has to be linked to an Action call
async function uploadMedia() {
    const file = await fetch("file.json");
    const data = await file.blob();
    // Upload media to an object type with a media property. This returns a media reference that can passed to
    // a media parameter in an Action.
    return await client(
        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,
    ).createMediaReference({
        data,
        fileName: "myFile",
        objectType: Equipment,
        propertyType: "trainingMaterial",
    });
}
const mediaReference: MediaReference = await uploadMedia();
const actionResult = client(documentEquipment).applyAction({ 
    equipmentId: "mac-1234",
    instructionalVideo: mediaReference 
});