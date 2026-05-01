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

// The user-facing surface of objectSet.subscribe(...) — already pinned at
// the listener level in objectSet.ts. These probes drill into each callback
// payload so changes to a single message variant (`onChange`'s ObjectUpdate,
// `onError`'s payload, the refresh signals) surface independently.

import type { ObjectSetSubscription } from "../../objectSet/ObjectSetListener.js";
import type { EmployeeApiTest } from "../../test/EmployeeApiTest.js";

type Listener = ObjectSetSubscription.Listener<EmployeeApiTest>;

/** The argument of listener.onChange — emitted when an object enters or leaves the set. */
declare const probe_onChange_payload: Parameters<
  NonNullable<Listener["onChange"]>
>[0];

/** The argument of listener.onError — emitted on a fatal subscription failure. */
declare const probe_onError_payload: Parameters<
  NonNullable<Listener["onError"]>
>[0];

/** The argument tuple of listener.onOutOfDate — refresh signal, no payload. */
declare const probe_onOutOfDate_params: Parameters<
  NonNullable<Listener["onOutOfDate"]>
>;

/** The argument tuple of listener.onSuccessfulSubscription — handshake signal, no payload. */
declare const probe_onSuccessfulSubscription_params: Parameters<
  NonNullable<Listener["onSuccessfulSubscription"]>
>;

type Options = ObjectSetSubscription.Options<EmployeeApiTest>;

/** The `properties` field of subscribe options — restricts which property keys updates may carry. */
declare const probe_options_properties: Options["properties"];

/** The `includeRid` field of subscribe options — toggles `$rid` exposure on update objects. */
declare const probe_options_includeRid: Options["includeRid"];

/** Same `includeRid` field, narrowed to a property subset that excludes geotime references. */
declare const probe_options_includeRid_narrow: ObjectSetSubscription.Options<
  EmployeeApiTest,
  "fullName" | "employeeId",
  true
>["includeRid"];
