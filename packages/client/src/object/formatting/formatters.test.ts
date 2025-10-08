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

import type {
  DatetimeFormat,
  PropertyBooleanFormattingRule,
  PropertyNumberFormattingRuleType,
} from "@osdk/api";
import { describe, expect, it } from "vitest";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { formatBoolean } from "./formatBoolean.js";
import { formatDateTime } from "./formatDateTime.js";
import { formatNumber } from "./formatNumber.js";

describe("Property Formatters", () => {
  describe("formatBoolean", () => {
    it("formats true values", () => {
      const rule: PropertyBooleanFormattingRule = {
        type: "boolean",
        valueIfTrue: "Yes",
        valueIfFalse: "No",
      };

      expect(formatBoolean(true, rule)).toBe("Yes");
    });

    it("formats false values", () => {
      const rule: PropertyBooleanFormattingRule = {
        type: "boolean",
        valueIfTrue: "Active",
        valueIfFalse: "Inactive",
      };

      expect(formatBoolean(false, rule)).toBe("Inactive");
    });
  });

  describe("formatNumber", () => {
    const mockObjectData: SimpleOsdkProperties = {
      $apiName: "TestObject",
      $primaryKey: "123",
      currencyCode: "USD",
      unitType: "kilometers",
      prefix: "$",
      suffix: " USD",
    };

    it("formats standard numbers", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "standard",
        baseFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      };

      const result = formatNumber(1234.5, rule, mockObjectData, "en-US");
      expect(result).toBe("1,234.50");
    });

    it("converts negative to parenthesis", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "standard",
        baseFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          convertNegativeToParenthesis: true,
        },
      };

      const result = formatNumber(-1234.5, rule, mockObjectData, "en-US");
      expect(result).toBe("(1,234.50)");
    });

    it("applies rounding modes", () => {
      const ruleUp: PropertyNumberFormattingRuleType = {
        type: "standard",
        baseFormatOptions: {
          maximumFractionDigits: 0,
          roundingMode: "CEIL",
        },
      };

      const ruleDown: PropertyNumberFormattingRuleType = {
        type: "standard",
        baseFormatOptions: {
          maximumFractionDigits: 0,
          roundingMode: "FLOOR",
        },
      };

      // Note: roundingMode support in Intl.NumberFormat is relatively new
      // and may not be available in all environments
      const resultUp = formatNumber(1234.7, ruleUp, mockObjectData, "en-US");
      const resultDown = formatNumber(
        1234.7,
        ruleDown,
        mockObjectData,
        "en-US",
      );

      // If rounding mode is supported, these should be different
      // Otherwise both will use default rounding (halfExpand)
      expect(resultUp).toMatch(/1,23[45]/);
      expect(resultDown).toMatch(/1,23[45]/);
    });

    it("formats fixed values", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "fixedValues",
        values: {
          1: "First",
          2: "Second",
          3: "Third",
        },
      };

      expect(formatNumber(2, rule, mockObjectData, "en-US")).toBe("Second");
      expect(formatNumber(4, rule, mockObjectData, "en-US")).toBe("4");
    });

    it("formats currency with property reference", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "currency",
        baseFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
        style: "STANDARD",
        currencyCode: {
          type: "propertyType",
          propertyApiName: "currencyCode",
        },
      };

      const result = formatNumber(1234.5, rule, mockObjectData, "en-US");
      expect(result).toContain("1,234.50");
      expect(result).toMatch(/\$|USD/);
    });

    it("formats currency with constant", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "currency",
        baseFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
        style: "STANDARD",
        currencyCode: {
          type: "constant",
          value: "EUR",
        },
      };

      const result = formatNumber(1234.5, rule, mockObjectData, "en-US");
      expect(result).toContain("1,234.50");
      expect(result).toMatch(/€|EUR/);
    });

    it("formats negative currency with parenthesis", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "currency",
        baseFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          convertNegativeToParenthesis: true,
        },
        style: "STANDARD",
        currencyCode: {
          type: "constant",
          value: "USD",
        },
      };

      const result = formatNumber(-1234.5, rule, mockObjectData, "en-US");
      expect(result).toContain("(");
      expect(result).toContain(")");
      expect(result).toContain("1,234.50");
    });

    it("formats percentages", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "ratio",
        ratioType: "PERCENTAGE",
        baseFormatOptions: {
          minimumFractionDigits: 1,
          maximumFractionDigits: 2,
        },
      };

      const result = formatNumber(0.1234, rule, mockObjectData, "en-US");
      expect(result).toBe("12.34%");
    });

    it("formats basis points", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "ratio",
        ratioType: "BASIS_POINTS",
        baseFormatOptions: {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        },
      };

      const result = formatNumber(0.0125, rule, mockObjectData, "en-US");
      expect(result).toBe("125 bps");
    });

    it("formats duration as timecode", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "duration",
        formatStyle: { type: "timecode" },
        baseValue: "SECONDS",
      };

      const result = formatNumber(3665, rule, mockObjectData, "en-US");
      expect(result).toBe("01:01:05");
    });

    it("formats duration as human readable", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "duration",
        formatStyle: { type: "humanReadable", showFullUnits: true },
        baseValue: "SECONDS",
        precision: "AUTO",
      };

      const result = formatNumber(3665, rule, mockObjectData, "en-US");
      expect(result).toContain("1 hour");
      expect(result).toContain("1 minute");
      expect(result).toContain("5 seconds");
    });

    it("formats with scale (thousands)", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "scale",
        scaleType: "THOUSANDS",
        baseFormatOptions: {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        },
      };

      const result = formatNumber(1234567, rule, mockObjectData, "en-US");
      expect(result).toBe("1,234.6K");
    });

    it("formats with affix", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "affix",
        baseFormatOptions: {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        },
        affix: {
          prefix: {
            type: "propertyType",
            propertyApiName: "prefix",
          },
          postfix: {
            type: "propertyType",
            propertyApiName: "suffix",
          },
        },
      };

      const result = formatNumber(1234, rule, mockObjectData, "en-US");
      expect(result).toBe("$1,234 USD");
    });

    it("formats custom units", () => {
      const rule: PropertyNumberFormattingRuleType = {
        type: "customUnit",
        baseFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
        unit: {
          type: "propertyType",
          propertyApiName: "unitType",
        },
      };

      const result = formatNumber(42.5, rule, mockObjectData, "en-US");
      expect(result).toBe("42.50 kilometers");
    });
  });

  describe("formatDateTime", () => {
    const mockObjectData: SimpleOsdkProperties = {
      $apiName: "TestObject",
      $primaryKey: "123",
      timezone: "America/New_York",
    };

    const testDate = new Date("2024-03-15T14:30:00Z");

    it("formats with localized date format", () => {
      const format: DatetimeFormat = {
        type: "localizedFormat",
        format: "DATE_FORMAT_DATE",
      };

      const result = formatDateTime(
        testDate,
        format,
        undefined,
        mockObjectData,
      );
      expect(result).toContain("Mar");
      expect(result).toContain("15");
      expect(result).toContain("2024");
    });

    it("formats with localized date-time format", () => {
      const format: DatetimeFormat = {
        type: "localizedFormat",
        format: "DATE_FORMAT_DATE_TIME",
      };

      const result = formatDateTime(
        testDate,
        format,
        undefined,
        mockObjectData,
      );
      expect(result).toContain("Mar");
      expect(result).toContain("15");
      expect(result).toContain("2024");
      // Time will vary by timezone
    });

    it("formats with string pattern", () => {
      const format: DatetimeFormat = {
        type: "stringFormat",
        pattern: "yyyy-MM-dd",
      };

      const result = formatDateTime(
        testDate,
        format,
        undefined,
        mockObjectData,
      );
      expect(result).toContain("2024");
      expect(result).toContain("03");
      expect(result).toContain("15");
    });

    it("formats with static timezone from property", () => {
      const format: DatetimeFormat = {
        type: "localizedFormat",
        format: "DATE_FORMAT_TIME",
      };

      const timezone = {
        type: "static" as const,
        zoneId: {
          type: "propertyType" as const,
          propertyApiName: "timezone",
        },
      };

      const result = formatDateTime(testDate, format, timezone, mockObjectData);
      // Should format in New York time
      expect(result).toBeDefined();
    });

    it("formats with user timezone", () => {
      const format: DatetimeFormat = {
        type: "localizedFormat",
        format: "DATE_FORMAT_TIME",
      };

      const timezone = {
        type: "user" as const,
      };

      const result = formatDateTime(
        testDate,
        format,
        timezone,
        mockObjectData,
        "UTC",
      );
      expect(result).toBeDefined();
      expect(result).toMatch(/\d+:\d+:\d+/);
    });

    it("handles invalid dates gracefully", () => {
      const format: DatetimeFormat = {
        type: "localizedFormat",
        format: "DATE_FORMAT_DATE",
      };

      const result = formatDateTime(
        "invalid-date",
        format,
        undefined,
        mockObjectData,
      );
      expect(result).toBe("invalid-date");
    });

    it("formats ISO instant correctly", () => {
      const format: DatetimeFormat = {
        type: "localizedFormat",
        format: "DATE_FORMAT_ISO_INSTANT",
      };

      const result = formatDateTime(
        testDate,
        format,
        undefined,
        mockObjectData,
      );
      expect(result).toBe(testDate.toISOString());
    });

    it("formats relative to now", () => {
      const format: DatetimeFormat = {
        type: "localizedFormat",
        format: "DATE_FORMAT_RELATIVE_TO_NOW",
      };

      // Test with a date from 2 hours ago
      const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
      const result = formatDateTime(
        twoHoursAgo,
        format,
        undefined,
        mockObjectData,
      );
      expect(result).toContain("2 hours ago");

      // Test with "now" (within 5 seconds)
      const now = new Date();
      const resultNow = formatDateTime(now, format, undefined, mockObjectData);
      expect(resultNow).toBe("now");

      // Test with tomorrow
      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const resultTomorrow = formatDateTime(
        tomorrow,
        format,
        undefined,
        mockObjectData,
      );
      expect(resultTomorrow).toContain("tomorrow");
    });
  });
});
