import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata.js';
import { Employee } from './objects/Employee.js';
import { ObjectTypeWithAllPropertyTypes } from './objects/ObjectTypeWithAllPropertyTypes.js';
import { Person } from './objects/Person.js';
import { Todo } from './objects/Todo.js';

export const Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Todo: Todo,
    Person: Person,
    Employee: Employee,
    ObjectTypeWithAllPropertyTypes: ObjectTypeWithAllPropertyTypes,
  },
  actions: {},
  queries: {},
} satisfies OntologyDefinition<'Todo' | 'Person' | 'Employee' | 'ObjectTypeWithAllPropertyTypes'>;
