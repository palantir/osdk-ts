import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata';
import * as Actions from './ontology/actions/index';
import * as Objects from './ontology/objects';

const _Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Todo: Objects.Todo,
  },
  actions: {
    completeTodo: Actions.completeTodo,
    createTodo: Actions.createTodo,
  },
  queries: {
    // TODO
  },
  interfaces: {},
} satisfies OntologyDefinition<'Todo'>;

type _Ontology = typeof _Ontology;
export interface Ontology extends _Ontology {}
export const Ontology = _Ontology as Ontology;
