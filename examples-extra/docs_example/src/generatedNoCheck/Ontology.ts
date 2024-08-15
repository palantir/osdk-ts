import type { OntologyDefinition } from '@osdk/api';
import * as Actions from './ontology/actions';
import * as Objects from './ontology/objects';
import { OntologyMetadata } from './OntologyMetadata';

export interface Ontology extends OntologyDefinition<'Employee' | 'equipment' | 'Office' | 'Todo'> {
  metadata: OntologyMetadata;
  objects: {
    Employee: Objects.Employee;
    equipment: Objects.equipment;
    Office: Objects.Office;
    Todo: Objects.Todo;
  };
  actions: {
    completeTodo: typeof Actions.completeTodo;
    createOffice: typeof Actions.createOffice;
    createOfficeAndEmployee: typeof Actions.createOfficeAndEmployee;
    createTodo: typeof Actions.createTodo;
    moveOffice: typeof Actions.moveOffice;
    promoteEmployee: typeof Actions.promoteEmployee;
    promoteEmployeeObject: typeof Actions.promoteEmployeeObject;
  };
  queries: {};
  interfaces: {};
}

export const Ontology: Ontology = {
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
  queries: {},
  interfaces: {},
};
