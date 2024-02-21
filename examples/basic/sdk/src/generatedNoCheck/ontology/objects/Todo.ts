import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

import type { Person } from './Person.js';

export interface Todo extends ObjectTypeDefinition<'Todo', Todo> {
  description: 'Its a todo item.';
  primaryKeyType: 'integer';
  links: {
    Assignee: ObjectTypeLinkDefinition<Person, false>;
  };
  properties: {
    id: PropertyDef<'integer', 'non-nullable', 'single'>;
    body: PropertyDef<'string', 'nullable', 'single'>;
    text: PropertyDef<'string', 'nullable', 'single'>;
    priority: PropertyDef<'integer', 'nullable', 'single'>;
    complete: PropertyDef<'boolean', 'nullable', 'single'>;
  };
}

export const Todo: Todo = {
  type: 'object',
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
};
