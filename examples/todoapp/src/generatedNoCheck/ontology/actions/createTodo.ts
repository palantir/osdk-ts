import type { ActionDefinition } from '@osdk/api';

export const createTodo = {
  type: 'action',
  apiName: 'createTodo',
  parameters: {
    Todo: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    is_complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: false,
    },
  },
  description: 'Creates Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
} satisfies ActionDefinition<'createTodo', 'Todo'>;
