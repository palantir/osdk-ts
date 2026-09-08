import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export type OsdkObjectLinks$CipherTextInterface = {};

export namespace CipherTextInterface {
  export type PropertyKeys = 'encrypted';

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly encrypted: $PropType['cipherText'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<CipherTextInterface, CipherTextInterface.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CipherTextInterface.Props = keyof CipherTextInterface.Props,
  > = $Osdk.Instance<CipherTextInterface, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CipherTextInterface.Props = keyof CipherTextInterface.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface CipherTextInterface extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'CipherTextInterface';
  __DefinitionMetadata?: {
    objectSet: CipherTextInterface.ObjectSet;
    props: CipherTextInterface.Props;
    linksType: OsdkObjectLinks$CipherTextInterface;
    strictProps: CipherTextInterface.StrictProps;
    apiName: 'CipherTextInterface';
    description: '';
    displayName: 'CipherTextInterface';
    implementedBy: [];
    implements: [];
    links: {};
    properties: {
      /**
       * (no ontology metadata)
       */
      encrypted: $PropertyDef<'cipherText', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.2483d9cc-1bbf-4e98-9214-3be256dd7205';
    type: 'interface';
  };
}

export const CipherTextInterface = {
  type: 'interface',
  apiName: 'CipherTextInterface',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.2483d9cc-1bbf-4e98-9214-3be256dd7205',
  },
} satisfies CipherTextInterface & { internalDoNotUseMetadata: { rid: string } } as CipherTextInterface;
