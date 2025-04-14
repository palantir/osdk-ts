/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
 */

import { $Actions, OsdkTestObject } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

// Testing default action params
await client($Actions.createOsdkTestObject).applyAction({
  description: "test",
  osdk_object_name: "OsdkTestObject",
  string_property: "test",
});

const objectArray = await client(OsdkTestObject).fetchPage();

// Testing Object action with OSDK instance
await client($Actions.editOsdkTestObject).applyAction({
  OsdkTestObject: objectArray.data[0],
  string_property: "a",
});

// Testing Object action with manually creating OSDK objects without object specifier
await client($Actions.editOsdkTestObject).applyAction({
  OsdkTestObject: {
    $primaryKey: objectArray.data[0].primaryKey_,
    $objectType: "hi",
    $apiName: "OsdkTestObject",
    $title: undefined,
  },
  string_property: "a",
});

// Testing Object action with manually creating OSDK objects with object specifier
await client($Actions.editOsdkTestObject).applyAction({
  OsdkTestObject: {
    $primaryKey: objectArray.data[0].primaryKey_,
    $objectType: "hi",
    $apiName: "OsdkTestObject",
    $title: undefined,
    // @ts-expect-error Tests that object specifier was erroring and is still not accepted
    $objectSpecifier: "unknown",
  },
  string_property: "a",
});

const pk = objectArray.data[0].primaryKey_;

// Testing object with primary key
await client($Actions.deleteOsdkTestObject).applyAction({
  OsdkTestObject: pk,
});
