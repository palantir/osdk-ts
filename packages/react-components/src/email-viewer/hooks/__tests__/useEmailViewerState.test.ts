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

import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { ParsedEmail } from "../../EmailViewerApi.js";
import { useEmailViewerState } from "../useEmailViewerState.js";

const EMPTY_EMAIL: ParsedEmail = {
  subject: undefined,
  from: undefined,
  to: [],
  cc: [],
  date: undefined,
  html: undefined,
  text: undefined,
};

describe("useEmailViewerState", () => {
  describe("bodyMode", () => {
    it("should prefer html when present", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({
          email: { ...EMPTY_EMAIL, html: "<p>Hi</p>", text: "Hi" },
        })
      );
      expect(result.current.bodyMode).toBe("html");
    });

    it("should fall back to text when html is absent", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({ email: { ...EMPTY_EMAIL, text: "Hi" } })
      );
      expect(result.current.bodyMode).toBe("text");
    });

    it("should be empty when neither html nor text is present", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({ email: EMPTY_EMAIL })
      );
      expect(result.current.bodyMode).toBe("empty");
    });
  });

  describe("address formatting", () => {
    it("should format an address with a name as 'Name <addr>'", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({
          email: {
            ...EMPTY_EMAIL,
            from: { name: "Ada Lovelace", address: "ada@example.com" },
          },
        })
      );
      expect(result.current.formattedFrom).toBe(
        "Ada Lovelace <ada@example.com>"
      );
    });

    it("should format an address without a name as the bare address", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({
          email: { ...EMPTY_EMAIL, from: { name: "", address: "x@y.com" } },
        })
      );
      expect(result.current.formattedFrom).toBe("x@y.com");
    });

    it("should leave formattedFrom undefined when there is no sender", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({ email: EMPTY_EMAIL })
      );
      expect(result.current.formattedFrom).toBeUndefined();
    });

    it("should join multiple recipients with commas", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({
          email: {
            ...EMPTY_EMAIL,
            to: [
              { name: "A", address: "a@x.com" },
              { name: "", address: "b@x.com" },
            ],
            cc: [{ name: "C", address: "c@x.com" }],
          },
        })
      );
      expect(result.current.formattedTo).toBe("A <a@x.com>, b@x.com");
      expect(result.current.formattedCc).toBe("C <c@x.com>");
    });

    it("should return empty strings for empty recipient lists", () => {
      const { result } = renderHook(() =>
        useEmailViewerState({ email: EMPTY_EMAIL })
      );
      expect(result.current.formattedTo).toBe("");
      expect(result.current.formattedCc).toBe("");
    });
  });
});
