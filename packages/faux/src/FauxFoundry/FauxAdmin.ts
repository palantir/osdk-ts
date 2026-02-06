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

import type { User } from "@osdk/foundry.admin";
import {
  CurrentUserPermissionDeniedError,
  GetInvalidPageTokenError,
  GetUserActiveStatusError,
  GetUserDeletedStatusError,
  GetUserNotFoundError,
} from "../errors.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";

type UserStatus = "ACTIVE" | "DELETED";

export class FauxAdmin {
  #users: User[] = [];
  #currentUserId: string | undefined;

  registerUser(user: User): void {
    if (this.#users.some(({ id }) => id === user.id)) {
      throw new Error(
        `Failed to register new user. A user with ID ${user.id} already exists.`,
      );
    }

    this.#users.push(user);
  }

  setCurrentUser(currentUserId: string): void {
    // Verify this user exists and is active
    this.getUser(currentUserId, "ACTIVE");
    this.#currentUserId = currentUserId;
  }

  getCurrentUser(): User {
    if (this.#currentUserId == null) {
      throw new OpenApiCallError(
        403,
        CurrentUserPermissionDeniedError,
      );
    }

    const user = this.getUser(this.#currentUserId, "ACTIVE");

    if (user == null) {
      throw new OpenApiCallError(
        403,
        CurrentUserPermissionDeniedError,
      );
    }

    return user;
  }

  getUser(userId: string, status: UserStatus): User {
    const user = this.#users.find(user => user.id === userId);

    if (user == null) {
      throw new OpenApiCallError(404, GetUserNotFoundError(userId));
    }

    if (user.status !== status) {
      throw new OpenApiCallError(
        400,
        status === "DELETED"
          ? GetUserActiveStatusError(userId)
          : GetUserDeletedStatusError(userId),
      );
    }

    return user;
  }

  listUsers(
    pageSize: number | undefined = this.#users.length,
    pageToken: string | undefined,
    status: UserStatus | undefined,
  ): { users: User[]; nextPageToken: string } {
    const filteredUsers = status != null
      ? this.#users.filter(user => user.status === status)
      : this.#users;

    const startIndex = pageToken != null
      ? filteredUsers.findIndex(user => user.id === pageToken)
      : 0;

    if (pageToken != null && startIndex === -1) {
      throw new OpenApiCallError(
        400,
        GetInvalidPageTokenError(pageToken),
      );
    }

    return {
      users: filteredUsers.slice(startIndex, startIndex + pageSize),
      nextPageToken: filteredUsers[startIndex + pageSize]?.id,
    };
  }
}
