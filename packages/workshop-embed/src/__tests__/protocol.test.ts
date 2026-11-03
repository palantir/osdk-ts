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

import { isWorkshopEmbedMessage } from "../protocol.js";

const message = {
  channel: "workshop-module-embed",
  version: 1,
  sessionId: "session",
  type: "probe",
};

describe("isWorkshopEmbedMessage", () => {
  it.each(["probe", "available", "connect", "connected", "disconnect"])(
    "accepts %s messages",
    (type) => {
      expect(isWorkshopEmbedMessage({ ...message, type })).toBe(true);
    },
  );

  it.each([
    null,
    undefined,
    "probe",
    [],
    {},
    { ...message, channel: "another-protocol" },
    { ...message, version: 2 },
    { ...message, version: "1" },
    { ...message, sessionId: "" },
    { ...message, sessionId: 1 },
    { ...message, type: "variables" },
  ])("rejects malformed or unsupported messages: %j", (value) => {
    expect(isWorkshopEmbedMessage(value)).toBe(false);
  });
});
