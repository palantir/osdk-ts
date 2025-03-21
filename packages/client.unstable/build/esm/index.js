import { conjureFetch } from 'conjure-lite';

// src/generated/object-set-service/api/ObjectSetService/createObjectSet.ts
async function createTemporaryObjectSet(ctx, request) {
  return conjureFetch(ctx, `/objectSets/temporary`, "POST", request);
}
async function getBulkLinksPage(ctx, request) {
  return conjureFetch(ctx, `/bulk-links`, "PUT", request);
}
async function bulkLoadOntologyEntities(ctx, onBehalfOf, request) {
  return conjureFetch(ctx, `/ontology/ontology/bulkLoadEntities`, "POST", request);
}
async function getLinkTypesForObjectTypes(ctx, request) {
  return conjureFetch(ctx, `/ontology/linkTypesForObjectTypes`, "POST", request);
}
async function loadAllOntologies(ctx, request) {
  return conjureFetch(ctx, `/ontology/ontology/ontologies/load/all`, "POST", request);
}

export { bulkLoadOntologyEntities, createTemporaryObjectSet, getBulkLinksPage, getLinkTypesForObjectTypes, loadAllOntologies };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map