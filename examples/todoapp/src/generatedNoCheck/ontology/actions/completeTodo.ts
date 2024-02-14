import { ActionDefinition } from '@osdk/api';

export const completeTodo = {
  type: 'action',
  apiName: 'completeTodo',
  parameters: {
    Todo: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Todo',
      },
      nullable: false,
      description: 'A todo Object',
    },
    is_complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: false,
    },
  },
  description: 'Completes Todo',
  modifiedEntities: {
    Todo: {
      created: false,
      modified: true,
    },
  },
} satisfies ActionDefinition<'completeTodo', 'Todo'>;
