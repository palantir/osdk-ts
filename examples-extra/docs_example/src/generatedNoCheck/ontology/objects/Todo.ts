import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata';

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

  export interface ObjectSet extends $ObjectSet<Todo.Definition, Todo.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'Todo', Todo.Definition> {
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

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Todo.Props = keyof Todo.Props,
  > = $Osdk<Todo.Definition, K | OPTIONS>;
}

export type Todo = Todo.Definition;

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
