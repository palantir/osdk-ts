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

import { GraphqlFormatting } from "@osdk/e2e.generated.catchall";
import { z2vClient } from "./client.js";

export async function runPropertyValueFormattingTest(): Promise<void> {
  // const metadata = await z2vClient.fetchMetadata(GraphqlFormatting);

  // console.log(
  //   "Boolean formatting",
  //   metadata.properties["booleanFormattedTrue"].valueFormatting,
  // );
  // console.log(
  //   "Numeric currency formatting",
  //   metadata.properties["doubleCurrencyCompact"].valueFormatting,
  // );
  // console.log(
  //   "Numeric duration formatting",
  //   metadata.properties["durationSeconds"].valueFormatting,
  // );
  // console.log(
  //   "timestamp formatting",
  //   metadata.properties["timestampDatetime"].valueFormatting,
  // );
  // console.log(
  //   "date formatting",
  //   metadata.properties["dateShort"].valueFormatting,
  // );
  // console.log(
  //   "Known user formatting",
  //   metadata.properties["stringUser"].valueFormatting,
  // );
  const a = await z2vClient(GraphqlFormatting).where({
    arrayIntegers: { $contains: 3 },
  }).fetchPage();
  console.log(a.data[0]);
}

void runPropertyValueFormattingTest();
