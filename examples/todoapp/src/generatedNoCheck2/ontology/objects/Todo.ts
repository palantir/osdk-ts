import type { ObjectTypeDefinition } from '@osdk/api';

export interface TodoDef extends ObjectTypeDefinition<'Todo'> {
  type: 'object';
  apiName: 'Todo';
  description: 'Its a todo item.';
  primaryKeyType: 'string';
  links: {};
  properties: {
    id: {
      multiplicity: false;
      type: 'string';
      nullable: false;
    };
    title: {
      multiplicity: false;
      description: 'The text of the todo';
      type: 'string';
      nullable: true;
    };
    isComplete: {
      multiplicity: false;
      type: 'boolean';
      nullable: true;
    };
  };
}

export const Todo: TodoDef = {
  type: 'object',
  apiName: 'Todo',
  description: 'Its a todo item.',
  primaryKeyType: 'string',
  links: {} as const,
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
};
