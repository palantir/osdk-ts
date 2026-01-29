import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { EsongPds } from '../objects/EsongPds.js';
import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export interface OsdkObjectLinks$EsongInterfaceA {
  esongPds: EsongPds.ObjectSet;
}

export namespace EsongInterfaceA {
  export type PropertyKeys = 'esongSptA';

  export interface Props {
    /**
     *   display name: '[esong] SPT A'
     */
    readonly esongSptA: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<EsongInterfaceA, EsongInterfaceA.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof EsongInterfaceA.Props = keyof EsongInterfaceA.Props,
  > = $Osdk.Instance<EsongInterfaceA, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof EsongInterfaceA.Props = keyof EsongInterfaceA.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface EsongInterfaceA extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'EsongInterfaceA';
  __DefinitionMetadata?: {
    objectSet: EsongInterfaceA.ObjectSet;
    props: EsongInterfaceA.Props;
    linksType: OsdkObjectLinks$EsongInterfaceA;
    strictProps: EsongInterfaceA.StrictProps;
    apiName: 'EsongInterfaceA';
    description: '';
    displayName: '[esong] Interface A';
    implementedBy: ['EsongIssues'];
    implements: [];
    links: {
      esongPds: $InterfaceMetadata.Link<EsongPds, false>;
    };
    properties: {
      /**
       *   display name: '[esong] SPT A'
       */
      esongSptA: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.3f52b54b-dab9-41f1-b02c-4eba39846673';
    type: 'interface';
  };
}

export const EsongInterfaceA = {
  type: 'interface',
  apiName: 'EsongInterfaceA',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.3f52b54b-dab9-41f1-b02c-4eba39846673',
  },
} satisfies EsongInterfaceA & { internalDoNotUseMetadata: { rid: string } } as EsongInterfaceA;
