import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$ExampleInterface = {};

export namespace ExampleInterface {
  export type PropertyKeys = 'id' | 'type';

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly id: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly type: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ExampleInterface, ExampleInterface.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleInterface.Props = keyof ExampleInterface.Props,
  > = $Osdk.Instance<ExampleInterface, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleInterface.Props = keyof ExampleInterface.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ExampleInterface extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'ExampleInterface';
  __DefinitionMetadata?: {
    objectSet: ExampleInterface.ObjectSet;
    props: ExampleInterface.Props;
    linksType: OsdkObjectLinks$ExampleInterface;
    strictProps: ExampleInterface.StrictProps;
    apiName: 'ExampleInterface';
    description: '';
    displayName: 'Example Interface';
    implementedBy: ['ExampleObjects'];
    implements: [];
    links: {};
    properties: {
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      type: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.05598367-c4f3-455b-b050-12f6c90041db';
    type: 'interface';
  };
}

export const ExampleInterface = {
  type: 'interface',
  apiName: 'ExampleInterface',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.05598367-c4f3-455b-b050-12f6c90041db',
  },
} satisfies ExampleInterface & { internalDoNotUseMetadata: { rid: string } } as ExampleInterface;
