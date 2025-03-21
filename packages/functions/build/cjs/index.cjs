'use strict';

// src/edits/createEditBatch.ts
var InMemoryEditBatch = class {
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
};
function createEditBatch(_client) {
  return new InMemoryEditBatch();
}

exports.createEditBatch = createEditBatch;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map