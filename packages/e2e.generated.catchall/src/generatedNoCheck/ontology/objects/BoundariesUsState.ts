import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
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
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<BoundariesUsState>;

  export type Links = never;

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

  export interface ObjectSet extends $ObjectSet<BoundariesUsState, BoundariesUsState.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<BoundariesUsState>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<BoundariesUsState, AO>,
    ) => Promise<$AggregationsResults<BoundariesUsState, AO>>;

    readonly pivotTo: <L extends $LinkNames<BoundariesUsState>>(
      type: L,
    ) => $LinkedType<BoundariesUsState, L>['objectSet']; // ObjectSet<LinkedType<BoundariesUsState, L>>;

    readonly fetchOne: <
      L extends BoundariesUsState.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BoundariesUsState['primaryKeyType']],
      options?: $SelectArg<BoundariesUsState, L, R, S>,
    ) => Promise<
      BoundariesUsState.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends BoundariesUsState.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BoundariesUsState['primaryKeyType']],
      options?: $SelectArg<BoundariesUsState, L, R, S>,
    ) => Promise<
      $Result<
        BoundariesUsState.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends BoundariesUsState.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BoundariesUsState, L, R, A, S>,
    ) => Promise<
      $PageResult<
        BoundariesUsState.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends BoundariesUsState.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BoundariesUsState, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          BoundariesUsState.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<BoundariesUsState.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: BoundariesUsState.ObjectSet;
    props: BoundariesUsState.Props;
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
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props,
  > = $Osdk<BoundariesUsState, K | OPTIONS> &
    Pick<
      // BoundariesUsState.Props
      OPTIONS extends '$notStrict' ? BoundariesUsState.Props : BoundariesUsState.StrictProps,
      K
    > & {
      readonly $link: BoundariesUsState.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<BoundariesUsState>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<BoundariesUsState, NEW_Q, K>>;
    } & $OsdkObject<'BoundariesUsState'>;
}

/** @deprecated use BoundariesUsState.Definition **/
export type BoundariesUsState = BoundariesUsState.Definition;

export const BoundariesUsState: BoundariesUsState & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
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
