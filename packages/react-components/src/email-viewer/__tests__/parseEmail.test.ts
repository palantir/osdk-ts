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

import PostalMime from "postal-mime";
import type { Email } from "postal-mime";
import { describe, expect, it, vi } from "vitest";

import { parseEmail } from "../parseEmail.js";

vi.mock("postal-mime", () => ({
  default: { parse: vi.fn() },
}));

const mockedParse = vi.mocked(PostalMime.parse);

function baseEmail(overrides: Partial<Email> = {}): Email {
  return {
    headers: [],
    headerLines: [],
    attachments: [],
    ...overrides,
  };
}

describe("parseEmail", () => {
  it("parses a complete email with all fields", async () => {
    mockedParse.mockResolvedValue(
      baseEmail({
        subject: "Hello",
        from: { name: "Alice", address: "alice@example.com" },
        to: [{ name: "Bob", address: "bob@example.com" }],
        cc: [{ name: "Carol", address: "carol@example.com" }],
        date: "2026-01-01T00:00:00Z",
        html: "<p>Hello</p>",
        text: "Hello",
      })
    );

    const result = await parseEmail(new ArrayBuffer(0));

    expect(result).toEqual({
      subject: "Hello",
      from: { name: "Alice", address: "alice@example.com" },
      to: [{ name: "Bob", address: "bob@example.com" }],
      cc: [{ name: "Carol", address: "carol@example.com" }],
      date: "2026-01-01T00:00:00Z",
      html: "<p>Hello</p>",
      text: "Hello",
    });
  });

  it("handles missing optional fields", async () => {
    mockedParse.mockResolvedValue(
      baseEmail({
        subject: "",
      })
    );

    const result = await parseEmail(new ArrayBuffer(0));

    expect(result).toEqual({
      subject: "",
      from: undefined,
      to: [],
      cc: [],
      date: undefined,
      html: undefined,
      text: undefined,
    });
  });

  it("handles group addresses in to field", async () => {
    mockedParse.mockResolvedValue(
      baseEmail({
        subject: "Group test",
        from: { name: "Sender", address: "sender@example.com" },
        to: [
          {
            name: "Team",
            group: [
              { name: "Alice", address: "alice@example.com" },
              { name: "Bob", address: "bob@example.com" },
            ],
          },
        ],
        text: "test",
      })
    );

    const result = await parseEmail(new ArrayBuffer(0));

    expect(result.to).toEqual([
      { name: "Alice", address: "alice@example.com" },
      { name: "Bob", address: "bob@example.com" },
    ]);
  });

  it("handles multiple recipients in to and cc", async () => {
    mockedParse.mockResolvedValue(
      baseEmail({
        subject: "Multi",
        from: { name: "Sender", address: "sender@example.com" },
        to: [
          { name: "A", address: "a@example.com" },
          { name: "B", address: "b@example.com" },
        ],
        cc: [{ name: "C", address: "c@example.com" }],
      })
    );

    const result = await parseEmail(new ArrayBuffer(0));

    expect(result.to).toHaveLength(2);
    expect(result.cc).toHaveLength(1);
  });

  it("returns undefined for from when address is a group", async () => {
    mockedParse.mockResolvedValue(
      baseEmail({
        subject: "From group",
        from: {
          name: "Group",
          group: [{ name: "Alice", address: "alice@example.com" }],
        },
      })
    );

    const result = await parseEmail(new ArrayBuffer(0));

    expect(result.from).toBeUndefined();
  });
});
