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

export interface SseEvent {
  event?: string;
  data: string;
  id?: string;
}

/**
 * Parses a Server-Sent Events stream from a ReadableStream.
 * Yields parsed events as they arrive, handling chunked delivery
 * and multi-line data fields.
 */
export async function* parseSseEvents(
  stream: ReadableStream<Uint8Array>,
): AsyncGenerator<SseEvent, void, unknown> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop()!;

      for (const raw of parts) {
        if (!raw.trim()) continue;
        const parsed = parseSseEvent(raw);
        if (parsed) yield parsed;
      }
    }

    // Handle any remaining data in the buffer after stream ends
    if (buffer.trim()) {
      const parsed = parseSseEvent(buffer);
      if (parsed) yield parsed;
    }
  } finally {
    reader.releaseLock();
  }
}

function parseSseEvent(raw: string): SseEvent | undefined {
  let data = "";
  let event: string | undefined;
  let id: string | undefined;

  for (const line of raw.split("\n")) {
    if (line.startsWith(":")) continue; // comment line (used for keepalive)

    if (line.startsWith("data: ")) {
      data += (data ? "\n" : "") + line.slice(6);
    } else if (line.startsWith("data:")) {
      data += (data ? "\n" : "") + line.slice(5);
    } else if (line.startsWith("event: ")) {
      event = line.slice(7);
    } else if (line.startsWith("event:")) {
      event = line.slice(6);
    } else if (line.startsWith("id: ")) {
      id = line.slice(4);
    } else if (line.startsWith("id:")) {
      id = line.slice(3);
    }
  }

  return data ? { event, data, id } : undefined;
}
