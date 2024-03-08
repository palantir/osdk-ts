import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface Todo extends ObjectTypeDefinition<'Todo', Todo> {
  description: 'Its a todo item.';
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    isComplete: PropertyDef<'boolean', 'nullable', 'single'>;
    title: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const Todo: Todo = {
  apiName: 'Todo',
  description: 'Its a todo item.',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
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
  type: 'object',
};
