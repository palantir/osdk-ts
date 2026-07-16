/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
 * Handlebars helper that lowercases a substituted token value.
 *
 * `npm publish` rejects package names containing uppercase characters, but a
 * project name supplied when scaffolding a template can contain them, so
 * template `package.json` `name` fields wrap their token as
 * `{{lowercase project}}`.
 *
 * Throws when the argument is not a string. An unresolved or misspelled token
 * is passed by Handlebars as `undefined`, so throwing surfaces the mistake as
 * a template-rendering error instead of silently producing an invalid
 * `package.json` name such as `"undefined"`.
 */
export function lowercase(value: unknown): string {
  if (typeof value !== "string") {
    throw new Error(
      `The "lowercase" template helper requires a string argument but received `
        + `a value of type "${typeof value}". This usually means the token passed `
        + `to it could not be resolved.`,
    );
  }
  return value.toLowerCase();
}
