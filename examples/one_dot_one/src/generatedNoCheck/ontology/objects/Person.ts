import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';
import type { MultiLink, OntologyObject } from '@osdk/legacy-client';
import type { Todo } from './Todo';

/**
 * A person
 */
export interface Person extends OntologyObject {
  readonly __apiName: 'Person';
  readonly __primaryKey: string;
  readonly email: string | undefined;
  readonly Todos: MultiLink<Todo>;
  readonly Friends: MultiLink<Person>;
}

import type { TodoDef } from './Todo';
export interface PersonDef extends ObjectTypeDefinition<'Person'> {
  type: 'object';
  apiName: 'Person';
  description: 'A person';
  primaryKeyType: 'string';
  links: { Todos: ObjectTypeLinkDefinition<TodoDef, true>; Friends: ObjectTypeLinkDefinition<PersonDef, true> };
  properties: {
    email: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
  };
}

export const Person: PersonDef = {
  type: 'object',
  apiName: 'Person',
  description: 'A person',
  primaryKeyType: 'string',
  links: {
    Todos: {
      multiplicity: true,
      targetType: 'Todo',
    },
    Friends: {
      multiplicity: true,
      targetType: 'Person',
    },
  } as const,
  properties: {
    email: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
};
