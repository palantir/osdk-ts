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

export type OsdkObjectLinks$ReducerTestInterface = {};

export namespace ReducerTestInterface {
  export type PropertyKeys =
    | 'integerFromReducedMainValueStructArray'
    | 'stringArray'
    | 'stringFromReducedArray'
    | 'stringFromStruct'
    | 'structWithLessPropsThanOt';

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly integerFromReducedMainValueStructArray: $PropType['integer'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly stringArray: $PropType['string'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly stringFromReducedArray: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly stringFromStruct: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly structWithLessPropsThanOt:
      | { integer: $PropType['integer'] | undefined; string: $PropType['string'] | undefined }
      | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ReducerTestInterface, ReducerTestInterface.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ReducerTestInterface.Props = keyof ReducerTestInterface.Props,
  > = $Osdk.Instance<ReducerTestInterface, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ReducerTestInterface.Props = keyof ReducerTestInterface.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ReducerTestInterface extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'ReducerTestInterface';
  __DefinitionMetadata?: {
    objectSet: ReducerTestInterface.ObjectSet;
    props: ReducerTestInterface.Props;
    linksType: OsdkObjectLinks$ReducerTestInterface;
    strictProps: ReducerTestInterface.StrictProps;
    apiName: 'ReducerTestInterface';
    description: '';
    displayName: 'ReducerTestInterface';
    implementedBy: ['ReducerTest'];
    implements: [];
    links: {};
    properties: {
      /**
       * (no ontology metadata)
       */
      integerFromReducedMainValueStructArray: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      stringArray: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       * (no ontology metadata)
       */
      stringFromReducedArray: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      stringFromStruct: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      structWithLessPropsThanOt: $PropertyDef<{ string: 'string'; integer: 'integer' }, 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.ee112779-ed04-44c6-bf84-9543513eb80b';
    type: 'interface';
  };
}

export const ReducerTestInterface = {
  type: 'interface',
  apiName: 'ReducerTestInterface',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.ee112779-ed04-44c6-bf84-9543513eb80b',
  },
} satisfies ReducerTestInterface & { internalDoNotUseMetadata: { rid: string } } as ReducerTestInterface;
