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

import type { KnownType } from "@osdk/api";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { wirePropertyFormattingToSdkFormatting } from "./wirePropertyFormattingToSdkFormatting.js";

describe(wirePropertyFormattingToSdkFormatting, () => {
  describe("number formatting", () => {
    it("converts standard number format", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "number",
        numberType: {
          type: "standard",
          baseFormatOptions: {
            useGrouping: true,
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
            notation: "COMPACT",
          },
        },
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toEqual({
        type: "number",
        numberType: {
          type: "standard",
          baseFormatOptions: {
            useGrouping: true,
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
            notation: "COMPACT",
          },
        },
      });
    });

    it("converts currency format with property reference", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "number",
        numberType: {
          type: "currency",
          baseFormatOptions: {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
          style: "STANDARD",
          currencyCode: {
            type: "propertyType",
            propertyApiName: "currencyField",
          },
        },
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toEqual({
        type: "number",
        numberType: {
          type: "currency",
          baseFormatOptions: {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
          style: "STANDARD",
          currencyCode: {
            type: "propertyType",
            propertyApiName: "currencyField",
          },
        },
      });
    });

    it("converts duration format with human readable style", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "number",
        numberType: {
          type: "duration",
          formatStyle: {
            type: "humanReadable",
            showFullUnits: true,
          },
          precision: "MINUTES",
          baseValue: "SECONDS",
        },
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toEqual({
        type: "number",
        numberType: {
          type: "duration",
          formatStyle: {
            type: "humanReadable",
            showFullUnits: true,
          },
          precision: "MINUTES",
          baseValue: "SECONDS",
        },
      });
    });

    it("converts ratio format for percentage", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "number",
        numberType: {
          type: "ratio",
          ratioType: "PERCENTAGE",
          baseFormatOptions: {
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          },
        },
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toEqual({
        type: "number",
        numberType: {
          type: "ratio",
          ratioType: "PERCENTAGE",
          baseFormatOptions: {
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          },
        },
      });
    });

    it("returns undefined for unknown number format type", () => {
      const wireFormat = {
        type: "number",
        numberType: {
          type: "INVALID_FORMAT_TYPE",
          someUnknownField: "value",
        },
      } as any;

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toBeUndefined();
    });
  });

  describe("date/timestamp formatting", () => {
    it("converts date format with string pattern", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "date",
        format: {
          type: "stringFormat",
          pattern: "yyyy-MM-dd",
        },
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toEqual({
        type: "date",
        format: {
          type: "stringFormat",
          pattern: "yyyy-MM-dd",
        },
      });
    });

    it("converts timestamp format with localized format and static timezone", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "timestamp",
        format: {
          type: "localizedFormat",
          format: "DATE_FORMAT_DATE_TIME",
        },
        displayTimezone: {
          type: "static",
          zoneId: {
            type: "constant",
            value: "America/New_York",
          },
        },
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toEqual({
        type: "timestamp",
        format: {
          type: "localizedFormat",
          format: "DATE_FORMAT_DATE_TIME",
        },
        displayTimezone: {
          type: "static",
          zoneId: {
            type: "constant",
            value: "America/New_York",
          },
        },
      });
    });

    it("returns undefined for unknown datetime format type", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "date",
        format: {
          type: "UNKNOWN_FORMAT_TYPE",
        } as any,
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toBeUndefined();
    });
  });

  describe("boolean formatting", () => {
    it("converts boolean format", () => {
      const wireFormat: Ontologies.PropertyValueFormattingRule = {
        type: "boolean",
        valueIfTrue: "Yes",
        valueIfFalse: "No",
      };

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toEqual({
        type: "boolean",
        valueIfTrue: "Yes",
        valueIfFalse: "No",
      });
    });
  });

  describe("known type formatting", () => {
    it("converts valid known types", () => {
      const validTypes: KnownType[] = [
        "userOrGroupRid",
        "resourceRid",
        "artifactGid",
      ];

      for (const knownType of validTypes) {
        const wireFormat: Ontologies.PropertyValueFormattingRule = {
          type: "knownType",
          knownType,
        };

        const result = wirePropertyFormattingToSdkFormatting(wireFormat);

        expect(result).toEqual({
          type: "knownType",
          knownType,
        });
      }
    });

    it("returns undefined for invalid known type", () => {
      const wireFormat = {
        type: "knownType",
        knownType: "INVALID_KNOWN_TYPE",
      } as any;

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toBeUndefined();
    });
  });

  describe("unknown formatting types", () => {
    it("returns undefined for completely unknown formatting type", () => {
      const wireFormat = {
        type: "UNKNOWN_FORMAT_TYPE",
        someField: "value",
      } as any;

      const result = wirePropertyFormattingToSdkFormatting(wireFormat);

      expect(result).toBeUndefined();
    });

    describe("affix formatting", () => {
      it("converts affix format with prefix and postfix", () => {
        const wireFormat: Ontologies.PropertyValueFormattingRule = {
          type: "number",
          numberType: {
            type: "affix",
            baseFormatOptions: {
              useGrouping: true,
            },
            affix: {
              prefix: {
                type: "constant",
                value: "$",
              },
              postfix: {
                type: "propertyType",
                propertyApiName: "unitField",
              },
            },
          },
        };

        const result = wirePropertyFormattingToSdkFormatting(wireFormat);

        expect(result).toEqual({
          type: "number",
          numberType: {
            type: "affix",
            baseFormatOptions: {
              useGrouping: true,
            },
            affix: {
              prefix: {
                type: "constant",
                value: "$",
              },
              postfix: {
                type: "propertyType",
                propertyApiName: "unitField",
              },
            },
          },
        });
      });

      it("handles affix with missing prefix/postfix", () => {
        const wireFormat: Ontologies.PropertyValueFormattingRule = {
          type: "number",
          numberType: {
            type: "affix",
            baseFormatOptions: {},
            affix: {},
          },
        };

        const result = wirePropertyFormattingToSdkFormatting(wireFormat);

        expect(result).toEqual({
          type: "number",
          numberType: {
            type: "affix",
            baseFormatOptions: {},
            affix: {
              prefix: undefined,
              postfix: undefined,
            },
          },
        });
      });
    });

    describe("fixed values formatting", () => {
      it("converts fixed values format", () => {
        const wireFormat: Ontologies.PropertyValueFormattingRule = {
          type: "number",
          numberType: {
            type: "fixedValues",
            values: {
              1: "First",
              2: "Second",
              3: "Third",
            },
          },
        };

        const result = wirePropertyFormattingToSdkFormatting(wireFormat);

        expect(result).toEqual({
          type: "number",
          numberType: {
            type: "fixedValues",
            values: {
              1: "First",
              2: "Second",
              3: "Third",
            },
          },
        });
      });
    });
  });
});
