import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';

import type { PersonDef } from './Person.js';
export interface TodoDef extends ObjectTypeDefinition<'Todo'> {
  type: 'object';
  apiName: 'Todo';
  description: 'Its a todo item.';
  primaryKeyType: 'integer';
  links: { Assignee: ObjectTypeLinkDefinition<PersonDef, false> };
  properties: {
    id: {
      multiplicity: false;
      type: 'integer';
      nullable: false;
    };
    body: {
      multiplicity: false;
      description: 'The text of the todo';
      type: 'string';
      nullable: true;
    };
    text: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    priority: {
      multiplicity: false;
      type: 'integer';
      nullable: true;
    };
    complete: {
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
