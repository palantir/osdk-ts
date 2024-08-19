import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata.js';

export interface Ontology extends OntologyDefinition<never> {
  metadata: OntologyMetadata;
  objects: {};
  actions: {};
  queries: {};
  interfaces: {};
}

export const Ontology: Ontology = {
  metadata: OntologyMetadata,
  objects: {},
  actions: {},
  queries: {},
  interfaces: {},
};
