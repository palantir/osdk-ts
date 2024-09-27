import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Person } from './Person.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

export namespace Todo {
  export type PropertyKeys = 'id' | 'body' | 'text' | 'priority' | 'complete';

  export interface Links {
    readonly Assignee: $SingleLinkAccessor<Person>;
  }

  export interface Props {
    readonly body: $PropType['string'] | undefined;
    readonly complete: $PropType['boolean'] | undefined;
    readonly id: $PropType['integer'] | undefined;
    readonly priority: $PropType['integer'] | undefined;
    readonly text: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly body: $PropType['string'] | undefined;
    readonly complete: $PropType['boolean'] | undefined;
    readonly id: $PropType['integer'];
    readonly priority: $PropType['integer'] | undefined;
    readonly text: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Todo.Props = keyof Todo.Props,
  > = $Osdk<Todo, K | OPTIONS>;
}

export interface Todo extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Todo';
  __DefinitionMetadata?: {
    objectSet: Todo.ObjectSet;
    props: Todo.Props;
    linksType: Todo.Links;
    strictProps: Todo.StrictProps;
    apiName: 'Todo';
    description: 'Its a todo item.';
    displayName: 'AwesomeTodoDisplayname';
    icon: {
      type: 'blueprint';
      name: 'todo';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      Assignee: $ObjectTypeLinkDefinition<Person, false>;
    };
    pluralDisplayName: 'AwesomeTodoDisplayname';
    primaryKeyApiName: 'id';
    primaryKeyType: 'integer';
    properties: {
      /**
       *   display name: 'Body',
       *   description: The text of the todo
       */
      body: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      complete: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'integer', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      priority: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   display name: 'Text'
       */
      text: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'body';
    type: 'object';
  };
}

export const Todo: Todo = {
  type: 'object',
  apiName: 'Todo',
  osdkMetadata: $osdkMetadata,
};
