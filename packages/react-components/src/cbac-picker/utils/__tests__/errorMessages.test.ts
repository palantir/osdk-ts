/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { formatCbacError } from "../errorMessages.js";

function apiError(
  fields: { statusCode?: number; errorDescription?: string },
  message = "raw message"
): Error {
  return Object.assign(new Error(message), fields);
}

describe("formatCbacError", () => {
  describe("status codes", () => {
    it("maps 401 to a session-expired message", () => {
      expect(formatCbacError(apiError({ statusCode: 401 }))).toEqual({
        title: "Session expired",
        remediation: "Sign in again to continue.",
      });
    });

    it("maps 403 to a permission-denied message", () => {
      expect(formatCbacError(apiError({ statusCode: 403 }))).toEqual({
        title: "Permission denied",
        remediation: "Contact your administrator for permission.",
      });
    });

    it("maps 404 to a not-found message", () => {
      expect(formatCbacError(apiError({ statusCode: 404 })).title).toBe(
        "Not found"
      );
    });

    it("maps any 5xx to a server-error message", () => {
      expect(formatCbacError(apiError({ statusCode: 503 })).title).toBe(
        "Server error"
      );
    });

    it("falls back to errorDescription for unmapped status codes", () => {
      expect(
        formatCbacError(
          apiError({ statusCode: 400, errorDescription: "Bad marking id" })
        )
      ).toEqual({ title: "Bad marking id", remediation: "" });
    });

    it("falls back to the raw message when an unmapped status code has no description", () => {
      expect(
        formatCbacError(apiError({ statusCode: 400 }, "malformed request"))
      ).toEqual({ title: "malformed request", remediation: "" });
    });
  });

  describe("AggregateError", () => {
    it("unwraps to the first inner error", () => {
      const aggregate = new AggregateError(
        [apiError({ statusCode: 403 }), apiError({ statusCode: 500 })],
        "multiple failures"
      );
      expect(formatCbacError(aggregate).title).toBe("Permission denied");
    });

    it("falls back to its own message when it has no inner errors", () => {
      const aggregate = new AggregateError([], "everything broke");
      expect(formatCbacError(aggregate).title).toBe("everything broke");
    });
  });

  describe("non-API errors", () => {
    it("detects network errors by message", () => {
      expect(formatCbacError(new Error("Network request failed"))).toEqual({
        title: "Network error",
        remediation: "Check your connection and try again.",
      });
    });

    it("detects fetch errors by message", () => {
      expect(formatCbacError(new Error("Failed to fetch")).title).toBe(
        "Network error"
      );
    });

    it("uses the error message as the title for generic errors", () => {
      expect(formatCbacError(new Error("something specific"))).toEqual({
        title: "something specific",
        remediation: "",
      });
    });

    it("uses a generic title when the message is empty", () => {
      expect(formatCbacError(new Error("")).title).toBe("Something went wrong");
    });
  });
});
