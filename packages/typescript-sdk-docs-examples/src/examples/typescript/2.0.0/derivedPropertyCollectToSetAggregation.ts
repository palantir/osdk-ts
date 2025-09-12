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
 * WARNING: This file is generated automatically by the generateExamples.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: derivedPropertyCollectToSetAggregation

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const maxObjectsInSet = 75; // Adjust this value as needed between 1 and 100
const sumEmployee = await client(Employee)
    .withProperties({
      "newPropertyName": (baseObjectSet) =>
        baseObjectSet.pivotTo("assignedEquipment").aggregate("purchasePrice:collectSet", { limit: maxObjectsInSet })
    }).fetchPage();