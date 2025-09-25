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

// Example: fixedWidthGroupByTemplate

import { Employee } from "../../../generatedNoCheck/index.js";
// Edit this import if your client location differs
import { client } from "./client.js";

const groupedEmployee = await client(Employee)
    .aggregate({
        $select: { $count: "unordered" },
        $groupBy: { hourlyRate: { $fixedWidth: 10 } }
    });