import type { OntologyDefinition } from '@osdk/api';
import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import type { Actions } from './ontology/actions/Actions';
import { completeTodo } from './ontology/actions/completeTodo';
import { createTodo } from './ontology/actions/createTodo';
import type { Objects } from './ontology/objects/Objects';
import { Todo } from './ontology/objects/Todo';
import type { Queries } from './ontology/queries/Queries';

export const Ontology: {
  metadata: {
    ontologyRid: 'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e';
    ontologyApiName: 'ontology-d097f725-ab77-46cf-83c0-e3cb9186bff1';
    userAgent: '@osdk/cli/0.1.1';
  };
  objects: {
    Todo: typeof Todo;
  };
  actions: {
    createTodo: typeof createTodo;
    completeTodo: typeof completeTodo;
  };
  queries: {};
} = {
  metadata: {
    ontologyRid: 'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e' as const,
    ontologyApiName: 'ontology-d097f725-ab77-46cf-83c0-e3cb9186bff1' as const,
    userAgent: '@osdk/cli/0.1.1' as const,
  },
  objects: {
    Todo,
  },
  actions: {
    createTodo,
    completeTodo,
  },
  queries: {},
} satisfies OntologyDefinition<'Todo', 'createTodo' | 'completeTodo', never>;

export interface Ontology extends ClientOntology<typeof Ontology> {
  objects: Objects;
  actions: Actions;
  queries: Queries;
}
