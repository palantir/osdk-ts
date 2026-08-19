import { randomUUID } from "crypto";

import {
  Book,
  Game,
  getFriends,
  getTodoCount,
  LibraryItem,
  Person,
  Todo,
} from "@osdk/e2e.generated.catchall";
import { checkFoundryCliVersion } from "@osdk/integration-testing";
import { beforeEach, describe, expect } from "vitest";

import { createSeed, type IntegrationFixtures, test } from "./test.fixture.js";

const foundryProbeResult = await checkFoundryCliVersion();

const baseSeed = createSeed((seed) => {
  const alice = seed.create(Person, {
    email: "alice@example.com",
  });
  const bob = seed.create(Person, {
    email: "bob@example.com",
  });
  const charlie = seed.create(Person, {
    email: "charlie@example.com",
  });
  const todoItem1 = seed.create(Todo, {
    id: 1,
    priority: 0,
    text: "Todo Item 1",
    body: "Do something!",
    complete: false,
    assigneeEmail: bob.email,
  });
  const todoItem2 = seed.create(Todo, {
    id: 2,
    priority: 1,
    text: "Todo Item 2",
    body: "Do something!",
    complete: false,
  });

  const game1 = seed.create(Game, {
    id: randomUUID(),
    title: "Title",
  });

  const book1 = seed.create(Book, {
    id: randomUUID(),
    title: "Title",
    author: "Author",
    isbn: "000-0-000000-00-0",
  });
  seed.link(alice, "Friends", charlie);
  return { alice, bob, charlie, todoItem1, todoItem2, game1, book1 };
});

describe.runIf(foundryProbeResult.type === "installed")(
  "Local ontology integration tests",
  () => {
    beforeEach<IntegrationFixtures>(async ({ seed }) => {
      await seed.set(baseSeed.output);
    });
    test("List all people", async ({ client }) => {
      const page = await client(Person).fetchPage();
      expect(Number(page.totalCount)).toBe(3);
      expect(
        page.data.find((v) => v.email === baseSeed.context.alice.email),
      ).toBeDefined();
      expect(
        page.data.find((v) => v.email === baseSeed.context.bob.email),
      ).toBeDefined();
      expect(
        page.data.find((v) => v.email === baseSeed.context.charlie.email),
      ).toBeDefined();
    });
    test("List all Todos", async ({ client }) => {
      const page = await client(Todo).fetchPage();
      expect(Number(page.totalCount)).toBe(2);
      expect(
        page.data.find((v) => v.id === baseSeed.context.todoItem1.id),
      ).toBeDefined();
      expect(
        page.data.find((v) => v.id === baseSeed.context.todoItem2.id),
      ).toBeDefined();
    });
    test("Alice and Charlie are friends", async ({ client }) => {
      const friends = await client(Person)
        .where({ email: baseSeed.context.alice.email })
        .pivotTo("Friends")
        .fetchPage();
      expect(Number(friends.totalCount)).toBe(1);
      expect(
        friends.data.find((f) => f.email === baseSeed.context.charlie.email),
      ).toBeDefined();
    });
    test("Charlie and Alice are friends", async ({ client }) => {
      const friends = await client(Person)
        .where({ email: baseSeed.context.charlie.email })
        .pivotTo("FriendOf")
        .fetchPage();
      expect(Number(friends.totalCount)).toBe(1);
      expect(
        friends.data.find((f) => f.email === baseSeed.context.alice.email),
      ).toBeDefined();
    });
    test("Todo 1 assigned to Bob", async ({ client }) => {
      const shouldBeBob = await client(Todo)
        .where({ id: baseSeed.context.todoItem1.id })
        .pivotTo("Assignee")
        .fetchPage();
      expect(Number(shouldBeBob.totalCount)).toBe(1);
      expect(
        shouldBeBob.data.find((f) => f.email === baseSeed.context.bob.email),
      ).toBeDefined();
    });
    test("Mock query", async ({ client }) => {
      client.whenQuery(getTodoCount).thenReturn(1);
      const res = await client(getTodoCount).executeFunction();
      expect(res).toBe(1);
    });
    test("Mock Object Set query", async ({ client }) => {
      const objectSet = client(Person).where({
        email: {
          $in: [baseSeed.context.alice.email, baseSeed.context.charlie.email],
        },
      });
      client
        .whenQuery(getFriends, {
          person: baseSeed.context.bob,
        })
        .thenReturn(objectSet);
      const res = await client(getFriends)
        .executeFunction({
          person: baseSeed.context.bob,
        })
        .then((v) => v.fetchPage());
      expect(Number(res.totalCount)).toBe(2);
      expect(
        res.data.find((v) => v.email === baseSeed.context.alice.email),
      ).toBeDefined();
      expect(
        res.data.find((v) => v.email === baseSeed.context.charlie.email),
      ).toBeDefined();
    });
    test("fetchPage on Interface", async ({ client }) => {
      const page = await client(LibraryItem).fetchPage();
      expect(Number(page.totalCount)).toBe(2);
      expect(
        page.data.find((v) => v.id === baseSeed.context.game1.id),
      ).toBeDefined();
      expect(
        page.data.find((v) => v.id === baseSeed.context.book1.id),
      ).toBeDefined();
    });
    test("Object set query on interface", async ({ client }) => {
      const page = await client(LibraryItem)
        .where({
          id: {
            $eq: baseSeed.context.game1.id,
          },
        })
        .fetchPage();
      expect(Number(page.totalCount)).toBe(1);
      expect(
        page.data.find((v) => v.id === baseSeed.context.game1.id),
      ).toBeDefined();
    });
  },
);
