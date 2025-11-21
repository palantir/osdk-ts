import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { NihalbCastingLinkedObjectTypeA } from './NihalbCastingLinkedObjectTypeA.js';
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

export namespace NihalbCastingObjectTypeB {
  export type PropertyKeys = 'additionalProperty' | 'primaryKey_';

  export interface Links {
    readonly nihalbCastingLinkedObjectTypeAs: NihalbCastingLinkedObjectTypeA.ObjectSet;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Additional Property'
     */
    readonly additionalProperty: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Primary Key'
     */
    readonly primaryKey_: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<NihalbCastingObjectTypeB, NihalbCastingObjectTypeB.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingObjectTypeB.Props = keyof NihalbCastingObjectTypeB.Props,
  > = $Osdk.Instance<NihalbCastingObjectTypeB, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingObjectTypeB.Props = keyof NihalbCastingObjectTypeB.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbCastingObjectTypeB extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'NihalbCastingObjectTypeB';
  __DefinitionMetadata?: {
    objectSet: NihalbCastingObjectTypeB.ObjectSet;
    props: NihalbCastingObjectTypeB.Props;
    linksType: NihalbCastingObjectTypeB.Links;
    strictProps: NihalbCastingObjectTypeB.StrictProps;
    apiName: 'NihalbCastingObjectTypeB';
    description: '';
    displayName: '(nihalb) Casting Object Type B';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['NihalbCastingInterfaceB', 'NihalbCastingInterfaceTypeA'];
    interfaceMap: {
      NihalbCastingInterfaceB: {
        interfaceProperty: 'primaryKey_';
      };
      NihalbCastingInterfaceTypeA: {
        interfaceProperty: 'primaryKey_';
      };
    };
    inverseInterfaceMap: {
      NihalbCastingInterfaceB: {
        primaryKey_: 'interfaceProperty';
      };
      NihalbCastingInterfaceTypeA: {
        primaryKey_: 'interfaceProperty';
      };
    };
    inverseInterfaceMapV2: {
      NihalbCastingInterfaceB: {
        primaryKey_: ['interfaceProperty'];
      };
      NihalbCastingInterfaceTypeA: {
        primaryKey_: ['interfaceProperty'];
      };
    };
    links: {
      nihalbCastingLinkedObjectTypeAs: $ObjectMetadata.Link<NihalbCastingLinkedObjectTypeA, true>;
    };
    pluralDisplayName: '(nihalb) Casting Object Type BS';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Additional Property'
       */
      additionalProperty: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.66898c81-9a3f-4f8b-937a-6934f6d9f660';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const NihalbCastingObjectTypeB = {
  type: 'object',
  apiName: 'NihalbCastingObjectTypeB',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.66898c81-9a3f-4f8b-937a-6934f6d9f660',
  },
} satisfies NihalbCastingObjectTypeB & { internalDoNotUseMetadata: { rid: string } } as NihalbCastingObjectTypeB;
