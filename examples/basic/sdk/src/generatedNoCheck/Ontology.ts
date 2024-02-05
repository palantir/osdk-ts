import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata.js';
import * as Actions from './ontology/actions/index.js';
import * as Interfaces from './ontology/interfaces.js';
import * as Objects from './ontology/objects.js';

const _Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Todo: Objects.Todo,
    Person: Objects.Person,
    Employee: Objects.Employee,
    ObjectTypeWithAllPropertyTypes: Objects.ObjectTypeWithAllPropertyTypes,
  },
  actions: {
    actionTakesAllParameterTypes: Actions.actionTakesAllParameterTypes,
    createTodo: Actions.createTodo,
  },
  queries: {
    // TODO
  },
  interfaces: {
    SimpleInterface: Interfaces.SimpleInterface,
  },
} satisfies OntologyDefinition<'Todo' | 'Person' | 'Employee' | 'ObjectTypeWithAllPropertyTypes'>;

type _Ontology = typeof _Ontology;
export interface Ontology extends _Ontology {}
export const Ontology = _Ontology as Ontology;
