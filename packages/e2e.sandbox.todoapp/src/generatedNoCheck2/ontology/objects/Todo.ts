import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

export namespace Todo {
  export type PropertyKeys = 'id' | 'title' | 'isComplete';

  export type Links = {};

  export interface Props {
    readonly id: $PropType['string'];
    readonly isComplete: $PropType['boolean'] | undefined;
    readonly title: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Todo.Props = keyof Todo.Props,
  > = $Osdk.Instance<Todo, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Todo.Props = keyof Todo.Props,
  > = OsdkInstance<OPTIONS, K>;
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
    displayName: 'Todo';
    icon: {
      type: 'blueprint';
      name: 'todo';
      color: 'red';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: "Todo's";
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
    rid: 'ridForTodo';
    status: 'ACTIVE';
    titleProperty: 'title';
    type: 'object';
  };
}

export const Todo: Todo = {
  type: 'object',
  apiName: 'Todo',
  osdkMetadata: $osdkMetadata,
};
