import { ReducerTest } from "@osdk/e2e.generated.catchall";
import { assert } from "console";
import { client } from "./client.js";

export async function runReducerAndMainValueTest(): Promise<void> {
  const reducerTestObject = await client(ReducerTest).fetchPage(
    {
      $select: ["stringArray"],
      $applyModifiers: {
        "stringArray": "applyReducers",
      },
    },
  );

  const reducedValue: string | undefined =
    reducerTestObject.data[0].stringArray;
  assert(typeof reducedValue === "number");
  console.log(
    "Object with reduced values",
    reducerTestObject.data[0],
  );
}

void runReducerAndMainValueTest();
