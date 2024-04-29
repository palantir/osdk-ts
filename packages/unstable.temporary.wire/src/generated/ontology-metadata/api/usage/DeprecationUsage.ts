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

import type { EndpointStatus } from "./EndpointStatus.js";

/**
 * Number of interactions with the entity during the requested time window, grouped by endpoint status.
 * If any of the EndpointStatus is missing it means that there were no interations of that type or it was
 * filtered out based on the status types specified in the request.
 */
export type DeprecationUsage = Record<EndpointStatus, number>;
