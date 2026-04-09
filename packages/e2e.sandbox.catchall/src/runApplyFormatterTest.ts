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
  console.log("\n--- Boolean Formatting ---");
  if (testObject.booleanFormattedTrue !== undefined) {
    console.log(
      "booleanFormattedTrue:",
      testObject.booleanFormattedTrue,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "booleanFormattedTrue",
      ),
    );
  }
  if (testObject.booleanFormattedFalse !== undefined) {
    console.log(
      "booleanFormattedFalse:",
      testObject.booleanFormattedFalse,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "booleanFormattedFalse",
      ),
    );
  }

  console.log("\n--- Number/Currency Formatting ---");
  if (testObject.doubleCurrencyUsd !== undefined) {
    console.log(
      "doubleCurrencyUsd:",
      testObject.doubleCurrencyUsd,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleCurrencyUsd",
      ),
    );
  }
  if (testObject.doubleCurrencyEur !== undefined) {
    console.log(
      "doubleCurrencyEur:",
      testObject.doubleCurrencyEur,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleCurrencyEur",
      ),
    );
  }
  if (testObject.doubleCurrencyCompact !== undefined) {
    console.log(
      "doubleCurrencyCompact:",
      testObject.doubleCurrencyCompact,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleCurrencyCompact",
      ),
    );
  }

  console.log("\n--- Percentage Formatting ---");
  if (testObject.doublePercentage !== undefined) {
    console.log(
      "doublePercentage:",
      testObject.doublePercentage,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doublePercentage",
      ),
    );
  }
  if (testObject.doublePercentageDecimal !== undefined) {
    console.log(
      "doublePercentageDecimal:",
      testObject.doublePercentageDecimal,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doublePercentageDecimal",
      ),
    );
  }

  console.log("\n--- Duration Formatting ---");
  if (testObject.durationSeconds !== undefined) {
    console.log(
      "durationSeconds:",
      testObject.durationSeconds,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "durationSeconds",
      ),
    );
  }
  if (testObject.durationMilliseconds !== undefined) {
    console.log(
      "durationMilliseconds:",
      testObject.durationMilliseconds,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "durationMilliseconds",
      ),
    );
  }

  console.log("\n--- Date/Time Formatting ---");
  if (testObject.dateShort !== undefined) {
    console.log(
      "dateShort:",
      testObject.dateShort,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "dateShort",
      ),
    );
  }
  if (testObject.dateLong !== undefined) {
    console.log(
      "dateLong:",
      testObject.dateLong,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "dateLong",
      ),
    );
  }
  if (testObject.timestampDatetime !== undefined) {
    console.log(
      "timestampDatetime:",
      testObject.timestampDatetime,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "timestampDatetime",
      ),
    );
  }
  if (testObject.timestampNyc !== undefined) {
    console.log(
      "timestampNyc:",
      testObject.timestampNyc,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "timestampNyc",
      ),
    );
  }

  console.log("\n--- Number with Units ---");
  if (testObject.doubleUnitMeter !== undefined) {
    console.log(
      "doubleUnitMeter:",
      testObject.doubleUnitMeter,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleUnitMeter",
      ),
    );
  }
  if (testObject.doubleUnitKilogram !== undefined) {
    console.log(
      "doubleUnitKilogram:",
      testObject.doubleUnitKilogram,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleUnitKilogram",
      ),
    );
  }
  if (testObject.doubleUnitCelsius !== undefined) {
    console.log(
      "doubleUnitCelsius:",
      testObject.doubleUnitCelsius,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleUnitCelsius",
      ),
    );
  }

  console.log("\n--- Large Number Formatting ---");
  if (testObject.doubleThousandsK !== undefined) {
    console.log(
      "doubleThousandsK:",
      testObject.doubleThousandsK,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleThousandsK",
      ),
    );
  }
  if (testObject.doubleMillionsM !== undefined) {
    console.log(
      "doubleMillionsM:",
      testObject.doubleMillionsM,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleMillionsM",
      ),
    );
  }
  if (testObject.doubleBillionsB !== undefined) {
    console.log(
      "doubleBillionsB:",
      testObject.doubleBillionsB,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleBillionsB",
      ),
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
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleCurrencyCompact",
      ),
    );
  }
  if (testObject.timestampUtc != null) {
    console.log(
      "timestampReference:",
      testObject.timestampUtc,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "timestampUtc",
      ),
    );
  }
  console.log("\n--- Known Type Formatting ---");
  if (testObject.stringUser !== undefined) {
    console.log(
      "stringUser:",
      testObject.stringUser,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "stringUser",
      ),
    );
  }
  if (testObject.stringResource !== undefined) {
    console.log(
      "stringResource:",
      testObject.stringResource,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "stringResource",
      ),
    );
  }
  // Test with different locale (German)
  console.log("\n=== Testing with German Locale (de-DE) ===");

  if (testObject.doubleCurrencyUsd !== undefined) {
    console.log(
      "doubleCurrencyUsd (de-DE):",
      testObject.doubleCurrencyUsd,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doubleCurrencyUsd",
        { locale: "de-DE" },
      ),
    );
  }
  if (testObject.doublePercentage !== undefined) {
    console.log(
      "doublePercentage (de-DE):",
      testObject.doublePercentage,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "doublePercentage",
        { locale: "de-DE" },
      ),
    );
  }

  // Test with timezone
  console.log("\n=== Testing with Timezone (America/New_York) ===");

  if (testObject.timestampDatetime !== undefined) {
    console.log(
      "timestampDatetime (NY timezone):",
      testObject.timestampDatetime,
      "→",
      testObject.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
        "timestampDatetime",
        {
          locale: "en-US",
          timezoneId: "America/New_York",
        },
      ),
    );
  }
}

void runApplyFormatterTest();
