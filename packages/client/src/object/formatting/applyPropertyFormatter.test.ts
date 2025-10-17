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

import { describe, expect, it } from "vitest";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { InterfaceDefinitions } from "../../ontology/OntologyProvider.js";
import { createOsdkObject } from "../convertWireToOsdkObjects/createOsdkObject.js";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";

describe("getFormattedValue", () => {
  const mockClient = {} as MinimalClient;
  const EN_US = { locale: "en-US" };
  const DE_DE = { locale: "de-DE" };
  const FR_FR = { locale: "fr-FR" };
  const EN_US_TOKYO = { locale: "en-US", timezoneId: "Asia/Tokyo" };

  // Single object definition with properties for testing
  const OBJECT_DEF: FetchedObjectTypeDefinition = {
    apiName: "TestObject",
    type: "object",
    primaryKeyApiName: "id",
    titleProperty: "id",
    rid: "ri.test.object",
    displayName: "Test Object",
    description: "A test object",
    primaryKeyType: "string",
    icon: undefined,
    visibility: "NORMAL",
    pluralDisplayName: "Test Objects",
    status: "ACTIVE",
    interfaceMap: {},
    inverseInterfaceMap: {},
    links: {},
    implements: [],
    [InterfaceDefinitions]: {},
    properties: {
      id: {
        type: "string",
        nullable: false,
        multiplicity: false,
      },
      stringPropertyNoFormatting: {
        type: "string",
        nullable: true,
        multiplicity: false,
      },
      booleanPropertyCustomLabels: {
        type: "boolean",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "boolean",
          valueIfTrue: "Active",
          valueIfFalse: "Inactive",
        },
      },
      nullableBooleanProperty: {
        type: "boolean",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "boolean",
          valueIfTrue: "Yes",
          valueIfFalse: "No",
        },
      },
      priceStandard: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "standard",
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            },
          },
        },
      },
      priceWithParenthesis: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "standard",
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              convertNegativeToParenthesis: true,
            },
          },
        },
      },
      amount: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "currency",
            style: "STANDARD",
            currencyCode: { type: "constant", value: "USD" },
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      },
      dynamicCurrencyAmount: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "currency",
            style: "COMPACT",
            currencyCode: {
              type: "propertyType",
              propertyApiName: "currencyCode",
            },
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      },
      distance: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "standardUnit",
            unit: { type: "constant", value: "kilometer" },
            baseFormatOptions: {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            },
          },
        },
      },
      customQuantity: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "customUnit",
            unit: { type: "constant", value: "widgets" },
            baseFormatOptions: {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            },
          },
        },
      },
      prefixedNumber: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "affix",
            affix: {
              prefix: { type: "constant", value: "ID-" },
              postfix: { type: "constant", value: "-END" },
            },
            baseFormatOptions: {
              minimumIntegerDigits: 4,
              useGrouping: false,
            },
          },
        },
      },
      largeNumber: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "scale",
            scaleType: "MILLIONS",
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      },
      thousandsNumber: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "scale",
            scaleType: "THOUSANDS",
            baseFormatOptions: {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            },
          },
        },
      },
      billionsNumber: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "scale",
            scaleType: "BILLIONS",
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      },
      percentage: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "ratio",
            ratioType: "PERCENTAGE",
            baseFormatOptions: {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            },
          },
        },
      },
      basisPoints: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "ratio",
            ratioType: "BASIS_POINTS",
            baseFormatOptions: {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            },
          },
        },
      },
      currencyCode: {
        type: "string",
        nullable: true,
        multiplicity: false,
      },
      createdDate: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "date",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_DATE",
          },
        },
      },
      createdDateTime: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "timestamp",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_DATE_TIME",
          },
          displayTimezone: {
            type: "static",
            zoneId: { type: "constant", value: "America/New_York" },
          },
        },
      },
      createdDateTimeShort: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "timestamp",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_DATE_TIME_SHORT",
          },
          displayTimezone: {
            type: "static",
            zoneId: { type: "constant", value: "America/Los_Angeles" },
          },
        },
      },
      createdTime: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "timestamp",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_TIME",
          },
          displayTimezone: {
            type: "static",
            zoneId: { type: "constant", value: "UTC" },
          },
        },
      },
      yearMonth: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "date",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_YEAR_AND_MONTH",
          },
        },
      },
      isoInstant: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "timestamp",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_ISO_INSTANT",
          },
          displayTimezone: { type: "user" },
        },
      },
      timestampWithUserTimezone: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "timestamp",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_DATE_TIME",
          },
          displayTimezone: { type: "user" },
        },
      },
      timestampWithDynamicTimezone: {
        type: "datetime",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "timestamp",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_DATE_TIME",
          },
          displayTimezone: {
            type: "static",
            zoneId: { type: "propertyType", propertyApiName: "timezoneId" },
          },
        },
      },
      timezoneId: {
        type: "string",
        nullable: true,
        multiplicity: false,
      },
      durationSeconds: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "SECONDS",
            formatStyle: { type: "humanReadable" },
          },
        },
      },
      durationSecondsFullUnits: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "SECONDS",
            formatStyle: { type: "humanReadable", showFullUnits: true },
          },
        },
      },
      durationTimecode: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "SECONDS",
            formatStyle: { type: "timecode" },
          },
        },
      },
      durationPrecisionDays: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "SECONDS",
            formatStyle: { type: "humanReadable" },
            precision: "DAYS",
          },
        },
      },
      durationPrecisionHours: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "SECONDS",
            formatStyle: { type: "humanReadable" },
            precision: "HOURS",
          },
        },
      },
      durationPrecisionMinutes: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "SECONDS",
            formatStyle: { type: "humanReadable" },
            precision: "MINUTES",
          },
        },
      },
      durationPrecisionSeconds: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "SECONDS",
            formatStyle: { type: "humanReadable" },
            precision: "SECONDS",
          },
        },
      },
      durationMilliseconds: {
        type: "double",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "duration",
            baseValue: "MILLISECONDS",
            formatStyle: { type: "humanReadable" },
          },
        },
      },
    },
  };

  // Default object data with properties populated
  const DEFAULT_OBJECT_DATA: SimpleOsdkProperties = {
    $apiName: "TestObject",
    $primaryKey: "test-123",
    $title: "Test Object",
    $objectType: "TestObject",
    id: "test-123",
    stringPropertyNoFormatting: "Plain text",
    booleanPropertyCustomLabels: true,
    nullableBooleanProperty: undefined,
    priceStandard: 1234.56,
    priceWithParenthesis: -1234.56,
    amount: 1234.56,
    dynamicCurrencyAmount: 1234.56,
    distance: 42.7,
    customQuantity: 150,
    prefixedNumber: 42,
    largeNumber: 5000000,
    thousandsNumber: 5000,
    billionsNumber: 3000000000,
    percentage: 0.125,
    basisPoints: 0.125,
    currencyCode: "EUR",
    createdDate: "2025-01-15T14:30:00.000Z",
    createdDateTime: "2025-01-15T14:30:00.000Z",
    createdDateTimeShort: "2025-01-15T14:30:00.000Z",
    createdTime: "2025-01-15T14:30:00.000Z",
    yearMonth: "2025-01-15T00:00:00.000Z",
    isoInstant: "2025-01-15T14:30:00.000Z",
    timestampWithUserTimezone: "2025-01-15T14:30:00.000Z",
    timestampWithDynamicTimezone: "2025-01-15T14:30:00.000Z",
    timezoneId: "Europe/London",
    durationSeconds: 0,
    durationSecondsFullUnits: 0,
    durationTimecode: 0,
    durationPrecisionDays: 0,
    durationPrecisionHours: 0,
    durationPrecisionMinutes: 0,
    durationPrecisionSeconds: 0,
    durationMilliseconds: 0,
  };

  // Helper to create an OSDK object with optional data overrides
  function getObject(dataOverrides?: Partial<SimpleOsdkProperties>) {
    const objectData = { ...DEFAULT_OBJECT_DATA, ...dataOverrides };
    return createOsdkObject(mockClient, OBJECT_DEF, objectData);
  }

  it("formats boolean true with custom label", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "booleanPropertyCustomLabels",
    );

    expect(formatted).toBe("Active");
  });

  it("formats boolean false with custom label", () => {
    const obj = getObject({ booleanPropertyCustomLabels: false });
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "booleanPropertyCustomLabels",
    );

    expect(formatted).toBe("Inactive");
  });

  it("returns undefined for property without formatting rules", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "stringPropertyNoFormatting",
    );

    expect(formatted).toBeUndefined();
  });

  it("returns undefined for undefined values", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "nullableBooleanProperty",
    );

    expect(formatted).toBeUndefined();
  });

  describe("Number formatting", () => {
    it("formats standard number with grouping and decimals", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "priceStandard",
          EN_US,
        ),
      ).toBe("1,234.56");
    });

    it("converts negative to parenthesis when configured", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "priceWithParenthesis",
          EN_US,
        ),
      ).toBe("(1,234.56)");
    });

    it("formats currency with constant currency code", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "amount",
          EN_US,
        ),
      ).toBe("$1,234.56");
    });

    it("formats currency with dynamic currency code from property reference", () => {
      const obj = getObject({ currencyCode: "EUR" });
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "dynamicCurrencyAmount",
          EN_US,
        ),
      ).toBe("€1,234.56");
    });

    it("falls back to standard formatting when currency code is null", () => {
      const obj = getObject({ currencyCode: undefined });
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "dynamicCurrencyAmount",
          EN_US,
        ),
      ).toBe("1,234.56");
    });

    it("formats with standard unit", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "distance",
          EN_US,
        ),
      ).toBe("42.7 km");
    });

    it("formats with custom unit", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "customQuantity",
          EN_US,
        ),
      ).toBe("150 widgets");
    });

    it("formats with prefix and suffix", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "prefixedNumber",
          EN_US,
        ),
      ).toBe("ID-0042-END");
    });

    it("formats scaled millions in en-US", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "largeNumber",
          EN_US,
        ),
      ).toBe("5.00M");
    });

    it("formats scaled millions in de-DE", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "largeNumber",
          DE_DE,
        ),
      ).toBe("5,00Mio.");
    });

    it("formats scaled thousands in en-US", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "thousandsNumber",
          EN_US,
        ),
      ).toBe("5.0K");
    });

    it("formats scaled billions in fr-FR", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "billionsNumber",
          FR_FR,
        ),
      ).toBe("3,00Md");
    });

    it("formats percentage", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "percentage",
          EN_US,
        ),
      ).toBe("12.5%");
    });

    it("formats basis points", () => {
      const obj = getObject();
      expect(
        obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "basisPoints",
          EN_US,
        ),
      ).toBe("1,250 bps");
    });
  });

  describe("Date and time formatting", () => {
    it("formats date without timezone", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "createdDate",
          EN_US,
        );

      expect(formatted).toBe("Wed, Jan 15, 2025");
    });

    it("formats date in different locale", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "createdDate",
          DE_DE,
        );

      expect(formatted).toBe("Mi., 15. Jan. 2025");
    });

    it("formats timestamp with static timezone (America/New_York)", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "createdDateTime",
          EN_US,
        );

      // Should show time in EST (UTC-5), so 14:30 UTC = 9:30 AM EST
      expect(formatted).toBe("Wed, Jan 15, 2025, 9:30:00 AM");
    });

    it("formats timestamp short with static timezone (America/Los_Angeles)", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "createdDateTimeShort",
          EN_US,
        );

      // Should show time in PST (UTC-8), so 14:30 UTC = 6:30 AM PST
      expect(formatted).toBe("Jan 15, 2025, 6:30 AM");
    });

    it("formats time only with UTC timezone", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "createdTime",
          EN_US,
        );

      // Should show 14:30:00 in UTC as 2:30:00 PM
      expect(formatted).toBe("2:30:00 PM");
    });

    it("formats year and month only", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "yearMonth",
          EN_US,
        );

      expect(formatted).toBe("Jan 2025");
    });

    it("formats ISO instant", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "isoInstant",
          EN_US,
        );

      expect(formatted).toBe("2025-01-15T14:30:00.000Z");
    });

    it("formats timestamp with user timezone (no override)", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "timestampWithUserTimezone",
          EN_US,
        );

      // Without an override, should use the browser's default timezone
      // The exact output depends on the system timezone, so we verify it's a non-empty string
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe("string");
    });

    it("formats timestamp with user timezone override", () => {
      const obj = getObject();
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "timestampWithUserTimezone",
          EN_US_TOKYO,
        );

      // With Asia/Tokyo override (UTC+9), 14:30 UTC = 23:30 JST
      expect(formatted).toBe("Wed, Jan 15, 2025, 11:30:00 PM");
    });

    it("formats timestamp with dynamic timezone from property", () => {
      const obj = getObject({ timezoneId: "Europe/London" });
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "timestampWithDynamicTimezone",
          EN_US,
        );

      // Europe/London in January is GMT (UTC+0), so same as UTC: 14:30 = 2:30 PM
      expect(formatted).toBe("Wed, Jan 15, 2025, 2:30:00 PM");
    });

    it("formats timestamp with dynamic timezone from property (different timezone)", () => {
      const obj = getObject({ timezoneId: "Australia/Sydney" });
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "timestampWithDynamicTimezone",
          EN_US,
        );

      // Australia/Sydney in January is UTC+11, so 14:30 UTC = 1:30 AM next day
      expect(formatted).toBe("Thu, Jan 16, 2025, 1:30:00 AM");
    });

    it("formats timestamp when dynamic timezone property is null", () => {
      const obj = getObject({ timezoneId: undefined });
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "timestampWithDynamicTimezone",
          EN_US,
        );

      // Should fall back to no timezone (browser default)
      // The exact output depends on the system timezone, so we verify it's a non-empty string
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe("string");
    });

    it("handles invalid date strings gracefully", () => {
      const obj = getObject({ createdDate: "invalid-date" });
      const formatted = obj
        .$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "createdDate",
          EN_US,
        );

      expect(formatted).toBeUndefined();
    });
  });

  describe("Duration formatting", () => {
    describe("Human-readable format (compact)", () => {
      it("formats 0 seconds", () => {
        const obj = getObject({ durationSeconds: 0 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("0s");
      });

      it("formats 10 seconds", () => {
        const obj = getObject({ durationSeconds: 10 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("10s");
      });

      it("formats 60 seconds as a minute", () => {
        const obj = getObject({ durationSeconds: 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("1m");
      });

      it("formats 60 minutes as an hour", () => {
        const obj = getObject({ durationSeconds: 60 * 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("1h");
      });

      it("formats 24 hours as a day", () => {
        const obj = getObject({ durationSeconds: 60 * 60 * 24 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("1d");
      });

      it("formats 2 days and 1 second", () => {
        const obj = getObject({ durationSeconds: 60 * 60 * 48 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("2d 1s");
      });

      it("formats 2 days and 1 hour", () => {
        const obj = getObject({ durationSeconds: 60 * 60 * 48 + 60 * 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("2d 1h");
      });

      it("formats 2 days and 1 min", () => {
        const obj = getObject({ durationSeconds: 60 * 60 * 48 + 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("2d 1m");
      });

      it("formats a day, 2 hours, 1 minute and 1 second", () => {
        const obj = getObject({
          durationSeconds: 60 * 60 * 24 + 60 * 60 * 2 + 60 + 1,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("1d 2h 1m 1s");
      });

      it("formats 2 hours, 1 minute and 1 second", () => {
        const obj = getObject({ durationSeconds: 60 * 60 * 2 + 60 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("2h 1m 1s");
      });

      it("formats 2 hours and 1 second", () => {
        const obj = getObject({ durationSeconds: 60 * 60 * 2 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("2h 1s");
      });

      it("formats 1 minute and 1 second", () => {
        const obj = getObject({ durationSeconds: 61 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("1m 1s");
      });
    });

    describe("Human-readable format (with showFullUnits)", () => {
      it("formats 0 seconds as 0 seconds", () => {
        const obj = getObject({ durationSecondsFullUnits: 0 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("0 seconds");
      });

      it("formats 10 seconds as 10 seconds", () => {
        const obj = getObject({ durationSecondsFullUnits: 10 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("10 seconds");
      });

      it("formats 60 seconds as a minute", () => {
        const obj = getObject({ durationSecondsFullUnits: 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 minute");
      });

      it("formats 60 minutes as an hour", () => {
        const obj = getObject({ durationSecondsFullUnits: 60 * 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 hour");
      });

      it("formats 24 hours as a day", () => {
        const obj = getObject({ durationSecondsFullUnits: 60 * 60 * 24 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 day");
      });

      it("formats 2 days and 1 second", () => {
        const obj = getObject({ durationSecondsFullUnits: 60 * 60 * 48 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("2 days, 1 second");
      });

      it("formats 2 days and 1 hour", () => {
        const obj = getObject({
          durationSecondsFullUnits: 60 * 60 * 48 + 60 * 60,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("2 days, 1 hour");
      });

      it("formats 2 days and 1 min", () => {
        const obj = getObject({ durationSecondsFullUnits: 60 * 60 * 48 + 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("2 days, 1 minute");
      });

      it("formats a day, 2 hours, 1 minute and 1 second", () => {
        const obj = getObject({
          durationSecondsFullUnits: 60 * 60 * 24 + 60 * 60 * 2 + 60 + 1,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 day, 2 hours, 1 minute, 1 second");
      });

      it("formats 2 hours, 1 minute and 1 second", () => {
        const obj = getObject({
          durationSecondsFullUnits: 60 * 60 * 2 + 60 + 1,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("2 hours, 1 minute, 1 second");
      });

      it("formats 2 hours and 1 second", () => {
        const obj = getObject({ durationSecondsFullUnits: 60 * 60 * 2 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("2 hours, 1 second");
      });

      it("formats 1 minute and 1 second", () => {
        const obj = getObject({ durationSecondsFullUnits: 61 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 minute, 1 second");
      });

      it("formats negative numbers", () => {
        const obj = getObject({ durationSecondsFullUnits: -1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 second");
      });

      it("formats decimal numbers", () => {
        const obj = getObject({ durationSecondsFullUnits: 1.84321 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 second");
      });

      it("formats decimal numbers with minutes", () => {
        const obj = getObject({ durationSecondsFullUnits: 62.1001 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSecondsFullUnits",
            EN_US,
          ),
        ).toBe("1 minute, 2 seconds");
      });
    });

    describe("Timecode format", () => {
      it("formats 0 seconds as 0:00", () => {
        const obj = getObject({ durationTimecode: 0 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("0:00");
      });

      it("formats 1 second as 0:01", () => {
        const obj = getObject({ durationTimecode: 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("0:01");
      });

      it("formats 10 seconds as 0:10", () => {
        const obj = getObject({ durationTimecode: 10 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("0:10");
      });

      it("formats 60 seconds as 1:00", () => {
        const obj = getObject({ durationTimecode: 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("1:00");
      });

      it("formats 60 minutes as 1:00:00", () => {
        const obj = getObject({ durationTimecode: 60 * 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("1:00:00");
      });

      it("formats 24 hours as 24:00:00", () => {
        const obj = getObject({ durationTimecode: 60 * 60 * 24 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("24:00:00");
      });

      it("formats 2 days and 1 second", () => {
        const obj = getObject({ durationTimecode: 60 * 60 * 48 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("48:00:01");
      });

      it("formats 2 days and 1 hour", () => {
        const obj = getObject({ durationTimecode: 60 * 60 * 48 + 60 * 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("49:00:00");
      });

      it("formats 2 days and 1 min", () => {
        const obj = getObject({ durationTimecode: 60 * 60 * 48 + 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("48:01:00");
      });

      it("formats a day, 2 hours, 1 minute and 1 second", () => {
        const obj = getObject({
          durationTimecode: 60 * 60 * 24 + 60 * 60 * 2 + 60 + 1,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("26:01:01");
      });

      it("formats 2 hours, 1 minute, 1 second and 123 milliseconds", () => {
        const obj = getObject({
          durationTimecode: 60 * 60 * 2 + 60 + 1 + 0.1231421,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("2:01:01.123");
      });

      it("formats 2 hours, 1 minute and 1 second", () => {
        const obj = getObject({ durationTimecode: 60 * 60 * 2 + 60 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("2:01:01");
      });

      it("formats 2 hours and 1 second", () => {
        const obj = getObject({ durationTimecode: 60 * 60 * 2 + 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("2:00:01");
      });

      it("formats 1 minute and 1 second", () => {
        const obj = getObject({ durationTimecode: 61 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("1:01");
      });

      it("formats 1 minute, 1 second and 100 milliseconds", () => {
        const obj = getObject({ durationTimecode: 61 + 0.1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("1:01.100");
      });

      it("formats negative numbers", () => {
        const obj = getObject({ durationTimecode: -1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("0:01");
      });

      it("formats decimal numbers", () => {
        const obj = getObject({ durationTimecode: 1.84321 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("0:01.843");
      });

      it("does not display decimals past 3", () => {
        const obj = getObject({ durationTimecode: 0.000001 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationTimecode",
            EN_US,
          ),
        ).toBe("0:00");
      });
    });

    describe("Precision modes", () => {
      it("formats with DAYS precision", () => {
        const obj = getObject({ durationPrecisionDays: 0 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationPrecisionDays",
            EN_US,
          ),
        ).toBe("0d");
      });

      it("formats with HOURS precision", () => {
        const obj = getObject({ durationPrecisionHours: 60 * 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationPrecisionHours",
            EN_US,
          ),
        ).toBe("1h");
      });

      it("formats with MINUTES precision", () => {
        const obj = getObject({ durationPrecisionMinutes: 60 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationPrecisionMinutes",
            EN_US,
          ),
        ).toBe("1m");
      });

      it("formats with SECONDS precision", () => {
        const obj = getObject({ durationPrecisionSeconds: 1 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationPrecisionSeconds",
            EN_US,
          ),
        ).toBe("1s");
      });

      it("formats complex duration with HOURS precision", () => {
        const obj = getObject({
          durationPrecisionHours: 2 * 24 * 60 * 60 + 5 * 60 * 60 + 45 * 60
            + 48,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationPrecisionHours",
            EN_US,
          ),
        ).toBe("2d 6h");
      });

      it("formats complex duration with MINUTES precision", () => {
        const obj = getObject({
          durationPrecisionMinutes: 2 * 24 * 60 * 60 + 5 * 60 * 60 + 45 * 60
            + 48,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationPrecisionMinutes",
            EN_US,
          ),
        ).toBe("2d 5h 46m");
      });

      it("formats complex duration with SECONDS precision", () => {
        const obj = getObject({
          durationPrecisionSeconds: 2 * 24 * 60 * 60 + 5 * 60 * 60 + 45 * 60
            + 48,
        });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationPrecisionSeconds",
            EN_US,
          ),
        ).toBe("2d 5h 45m 48s");
      });
    });

    describe("Milliseconds base value", () => {
      it("converts milliseconds to seconds", () => {
        const obj = getObject({ durationMilliseconds: 1000 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationMilliseconds",
            EN_US,
          ),
        ).toBe("1s");
      });

      it("converts 60000 milliseconds to a minute", () => {
        const obj = getObject({ durationMilliseconds: 60000 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationMilliseconds",
            EN_US,
          ),
        ).toBe("1m");
      });

      it("handles fractional milliseconds", () => {
        const obj = getObject({ durationMilliseconds: 1500 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationMilliseconds",
            EN_US,
          ),
        ).toBe("1s");
      });
    });

    describe("Edge cases", () => {
      it("handles negative durations", () => {
        const obj = getObject({ durationSeconds: -100 });
        expect(
          obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
            "durationSeconds",
            EN_US,
          ),
        ).toBe("1m 40s");
      });
    });
  });
});
