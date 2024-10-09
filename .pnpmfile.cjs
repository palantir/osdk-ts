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
  }

  if (pkg.name === "msw" && pkg.dependencies?.["path-to-regexp"] === "^6.2.0") {
    pkg.dependencies = {
      ...pkg.dependencies,
      "path-to-regexp": "^6.3.0",
    };
  }

  if (
    pkg.dependencies?.micromatch === "^4.0.0"
    || pkg.dependencies?.micromatch === "^4.0.1"
    || pkg.dependencies?.micromatch === "^4.0.2"
    || pkg.dependencies?.micromatch === "^4.0.3"
    || pkg.dependencies?.micromatch === "^4.0.4"
    || pkg.dependencies?.micromatch === "^4.0.5"
    || pkg.dependencies?.micromatch === "^4.0.6"
    || pkg.dependencies?.micromatch === "^4.0.7"
  ) {
    pkg.dependencies.micromatch = "^4.0.8";
  }

  if (pkg.dependencies?.micromatch === "~4.0.7") {
    pkg.dependencies.micromatch = "~4.0.8";
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
