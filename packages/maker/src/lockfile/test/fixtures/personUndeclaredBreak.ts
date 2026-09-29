/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

// `personOptedIn`, one release later, with `lastName` added as required and no migration phasing
// it in. Structurally valid, so only the lockfile diff can catch it.
import { defineInterface } from "../../../api/defineInterface.js";

defineInterface({
  apiName: "Person",
  displayName: "Person",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string", required: true },
  },
  schemaMigrations: { transitions: [] },
});
