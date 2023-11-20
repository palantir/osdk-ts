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

const START_TOKEN = new Uint8Array([123, 34, 100, 97, 116, 97, 34, 58, 91]); // `{"data":[`
const OBJECT_OPEN_CHAR_CODE = 123; // '{'
const OBJECT_CLOSE_CHAR_CODE = 125; // '}'

export async function* parseStreamedResponse(
  asyncIterable: AsyncIterable<Uint8Array>,
) {
  const utf8decoder = new TextDecoder("utf-8");

  let parsedStart = false;
  let prevChunks: Uint8Array[] = [];
  let openBracesCount = 0;

  for await (let chunk of asyncIterable) {
    // on the first chunk, skip the expected START_TOKEN if we see it
    let i = 0;
    if (!parsedStart) {
      parsedStart = true;
      if (startsWith(chunk, START_TOKEN)) {
        i = START_TOKEN.length;
      }
    }

    for (; i < chunk.length; i++) {
      // if we aren't currently parsing an object, skip until we find the next object start
      while (
        openBracesCount === 0 && chunk[i] !== OBJECT_OPEN_CHAR_CODE
        && i < chunk.length
      ) {
        i++;
      }

      // iterate through the chunk looking for the end of the current top level object
      let j = i;
      for (; j < chunk.length; j++) {
        const c = chunk[j];
        if (c === OBJECT_OPEN_CHAR_CODE) {
          openBracesCount++;
        } else if (c === OBJECT_CLOSE_CHAR_CODE) {
          openBracesCount--;

          // found a complete top level object, emit it
          if (0 === openBracesCount) {
            yield combineAndParse(
              utf8decoder,
              prevChunks,
              chunk.subarray(i, j + 1),
            );

            // if there was a prevChunk, we've consumed it now
            prevChunks = [];

            // advance the start index to the final '}' of the current object,
            // which lets us start seeking the beginning of the next object
            i = j;
            break;
          }
        }
      }

      // if we reached the end of our chunk before finding the end of the object
      // store off the relevant remainder of our current chunk and go grab the next one
      if (j === chunk.length) {
        prevChunks.push(chunk.subarray(i));
        break;
      }
    }
  }
}

function startsWith(a: Uint8Array, b: Uint8Array) {
  if (a.length < b.length) {
    return false;
  }

  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function combineAndParse(
  utf8decoder: TextDecoder,
  prev: Uint8Array[],
  curr: Uint8Array,
) {
  let str = "";
  for (const chunk of prev) {
    str += utf8decoder.decode(chunk, { stream: true });
  }
  str += utf8decoder.decode(curr);

  return JSON.parse(str);
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
