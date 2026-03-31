import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$MwaltherPersonV2 = {};

export namespace MwaltherPersonV2 {
  export type PropertyKeys = 'mwaltherNam';

  export interface Props {
    /**
     *   display name: 'prop1'
     */
    readonly mwaltherNam: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MwaltherPersonV2, MwaltherPersonV2.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MwaltherPersonV2.Props = keyof MwaltherPersonV2.Props,
  > = $Osdk.Instance<MwaltherPersonV2, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MwaltherPersonV2.Props = keyof MwaltherPersonV2.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MwaltherPersonV2 extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'MwaltherPersonV2';
  __DefinitionMetadata?: {
    objectSet: MwaltherPersonV2.ObjectSet;
    props: MwaltherPersonV2.Props;
    linksType: OsdkObjectLinks$MwaltherPersonV2;
    strictProps: MwaltherPersonV2.StrictProps;
    apiName: 'MwaltherPersonV2';
    description: '';
    displayName: '[mwalther] Person V2';
    implementedBy: ['MwaltherPersonOt'];
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'prop1'
       */
      mwaltherNam: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.2fc1336c-6d4d-428f-9a4f-4f3ebfaf860e';
    type: 'interface';
  };
}

export const MwaltherPersonV2 = {
  type: 'interface',
  apiName: 'MwaltherPersonV2',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.2fc1336c-6d4d-428f-9a4f-4f3ebfaf860e',
  },
} satisfies MwaltherPersonV2 & { internalDoNotUseMetadata: { rid: string } } as MwaltherPersonV2;
