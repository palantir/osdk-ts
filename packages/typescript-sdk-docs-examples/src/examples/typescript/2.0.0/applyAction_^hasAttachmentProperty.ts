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

// Example: applyAction (Variation: ^hasAttachmentProperty)

// Edit this import if your client location differs
import { client } from "./client.js";
import type { MediaReference } from "@osdk/api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from "@osdk/api/unstable";
import { documentEquipment , Equipment  } from "../../../generatedNoCheck/index.js";

async function callAction() {
    // Create media reference
    const mediaFile = await fetch("media.mp4");
    const mediaBlob = await mediaFile.blob();
    const mediaReference: MediaReference = await client(
        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,
    ).createMediaReference({
        data: mediaBlob,
        fileName: "myMedia",
        objectType: Equipment,
        propertyType: "trainingMaterial",
    });
    // alternatively, you can get the Rid from the media property on the object type you are modifying
    // const mediaRid = objectTypeWithMedia.{mediaProperty}?.rid;
    const result = await client(documentEquipment).applyAction(
        {
            "equipmentId": "mac-1234",
            instructionalVideo: mediaReference,
        },
        {
            $returnEdits: true,
        }
    );
    if (result.type === "edits") {
        // use the result object to report back on action results
    }
}