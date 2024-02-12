import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';

import type { TodoDef } from './Todo.js';
export interface PersonDef extends ObjectTypeDefinition<'Person'> {
  type: 'object';
  apiName: 'Person';
  description: 'A person';
  primaryKeyType: 'string';
  links: { Todos: ObjectTypeLinkDefinition<TodoDef, true>; Friends: ObjectTypeLinkDefinition<PersonDef, true> };
  properties: {
    email: {
      multiplicity: false;
      type: 'string';
      nullable: false;
    };
  };
}

export const Person: PersonDef = {
  type: 'object',
  apiName: 'Person',
  description: 'A person',
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
