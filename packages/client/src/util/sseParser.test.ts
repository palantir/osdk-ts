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

import { describe, expect, it } from "vitest";
import { parseSseEvents, type SseEvent } from "./sseParser.js";

function makeStream(chunks: string[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  let i = 0;
  return new ReadableStream<Uint8Array>({
    pull(controller) {
      if (i < chunks.length) {
        controller.enqueue(encoder.encode(chunks[i]));
        i++;
      } else {
        controller.close();
      }
    },
  });
}

async function collectEvents(
  stream: ReadableStream<Uint8Array>,
): Promise<SseEvent[]> {
  const events: SseEvent[] = [];
  for await (const event of parseSseEvents(stream)) {
    events.push(event);
  }
  return events;
}

describe("parseSseEvents", () => {
  it("parses a single event", async () => {
    const events = await collectEvents(
      makeStream(["data: hello\n\n"]),
    );
    expect(events).toEqual([{
      event: undefined,
      data: "hello",
      id: undefined,
    }]);
  });

  it("parses multiple events in one chunk", async () => {
    const events = await collectEvents(
      makeStream(["data: first\n\ndata: second\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "first", id: undefined },
      { event: undefined, data: "second", id: undefined },
    ]);
  });

  it("handles chunked delivery across multiple reads", async () => {
    const events = await collectEvents(
      makeStream(["data: hel", "lo\n\n"]),
    );
    expect(events).toEqual([{
      event: undefined,
      data: "hello",
      id: undefined,
    }]);
  });

  it("handles event split across chunks", async () => {
    const events = await collectEvents(
      makeStream(["data: first\n\nda", "ta: second\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "first", id: undefined },
      { event: undefined, data: "second", id: undefined },
    ]);
  });

  it("parses multi-line data fields", async () => {
    const events = await collectEvents(
      makeStream(["data: line1\ndata: line2\ndata: line3\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "line1\nline2\nline3", id: undefined },
    ]);
  });

  it("parses event type", async () => {
    const events = await collectEvents(
      makeStream(["event: update\ndata: payload\n\n"]),
    );
    expect(events).toEqual([
      { event: "update", data: "payload", id: undefined },
    ]);
  });

  it("parses event id", async () => {
    const events = await collectEvents(
      makeStream(["id: 42\ndata: payload\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "payload", id: "42" },
    ]);
  });

  it("parses all fields together", async () => {
    const events = await collectEvents(
      makeStream(["id: 7\nevent: message\ndata: content\n\n"]),
    );
    expect(events).toEqual([
      { event: "message", data: "content", id: "7" },
    ]);
  });

  it("skips comment lines", async () => {
    const events = await collectEvents(
      makeStream([": this is a comment\ndata: actual\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "actual", id: undefined },
    ]);
  });

  it("skips events without data field", async () => {
    const events = await collectEvents(
      makeStream(["event: nodata\n\ndata: has-data\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "has-data", id: undefined },
    ]);
  });

  it("handles data field without space after colon", async () => {
    const events = await collectEvents(
      makeStream(["data:nospace\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "nospace", id: undefined },
    ]);
  });

  it("handles event field without space after colon", async () => {
    const events = await collectEvents(
      makeStream(["event:update\ndata: payload\n\n"]),
    );
    expect(events).toEqual([
      { event: "update", data: "payload", id: undefined },
    ]);
  });

  it("handles id field without space after colon", async () => {
    const events = await collectEvents(
      makeStream(["id:99\ndata: payload\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "payload", id: "99" },
    ]);
  });

  it("handles remaining buffer after stream ends", async () => {
    const events = await collectEvents(
      makeStream(["data: trailing"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "trailing", id: undefined },
    ]);
  });

  it("skips empty events between separators", async () => {
    const events = await collectEvents(
      makeStream(["data: first\n\n\n\ndata: second\n\n"]),
    );
    expect(events).toEqual([
      { event: undefined, data: "first", id: undefined },
      { event: undefined, data: "second", id: undefined },
    ]);
  });

  it("handles JSON data payload", async () => {
    const json = JSON.stringify({ type: "objectSetChanged", updates: [1, 2] });
    const events = await collectEvents(
      makeStream([`data: ${json}\n\n`]),
    );
    expect(events).toEqual([
      { event: undefined, data: json, id: undefined },
    ]);
    expect(JSON.parse(events[0].data)).toEqual({
      type: "objectSetChanged",
      updates: [1, 2],
    });
  });

  it("yields nothing for empty stream", async () => {
    const events = await collectEvents(makeStream([]));
    expect(events).toEqual([]);
  });

  it("yields nothing for stream with only whitespace", async () => {
    const events = await collectEvents(makeStream(["  \n\n"]));
    expect(events).toEqual([]);
  });

  it("yields nothing for stream with only comments", async () => {
    const events = await collectEvents(
      makeStream([": heartbeat\n\n"]),
    );
    expect(events).toEqual([]);
  });
});
