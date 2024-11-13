/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { register, unregister } from "timezone-mock";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  extractDate,
  extractDateInLocalTime,
  extractDateInUTC,
} from "./datetimeConverters.js";

describe("test datetime converters", () => {
  beforeAll(() => {
    register("Etc/GMT+5");
  });

  afterAll(() => {
    unregister();
  });

  describe("test extractDate", () => {
    it("should error if the date is not in UTC format", () => {
      expect(() => extractDate("2021-01-01")).toThrowError(
        "Invalid date format. Expected ISO 8601 format, but received: 2021-01-01",
      );
      expect(() => extractDate("2021-01-01T00:0000.000Z")).toThrowError(
        "Invalid date format. Expected ISO 8601 format, but received: 2021-01-01",
      );
    });

    it("should return the date part of the input string", () => {
      const result = extractDate("2021-01-01T00:00:00.000Z");
      expect(result).toBe("2021-01-01");
    });
  });

  describe("test extractDateInUTC", () => {
    it("should return the date in UTC given Date constructed with UTC time", () => {
      const date = new Date("2021-01-01T00:00:00.000Z");
      expect(date.getDate()).toBe(31);
      expect(date.getUTCDate()).toBe(1);
      const result = extractDateInUTC(date);
      expect(result).toBe("2021-01-01");
    });

    it("should return the date in UTC given Date constructed with a local time", () => {
      const date = new Date("2020-12-31T23:00:00.000");
      expect(date.getDate()).toBe(31);
      expect(date.getUTCDate()).toBe(1);
      const result = extractDateInUTC(date);
      expect(result).toBe("2021-01-01");
    });
  });

  describe("test extractDateInLocalTime", () => {
    it("should return the date in local time given Date constructed with local time", () => {
      const date = new Date("2020-12-31T23:00:00.000");
      expect(date.getDate()).toBe(31);
      const result = extractDateInLocalTime(date);
      expect(result).toBe("2020-12-31");
    });
    it("should return the date in local time given Date constructed with UTC time", () => {
      const date = new Date("2021-01-01T00:00:00.000Z");
      expect(date.getDate()).toBe(31);
      const result = extractDateInLocalTime(date);
      expect(result).toBe("2020-12-31");
    });
  });
});
