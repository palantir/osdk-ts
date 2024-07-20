import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { Todo } from './Todo.js';

export interface Person extends ObjectTypeDefinition<'Person', Person>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'A person';
  links: {
    Friends: ObjectTypeLinkDefinition<Person, true>;
    Todos: ObjectTypeLinkDefinition<Todo, true>;
  };
  primaryKeyApiName: 'email';
  primaryKeyType: 'string';
  properties: {
    /**
     * (no ontology metadata)
     */
    email: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const Person: Person = {
  osdkMetadata: $osdkMetadata,
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
      nullable: false,
    },
  },
  type: 'object',
};
