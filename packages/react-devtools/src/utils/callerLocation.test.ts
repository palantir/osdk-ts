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

    describe("fallback (no Error.captureStackTrace)", () => {
      const originalCaptureStackTrace = Error.captureStackTrace;

      afterEach(() => {
        Error.captureStackTrace = originalCaptureStackTrace;
      });

      it("still resolves the real caller via fixed-frame-count skipping", () => {
        // `@types/node` types this as always-present, but it genuinely isn't
        // in every browser (Firefox/Safari) — simulate that by actually
        // removing it, rather than assigning `undefined` through the type.
        Reflect.deleteProperty(Error, "captureStackTrace");

        function boundary(): string | undefined {
          return formatCallerLocation(captureCallerLocation(boundary));
        }

        const source = boundary();

        expect(source).toBeDefined();
        expect(source).toContain("callerLocation.test.ts");
      });
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
    it("parses a plain Chrome-style parenthesized frame", () => {
      const location = parseLineLocation(
        "    at MyComponent (http://localhost:5173/src/MyComponent.tsx:42:15)"
      );

      expect(location).toEqual({
        fileName: "http://localhost:5173/src/MyComponent.tsx",
        line: 42,
        column: 15,
      });
    });

    it("fails closed instead of returning the garbled inner match for a nested-paren eval frame", () => {
      // Anchoring to end-of-line and disallowing parens in the captured group
      // means a doubly-nested "eval at" frame like this one can't be cleanly
      // parsed by either supported format — it must return undefined, never
      // the old regex's wrong inner match ("eval at evaluate (:301").
      const location = parseLineLocation(
        "at appCallerFunction (eval at evaluate (:301:30), <anonymous>:43:13)"
      );

      expect(location).toBeUndefined();
    });

    it("returns undefined for a line with no location to parse", () => {
      expect(parseLineLocation("Error")).toBeUndefined();
    });
  });

  describe("formatCallerLocation", () => {
    it("returns undefined for an undefined location", () => {
      expect(formatCallerLocation(undefined)).toBeUndefined();
    });

    it("shortens the file path to its basename", () => {
      expect(
        formatCallerLocation({
          fileName: "http://localhost:5173/src/MyComponent.tsx",
          line: 42,
          column: 15,
        })
      ).toBe("MyComponent.tsx:42");
    });
  });
});
