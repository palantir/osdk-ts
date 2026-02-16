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
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Id'
     */
    readonly id: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Is Complete'
     */
    readonly isComplete: $PropType['boolean'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly location: $PropType['geopoint'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Title'
     */
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
    implements: ['TodoLike'];
    interfaceMap: {
      TodoLike: {
        name: 'title';
        isComplete: 'isComplete';
      };
    };
    inverseInterfaceMap: {
      TodoLike: {
        title: 'name';
        isComplete: 'isComplete';
      };
    };
    links: {};
    pluralDisplayName: 'Todos';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Id'
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Is Complete'
       */
      isComplete: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      location: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
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

export const Todo = {
  type: 'object',
  apiName: 'Todo',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.a3fcfef9-ec11-4f2d-8a4c-dc010de837bf',
  },
} satisfies Todo & { internalDoNotUseMetadata: { rid: string } } as Todo;
