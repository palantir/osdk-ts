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

// Runtime default. ShadowHost imports `devtoolsCss` as a value, so a real
// module must exist in source — tests and pre-build resolution import
// "../styles.js" (a .d.ts alone would not resolve at runtime). The empty
// default means "no styles" until scripts/build-css.mjs overwrites the built
// build/esm/styles.js with the compiled shadow-scoped stylesheet.
export const devtoolsCss = "";
