/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { PageToken } from "@osdk/foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface DeployWebsiteRequest {
  version: VersionVersion;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListVersionsResponse {
  data: Array<Version>;
  nextPageToken?: PageToken;
}

/**
 * A subdomain from which a website is served.
 *
 * Log Safety: UNSAFE
 */
export type Subdomain = LooselyBrandedString<"Subdomain">;

/**
 * Log Safety: SAFE
 */
export interface ThirdPartyApplication {
  rid: ThirdPartyApplicationRid;
}

/**
 * An RID identifying a third-party application created in Developer Console.
 *
 * Log Safety: SAFE
 */
export type ThirdPartyApplicationRid = LooselyBrandedString<
  "ThirdPartyApplicationRid"
>;

/**
 * Log Safety: UNSAFE
 */
export interface Version {
  version: VersionVersion;
}

/**
 * The semantic version of the Website.
 *
 * Log Safety: UNSAFE
 */
export type VersionVersion = LooselyBrandedString<"VersionVersion">;

/**
 * Log Safety: UNSAFE
 */
export interface Website {
  deployedVersion?: VersionVersion;
  subdomains: Array<Subdomain>;
}
