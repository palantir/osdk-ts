import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/client';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export namespace Todo {
  export type PropertyKeys = 'id' | 'isComplete' | 'location' | 'title';

  export type Links = {};

  export interface Props {
    readonly id: $PropType['string'];
    readonly isComplete: $PropType['boolean'] | undefined;
    readonly location: $PropType['geopoint'] | undefined;
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
    description: '';
    displayName: 'Todo';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'confirm';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Todos';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Id'
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   display name: 'Is Complete'
       */
      isComplete: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      location: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       *   display name: 'Title'
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.a3fcfef9-ec11-4f2d-8a4c-dc010de837bf';
    status: 'EXPERIMENTAL';
    titleProperty: 'title';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Todo: Todo = {
  type: 'object',
  apiName: 'Todo',
  osdkMetadata: $osdkMetadata,
};
