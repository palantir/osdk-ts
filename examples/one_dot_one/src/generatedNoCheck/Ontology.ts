import type { OntologyDefinition } from '@osdk/api';
import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import type { Objects } from './ontologyObjects';
import { Todo } from './objects/Todo';
import { Person } from './objects/Person';
import { ObjectTypeWithAllPropertyTypes } from './objects/ObjectTypeWithAllPropertyTypes';

export const Ontology = {
  metadata: {
    ontologyRid: 'ridHere',
    ontologyApiName: 'OntologyApiName',
    userAgent: 'foundry-typescript-osdk/0.0.1',
  },
  objects: {
    Todo,
    Person,
    ObjectTypeWithAllPropertyTypes,
  },
} satisfies OntologyDefinition<'Todo' | 'Person' | 'ObjectTypeWithAllPropertyTypes'>;

export interface Ontology extends ClientOntology<typeof Ontology> {
  objects: Objects;
}
