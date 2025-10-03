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

// Example: loadObjectPageGuide

import { Employee } from "../../../generatedNoCheck/index.js";
// Edit this import if your client location differs
import { client } from "./client.js";
import { type Osdk, type PageResult } from "@osdk/client";

try {
    const firstPage: PageResult<Osdk.Instance<Employee>>
        = await client(Employee).fetchPage({ $pageSize: 30 });
    if (firstPage.nextPageToken === undefined) {
        // eslint-disable-next-line no-console
        console.log(firstPage.data);
    }
    const secondPage: PageResult<Osdk.Instance<Employee>>
    = await client(Employee).fetchPage({ $pageSize: 30, $nextPageToken: firstPage.nextPageToken });
    // eslint-disable-next-line no-console
    console.log([...firstPage.data, ...secondPage.data]);
}
catch (e) {
    throw e;
}