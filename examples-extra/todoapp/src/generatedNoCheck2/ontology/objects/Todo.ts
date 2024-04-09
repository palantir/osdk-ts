import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata';

export interface Todo extends ObjectTypeDefinition<'Todo', Todo>, VersionBound<'0.15.0'> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Its a todo item.';
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    isComplete: PropertyDef<'boolean', 'nullable', 'single'>;
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
