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

  export interface ObjectSet extends $ObjectSet<SomeInterface.Definition, SomeInterface.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<SomeInterface.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<SomeInterface.Definition, AO>,
    ) => Promise<$AggregationsResults<SomeInterface.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<SomeInterface.Definition>>(
      type: L,
    ) => $LinkedType<SomeInterface.Definition, L>['objectSet'];

    readonly fetchPage: <
      const L extends SomeInterface.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        SomeInterface.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends SomeInterface.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          SomeInterface.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<SomeInterface.OsdkObject>;
  }

  export interface Definition
    extends $InterfaceDefinition<'com.example.dep.SomeInterface', SomeInterface.Definition>,
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
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
  > = $Osdk<SomeInterface.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never]
        ? SomeInterface.StrictProps
        : OPTIONS extends '$notStrict'
          ? SomeInterface.Props
          : SomeInterface.StrictProps,
      K
    > & {
      readonly $link: OsdkObjectLinks$SomeInterface;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: string | number;

      readonly $as: <NEW_Q extends $ValidToFrom<SomeInterface.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<SomeInterface.Definition, NEW_Q, K>>;
    } & $OsdkObject<'com.example.dep.SomeInterface'>;
}

/** @deprecated use SomeInterface.Definition **/
export type SomeInterface = SomeInterface.Definition;

export const SomeInterface: SomeInterface.Definition = {
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
