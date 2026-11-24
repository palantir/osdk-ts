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
import { consola } from "consola";
import invariant from "tiny-invariant";

import type { AdminSeedOutput } from "./types.js";

export class AdminSeedBuilder {
  #users = new Map<User["id"], User>();
  #currentUserId: User["id"] | undefined;

  /** Merges users in order and applies the seed's current user selection, if present. */
  addAll(seed: AdminSeedOutput): void {
    for (const user of seed.users) {
      this.createUser(user);
    }
    if (seed.currentUserId != null) {
      this.setCurrentUser(seed.currentUserId);
    }
  }

  /** Adds a user to the seed and returns their ID. */
  createUser(user: User): User["id"] {
    invariant(
      !this.#users.has(user.id),
      `User with ID ${user.id} already exists.`,
    );
    for (const existing of this.#users.values()) {
      invariant(
        existing.realm !== user.realm || existing.username !== user.username,
        () =>
          `Username '${user.username}' already exists in realm '${user.realm}'.`,
      );
    }
    this.#users.set(user.id, structuredClone(user));
    return user.id;
  }

  /** Removes a user from the seed and clears the selection if they were the current user. */
  deleteUser(userId: User["id"]): void {
    if (!this.#users.delete(userId)) {
      consola.warn(
        `Deleting user with ID ${userId} which does not exist. This will be a no-op.`,
      );
      return;
    }
    if (this.#currentUserId === userId) {
      this.#currentUserId = undefined;
    }
  }

  /** Selects an active user in the seed as the current user. */
  setCurrentUser(userId: User["id"]): void {
    const user = this.#users.get(userId);
    invariant(user, `User with ID ${userId} does not exist.`);
    invariant(
      user.status === "ACTIVE",
      `User with ID ${userId} is not active.`,
    );
    this.#currentUserId = userId;
  }

  /** Returns a snapshot of the users and the current user selection. */
  build(): AdminSeedOutput {
    const users = structuredClone([...this.#users.values()]);
    return { users, currentUserId: this.#currentUserId };
  }
}
