import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata';
import { Employee } from './objects/Employee';
import { ObjectTypeWithAllPropertyTypes } from './objects/ObjectTypeWithAllPropertyTypes';
import { Person } from './objects/Person';
import { Todo } from './objects/Todo';

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
