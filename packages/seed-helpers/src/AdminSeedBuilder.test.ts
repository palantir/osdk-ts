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
import { describe, expect, it } from "vitest";

import { AdminSeedBuilder } from "./index.js";

function user(id: string, status: User["status"] = "ACTIVE"): User {
  return { id, username: id, realm: "test", status, attributes: {} };
}

describe("AdminSeedBuilder", () => {
  it("builds an empty seed and preserves users in creation order", () => {
    const builder = new AdminSeedBuilder();
    expect(builder.build()).toStrictEqual({
      users: [],
      currentUserId: undefined,
    });

    const first = user("first");
    const second = user("second", "DELETED");
    expect(builder.createUser(first)).toBe(first.id);
    builder.createUser(second);
    expect(() => builder.createUser(user(first.id, "DELETED"))).toThrow(
      "User with ID first already exists",
    );
    expect(builder.build()).toStrictEqual({
      users: [first, second],
      currentUserId: undefined,
    });
  });

  it("enforces username uniqueness within each realm until the user is removed", () => {
    const builder = new AdminSeedBuilder();
    const first = { ...user("first"), username: "alice" };
    const replacement = { ...first, id: "second" };
    const otherRealm = { ...first, id: "third", realm: "other" };
    builder.createUser(first);
    expect(() => builder.createUser(replacement)).toThrow(
      "Username 'alice' already exists in realm 'test'",
    );
    builder.createUser(otherRealm);

    builder.deleteUser(first.id);
    builder.createUser(replacement);
    expect(builder.build().users).toEqual([otherRealm, replacement]);
  });

  it("only accepts active seeded users as the current user", () => {
    const builder = new AdminSeedBuilder();
    const activeId = builder.createUser(user("active"));
    const deletedId = builder.createUser(user("deleted", "DELETED"));
    builder.setCurrentUser(activeId);

    expect(() => builder.setCurrentUser("missing")).toThrow("does not exist");
    expect(() => builder.setCurrentUser(deletedId)).toThrow("is not active");
    expect(builder.build().currentUserId).toBe(activeId);
  });

  it("removes users and clears the current user only when they are removed", () => {
    const builder = new AdminSeedBuilder();
    const firstId = builder.createUser(user("first"));
    const second = user("second");
    const secondId = builder.createUser(second);
    builder.setCurrentUser(firstId);
    builder.setCurrentUser(secondId);

    builder.deleteUser(firstId);
    builder.deleteUser(firstId);
    expect(builder.build()).toStrictEqual({
      users: [second],
      currentUserId: secondId,
    });

    builder.deleteUser(secondId);
    expect(builder.build()).toStrictEqual({
      users: [],
      currentUserId: undefined,
    });
    builder.createUser(second);
    expect(builder.build()).toStrictEqual({
      users: [second],
      currentUserId: undefined,
    });
  });

  it("takes snapshots of user attributes on create and build", () => {
    const builder = new AdminSeedBuilder();
    const input = user("alice");
    input.attributes.team = ["engineering"];
    builder.createUser(input);
    input.attributes.team.push("sales");
    const snapshot = builder.build();
    expect(snapshot.users[0].attributes.team).toEqual(["engineering"]);
    snapshot.users[0].attributes.team.push("support");
    expect(builder.build().users[0].attributes.team).toEqual(["engineering"]);
  });
});
