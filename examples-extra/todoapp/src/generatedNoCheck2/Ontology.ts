import type { OntologyDefinition } from '@osdk/api';
import * as Actions from './ontology/actions/index';
import * as Objects from './ontology/objects';
import { OntologyMetadata } from './OntologyMetadata';

export interface Ontology extends OntologyDefinition<'Todo'> {
  metadata: OntologyMetadata;
  objects: {
    Todo: Objects.Todo;
  };
  actions: {
    completeTodo: typeof Actions.completeTodo;
    createTodo: typeof Actions.createTodo;
  };
  queries: {
    // TODO
  };
  interfaces: {};
}

export const Ontology: Ontology = {
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
};
