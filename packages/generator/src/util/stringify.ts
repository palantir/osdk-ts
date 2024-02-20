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

/**
 * A function for changing the stringified key/value pairs of an object.
 *
 * @param value The value of the key/value pair.
 * @param defaultValueFormatter The function that would be called if this customizer wasnt used
 * @param key The key of the key/value pair.
 * @param defaultKeyFormatter The function that would be called if this customizer wasnt used
 *
 * @returns A string, a tuple of strings, or undefined.
 *          If a string is returned, it will be used as the value of the key/value pair.
 *          If a tuple of strings is returned, the first string will be used as the key of the key/value pair
 *          and the second string will be used as the value of the key/value pair.
 *          If undefined is returned, the pair will be removed
 */
type Customizer<K, V extends {}> = (
  value: V,
  defaultValueFormatter: (value: any) => string,
  key: K,
  defaultKeyFormatter: (key: string) => string,
) => [string, string] | string | undefined;
const defaultCustomizer: Customizer<string, any> = (
  value,
  defaultValueFormatter,
  key,
  defaultKeyFormatter,
) => {
  return [defaultKeyFormatter(key), defaultValueFormatter(value)];
};

export function stringify<T extends Record<string, any>>(
  obj: T,
  customizer: {
    [K in keyof T | "*"]?: Customizer<K, T[K]>;
  } = {},
  separator = ",\n",
) {
  const defaultKeyFormatter = (key: string) => `${JSON.stringify(key)}`;
  const entries: Array<string> = [];

  for (const [key, value] of Object.entries(obj)) {
    const res =
      (customizer[key as keyof T] ?? customizer["*"] ?? defaultCustomizer)(
        value,
        (value) => JSON.stringify(value, null, 2),
        key as any,
        defaultKeyFormatter,
      );

    if (res) {
      if (typeof res === "string") {
        entries.push(`${defaultKeyFormatter(key)}: ${res}`);
      } else {
        entries.push(`${res[0]}: ${res[1]}`);
      }
    }
  }
  return entries.join(separator);
}
