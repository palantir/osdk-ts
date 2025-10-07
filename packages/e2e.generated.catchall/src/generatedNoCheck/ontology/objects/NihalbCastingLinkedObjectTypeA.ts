import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { NihalbCastingObjectTypeA } from './NihalbCastingObjectTypeA.js';
import type { NihalbCastingObjectTypeB } from './NihalbCastingObjectTypeB.js';
import type { NihalbCastingObjectTypeC } from './NihalbCastingObjectTypeC.js';
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

export namespace NihalbCastingLinkedObjectTypeA {
  export type PropertyKeys = 'foreignKeyProperty' | 'primaryKey_';

  export interface Links {
    readonly nihalbCastingObjectTypeA: $SingleLinkAccessor<NihalbCastingObjectTypeA>;
    readonly nihalbCastingObjectTypeB: $SingleLinkAccessor<NihalbCastingObjectTypeB>;
    readonly nihalbCastingObjectTypeC: $SingleLinkAccessor<NihalbCastingObjectTypeC>;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'ForeignKeyProperty'
     */
    readonly foreignKeyProperty: $PropType['string'] | undefined;
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

  export interface ObjectSet
    extends $ObjectSet<NihalbCastingLinkedObjectTypeA, NihalbCastingLinkedObjectTypeA.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingLinkedObjectTypeA.Props = keyof NihalbCastingLinkedObjectTypeA.Props,
  > = $Osdk.Instance<NihalbCastingLinkedObjectTypeA, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingLinkedObjectTypeA.Props = keyof NihalbCastingLinkedObjectTypeA.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbCastingLinkedObjectTypeA extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'NihalbCastingLinkedObjectTypeA';
  __DefinitionMetadata?: {
    objectSet: NihalbCastingLinkedObjectTypeA.ObjectSet;
    props: NihalbCastingLinkedObjectTypeA.Props;
    linksType: NihalbCastingLinkedObjectTypeA.Links;
    strictProps: NihalbCastingLinkedObjectTypeA.StrictProps;
    apiName: 'NihalbCastingLinkedObjectTypeA';
    description: '';
    displayName: '(nihalb) Casting Linked Object Type A';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['NihalbCastingLinkedInterfaceTypeA'];
    interfaceMap: {
      NihalbCastingLinkedInterfaceTypeA: {
        primaryKeyProp: 'primaryKey_';
      };
    };
    inverseInterfaceMap: {
      NihalbCastingLinkedInterfaceTypeA: {
        primaryKey_: 'primaryKeyProp';
      };
    };
    links: {
      nihalbCastingObjectTypeA: $ObjectMetadata.Link<NihalbCastingObjectTypeA, false>;
      nihalbCastingObjectTypeB: $ObjectMetadata.Link<NihalbCastingObjectTypeB, false>;
      nihalbCastingObjectTypeC: $ObjectMetadata.Link<NihalbCastingObjectTypeC, false>;
    };
    pluralDisplayName: '(nihalb) Casting Linked Object Type AS';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'ForeignKeyProperty'
       */
      foreignKeyProperty: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.e257ea9e-8127-471f-9253-d641f5585d26';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const NihalbCastingLinkedObjectTypeA = {
  type: 'object',
  apiName: 'NihalbCastingLinkedObjectTypeA',
  osdkMetadata: $osdkMetadata,
  experimentalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.e257ea9e-8127-471f-9253-d641f5585d26',
  },
} satisfies NihalbCastingLinkedObjectTypeA & {
  experimentalDoNotUseMetadata: { rid: string };
} as NihalbCastingLinkedObjectTypeA;
