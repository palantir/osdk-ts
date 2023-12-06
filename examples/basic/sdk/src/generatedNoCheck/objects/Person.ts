import type { ObjectDefinition } from '@osdk/api';

export const Person = {
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
} satisfies ObjectDefinition<'Person', 'Todo' | 'Person'>;
