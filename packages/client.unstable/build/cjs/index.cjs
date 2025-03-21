'use strict';

var conjureLite = require('conjure-lite');

// src/generated/object-set-service/api/ObjectSetService/createObjectSet.ts
async function createTemporaryObjectSet(ctx, request) {
  return conjureLite.conjureFetch(ctx, `/objectSets/temporary`, "POST", request);
}
async function getBulkLinksPage(ctx, request) {
  return conjureLite.conjureFetch(ctx, `/bulk-links`, "PUT", request);
}
async function bulkLoadOntologyEntities(ctx, onBehalfOf, request) {
  return conjureLite.conjureFetch(ctx, `/ontology/ontology/bulkLoadEntities`, "POST", request);
}
async function getLinkTypesForObjectTypes(ctx, request) {
  return conjureLite.conjureFetch(ctx, `/ontology/linkTypesForObjectTypes`, "POST", request);
}
async function loadAllOntologies(ctx, request) {
  return conjureLite.conjureFetch(ctx, `/ontology/ontology/ontologies/load/all`, "POST", request);
}

exports.bulkLoadOntologyEntities = bulkLoadOntologyEntities;
exports.createTemporaryObjectSet = createTemporaryObjectSet;
exports.getBulkLinksPage = getBulkLinksPage;
exports.getLinkTypesForObjectTypes = getLinkTypesForObjectTypes;
exports.loadAllOntologies = loadAllOntologies;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map