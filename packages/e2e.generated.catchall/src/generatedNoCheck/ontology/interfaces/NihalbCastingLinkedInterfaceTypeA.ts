import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { NihalbCastingInterfaceB } from './NihalbCastingInterfaceB.js';
import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export interface OsdkObjectLinks$NihalbCastingLinkedInterfaceTypeA {
  nihalbCastingInterfaceB: NihalbCastingInterfaceB.ObjectSet;
}

export namespace NihalbCastingLinkedInterfaceTypeA {
  export type PropertyKeys = 'primaryKeyProp';

  export interface Props {
    /**
     *   display name: 'PrimaryKeyProp'
     */
    readonly primaryKeyProp: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet
    extends $ObjectSet<NihalbCastingLinkedInterfaceTypeA, NihalbCastingLinkedInterfaceTypeA.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingLinkedInterfaceTypeA.Props = keyof NihalbCastingLinkedInterfaceTypeA.Props,
  > = $Osdk.Instance<NihalbCastingLinkedInterfaceTypeA, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingLinkedInterfaceTypeA.Props = keyof NihalbCastingLinkedInterfaceTypeA.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbCastingLinkedInterfaceTypeA extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'NihalbCastingLinkedInterfaceTypeA';
  __DefinitionMetadata?: {
    objectSet: NihalbCastingLinkedInterfaceTypeA.ObjectSet;
    props: NihalbCastingLinkedInterfaceTypeA.Props;
    linksType: OsdkObjectLinks$NihalbCastingLinkedInterfaceTypeA;
    strictProps: NihalbCastingLinkedInterfaceTypeA.StrictProps;
    apiName: 'NihalbCastingLinkedInterfaceTypeA';
    description: '';
    displayName: '(nihalb) CastingLinkedInterfaceTypeA';
    implementedBy: ['NihalbCastingLinkedObjectTypeA'];
    implements: [];
    links: {
      nihalbCastingInterfaceB: $InterfaceMetadata.Link<NihalbCastingInterfaceB, false>;
    };
    properties: {
      /**
       *   display name: 'PrimaryKeyProp'
       */
      primaryKeyProp: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.d3f8faae-48ea-44c6-8d43-687183d586c9';
    type: 'interface';
  };
}

export const NihalbCastingLinkedInterfaceTypeA = {
  type: 'interface',
  apiName: 'NihalbCastingLinkedInterfaceTypeA',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.d3f8faae-48ea-44c6-8d43-687183d586c9',
  },
} satisfies NihalbCastingLinkedInterfaceTypeA & {
  internalDoNotUseMetadata: { rid: string };
} as NihalbCastingLinkedInterfaceTypeA;
