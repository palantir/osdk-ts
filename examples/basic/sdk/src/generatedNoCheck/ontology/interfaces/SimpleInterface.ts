import type { InterfaceDefinition } from '@osdk/api';

export const SimpleInterface = {
  apiName: 'SimpleInterface',
  description: 'Its a todo item.',
  properties: {
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
} satisfies InterfaceDefinition<'SimpleInterface', ''>;
