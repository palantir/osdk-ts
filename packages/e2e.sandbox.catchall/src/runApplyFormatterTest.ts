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

export async function runApplyFormatterTest(): Promise<void> {
  const objectsPage = await z2vClient(GraphqlFormatting).fetchPage({
    $pageSize: 1,
  });

  if (objectsPage.data.length === 0) {
    console.log("No GraphqlFormatting objects found in the dataset");
    return;
  }

  const testObject = objectsPage.data[0];

  console.log("\n=== Applying Formatters to GraphqlFormatting Object ===");
  console.log("Primary Key:", testObject.$primaryKey);
  // Apply formatters with en-US locale
  const formattedValues = testObject
    .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValues();
  console.log("\n--- Boolean Formatting ---");
  if (testObject.booleanFormattedTrue !== undefined) {
    console.log(
      "booleanFormattedTrue:",
      testObject.booleanFormattedTrue,
      "→",
      formattedValues.booleanFormattedTrue,
    );
  }
  if (testObject.booleanFormattedFalse !== undefined) {
    console.log(
      "booleanFormattedFalse:",
      testObject.booleanFormattedFalse,
      "→",
      formattedValues.booleanFormattedFalse,
    );
  }

  console.log("\n--- Number/Currency Formatting ---");
  if (testObject.doubleCurrencyUsd !== undefined) {
    console.log(
      "doubleCurrencyUsd:",
      testObject.doubleCurrencyUsd,
      "→",
      formattedValues.doubleCurrencyUsd,
    );
  }
  if (testObject.doubleCurrencyEur !== undefined) {
    console.log(
      "doubleCurrencyEur:",
      testObject.doubleCurrencyEur,
      "→",
      formattedValues.doubleCurrencyEur,
    );
  }
  if (testObject.doubleCurrencyCompact !== undefined) {
    console.log(
      "doubleCurrencyCompact:",
      testObject.doubleCurrencyCompact,
      "→",
      formattedValues.doubleCurrencyCompact,
    );
  }

  console.log("\n--- Percentage Formatting ---");
  if (testObject.doublePercentage !== undefined) {
    console.log(
      "doublePercentage:",
      testObject.doublePercentage,
      "→",
      formattedValues.doublePercentage,
    );
  }
  if (testObject.doublePercentageDecimal !== undefined) {
    console.log(
      "doublePercentageDecimal:",
      testObject.doublePercentageDecimal,
      "→",
      formattedValues.doublePercentageDecimal,
    );
  }

  console.log("\n--- Duration Formatting ---");
  if (testObject.durationSeconds !== undefined) {
    console.log(
      "durationSeconds:",
      testObject.durationSeconds,
      "→",
      formattedValues.durationSeconds,
    );
  }
  if (testObject.durationMilliseconds !== undefined) {
    console.log(
      "durationMilliseconds:",
      testObject.durationMilliseconds,
      "→",
      formattedValues.durationMilliseconds,
    );
  }

  console.log("\n--- Date/Time Formatting ---");
  if (testObject.dateShort !== undefined) {
    console.log(
      "dateShort:",
      testObject.dateShort,
      "→",
      formattedValues.dateShort,
    );
  }
  if (testObject.dateLong !== undefined) {
    console.log(
      "dateLong:",
      testObject.dateLong,
      "→",
      formattedValues.dateLong,
    );
  }
  if (testObject.timestampDatetime !== undefined) {
    console.log(
      "timestampDatetime:",
      testObject.timestampDatetime,
      "→",
      formattedValues.timestampDatetime,
    );
  }
  if (testObject.timestampNyc !== undefined) {
    console.log(
      "timestampNyc:",
      testObject.timestampNyc,
      "→",
      formattedValues.timestampNyc,
    );
  }

  console.log("\n--- Number with Units ---");
  if (testObject.doubleUnitMeter !== undefined) {
    console.log(
      "doubleUnitMeter:",
      testObject.doubleUnitMeter,
      "→",
      formattedValues.doubleUnitMeter,
    );
  }
  if (testObject.doubleUnitKilogram !== undefined) {
    console.log(
      "doubleUnitKilogram:",
      testObject.doubleUnitKilogram,
      "→",
      formattedValues.doubleUnitKilogram,
    );
  }
  if (testObject.doubleUnitCelsius !== undefined) {
    console.log(
      "doubleUnitCelsius:",
      testObject.doubleUnitCelsius,
      "→",
      formattedValues.doubleUnitCelsius,
    );
  }

  console.log("\n--- Large Number Formatting ---");
  if (testObject.doubleThousandsK !== undefined) {
    console.log(
      "doubleThousandsK:",
      testObject.doubleThousandsK,
      "→",
      formattedValues.doubleThousandsK,
    );
  }
  if (testObject.doubleMillionsM !== undefined) {
    console.log(
      "doubleMillionsM:",
      testObject.doubleMillionsM,
      "→",
      formattedValues.doubleMillionsM,
    );
  }
  if (testObject.doubleBillionsB !== undefined) {
    console.log(
      "doubleBillionsB:",
      testObject.doubleBillionsB,
      "→",
      formattedValues.doubleBillionsB,
    );
  }
  console.log(
    "\n--- Properties with reference to other properties formatting ---",
  );
  if (testObject.doubleCurrencyCompact != null) {
    console.log(
      "doubleCurrencyReference:",
      testObject.doubleCurrencyCompact,
      "→",
      formattedValues.doubleCurrencyCompact,
    );
  }
  if (testObject.timestampUtc != null) {
    console.log(
      "timestampReference:",
      testObject.timestampUtc,
      "→",
      formattedValues.timestampUtc,
    );
  }
  console.log("\n--- Known Type Formatting ---");
  if (testObject.stringUser !== undefined) {
    console.log(
      "stringUser:",
      testObject.stringUser,
      "→",
      formattedValues.stringUser,
    );
  }
  if (testObject.stringResource !== undefined) {
    console.log(
      "stringResource:",
      testObject.stringResource,
      "→",
      formattedValues.stringResource,
    );
  }
  // Test with different locale (German)
  console.log("\n=== Testing with German Locale (de-DE) ===");
  const formattedValuesDE = (testObject as any)
    .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValues({
      locale: "de-DE",
    });

  if (testObject.doubleCurrencyUsd !== undefined) {
    console.log(
      "doubleCurrencyUsd (de-DE):",
      testObject.doubleCurrencyUsd,
      "→",
      formattedValuesDE.doubleCurrencyUsd,
    );
  }
  if (testObject.doublePercentage !== undefined) {
    console.log(
      "doublePercentage (de-DE):",
      testObject.doublePercentage,
      "→",
      formattedValuesDE.doublePercentage,
    );
  }

  // Test with timezone
  console.log("\n=== Testing with Timezone (America/New_York) ===");
  const formattedValuesNY = (testObject as any)
    .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValues({
      locale: "en-US",
      timezoneId: "America/New_York",
    });

  if (testObject.timestampDatetime !== undefined) {
    console.log(
      "timestampDatetime (NY timezone):",
      testObject.timestampDatetime,
      "→",
      formattedValuesNY.timestampDatetime,
    );
  }

  console.log("\n=== All Formatted Values ===");
  console.log(JSON.stringify(formattedValues, null, 2));
}

void runApplyFormatterTest();
