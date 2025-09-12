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

// Example: loadAbsoluteTimeSeriesPointsSnippet

import { type Employee } from "../../../generatedNoCheck";
import { type Osdk } from "@osdk/client";

async function getAbsoluteTimeSeriesPoints(obj: Osdk.Instance<Employee>) {
    return await obj.employeeStatus?.getAllPoints({
        $startTime: "2022-08-13T12:34:56Z",
        $endTime: "2022-08-14T12:34:56Z",
    });
}