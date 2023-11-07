import type { OntologyDefinition } from '@osdk/api';
import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import { actionTakesAllParameterTypes } from './actions/actionTakesAllParameterTypes';
import { ObjectTypeWithAllPropertyTypes } from './objects/ObjectTypeWithAllPropertyTypes';
import { Person } from './objects/Person';
import { Todo } from './objects/Todo';
import type { Actions } from './ontologyActions';
import type { Objects } from './ontologyObjects';

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
  actions: {
    actionTakesAllParameterTypes,
  },
} satisfies OntologyDefinition<'Todo' | 'Person' | 'ObjectTypeWithAllPropertyTypes', 'actionTakesAllParameterTypes'>;

export interface Ontology extends ClientOntology<typeof Ontology> {
  objects: Objects;
  actions: Actions;
}
