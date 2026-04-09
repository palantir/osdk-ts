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

import type { ListUsersResponse, User } from "@osdk/foundry.admin";
import { InvalidArgument, InvalidRequest } from "../errors.js";
import { Admin } from "../mock/index.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { OpenApiCallError } from "./util/handleOpenApiCall.js";

export const createAdminHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  Admin.Users.applyGetCurrent(baseUrl, (): User => {
    return fauxFoundry.getAdmin().getCurrentUser();
  }),

  Admin.Users.applyGetUser(baseUrl, ({ request, params: { userId } }): User => {
    const status = new URL(request.url).searchParams.get("status") ?? "ACTIVE";

    if (status !== "ACTIVE" && status !== "DELETED") {
      throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
    }
    return fauxFoundry.getAdmin().getUser(userId, status);
  }),

  Admin.Users.applyListUsers(
    baseUrl,
    ({ request, params }): ListUsersResponse => {
      const include = new URL(request.url).searchParams.get("include")
        ?? "ACTIVE";
      const pageSize = Number.parseInt(
        new URL(request.url).searchParams.get("pageSize") ?? "1000",
        10,
      );
      const pageToken = new URL(request.url).searchParams.get("pageToken")
        ?? undefined;

      if (
        (include !== "ACTIVE" && include !== "DELETED")
        || Number.isNaN(pageSize)
      ) {
        throw new OpenApiCallError(
          400,
          InvalidArgument("Default:InvalidArgument"),
        );
      }

      if (pageSize < 1) {
        throw new OpenApiCallError(400, InvalidArgument("InvalidPageSize"));
      }

      const response = fauxFoundry.getAdmin().listUsers(
        pageSize,
        pageToken,
        include,
      );
      return {
        data: response.users,
        nextPageToken: response.nextPageToken,
      };
    },
  ),
];
