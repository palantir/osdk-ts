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

export namespace NihalbCastingObjectTypeA {
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

  export interface ObjectSet extends $ObjectSet<NihalbCastingObjectTypeA, NihalbCastingObjectTypeA.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingObjectTypeA.Props = keyof NihalbCastingObjectTypeA.Props,
  > = $Osdk.Instance<NihalbCastingObjectTypeA, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingObjectTypeA.Props = keyof NihalbCastingObjectTypeA.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbCastingObjectTypeA extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'NihalbCastingObjectTypeA';
  __DefinitionMetadata?: {
    objectSet: NihalbCastingObjectTypeA.ObjectSet;
    props: NihalbCastingObjectTypeA.Props;
    linksType: NihalbCastingObjectTypeA.Links;
    strictProps: NihalbCastingObjectTypeA.StrictProps;
    apiName: 'NihalbCastingObjectTypeA';
    description: '';
    displayName: '(nihalb) Casting Object Type A';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['NihalbCastingInterfaceTypeA'];
    interfaceMap: {
      NihalbCastingInterfaceTypeA: {
        interfaceProperty: 'primaryKey_';
      };
    };
    inverseInterfaceMap: {
      NihalbCastingInterfaceTypeA: {
        primaryKey_: 'interfaceProperty';
      };
    };
    links: {
      nihalbCastingLinkedObjectTypeAs: $ObjectMetadata.Link<NihalbCastingLinkedObjectTypeA, true>;
    };
    pluralDisplayName: '(nihalb) Casting Object Type AS';
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
    rid: 'ri.ontology.main.object-type.47776705-2ee2-4f59-af48-da192cd42456';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const NihalbCastingObjectTypeA = {
  type: 'object',
  apiName: 'NihalbCastingObjectTypeA',
  osdkMetadata: $osdkMetadata,
  experimentalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.47776705-2ee2-4f59-af48-da192cd42456',
  },
} satisfies NihalbCastingObjectTypeA & { experimentalDoNotUseMetadata: { rid: string } } as NihalbCastingObjectTypeA;
