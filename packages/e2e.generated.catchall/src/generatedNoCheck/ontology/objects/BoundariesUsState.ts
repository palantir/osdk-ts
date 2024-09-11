import type {
  ObjectTypeDefinition as $ObjectTypeDefinition,
  PropertyDef as $PropertyDef,
  VersionBound as $VersionBound,
} from '@osdk/api';
import type {
  AggregateOpts as $AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults as $AggregationsResults,
  Augments as $Augments,
  ConvertProps as $ConvertProps,
  DefaultToFalse as $DefaultToFalse,
  FetchPageArgs as $FetchPageArgs,
  IsAny as $IsAny,
  LinkedType as $LinkedType,
  LinkNames as $LinkNames,
  NullabilityAdherence as $NullabilityAdherence,
  NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  OsdkObjectPropertyType as $OsdkObjectPropertyType,
  PageResult as $PageResult,
  PropertyValueClientToWire as $PropertyValueClientToWire,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  SelectArg as $SelectArg,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace BoundariesUsState {
  export type PropertyKeys = 'usState' | 'latitude' | 'longitude' | 'geometry10M';

  export type Links = {};

  export interface Props {
    readonly geometry10M: $PropType['geoshape'] | undefined;
    readonly latitude: $PropType['double'] | undefined;
    readonly longitude: $PropType['double'] | undefined;
    readonly usState: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly geometry10M: $PropType['geoshape'] | undefined;
    readonly latitude: $PropType['double'] | undefined;
    readonly longitude: $PropType['double'] | undefined;
    readonly usState: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<BoundariesUsState.Definition, BoundariesUsState.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<BoundariesUsState.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<BoundariesUsState.Definition, AO>,
    ) => Promise<$AggregationsResults<BoundariesUsState.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<BoundariesUsState.Definition>>(
      type: L,
    ) => $LinkedType<BoundariesUsState.Definition, L>['objectSet'];

    readonly fetchOne: <
      const L extends BoundariesUsState.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BoundariesUsState.Definition['primaryKeyType']],
      options?: $SelectArg<BoundariesUsState.Definition, L, R, S>,
    ) => Promise<
      BoundariesUsState.OsdkObject<
        (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
        $IsAny<L> extends true ? BoundariesUsState.PropertyKeys : L
      >
    >;

    readonly fetchOneWithErrors: <
      const L extends BoundariesUsState.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BoundariesUsState.Definition['primaryKeyType']],
      options?: $SelectArg<BoundariesUsState.Definition, L, R, S>,
    ) => Promise<
      $Result<
        BoundariesUsState.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? BoundariesUsState.PropertyKeys : L
        >
      >
    >;

    readonly fetchPage: <
      const L extends BoundariesUsState.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BoundariesUsState.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        BoundariesUsState.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? BoundariesUsState.PropertyKeys : L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends BoundariesUsState.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BoundariesUsState.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          BoundariesUsState.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            $IsAny<L> extends true ? BoundariesUsState.PropertyKeys : L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<BoundariesUsState.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: BoundariesUsState.ObjectSet;
    props: BoundariesUsState.Props;
    linksType: BoundariesUsState.Links;
    strictProps: BoundariesUsState.StrictProps;
    description: 'Boundaries US State';
    links: {};
    primaryKeyApiName: 'usState';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Geometry10M',
       *   description: geoshape
       */
      geometry10M: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      latitude: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      longitude: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      usState: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props,
  > = $Osdk<BoundariesUsState.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never]
        ? BoundariesUsState.StrictProps
        : OPTIONS extends '$notStrict'
          ? BoundariesUsState.Props
          : BoundariesUsState.StrictProps,
      K
    > & {
      readonly $link: BoundariesUsState.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<BoundariesUsState.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<BoundariesUsState.Definition, NEW_Q, K>>;
    } & $OsdkObject<'BoundariesUsState'>;
}

export type BoundariesUsState = BoundariesUsState.Definition;

export const BoundariesUsState: BoundariesUsState & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'BoundariesUsState',
  description: 'Boundaries US State',
  links: {},
  primaryKeyApiName: 'usState',
  primaryKeyType: 'string',
  properties: {
    usState: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    latitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    longitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    geometry10M: {
      displayName: 'Geometry10M',
      multiplicity: false,
      description: 'geoshape',
      type: 'geoshape',
      nullable: true,
    },
  },
  type: 'object',
};
