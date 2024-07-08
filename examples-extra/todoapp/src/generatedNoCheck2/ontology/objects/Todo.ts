import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export interface Todo extends ObjectTypeDefinition<'Todo', Todo>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Its a todo item.';
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    /**
     * (no ontology metadata)
     */
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    isComplete: PropertyDef<'boolean', 'nullable', 'single'>;
    /**
     *   display name: 'Title',
     *   description: The text of the todo
     */
    title: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const Todo: Todo = {
  osdkMetadata: $osdkMetadata,
  apiName: 'Todo',
  description: 'Its a todo item.',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    title: {
      displayName: 'Title',
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
