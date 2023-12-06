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
 * Configuration for one instance of an ObjectDb, for example for one Highbury cluster.
 * If `configValue` is left empty, the ObjectDb should apply the default configuration for this entity.
 * If `configValue` is present, interpretation of the string is responsibility of the ObjectDb.
 */
export interface ObjectDbConfig {
  configValue: string | undefined;
}
