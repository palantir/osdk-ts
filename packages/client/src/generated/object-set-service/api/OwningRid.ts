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

/**
 * Resource identifier of a gatekeeper resource which OSS can use to permission additional metadata about
 * the execution of requests.
 * For requests that run with Backend.HIGHBURY, this owning rid will be used as Spark Reporter's
 * "owning rid" and therefore anyone who has the "foundry:read-data" operation on this rid as well as the
 * data involved in the queried object set will be able to see associated metadata, for example spark query
 * plans and rdd graphs.
 * NOTE: This rid has to be safe for logging purposes.
 */
export type OwningRid = string;
