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

import { afterEach, describe, expect, it } from "vitest";

import type { CallerLocation } from "./callerLocation.js";
import {
  captureCallerLocation,
  formatCallerLocation,
  locateCallerLine,
  parseLineLocation,
} from "./callerLocation.js";

describe("callerLocation", () => {
  describe("captureCallerLocation", () => {
    it("resolves to the real caller when the boundary function's name shares no substring with anything internal", () => {
      function totallyUnrelatedBoundaryName(): string | undefined {
        return formatCallerLocation(
          captureCallerLocation(totallyUnrelatedBoundaryName)
        );
      }

      const source = totallyUnrelatedBoundaryName();

      expect(source).toBeDefined();
      expect(source).toContain("callerLocation.test.ts");
      expect(source).not.toContain("totallyUnrelatedBoundaryName");
    });

    it("resolves correctly even after the boundary function's .name is renamed at runtime", () => {
      function boundary(): string | undefined {
        return formatCallerLocation(captureCallerLocation(boundary));
      }
      Object.defineProperty(boundary, "name", { value: "somethingElse" });

      const source = boundary();

      expect(source).toBeDefined();
      expect(source).toContain("callerLocation.test.ts");
    });

    describe("when the underlying capture mechanism throws", () => {
      const originalCaptureStackTrace = Error.captureStackTrace;

      afterEach(() => {
        Error.captureStackTrace = originalCaptureStackTrace;
      });

      it("fails closed, returning undefined instead of throwing", () => {
        // Simulates a host environment where calling into V8 internals
        // unexpectedly throws (e.g. a hardened/sandboxed realm). The wrapper
        // in ConsoleLogStore calls this synchronously before the real
        // console call runs, so a throw here must never escape.
        Error.captureStackTrace = () => {
          throw new Error("simulated host failure");
        };

        function boundary(): CallerLocation | undefined {
          return captureCallerLocation(boundary);
        }

        expect(() => boundary()).not.toThrow();
        expect(boundary()).toBeUndefined();
      });
    });
  });

  describe("parseLineLocation", () => {
    it("parses a Firefox/Safari-style frame", () => {
      const location = parseLineLocation(
        "MyComponent@http://localhost:5173/src/MyComponent.tsx:42:15"
      );

      expect(location).toEqual({
        fileName: "http://localhost:5173/src/MyComponent.tsx",
        line: 42,
        column: 15,
      });
    });

    it("parses correctly even when the function name itself contains a space", () => {
      // A leading space in the name (e.g. Firefox's top-level "global code")
      // must not be mistaken for a frame-separator by the regex.
      const location = parseLineLocation(
        "global code@http://localhost:5173/src/MyComponent.tsx:1:1"
      );

      expect(location).toEqual({
        fileName: "http://localhost:5173/src/MyComponent.tsx",
        line: 1,
        column: 1,
      });
    });

    it("returns undefined for a line with no location to parse", () => {
      expect(parseLineLocation("Error")).toBeUndefined();
    });
  });

  describe("locateCallerLine", () => {
    it("skips the header line on a V8-shaped stack", () => {
      const stack = [
        "Error",
        "    at captureCallerLocation (callerLocation.ts:134:20)",
        "    at boundary (callerLocation.test.ts:10:5)",
        "    at realCaller (callerLocation.test.ts:20:3)",
      ].join("\n");

      expect(locateCallerLine(stack, 2)).toBe(
        "    at realCaller (callerLocation.test.ts:20:3)"
      );
    });

    it("has no header line to skip on a Firefox/Safari-shaped stack", () => {
      const stack = [
        "captureCallerLocation@callerLocation.ts:134:20",
        "boundary@callerLocation.test.ts:10:5",
        "realCaller@callerLocation.test.ts:20:3",
      ].join("\n");

      expect(locateCallerLine(stack, 2)).toBe(
        "realCaller@callerLocation.test.ts:20:3"
      );
    });

    it("fails closed (undefined) when the stack is too short for the frame", () => {
      const stack = ["realCaller@callerLocation.test.ts:3:3"].join("\n");
      expect(locateCallerLine(stack, 2)).toBeUndefined();
    });
  });
});
