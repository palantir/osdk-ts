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

export async function* parseStreamedResponse(
  asyncIterable: AsyncIterable<Uint8Array>,
) {
  const utf8decoder = new TextDecoder("utf-8");
  let accumulatedResponse = "";
  let parsedStart = false;

  for await (const chunkValue of asyncIterable) {
    const chunk = utf8decoder.decode(chunkValue);

    accumulatedResponse += chunk;
    if (!parsedStart && accumulatedResponse.startsWith(`{"data":[`)) {
      accumulatedResponse = accumulatedResponse.replace(`{"data":[`, "");
      parsedStart = true;
    }

    let openBracesCount = 0;
    let startPos = 0;
    for (let i = 0; i < accumulatedResponse.length; i++) {
      if (accumulatedResponse[i] === "{") {
        if (openBracesCount === 0) {
          startPos = i;
        }
        openBracesCount++;
      } else if (accumulatedResponse[i] === "}") {
        openBracesCount--;
        if (openBracesCount === 0) {
          const jsonObject = accumulatedResponse.slice(startPos, i + 1);
          yield JSON.parse(jsonObject);
          accumulatedResponse = accumulatedResponse.slice(i + 1);
          i = -1;
        }
      }
    }
  }
}

export async function* iterateReadableStream(
  readableStream: ReadableStreamDefaultReader<Uint8Array>,
) {
  let res = await readableStream.read();
  while (!res.done) {
    yield res.value;
    res = await readableStream.read();
  }
}
