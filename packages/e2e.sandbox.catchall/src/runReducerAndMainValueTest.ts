import { ReducerTest } from "@osdk/e2e.generated.catchall";
import { assert } from "console";
import { client } from "./client.js";

export async function runReducerAndMainValueTest(): Promise<void> {
  const reducerTestObject = await client(ReducerTest).fetchPage(
    {
      $applyModifiers: {
        stringArray: "applyReducers",
        structWithMultipleMain: "applyMainValue",
      },
    },
  );

  const reducedValue: string | undefined =
    reducerTestObject.data[0].stringArray;
  const mainValueStruct: {
    string1: string;
    integer1: string;
  } | undefined = reducerTestObject.data[0].structWithMultipleMain;
  assert(typeof reducedValue === "string");
  assert(typeof mainValueStruct);
  console.log(
    "Object with reduced values",
    reducerTestObject.data,
  );
}

void runReducerAndMainValueTest();
