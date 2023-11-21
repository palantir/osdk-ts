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

import { describe, expect, it } from "vitest";
import { parseStreamedResponse } from "./parseStreamedResponse";

describe(parseStreamedResponse, () => {
  const utf8encoder = new TextEncoder();

  it("handles basic parsing", async () => {
    const json = JSON.stringify({ data: [{ id: 1 }, { id: 2 }] });
    const data = [utf8encoder.encode(json)];

    const parsed = [];
    for await (const item of parseStreamedResponse(toAsyncIterable(data))) {
      parsed.push(item);
    }

    expect(parsed.length).toEqual(2);
    expect(parsed[0].id).toEqual(1);
    expect(parsed[1].id).toEqual(2);
  });

  it("handles chunks that split within a utf8 character", async () => {
    const json = JSON.stringify({ data: [{ currency: "€", amount: 5 }] });
    const encoded = utf8encoder.encode(json);
    const splitIdx = 23;
    const data = [encoded.slice(0, splitIdx), encoded.slice(splitIdx)];

    const parsed = [];
    for await (const item of parseStreamedResponse(toAsyncIterable(data))) {
      parsed.push(item);
    }

    expect(parsed.length).toEqual(1);
    expect(parsed[0].currency).toEqual("€");
    expect(parsed[0].amount).toEqual(5);
  });

  it("handles nested objects in the response", async () => {
    const json = JSON.stringify({ data: [{ d: { id: 1 } }, { d: { id: 2 } }] });
    const data = [utf8encoder.encode(json)];

    const parsed = [];
    for await (const item of parseStreamedResponse(toAsyncIterable(data))) {
      parsed.push(item);
    }

    expect(parsed.length).toEqual(2);
    expect(parsed[0].d.id).toEqual(1);
    expect(parsed[1].d.id).toEqual(2);
  });

  it("handles objects split across more than 2 chunks", async () => {
    const json = JSON.stringify({ data: [{ currency: "€", amount: 5 }] });
    const encoded = utf8encoder.encode(json);
    const firstSplitIdx = 23;
    const secondSplitIdx = 28;
    const data = [
      encoded.slice(0, firstSplitIdx),
      encoded.slice(firstSplitIdx, secondSplitIdx),
      encoded.slice(secondSplitIdx),
    ];

    const parsed = [];
    for await (const item of parseStreamedResponse(toAsyncIterable(data))) {
      parsed.push(item);
    }

    expect(parsed.length).toEqual(1);
    expect(parsed[0].currency).toEqual("€");
    expect(parsed[0].amount).toEqual(5);
  });
});

function toAsyncIterable<T>(data: T[]): AsyncIterable<T> {
  let i = 0;
  return {
    [Symbol.asyncIterator]: () => ({
      next() {
        const done = i === data.length;
        return Promise.resolve({ value: data[i++], done });
      },
    }),
  };
}
