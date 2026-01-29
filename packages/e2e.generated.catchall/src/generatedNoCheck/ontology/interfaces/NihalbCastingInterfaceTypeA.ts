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

export interface OsdkObjectLinks$NihalbCastingInterfaceTypeA {
  nihalbCastingLinkedObjectTypeA: NihalbCastingLinkedObjectTypeA.ObjectSet;
}

export namespace NihalbCastingInterfaceTypeA {
  export type PropertyKeys = 'interfaceProperty';

  export interface Props {
    /**
     *   display name: 'InterfaceProperty'
     */
    readonly interfaceProperty: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<NihalbCastingInterfaceTypeA, NihalbCastingInterfaceTypeA.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingInterfaceTypeA.Props = keyof NihalbCastingInterfaceTypeA.Props,
  > = $Osdk.Instance<NihalbCastingInterfaceTypeA, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbCastingInterfaceTypeA.Props = keyof NihalbCastingInterfaceTypeA.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbCastingInterfaceTypeA extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'NihalbCastingInterfaceTypeA';
  __DefinitionMetadata?: {
    objectSet: NihalbCastingInterfaceTypeA.ObjectSet;
    props: NihalbCastingInterfaceTypeA.Props;
    linksType: OsdkObjectLinks$NihalbCastingInterfaceTypeA;
    strictProps: NihalbCastingInterfaceTypeA.StrictProps;
    apiName: 'NihalbCastingInterfaceTypeA';
    description: '';
    displayName: '(nihalb) CastingInterfaceTypeA';
    implementedBy: ['NihalbCastingObjectTypeA', 'NihalbCastingObjectTypeB'];
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
    rid: 'ri.ontology.main.interface.daed91f9-ee83-4e6c-bfc7-a17c8ff9433c';
    type: 'interface';
  };
}

export const NihalbCastingInterfaceTypeA = {
  type: 'interface',
  apiName: 'NihalbCastingInterfaceTypeA',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.daed91f9-ee83-4e6c-bfc7-a17c8ff9433c',
  },
} satisfies NihalbCastingInterfaceTypeA & { internalDoNotUseMetadata: { rid: string } } as NihalbCastingInterfaceTypeA;
