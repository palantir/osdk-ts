import { ActionDefinition } from '@osdk/api';

export const createTodo = {
  apiName: 'createTodo',
  parameters: {},
  description: 'Creates a new Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
} satisfies ActionDefinition<'createTodo', 'Todo'>;
