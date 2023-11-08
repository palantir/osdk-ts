import { ActionDefinition } from '@osdk/api';

export const createTodo = {
  apiName: 'createTodo',
  parameters: {},
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
} satisfies ActionDefinition<'createTodo', 'Todo'>;
