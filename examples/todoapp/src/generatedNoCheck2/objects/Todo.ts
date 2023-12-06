import type { ObjectTypeDefinition } from '@osdk/api';

export const Todo = {
  apiName: 'Todo',
  description: 'Its a todo item.',
  primaryKeyType: 'string',
  links: {},
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    title: {
      multiplicity: false,
      description: 'The text of the todo',
      type: 'string',
      nullable: true,
    },
    isComplete: {
      multiplicity: false,
      type: 'boolean',
      nullable: true,
    },
  },
} satisfies ObjectTypeDefinition<'Todo', never>;
