import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata';
import * as Actions from './ontology/actions/index';
import * as Objects from './ontology/objects';

const _Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Employee: Objects.Employee,
    equipment: Objects.equipment,
    Office: Objects.Office,
    Todo: Objects.Todo,
  },
  actions: {
    completeTodo: Actions.completeTodo,
    createOffice: Actions.createOffice,
    createOfficeAndEmployee: Actions.createOfficeAndEmployee,
    createTodo: Actions.createTodo,
    moveOffice: Actions.moveOffice,
    promoteEmployee: Actions.promoteEmployee,
    promoteEmployeeObject: Actions.promoteEmployeeObject,
  },
  queries: {
    // TODO
  },
  interfaces: {},
} satisfies OntologyDefinition<'Employee' | 'equipment' | 'Office' | 'Todo'>;

type _Ontology = typeof _Ontology;
export interface Ontology extends _Ontology {}
export const Ontology = _Ontology as Ontology;
