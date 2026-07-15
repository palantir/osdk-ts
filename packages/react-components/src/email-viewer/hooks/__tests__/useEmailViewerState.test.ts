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

import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { ParsedEmail } from "../../EmailViewerApi.js";
import { useEmailViewerState } from "../useEmailViewerState.js";

vi.mock("../../parseEmail.js", () => ({
  parseEmail: vi.fn(),
}));

const { parseEmail } = await import("../../parseEmail.js");
const mockedParse = vi.mocked(parseEmail);

afterEach(() => {
  vi.clearAllMocks();
});

const CONTENT = new ArrayBuffer(8);

function makeEmail(overrides: Partial<ParsedEmail> = {}): ParsedEmail {
  return {
    subject: undefined,
    from: undefined,
    to: [],
    cc: [],
    date: undefined,
    html: undefined,
    text: undefined,
    ...overrides,
  };
}

describe("useEmailViewerState", () => {
  it("should start loading and resolve to the parsed email", async () => {
    mockedParse.mockResolvedValue(makeEmail({ html: "<p>Hi</p>" }));
    const { result } = renderHook(() =>
      useEmailViewerState({ content: CONTENT })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.email).toBeUndefined();

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(mockedParse).toHaveBeenCalledWith(CONTENT);
    expect(result.current.email?.html).toBe("<p>Hi</p>");
    expect(result.current.error).toBeUndefined();
  });

  describe("bodyMode", () => {
    it("should prefer html when present", async () => {
      mockedParse.mockResolvedValue(
        makeEmail({ html: "<p>Hi</p>", text: "Hi" })
      );
      const { result } = renderHook(() =>
        useEmailViewerState({ content: CONTENT })
      );
      await waitFor(() => expect(result.current.loading).toBe(false));
      expect(result.current.bodyMode).toBe("html");
    });

    it("should fall back to text when html is absent", async () => {
      mockedParse.mockResolvedValue(makeEmail({ text: "Hi" }));
      const { result } = renderHook(() =>
        useEmailViewerState({ content: CONTENT })
      );
      await waitFor(() => expect(result.current.loading).toBe(false));
      expect(result.current.bodyMode).toBe("text");
    });

    it("should be empty when neither html nor text is present", async () => {
      mockedParse.mockResolvedValue(makeEmail());
      const { result } = renderHook(() =>
        useEmailViewerState({ content: CONTENT })
      );
      await waitFor(() => expect(result.current.loading).toBe(false));
      expect(result.current.bodyMode).toBe("empty");
    });
  });

  describe("address formatting", () => {
    it("should format addresses and join multiple recipients", async () => {
      mockedParse.mockResolvedValue(
        makeEmail({
          from: { name: "Ada Lovelace", address: "ada@example.com" },
          to: [
            { name: "A", address: "a@x.com" },
            { name: "", address: "b@x.com" },
          ],
          cc: [{ name: "C", address: "c@x.com" }],
        })
      );
      const { result } = renderHook(() =>
        useEmailViewerState({ content: CONTENT })
      );
      await waitFor(() => expect(result.current.loading).toBe(false));

      expect(result.current.formattedFrom).toBe(
        "Ada Lovelace <ada@example.com>"
      );
      expect(result.current.formattedTo).toBe("A <a@x.com>, b@x.com");
      expect(result.current.formattedCc).toBe("C <c@x.com>");
    });

    it("should leave from undefined and lists empty when absent", async () => {
      mockedParse.mockResolvedValue(makeEmail());
      const { result } = renderHook(() =>
        useEmailViewerState({ content: CONTENT })
      );
      await waitFor(() => expect(result.current.loading).toBe(false));

      expect(result.current.formattedFrom).toBeUndefined();
      expect(result.current.formattedTo).toBe("");
      expect(result.current.formattedCc).toBe("");
    });
  });

  it("should surface a parse error", async () => {
    mockedParse.mockRejectedValue(new Error("corrupt eml"));
    const { result } = renderHook(() =>
      useEmailViewerState({ content: CONTENT })
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error?.message).toBe("corrupt eml");
    expect(result.current.email).toBeUndefined();
    expect(result.current.bodyMode).toBe("empty");
  });
});
