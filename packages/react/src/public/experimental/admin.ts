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
 * @deprecated The platform/admin hooks previously exported from
 * `@osdk/react/experimental/admin` have moved to `@osdk/react/platform-apis`.
 * Update imports — this entry will be removed in a future major.
 */

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useCbacBanner } from "../../new/platform-apis/admin/useCbacBanner.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export type {
  CbacBannerData,
  UseCbacBannerOptions,
  UseCbacBannerResult,
} from "../../new/platform-apis/admin/useCbacBanner.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useCbacMarkingRestrictions } from "../../new/platform-apis/admin/useCbacMarkingRestrictions.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export type {
  CbacMarkingRestrictionsData,
  UseCbacMarkingRestrictionsOptions,
  UseCbacMarkingRestrictionsResult,
} from "../../new/platform-apis/admin/useCbacMarkingRestrictions.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useCurrentFoundryUser } from "../../new/platform-apis/admin/useCurrentFoundryUser.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useFoundryUser } from "../../new/platform-apis/admin/useFoundryUser.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useFoundryUsersList } from "../../new/platform-apis/admin/useFoundryUsersList.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useMarkingCategories } from "../../new/platform-apis/admin/useMarkingCategories.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useMarkings } from "../../new/platform-apis/admin/useMarkings.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export { useUserViewMarkings } from "../../new/platform-apis/admin/useUserMarkings.js";

/** @deprecated Import from `@osdk/react/platform-apis` instead. */
export type {
  UseUserViewMarkingsOptions,
  UseUserViewMarkingsResult,
} from "../../new/platform-apis/admin/useUserMarkings.js";
