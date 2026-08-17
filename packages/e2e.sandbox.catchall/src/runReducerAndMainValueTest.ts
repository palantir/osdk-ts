import { assert } from "console";

import { __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid } from "@osdk/api/unstable";
import { ReducerTest } from "@osdk/e2e.generated.catchall";

import { client } from "./client.js";

export async function runReducerAndMainValueTest(): Promise<void> {
  const reducerTestObject = await client(ReducerTest)
    .where({ $primaryKey: "dfb62395-1187-48f7-aac8-da170e00973b" })
    .fetchPage({
      $applyModifiers: {
        stringArray: "applyReducers",
        structWithMultipleMain: "applyMainValue",
      },
      $includeRid: true,
    });

  const reducedValue: string | undefined =
    reducerTestObject.data[0].stringArray;
  const mainValueStruct:
    | {
        string1: string;
        integer1: string;
      }
    | undefined = reducerTestObject.data[0].structWithMultipleMain;
  assert(typeof reducedValue === "string");
  assert(typeof mainValueStruct);
  console.log("Object with reduced values", reducerTestObject.data);

  const allDefault = (
    await client(
      __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid,
    ).fetchPageByRid(ReducerTest, [reducerTestObject.data[0].$rid], {
      $EXPERIMENTAL_defaultLoadLevel: "applyReducersAndExtractMainValue",
      $applyModifiers: { structArray: "applyReducers" },
    })
  ).data[0];
  assert(typeof allDefault.stringArray === "string");
  console.log(JSON.stringify(allDefault, undefined, 2));
}

void runReducerAndMainValueTest();
