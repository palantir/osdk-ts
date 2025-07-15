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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type {
  BranchRid as _api_BranchRid,
  MonitorEvent as _api_MonitorEvent,
  MonitorEventId as _api_MonitorEventId,
  MonitorRid as _api_MonitorRid,
} from "../../__components.js";

/**
 * The Monitor event is user-scoped and the history will differ between users. The user must have been
 * subscribed at some point to have a history at all.
 * Throws:
 * - MonitorNotFound: if the monitor does not exist or the user does not have view permissions on it.
 * - MonitorEventNotFound: if the monitor history id does not exist for this user.
 */
export async function getMonitorEvent(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  eventId: _api_MonitorEventId,
  branchRid: _api_BranchRid | null | undefined,
): Promise<_api_MonitorEvent> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors/${monitorRid}/events/${eventId}`,
    "GET",
    undefined,
    { branchRid },
  );
}
