import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata';
import * as Actions from './ontology/actions/index';
import * as Objects from './ontology/objects';

const _Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Todo: Objects.Todo,
    Employee: Objects.Employee,
    Office: Objects.Office,
    equipment: Objects.equipment,
  },
  actions: {
    createTodo: Actions.createTodo,
    completeTodo: Actions.completeTodo,
    promoteEmployee: Actions.promoteEmployee,
    promoteEmployeeObject: Actions.promoteEmployeeObject,
    createOffice: Actions.createOffice,
    createOfficeAndEmployee: Actions.createOfficeAndEmployee,
    moveOffice: Actions.moveOffice,
  },
  queries: {
    // TODO
  },
  interfaces: {},
} satisfies OntologyDefinition<'Todo' | 'Employee' | 'Office' | 'equipment'>;

type _Ontology = typeof _Ontology;
export interface Ontology extends _Ontology {}
export const Ontology = _Ontology as Ontology;
