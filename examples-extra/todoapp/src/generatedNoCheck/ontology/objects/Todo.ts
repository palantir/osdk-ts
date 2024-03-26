import type { ObjectTypeDefinition } from '@osdk/api';
import type { OntologyObject } from '@osdk/legacy-client';

/**
 * Its a todo item.
 */
export interface Todo extends OntologyObject {
  /** @deprecated please migrate to $apiName instead */
  readonly __apiName: 'Todo';
  /** @deprecated please migrate to $primaryKey instead */
  readonly __primaryKey: string;
  readonly $apiName: 'Todo';
  readonly $primaryKey: string;
  readonly id: string | undefined;
  readonly isComplete: boolean | undefined;
  /**
   * The text of the todo
   */
  readonly title: string | undefined;
}

export interface TodoDef extends ObjectTypeDefinition<'Todo', Todo> {
  apiName: 'Todo';
  description: 'Its a todo item.';
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
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
  type: 'object';
}

export const Todo: TodoDef = {
  apiName: 'Todo',
  description: 'Its a todo item.',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
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
  type: 'object',
};
