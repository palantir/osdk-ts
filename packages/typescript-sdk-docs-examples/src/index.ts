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
 * This file exports the generated SDK and documentation examples
 */

// Export the generated SDK
export * from './generatedNoCheck/index.js';

// Export documentation sections schema and data
export const DOCS_SCHEMA_PATH = './osdk-docs-schema.json';
export const DOCS_SECTIONS_PATH = './osdk-docs-sections.json';
export const DOCS_MAPPING_PATH = './osdk-docs-mapping.json';

// Provide the path to generated examples
export const EXAMPLES_DIR = '../examples';