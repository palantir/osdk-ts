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

export namespace NihalbCastingObjectTypeC {
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

  export interface ObjectSet extends $ObjectSet<NihalbCastingObjectTypeC, NihalbCastingObjectTypeC.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingObjectTypeC.Props = keyof NihalbCastingObjectTypeC.Props,
  > = $Osdk.Instance<NihalbCastingObjectTypeC, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingObjectTypeC.Props = keyof NihalbCastingObjectTypeC.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbCastingObjectTypeC extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'NihalbCastingObjectTypeC';
  __DefinitionMetadata?: {
    objectSet: NihalbCastingObjectTypeC.ObjectSet;
    props: NihalbCastingObjectTypeC.Props;
    linksType: NihalbCastingObjectTypeC.Links;
    strictProps: NihalbCastingObjectTypeC.StrictProps;
    apiName: 'NihalbCastingObjectTypeC';
    description: '';
    displayName: '(nihalb) Casting Object Type C';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['NihalbCastingInterfaceB'];
    interfaceMap: {
      NihalbCastingInterfaceB: {
        interfaceProperty: 'primaryKey_';
      };
    };
    inverseInterfaceMap: {
      NihalbCastingInterfaceB: {
        primaryKey_: 'interfaceProperty';
      };
    };
    links: {
      nihalbCastingLinkedObjectTypeAs: $ObjectMetadata.Link<NihalbCastingLinkedObjectTypeA, true>;
    };
    pluralDisplayName: '(nihalb) Casting Object Type CS';
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
    rid: 'ri.ontology.main.object-type.cf0cc2e5-f032-4659-9f5a-aec285317898';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const NihalbCastingObjectTypeC: NihalbCastingObjectTypeC = {
  type: 'object',
  apiName: 'NihalbCastingObjectTypeC',
  osdkMetadata: $osdkMetadata,
};
