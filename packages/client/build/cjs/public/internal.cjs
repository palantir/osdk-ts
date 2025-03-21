'use strict';

var chunkMCQVHD2F_cjs = require('../chunk-MCQVHD2F.cjs');
var chunkEY52J5Z4_cjs = require('../chunk-EY52J5Z4.cjs');
require('../chunk-Q7SFCCGT.cjs');

// src/public-utils/createAndFetchTempObjectSetRid.ts
async function createAndFetchTempObjectSetRid(client, objectSet) {
  const response = await chunkEY52J5Z4_cjs.OntologyObjectSet_exports.createTemporary(client, await client[chunkEY52J5Z4_cjs.additionalContext].ontologyRid, {
    objectSet: chunkMCQVHD2F_cjs.getWireObjectSet(objectSet)
  });
  return response.objectSetRid;
}

// src/public-utils/hydrateObjectSetFromRid.ts
function hydrateObjectSetFromRid(client, definition, rid) {
  return chunkMCQVHD2F_cjs.createObjectSet(definition, client[chunkEY52J5Z4_cjs.additionalContext], {
    type: "intersect",
    objectSets: [{
      type: "base",
      objectType: definition.apiName
    }, {
      type: "reference",
      reference: rid
    }]
  });
}

Object.defineProperty(exports, "hydrateAttachmentFromRid", {
  enumerable: true,
  get: function () { return chunkMCQVHD2F_cjs.hydrateAttachmentFromRid; }
});
exports.createAndFetchTempObjectSetRid = createAndFetchTempObjectSetRid;
exports.hydrateObjectSetFromRid = hydrateObjectSetFromRid;
//# sourceMappingURL=internal.cjs.map
//# sourceMappingURL=internal.cjs.map