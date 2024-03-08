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

export interface PersonDef extends ObjectTypeDefinition<'Person', Person> {
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
