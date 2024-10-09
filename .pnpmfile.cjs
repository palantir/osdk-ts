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

function readPackage(pkg, context) {
  if (
    (pkg.name === "tsup" && pkg.dependencies?.rollup === "^4.19.0")
    || (pkg.name === "vite" && pkg.dependencies?.rollup === "^4.13.0")
  ) {
    pkg.dependencies = {
      ...pkg.dependencies,
      rollup: "^4.22.4",
    };
    context.log("bar@1 => bar@2 in dependencies of foo");
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
