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
    /**
     *   display name: 'Body',
     *   description: The text of the todo
     */
    body: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    complete: PropertyDef<'boolean', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    id: PropertyDef<'integer', 'non-nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    priority: PropertyDef<'integer', 'nullable', 'single'>;
    /**
     *   display name: 'Text'
     */
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
      displayName: 'Body',
      multiplicity: false,
      description: 'The text of the todo',
      type: 'string',
      nullable: true,
    },
    text: {
      displayName: 'Text',
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
