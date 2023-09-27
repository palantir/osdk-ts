import type { Client } from "@osdk/api";
import { isOk } from "@osdk/api";
import type { Ontology } from "./Ontology";

// This file should really get migrated into various test files in osdk-api instead of in the
// simulated package

// Not bothering with construction yet
declare const client: Client<typeof Ontology>;

// /**
//  * Iterates pages of todos without worrying about errors
//  */
// export async function printTodosUsingNextPageToken() {
//   let nextPageToken: string | undefined;
//   let data;

//   do {
//     ({ data, nextPageToken } = await client
//       .objectSet("Todo")
//       // ALSO SHOWS AND
//       .where({ $and: [{ id: { gt: 5 } }, { priority: 0 }] })
//       .fetchPageOrThrow({ nextPageToken }));

//     for (const todo of data) {
//       console.log(todo.text);
//     }
//   } while (nextPageToken);
// }

// /**
//  * Iterates through pages of Todos but requires you handle errors.
//  */
// export async function printTodosHandlingErrors() {
//   let nextPageToken: string | undefined;
//   let data;

//   do {
//     const result = await client
//       .objectSet("Todo")
//       .where({ id: { gt: 5 } })
//       .fetchPage({ nextPageToken });

//     if (result.type === "err") {
//       console.error("HANDLE ERROR");
//       return;
//     }

//     // FIXME
//     ({ data, nextPageToken } = result);

//     for (const todo of data) {
//       console.log(todo.text);
//     }
//   } while (nextPageToken);
// }

// /**
//  * Super clean example, using async iterator to go through the pages of the todos.
//  *
//  * Note: This does not allow explicit error handling!
//  */
// async function printUsingIterator() {
//   for await (const todo of client
//     .objectSet("Todo") // Function syntax
//     .where({ id: { gt: 5 } })) {
//     console.log(todo.text);
//   }

//   client.objects.Employee.where({}).fetchPage();

//   client.objectSet("Employee", { where: {} }).fetchPage();
// }

// /**
//  * Async Iterator Example w/Prop Limiting
//  */
// async function printUsingIteratorAndlimitedProps() {
//   const q = client
//     .objectSet("Todo", {
//       select: ["text"],
//       where: { id: { gt: 5 } },
//     })
//     .fetchPageOrThrow();

//   for await (const todo of client.objectSet("Todo", {
//     select: ["text"],
//     where: { id: { gt: 5 } },
//   })) {
//     // @ts-expect-error
//     console.log(todo.id);
//     console.log(todo.text);
//   }
// }
// // useSwr(["Employee", { where: {adUsername: "eanderson" }}], client.fetcherForOne)

// /**
//  * Just like `printUsingIterator()` except instead of `client.objectSet("Todo")` it uses
//  * a proxy object to grant `client.objects.Todo` as the same thing.
//  */
// async function printUsingIteratorAndObjectsMagic() {
//   // Showing proxy magic syntax `objects.Todo`
//   for await (const todo of client.objects.Todo.where({ id: { gt: 5 } })) {
//     console.log(todo.text);
//   }
// }

// /**
//  * Aggregation without groups
//  */
// async function aggregateThingsWithoutGroups() {
//   const q = await client.objectSet("Todo").aggregateOrThrow({
//     select: {
//       priority: ["max", "avg"],
//       text: "approximateDistinct",
//     },
//   });
//   // q
//   q.priority;

//   const { priority, text } = await client.objectSet("Todo").aggregateOrThrow({
//     select: {
//       priority: ["max", "avg"],
//       text: "approximateDistinct",
//     },
//   });
//   // No groupBy so we don't have to traverse group array
//   console.log(priority.max);
//   console.log(text.approximateDistinct);
// }

// /**
//  * Aggregation with groups
//  */
// async function aggregateThingsWithGroups() {
//   const result = await client.objectSet("Todo").aggregateOrThrow({
//     select: { priority: ["max", "avg"], text: "approximateDistinct" },
//     groupBy: { text: "exact" },
//     where: { id: { gt: 5 } },
//   });

//   for (const { group, values } of result) {
//     console.log(`${group.text}: ${values.priority.max}`);
//   }
// }

/**
 * Aggregation with groups and handle errors
 */
async function aggregateThingsWithGroupsAndHandleErrors() {
  const result = await client.objectSet("Todo").aggregate({
    select: { priority: ["max", "avg"], text: "approximateDistinct" },
    groupBy: {
      text: "exact",
    },
    where: { id: { gt: 5 } },
  });

  if (isOk(result)) {
    for (const { group, values } of result) {
      console.log(`${group.text}: ${values.priority.max}`);
    }
  }
}
