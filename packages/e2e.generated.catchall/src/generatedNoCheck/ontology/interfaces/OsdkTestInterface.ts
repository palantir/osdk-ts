import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$OsdkTestInterface = {};

export namespace OsdkTestInterface {
  export type PropertyKeys = 'objectDescription';

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly objectDescription: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<OsdkTestInterface, OsdkTestInterface.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof OsdkTestInterface.Props = keyof OsdkTestInterface.Props,
  > = $Osdk.Instance<OsdkTestInterface, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof OsdkTestInterface.Props = keyof OsdkTestInterface.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface OsdkTestInterface extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'OsdkTestInterface';
  __DefinitionMetadata?: {
    objectSet: OsdkTestInterface.ObjectSet;
    props: OsdkTestInterface.Props;
    linksType: OsdkObjectLinks$OsdkTestInterface;
    strictProps: OsdkTestInterface.StrictProps;
    apiName: 'OsdkTestInterface';
    description: 'OsdkTestInterface';
    displayName: 'OsdkTestInterface';
    implementedBy: ['OsdkTestObject'];
    implements: undefined;
    links: {};
    properties: {
      /**
       * (no ontology metadata)
       */
      objectDescription: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.06c534fd-4f68-44d9-b268-72729a47eaab';
    type: 'interface';
  };
}

export const OsdkTestInterface = {
  type: 'interface',
  apiName: 'OsdkTestInterface',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.06c534fd-4f68-44d9-b268-72729a47eaab',
  },
} satisfies OsdkTestInterface & { internalDoNotUseMetadata: { rid: string } } as OsdkTestInterface;
