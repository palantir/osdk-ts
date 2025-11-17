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

// Example: uploadMediaOntologyEdits

import type { Client } from "@osdk/client";
import { Employee } from "../../../generatedNoCheck/index.js";
import type { Edits } from "@osdk/functions";
import { createEditBatch, uploadMedia } from "@osdk/functions";

async function createObject(client: Client): Promise<Edits.Object<Employee>[]> {
    const batch = createEditBatch<Edits.Object<Employee>>(client);
    
    const blob = new Blob(["Hello, world"], { type: "text/plain" });
    const mediaReference = await uploadMedia(client, { data: blob, fileName: "foundryFile.txt" });

    // @ts-ignore 
    batch.create(Employee, { myMediaProperty: mediaReference, /* Other properties... */ });

    return batch.getEdits();
}

export default createObject;