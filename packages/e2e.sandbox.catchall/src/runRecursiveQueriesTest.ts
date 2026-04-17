import { recursiveStruct } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

async function runRecursiveQueriesTest(): Promise<void> {
  const result = await client(recursiveStruct).executeFunction({
    person: { age: 30, name: "Alice" },
    pet: { breed: "Labrador" },
  });
  console.log("Result of recursiveStruct query:");
  console.log(JSON.stringify(result, null, 2));
  return;
}

void runRecursiveQueriesTest();
