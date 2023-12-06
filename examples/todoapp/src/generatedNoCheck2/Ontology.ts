import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata';
import { Todo } from './objects/Todo';

export const Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Todo: Todo,
  },
  actions: {},
  queries: {},
} satisfies OntologyDefinition<'Todo'>;
