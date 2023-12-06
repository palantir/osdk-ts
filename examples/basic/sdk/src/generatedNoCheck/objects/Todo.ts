import type { ObjectDefinition } from '@osdk/api';

export const Todo = {
  apiName: 'Todo',
  description: 'Its a todo item.',
  primaryKeyType: 'integer',
  links: {
    Assignee: {
      multiplicity: false,
      targetType: 'Person',
    },
  },
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    body: {
      multiplicity: false,
      description: 'The text of the todo',
      type: 'string',
      nullable: true,
    },
    text: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    priority: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: true,
    },
  },
} satisfies ObjectDefinition<'Todo', 'Person'>;
