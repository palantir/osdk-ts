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
 * Helper function that creates the shape of a conjure union in fewer bytes than manually declaring it (when compressed)
 *
 * e.g `{type:"base",base:{foo:5}}` becomes `a("base",{foo:5})`
 */
export function conjureUnionType(type, value) {
  return {
    type,
    [type]: value
  };
}
//# sourceMappingURL=conjureUnionType.js.map