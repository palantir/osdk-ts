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

// `personReplacementInFlight`, with the replacement deleted: it is no longer deprecated.
import { defineInterface } from "../../../api/defineInterface.js";

defineInterface({
  apiName: "PersonV2",
  displayName: "Person",
  properties: {
    fullName: { type: "string" },
  },
});

defineInterface({
  apiName: "Person",
  displayName: "Person",
  status: { type: "active" },
  properties: {
    name: { type: "string" },
  },
  schemaMigrations: { transitions: [] },
});
