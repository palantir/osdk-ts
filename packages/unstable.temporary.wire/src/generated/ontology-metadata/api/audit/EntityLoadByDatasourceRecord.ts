/*
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
 */

import type { LinkTypeAndDatasourcesLoadAuditRecord } from "./LinkTypeAndDatasourcesLoadAuditRecord.js";
import type { ObjectTypeAndDatasourcesLoadAuditRecord } from "./ObjectTypeAndDatasourcesLoadAuditRecord.js";
export interface EntityLoadByDatasourceRecord_objectTypeAndDatasources {
  type: "objectTypeAndDatasources";
  objectTypeAndDatasources: ObjectTypeAndDatasourcesLoadAuditRecord;
}

export interface EntityLoadByDatasourceRecord_linkTypeAndDatasources {
  type: "linkTypeAndDatasources";
  linkTypeAndDatasources: LinkTypeAndDatasourcesLoadAuditRecord;
}
export type EntityLoadByDatasourceRecord =
  | EntityLoadByDatasourceRecord_objectTypeAndDatasources
  | EntityLoadByDatasourceRecord_linkTypeAndDatasources;
