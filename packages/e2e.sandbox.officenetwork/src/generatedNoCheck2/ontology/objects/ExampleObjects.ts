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

export namespace ExampleObjects {
  export type PropertyKeys = 'primaryKey_' | 'type';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'id'
     */
    readonly primaryKey_: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly type: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ExampleObjects, ExampleObjects.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleObjects.Props = keyof ExampleObjects.Props,
  > = $Osdk.Instance<ExampleObjects, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleObjects.Props = keyof ExampleObjects.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ExampleObjects extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'ExampleObjects';
  __DefinitionMetadata?: {
    objectSet: ExampleObjects.ObjectSet;
    props: ExampleObjects.Props;
    linksType: ExampleObjects.Links;
    strictProps: ExampleObjects.StrictProps;
    apiName: 'ExampleObjects';
    description: '';
    displayName: 'Example Objects';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['ExampleInterface'];
    interfaceMap: {
      ExampleInterface: {
        id: 'primaryKey_';
        type: 'type';
      };
    };
    inverseInterfaceMap: {
      ExampleInterface: {
        primaryKey_: 'id';
        type: 'type';
      };
    };
    links: {};
    pluralDisplayName: 'Example Objects';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'id'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      type: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.9bd216ec-22a2-48dc-8c61-63db7c4e1fc8';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const ExampleObjects = {
  type: 'object',
  apiName: 'ExampleObjects',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.9bd216ec-22a2-48dc-8c61-63db7c4e1fc8',
  },
} satisfies ExampleObjects & { internalDoNotUseMetadata: { rid: string } } as ExampleObjects;
