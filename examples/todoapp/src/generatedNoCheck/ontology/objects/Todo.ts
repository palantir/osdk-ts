import type { ObjectTypeDefinition } from '@osdk/api';
import type { OntologyObject } from '@osdk/legacy-client';

/**
 * Its a todo item.
 */
export interface Todo extends OntologyObject {
  readonly __apiName: 'Todo';
  readonly __primaryKey: string;
  readonly id: string | undefined;
  readonly isComplete: boolean | undefined;
  /**
   * The text of the todo
   */
  readonly title: string | undefined;
}

export interface TodoDef extends ObjectTypeDefinition<'Todo', Todo> {
  type: 'object';
  apiName: 'Todo';
  description: 'Its a todo item.';
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  links: {};
  properties: {
    id: {
      multiplicity: false;
      type: 'string';
      nullable: true;
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
  primaryKeyApiName: 'id' as const,
  primaryKeyType: 'string',
  links: {},
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: true,
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
