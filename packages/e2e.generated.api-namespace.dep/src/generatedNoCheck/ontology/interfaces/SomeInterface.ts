import type { PropertyDef as $PropertyDef, VersionBound as $VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
import type {
  AggregateOpts as $AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults as $AggregationsResults,
  Augments as $Augments,
  ConvertProps as $ConvertProps,
  DefaultToFalse as $DefaultToFalse,
  FetchPageArgs as $FetchPageArgs,
  LinkedType as $LinkedType,
  LinkNames as $LinkNames,
  NullabilityAdherence as $NullabilityAdherence,
  NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PageResult as $PageResult,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';

export type OsdkObjectLinks$SomeInterface = never;

export namespace SomeInterface {
  export type PropertyKeys = 'spt';

  export interface Props {
    readonly spt: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly spt: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<SomeInterface, SomeInterface.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<SomeInterface>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<SomeInterface, AO>,
    ) => Promise<$AggregationsResults<SomeInterface, AO>>;

    readonly pivotTo: <L extends $LinkNames<SomeInterface>>(type: L) => $LinkedType<SomeInterface, L>['objectSet']; // ObjectSet<LinkedType<SomeInterface, L>>;

    readonly fetchPage: <
      L extends SomeInterface.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<SomeInterface, L, R, A, S>,
    ) => Promise<
      $PageResult<
        SomeInterface.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends SomeInterface.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<SomeInterface, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          SomeInterface.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<SomeInterface.OsdkObject>;
  }

  export interface Definition
    extends $InterfaceDefinition<'com.example.dep.SomeInterface', SomeInterface>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: SomeInterface.ObjectSet;
    props: SomeInterface.Props;
    strictProps: SomeInterface.StrictProps;
    displayName: 'Sum Interface';
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Some Property'
       */
      spt: $PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
  > = $Osdk<SomeInterface, K | OPTIONS> &
    Pick<
      // SomeInterface.Props
      OPTIONS extends '$notStrict' ? SomeInterface.Props : SomeInterface.StrictProps,
      K
    > & {
      readonly $link: OsdkObjectLinks$SomeInterface;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: string | number;

      readonly $as: <NEW_Q extends $ValidToFrom<SomeInterface>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<SomeInterface, NEW_Q, K>>;
    } & $OsdkObject<'com.example.dep.SomeInterface'>;
}

/** @deprecated use SomeInterface.Definition **/
export type SomeInterface = SomeInterface.Definition;

export const SomeInterface: SomeInterface = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'com.example.dep.SomeInterface',
  displayName: 'Sum Interface',
  implements: [],
  links: {},
  properties: {
    spt: {
      displayName: 'Some Property',
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'interface',
};
