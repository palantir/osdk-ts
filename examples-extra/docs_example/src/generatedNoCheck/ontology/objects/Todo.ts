import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

export namespace Todo {
  export type PropertyKeys = 'id' | 'title' | 'isComplete';

  export type Links = {};

  export interface Props {
    readonly id: $PropType['string'] | undefined;
    readonly isComplete: $PropType['boolean'] | undefined;
    readonly title: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly id: $PropType['string'];
    readonly isComplete: $PropType['boolean'] | undefined;
    readonly title: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Todo.Props = keyof Todo.Props,
  > = $Osdk<Todo, K | OPTIONS>;
}

export interface Todo extends $ObjectTypeDefinition<'Todo', Todo> {
  osdkMetadata: typeof $osdkMetadata;
  objectSet: Todo.ObjectSet;
  props: Todo.Props;
  linksType: Todo.Links;
  strictProps: Todo.StrictProps;
  description: 'Its a todo item.';
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    /**
     * (no ontology metadata)
     */
    id: $PropertyDef<'string', 'non-nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    isComplete: $PropertyDef<'boolean', 'nullable', 'single'>;
    /**
     *   display name: 'Title',
     *   description: The text of the todo
     */
    title: $PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const Todo: Todo = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
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
