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

/**
 * Escapes arbitrary ontology metadata (descriptions, display names, etc.) so it
 * can be safely embedded inside a generated JSDoc block comment.
 *
 * A block comment is terminated by the first star-slash sequence, so if that
 * sequence appears in the metadata it would prematurely close the comment and
 * leave the remainder of the text as invalid TypeScript, breaking SDK
 * generation. We insert a backslash between the star and slash to neutralize
 * it. This matches TSDoc's escaping rules, so renderers that understand TSDoc
 * still display the original text.
 */
export function escapeJsDocText(text: string): string {
  return text.replace(/\*\//gu, "*\\/");
}
