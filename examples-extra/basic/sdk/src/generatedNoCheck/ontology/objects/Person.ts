import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

import type { Todo } from './Todo.js';

export interface Person extends ObjectTypeDefinition<'Person', Person> {
  description: 'A person';
  links: {
    Friends: ObjectTypeLinkDefinition<Person, true>;
    Todos: ObjectTypeLinkDefinition<Todo, true>;
  };
  primaryKeyApiName: 'email';
  primaryKeyType: 'string';
  properties: {
    email: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const Person: Person = {
  apiName: 'Person',
  description: 'A person',
  links: {
    Todos: {
      multiplicity: true,
      targetType: 'Todo',
    },
    Friends: {
      multiplicity: true,
      targetType: 'Person',
    },
  },
  primaryKeyApiName: 'email',
  primaryKeyType: 'string',
  properties: {
    email: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
  },
  type: 'object',
};
