import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { Person } from './Person.js';

export interface Todo extends ObjectTypeDefinition<'Todo', Todo>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Its a todo item.';
  links: {
    Assignee: ObjectTypeLinkDefinition<Person, false>;
  };
  primaryKeyApiName: 'id';
  primaryKeyType: 'integer';
  properties: {
    body: PropertyDef<'string', 'nullable', 'single'>;
    complete: PropertyDef<'boolean', 'nullable', 'single'>;
    id: PropertyDef<'integer', 'non-nullable', 'single'>;
    priority: PropertyDef<'integer', 'nullable', 'single'>;
    text: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const Todo: Todo = {
  osdkMetadata: $osdkMetadata,
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
  type: 'object',
};
