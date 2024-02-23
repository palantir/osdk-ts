import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface Todo extends ObjectTypeDefinition<'Todo', Todo> {
  description: 'Its a todo item.';
  primaryKeyType: 'string';
  links: {};
  properties: {
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    title: PropertyDef<'string', 'nullable', 'single'>;
    isComplete: PropertyDef<'boolean', 'nullable', 'single'>;
  };
}

export const Todo: Todo = {
  type: 'object',
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
};
