import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { NihalbCastingLinkedObjectTypeA } from '../objects/NihalbCastingLinkedObjectTypeA.js';
import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export interface OsdkObjectLinks$NihalbCastingInterfaceB {
  nihalbCastingLinkedObjectTypeA: NihalbCastingLinkedObjectTypeA.ObjectSet;
}

export namespace NihalbCastingInterfaceB {
  export type PropertyKeys = 'interfaceProperty';

  export interface Props {
    /**
     *   display name: 'InterfaceProperty'
     */
    readonly interfaceProperty: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<NihalbCastingInterfaceB, NihalbCastingInterfaceB.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingInterfaceB.Props = keyof NihalbCastingInterfaceB.Props,
  > = $Osdk.Instance<NihalbCastingInterfaceB, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingInterfaceB.Props = keyof NihalbCastingInterfaceB.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbCastingInterfaceB extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'NihalbCastingInterfaceB';
  __DefinitionMetadata?: {
    objectSet: NihalbCastingInterfaceB.ObjectSet;
    props: NihalbCastingInterfaceB.Props;
    linksType: OsdkObjectLinks$NihalbCastingInterfaceB;
    strictProps: NihalbCastingInterfaceB.StrictProps;
    apiName: 'NihalbCastingInterfaceB';
    description: '';
    displayName: '(nihalb) Casting Interface B';
    implementedBy: ['NihalbCastingObjectTypeB', 'NihalbCastingObjectTypeC'];
    implements: [];
    links: {
      nihalbCastingLinkedObjectTypeA: $InterfaceMetadata.Link<NihalbCastingLinkedObjectTypeA, true>;
    };
    properties: {
      /**
       *   display name: 'InterfaceProperty'
       */
      interfaceProperty: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.001b6854-774a-4ba4-9ea7-dedc05901e4f';
    type: 'interface';
  };
}

export const NihalbCastingInterfaceB = {
  type: 'interface',
  apiName: 'NihalbCastingInterfaceB',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.001b6854-774a-4ba4-9ea7-dedc05901e4f',
  },
} satisfies NihalbCastingInterfaceB & { internalDoNotUseMetadata: { rid: string } } as NihalbCastingInterfaceB;
