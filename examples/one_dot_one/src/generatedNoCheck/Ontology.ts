import type { OntologyDefinition } from '@osdk/api';
import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import type { Objects } from './ontologyObjects';
import type { Actions } from './actions';
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
  actions: {
    actionTakesAllParameterTypes: {
      apiName: 'actionTakesAllParameterTypes',
      parameters: {
        objectSet: { multiplicity: false, type: { objectSet: 'Todo' }, nullable: false },
        object: { multiplicity: false, type: { object: 'Person' }, nullable: true },
        string: { multiplicity: false, type: 'string', nullable: false },
        'time-stamp': { multiplicity: false, type: 'timestamp', nullable: false },
        dateArray: { multiplicity: true, type: 'datetime', nullable: true },
        attachmentArray: { multiplicity: true, type: 'attachment', nullable: false },
      },
      description: 'An action which takes an Object Set',
      modifiedEntities: {
        Todo: { created: true, modified: true },
        ObjectTypeWithAllPropertyTypes: { created: false, modified: true },
      },
    },
  },
} satisfies OntologyDefinition<'Todo' | 'Person' | 'ObjectTypeWithAllPropertyTypes', 'actionTakesAllParameterTypes'>;

export interface Ontology extends ClientOntology<typeof Ontology> {
  objects: Objects;
  actions: Actions;
}
