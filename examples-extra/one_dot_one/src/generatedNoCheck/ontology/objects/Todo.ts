import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';
import type { OntologyObject, SingleLink } from '@osdk/legacy-client';
import type { Person } from './Person';

/**
 * Its a todo item.
 */
export interface Todo extends OntologyObject {
  readonly __apiName: 'Todo';
  readonly __primaryKey: number;
  /**
   * The text of the todo
   */
  readonly body: string | undefined;
  readonly complete: boolean | undefined;
  readonly id: number | undefined;
  readonly Assignee: SingleLink<Person>;
}

import type { PersonDef } from './Person';

export interface TodoDef extends ObjectTypeDefinition<'Todo', Todo> {
  apiName: 'Todo';
  description: 'Its a todo item.';
  links: {
    Assignee: ObjectTypeLinkDefinition<PersonDef, false>;
  };
  primaryKeyApiName: 'id';
  primaryKeyType: 'integer';
  properties: {
    id: {
      multiplicity: false;
      type: 'integer';
      nullable: true;
    };
    body: {
      multiplicity: false;
      description: 'The text of the todo';
      type: 'string';
      nullable: true;
    };
    complete: {
      multiplicity: false;
      type: 'boolean';
      nullable: true;
    };
  };
  type: 'object';
}

export const Todo: TodoDef = {
  apiName: 'Todo',
  description: 'Its a todo item.',
  links: {
    Assignee: {
      multiplicity: false,
      targetType: 'Person',
    },
  },
  primaryKeyApiName: 'id',
  primaryKeyType: 'integer',
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    body: {
      multiplicity: false,
      description: 'The text of the todo',
      type: 'string',
      nullable: true,
    },
    complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: true,
    },
  },
  type: 'object',
};
