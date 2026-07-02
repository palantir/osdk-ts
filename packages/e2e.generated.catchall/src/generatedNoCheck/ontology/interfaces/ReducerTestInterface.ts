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
    | 'stringFromArrayFromAlreadyReduced'
    | 'stringFromNonMainValueOfStruct'
    | 'stringFromReducedMainValueStructArray'
    | 'stringFromSingleMainValue'
    | 'structFromMultipleMainValue';

  export interface Props {
    /**
     *   display name: 'stringArray'
     */
    readonly stringFromArrayFromAlreadyReduced: $PropType['string'][] | undefined;
    /**
     *   display name: 'stringFromStruct'
     */
    readonly stringFromNonMainValueOfStruct: $PropType['string'] | undefined;
    /**
     *   display name: 'integerFromReducedMainValueStructArray'
     */
    readonly stringFromReducedMainValueStructArray: $PropType['integer'] | undefined;
    /**
     *   display name: 'stringFromReducedArray'
     */
    readonly stringFromSingleMainValue: $PropType['string'] | undefined;
    /**
     *   display name: 'structWithLessPropsThanOt'
     */
    readonly structFromMultipleMainValue:
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
       *   display name: 'stringArray'
       */
      stringFromArrayFromAlreadyReduced: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       *   display name: 'stringFromStruct'
       */
      stringFromNonMainValueOfStruct: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'integerFromReducedMainValueStructArray'
       */
      stringFromReducedMainValueStructArray: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   display name: 'stringFromReducedArray'
       */
      stringFromSingleMainValue: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'structWithLessPropsThanOt'
       */
      structFromMultipleMainValue: $PropertyDef<{ string: 'string'; integer: 'integer' }, 'nullable', 'single'>;
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
