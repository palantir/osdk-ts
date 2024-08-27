import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';
import type { MultiLink, OntologyObject } from '@osdk/legacy-client';
import type { Todo } from './Todo.js';

/**
 * A person
 */
export interface Person extends OntologyObject {
  /** @deprecated please migrate to $apiName instead */
  readonly __apiName: 'Person' & {
    /** @deprecated please migrate to pivotTo(Todos) instead */ searchAroundTodos?: never;
    /** @deprecated please migrate to pivotTo(Friends) instead */ searchAroundFriends?: never;
  };
  /** @deprecated please migrate to $primaryKey instead */
  readonly __primaryKey: string;
  readonly $apiName: 'Person';
  readonly $primaryKey: string;
  readonly email: string | undefined;
  readonly Todos: MultiLink<Todo>;
  readonly Friends: MultiLink<Person>;
}

import type { TodoDef } from './Todo.js';
export interface PersonDef extends ObjectTypeDefinition<'Person', PersonDef> {
  apiName: 'Person';
  description: 'A person';
  links: {
    Friends: ObjectTypeLinkDefinition<PersonDef, true>;
    Todos: ObjectTypeLinkDefinition<TodoDef, true>;
  };
  primaryKeyApiName: 'email';
  primaryKeyType: 'string';
  properties: {
    email: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
  };
  type: 'object';
}

export const Person: PersonDef = {
  apiName: 'Person',
  description: 'A person',
  links: {
    Todos: {
      multiplicity: true,
      targetType: 'Todo',
    },
    Friends: {
      multiplicity: true,
      targetType: 'Person',
    },
  },
  primaryKeyApiName: 'email',
  primaryKeyType: 'string',
  properties: {
    email: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'object',
};
