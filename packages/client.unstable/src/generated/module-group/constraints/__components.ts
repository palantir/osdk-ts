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

/**
 * Alias for a compass rid
 */
export type CompassRid = string;

/**
 * A page containining a map of configured resource constraints
 */
export interface ConfiguredResourceConstraintsPage {
  configuredConstraints: Record<CompassRid, ResourceConstraintsConfig>;
  nextPageToken?: CompassRid | null | undefined;
}
/**
 * A group producer can contain multiple module groups. For contour the producers are defiend via
 * `EnabledContourModuleGroupsConfig`. There is a `default` producer which is used for all queries for which
 * no other explicit producer is specified in config. For MGS the producer is equal to the client service's name.
 */
export type ModuleGroupProducer = string;

/**
 * Constraints that should apply for a specific resource
 */
export interface ResourceConstraintsConfig {
  maxConcurrentJobs: number;
}
