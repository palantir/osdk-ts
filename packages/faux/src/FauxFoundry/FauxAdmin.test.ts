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

import type { User } from "@osdk/foundry.admin";
import { beforeEach, describe, expect, it } from "vitest";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import { FauxAdmin } from "./FauxAdmin.js";

function createUser(overrides: Partial<User> = {}): User {
  return {
    id: "user-1",
    username: "test-user",
    realm: "test-realm",
    status: "ACTIVE",
    attributes: {},
    ...overrides,
  };
}

describe(FauxAdmin, () => {
  let fauxAdmin: FauxAdmin;

  beforeEach(() => {
    fauxAdmin = new FauxAdmin();
  });

  describe("registerUser", () => {
    it("should register a new user", () => {
      const user = createUser();

      fauxAdmin.registerUser(user);

      expect(fauxAdmin.getUser(user.id, "ACTIVE")).toEqual(user);
    });

    it("should throw an error when registering a user with duplicate id", () => {
      const user = createUser();

      fauxAdmin.registerUser(user);

      expect(() => fauxAdmin.registerUser(user)).toThrow(
        `Failed to register new user. A user with ID ${user.id} already exists.`,
      );
    });

    it("should allow registering multiple users with different ids", () => {
      const user1 = createUser({ id: "user-1" });
      const user2 = createUser({ id: "user-2", username: "test-user2" });

      fauxAdmin.registerUser(user1);
      fauxAdmin.registerUser(user2);

      expect(fauxAdmin.getUser("user-1", "ACTIVE")).toEqual(user1);
      expect(fauxAdmin.getUser("user-2", "ACTIVE")).toEqual(user2);
    });
  });

  describe("setCurrentUser", () => {
    it("should set the current user when user exists and is active", () => {
      const user = createUser();
      fauxAdmin.registerUser(user);

      fauxAdmin.setCurrentUser(user.id);

      expect(fauxAdmin.getCurrentUser()).toEqual(user);
    });

    it("should throw when setting current user to non-existent user", () => {
      expect(() => fauxAdmin.setCurrentUser("non-existent")).toThrow(
        OpenApiCallError,
      );
    });

    it("should throw when setting current user to deleted user", () => {
      const user = createUser({ status: "DELETED" });
      fauxAdmin.registerUser(user);

      expect(() => fauxAdmin.setCurrentUser(user.id)).toThrow(OpenApiCallError);
    });
  });

  describe("getCurrentUser", () => {
    it("should return the current user when set", () => {
      const user = createUser();
      fauxAdmin.registerUser(user);
      fauxAdmin.setCurrentUser(user.id);

      expect(fauxAdmin.getCurrentUser()).toEqual(user);
    });

    it("should throw when no current user is set", () => {
      expect(() => fauxAdmin.getCurrentUser()).toThrow();
    });
  });

  describe("getUser", () => {
    it("should return active user when requesting active status", () => {
      const user = createUser({ status: "ACTIVE" });
      fauxAdmin.registerUser(user);

      expect(fauxAdmin.getUser(user.id, "ACTIVE")).toEqual(user);
    });

    it("should return deleted user when requesting deleted status", () => {
      const user = createUser({ status: "DELETED" });
      fauxAdmin.registerUser(user);

      expect(fauxAdmin.getUser(user.id, "DELETED")).toEqual(user);
    });

    it("should throw 404 when user does not exist", () => {
      try {
        fauxAdmin.getUser("non-existent", "ACTIVE");
        expect.fail("Expected error to be thrown");
      } catch (e) {
        expect(e).toBeInstanceOf(OpenApiCallError);
        expect((e as OpenApiCallError).status).toBe(404);
        expect((e as OpenApiCallError).json.errorName).toBe("UserNotFound");
      }
    });

    it("should throw 400 when requesting active user but user is deleted", () => {
      const user = createUser({ status: "DELETED" });
      fauxAdmin.registerUser(user);

      try {
        fauxAdmin.getUser(user.id, "ACTIVE");
        expect.fail("Expected error to be thrown");
      } catch (e) {
        expect(e).toBeInstanceOf(OpenApiCallError);
        expect((e as OpenApiCallError).status).toBe(400);
        expect((e as OpenApiCallError).json.errorName).toBe("UserDeleted");
      }
    });

    it("should throw 400 when requesting deleted user but user is active", () => {
      const user = createUser({ status: "ACTIVE" });
      fauxAdmin.registerUser(user);

      try {
        fauxAdmin.getUser(user.id, "DELETED");
        expect.fail("Expected error to be thrown");
      } catch (e) {
        expect(e).toBeInstanceOf(OpenApiCallError);
        expect((e as OpenApiCallError).status).toBe(400);
        expect((e as OpenApiCallError).json.errorName).toBe("UserIsActive");
      }
    });
  });

  describe("listUsers", () => {
    it("should return empty list when no users", () => {
      const result = fauxAdmin.listUsers(10, undefined, "ACTIVE");

      expect(result.users).toEqual([]);
      expect(result.nextPageToken).toBeUndefined();
    });

    it("should return only active users when status is ACTIVE", () => {
      const activeUser = createUser({ id: "active-1", status: "ACTIVE" });
      const deletedUser = createUser({ id: "deleted-1", status: "DELETED" });

      fauxAdmin.registerUser(activeUser);
      fauxAdmin.registerUser(deletedUser);

      const result = fauxAdmin.listUsers(10, undefined, "ACTIVE");

      expect(result.users).toEqual([activeUser]);
    });

    it("should return only deleted users when status is DELETED", () => {
      const activeUser = createUser({ id: "active-1", status: "ACTIVE" });
      const deletedUser = createUser({ id: "deleted-1", status: "DELETED" });

      fauxAdmin.registerUser(activeUser);
      fauxAdmin.registerUser(deletedUser);

      const result = fauxAdmin.listUsers(10, undefined, "DELETED");

      expect(result.users).toEqual([deletedUser]);
    });

    it("should paginate results correctly", () => {
      const users = [
        createUser({ id: "user-1", status: "ACTIVE" }),
        createUser({ id: "user-2", status: "ACTIVE" }),
        createUser({ id: "user-3", status: "ACTIVE" }),
      ];

      users.forEach(user => fauxAdmin.registerUser(user));

      const page1 = fauxAdmin.listUsers(2, undefined, "ACTIVE");

      expect(page1.users).toHaveLength(2);
      expect(page1.users).toEqual([users[0], users[1]]);
      expect(page1.nextPageToken).toBe("user-3");

      const page2 = fauxAdmin.listUsers(2, page1.nextPageToken, "ACTIVE");

      expect(page2.users).toHaveLength(1);
      expect(page2.users).toEqual([users[2]]);
      expect(page2.nextPageToken).toBeUndefined();
    });

    it("should throw on invalid page token", () => {
      const user = createUser();
      fauxAdmin.registerUser(user);

      try {
        fauxAdmin.listUsers(10, "invalid-token", "ACTIVE");
        expect.fail("Expected error to be thrown");
      } catch (e) {
        expect(e).toBeInstanceOf(OpenApiCallError);
        expect((e as OpenApiCallError).status).toBe(400);
        expect((e as OpenApiCallError).json.errorName).toBe("InvalidPageToken");
      }
    });

    it("should respect pageSize", () => {
      const users = [
        createUser({ id: "user-1", status: "ACTIVE" }),
        createUser({ id: "user-2", status: "ACTIVE" }),
        createUser({ id: "user-3", status: "ACTIVE" }),
      ];

      users.forEach(user => fauxAdmin.registerUser(user));

      const result = fauxAdmin.listUsers(1, undefined, "ACTIVE");

      expect(result.users).toHaveLength(1);
      expect(result.users).toEqual([users[0]]);
      expect(result.nextPageToken).toBe("user-2");
    });

    it("should handle page token pointing to middle of list", () => {
      const users = [
        createUser({ id: "user-1", status: "ACTIVE" }),
        createUser({ id: "user-2", status: "ACTIVE" }),
        createUser({ id: "user-3", status: "ACTIVE" }),
        createUser({ id: "user-4", status: "ACTIVE" }),
      ];

      users.forEach(user => fauxAdmin.registerUser(user));

      const result = fauxAdmin.listUsers(2, "user-2", "ACTIVE");

      expect(result.users).toEqual([users[1], users[2]]);
      expect(result.nextPageToken).toBe("user-4");
    });
  });
});
