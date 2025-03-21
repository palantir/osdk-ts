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

class InMemoryEditBatch {
  edits = [];
  link(source, apiName, target) {
    this.edits.push({
      type: "addLink",
      source,
      apiName,
      target
    });
  }
  unlink(source, apiName, target) {
    this.edits.push({
      type: "removeLink",
      source,
      apiName,
      target
    });
  }
  create(obj, properties) {
    this.edits.push({
      type: "createObject",
      obj,
      properties
    });
  }
  delete(obj) {
    this.edits.push({
      type: "deleteObject",
      obj
    });
  }
  update(obj, properties) {
    this.edits.push({
      type: "updateObject",
      obj,
      properties
    });
  }
  getEdits() {
    return [...this.edits];
  }
}
export function createEditBatch() {
  return new InMemoryEditBatch();
}
//# sourceMappingURL=createEditBatch.js.map