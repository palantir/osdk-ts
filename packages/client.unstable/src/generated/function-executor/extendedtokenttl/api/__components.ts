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

import type { ProjectRid as _deployments_api_ProjectRid } from "../../deployments/api/__components.js";
/**/
import type { FunctionRid as _execution_api_FunctionRid } from "../../execution/api/__components.js";
export interface AddAllowlistedFunctionsRequest {
  functions: Array<_execution_api_FunctionRid>;
}
export interface AddAllowlistedFunctionsResponse {
  addedFunctions: Array<_execution_api_FunctionRid>;
}
export interface AddMarketplaceInstallProjectsRequest {
  projects: Array<_deployments_api_ProjectRid>;
}
export interface AddMarketplaceInstallProjectsResponse {
  addedProjects: Array<_deployments_api_ProjectRid>;
}
export interface AddPublishReposRequest {
  repos: Array<RepositoryRid>;
}
export interface AddPublishReposResponse {
  addedRepos: Array<RepositoryRid>;
}
/**
 * The complete set of extended token TTL allowlists for a namespace, used by control panel to display current
 * settings.
 */
export interface ExtendedTokenTtlSettings {
  allowedFunctionRids: Array<_execution_api_FunctionRid>;
  allowedMarketplaceInstallProjectRids: Array<_deployments_api_ProjectRid>;
  allowedPublishRepoRids: Array<RepositoryRid>;
}
export type FolderRid = string;
export interface IsAllowedResponse {
  allowed: boolean;
}
export type NamespaceRid = string;
export interface RemoveAllowlistedFunctionsRequest {
  functions: Array<_execution_api_FunctionRid>;
}
export interface RemoveAllowlistedFunctionsResponse {
  removedFunctions: Array<_execution_api_FunctionRid>;
}
export interface RemoveMarketplaceInstallProjectsRequest {
  projects: Array<_deployments_api_ProjectRid>;
}
export interface RemoveMarketplaceInstallProjectsResponse {
  removedProjects: Array<_deployments_api_ProjectRid>;
}
export interface RemovePublishReposRequest {
  repos: Array<RepositoryRid>;
}
export interface RemovePublishReposResponse {
  removedRepos: Array<RepositoryRid>;
}
export type RepositoryRid = string;
