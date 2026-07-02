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

/**
 * A snapshot of objects loaded for one object type, ready to be folded
 * into the chat's system prompt.
 */
export interface LoadedObjectContext {
  /** API name of the object type. Used as the section heading. */
  apiName: string;
  /** Objects fetched for this type (typically `Osdk.Instance` values). */
  objects: ReadonlyArray<unknown>;
}

/**
 * Serializes the loaded objects into a single block of text suitable for
 * appending to a system prompt. Types with no objects are skipped, and an
 * empty string is returned when nothing is loaded so callers can leave the
 * prompt untouched.
 */
export function buildObjectContext(
  loaded: ReadonlyArray<LoadedObjectContext>
): string {
  const sections = loaded
    .filter((entry) => entry.objects.length > 0)
    .map((entry) => {
      let serialized: string;
      try {
        // Functions and symbols on OSDK instances are dropped by
        // JSON.stringify; the replacer additionally strips internal
        // `$`-prefixed metadata (`$apiName`, `$objectType`, `$rid`, …),
        // keeping only the data fields plus the identifiers a model would
        // cite (`$primaryKey`, `$title`).
        serialized = JSON.stringify(entry.objects, stripInternalMeta, 2);
        // Escape `<` inside the JSON body so an object field value cannot
        // synthesize a closing `</objects>` tag and break out of the
        // container. `<` is valid JSON and renders identically to `<`
        // when the model parses the string, so no fidelity is lost.
        serialized = serialized.replaceAll("<", "\\u003c");
      } catch {
        serialized = "[]";
      }
      const apiName = escapeXmlAttribute(entry.apiName);
      return (
        `<objects api-name="${apiName}" count="${entry.objects.length}">\n` +
        serialized +
        `\n</objects>`
      );
    });

  if (sections.length === 0) {
    return "";
  }

  return [
    "You have access to the following Foundry objects. Use them as the " +
      "source of truth when answering questions about this data.",
    `<foundry-objects>\n${sections.join("\n")}\n</foundry-objects>`,
  ].join("\n\n");
}

/** Escapes the characters that would break out of an XML double-quoted attribute. */
function escapeXmlAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Identifiers kept from the `$`-prefixed OSDK metadata when serializing. */
const KEPT_META_KEYS: ReadonlySet<string> = new Set(["$primaryKey", "$title"]);

/**
 * JSON.stringify replacer that drops internal `$`-prefixed metadata from
 * OSDK instances while retaining the data fields and the few identifiers a
 * model would reference.
 */
function stripInternalMeta(key: string, value: unknown): unknown {
  if (key.startsWith("$") && !KEPT_META_KEYS.has(key)) {
    return undefined;
  }
  return value;
}

/**
 * Appends `context` to `base`, returning `base` unchanged when there is no
 * context and `context` alone when there is no base prompt.
 */
export function combineSystemPrompt(
  base: string | undefined,
  context: string
): string | undefined {
  if (context.length === 0) {
    return base;
  }
  return base != null && base.length > 0 ? `${base}\n\n${context}` : context;
}
