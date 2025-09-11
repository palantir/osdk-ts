#!/usr/bin/env node
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

// This script is a placeholder for compatibility purposes.
// The functionality has been moved to updateDocsSnippets.mjs.

const message = `
NOTE: The generateExample.mjs script is now deprecated.

The functionality has been combined with updateDocsSnippets.mjs.
Please use that script instead to generate examples from typescript-sdk-docs.
`;

console.log(message);

// Just call the updateDocsSnippets.mjs script
import('./updateDocsSnippets.mjs').then(module => {
  console.log('Redirected to updateDocsSnippets.mjs');
}).catch(error => {
  console.error('Error importing updateDocsSnippets.mjs:', error);
  process.exit(1);
});