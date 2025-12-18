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

import type { Core } from "@osdk/foundry";
import { Admin } from "@osdk/foundry";

import React from "react";
import { usePlatformQuery } from "../../../utils/usePlatformQuery.js";
import { OsdkContext2 } from "../../OsdkContext2.js";

export interface UseCurrentFoundryUserOptions {
  /**
   * Enable or disable the query.
   *
   * When `false`, the query will not automatically execute.
   *
   * This is useful for:
   * - Lazy/on-demand queries that should wait for user interaction
   * - Dependent queries that need data from another query first
   * - Conditional queries based on component state
   *
   * @default true
   * });
   */
  enabled?: boolean;

  /**
   * The default status of the users returned in the list.
   *
   * @default "ACTIVE"
   */
  include?: Core.UserStatus;

  /**
   * The preferred page size for the list.
   *
   * @default 1000
   */
  pageSize?: number;

  /**
   * The page token indicates where to start paging. This should be omitted from the first page's request.
   * To fetch the next page, clients should take the value from the nextPageToken field of the previous
   * response and use it to populate the pageToken field of the next request.
   */
  pageToken?: string;
}

export interface UseFoundryUserListResult {
  users: Admin.ListUsersResponse["data"] | undefined;
  nextPageToken: string | undefined;
  isLoading: boolean;

  error: Error | undefined;

  refetch: () => void;
}

export function useFoundryUserList(
  { enabled = true, include = "ACTIVE", pageSize = 1000, pageToken }:
    UseCurrentFoundryUserOptions = {},
): UseFoundryUserListResult {
  const { client } = React.useContext(OsdkContext2);

  const handleQuery = React.useCallback(() => {
    return Admin.Users.list(client, { include, pageSize, pageToken });
  }, [client]);

  const query = usePlatformQuery({
    query: handleQuery,
    enabled,
  });

  return {
    users: query.data?.data,
    nextPageToken: query.data?.nextPageToken,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
