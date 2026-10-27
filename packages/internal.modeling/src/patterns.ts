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

/** Translates the shared Unicode regex subset to Pydantic's Rust regex engine. */
export function pydanticPattern(pattern: string): string {
  const source = new RegExp(pattern, "u").source;

  // Can we explain these checks?
  if (/\(\?(?!:)|\[\^?\]|&&|~~|--/u.test(source)) {
    throw new Error("Unsupported portable regex construct");
  }

  let result = "";
  let characterClass = false;
  for (let index = 0; index < source.length; index++) {
    const character = source[index];
    if (character === "\\") {
      const escaped = source[++index];
      if (
        /[A-Za-z0-9]/u.test(escaped) &&
        !["n", "r", "f", "t"].includes(escaped)
      )
        throw new Error("Unsupported portable regex escape");
      result += `\\${escaped}`;
    } else {
      if (character === "[") characterClass = true;
      if (character === "]") characterClass = false;
      // ECMAScript dot excludes all four line terminators, not only LF.
      result +=
        character === "." && !characterClass
          ? "[^\\r\\n\\u2028\\u2029]"
          : character;
    }
  }
  return result;
}
