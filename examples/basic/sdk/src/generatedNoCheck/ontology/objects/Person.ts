import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

import type { Todo } from './Todo.js';

export interface Person extends ObjectTypeDefinition<'Person', Person> {
  description: 'A person';
  primaryKeyApiName: 'email';
  primaryKeyType: 'string';
  links: {
    Todos: ObjectTypeLinkDefinition<Todo, true>;
    Friends: ObjectTypeLinkDefinition<Person, true>;
  };
  properties: {
    email: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const Person: Person = {
  type: 'object',
  apiName: 'Person',
  description: 'A person',
  primaryKeyApiName: 'email' as const,
  primaryKeyType: 'string',
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
  properties: {
    email: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
  },
};
