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

export namespace WeatherStation {
  export type PropertyKeys = 'stationId' | 'geohash';

  export type Links = never;

  export interface Props {
    readonly geohash: $PropType['geopoint'] | undefined;
    readonly stationId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly geohash: $PropType['geopoint'] | undefined;
    readonly stationId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<WeatherStation.Definition, WeatherStation.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<WeatherStation.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<WeatherStation.Definition, AO>,
    ) => Promise<$AggregationsResults<WeatherStation.Definition, AO>>;

    readonly pivotTo: <L extends $LinkNames<WeatherStation.Definition>>(
      type: L,
    ) => $LinkedType<WeatherStation.Definition, L>['objectSet'];

    readonly fetchOne: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[WeatherStation.Definition['primaryKeyType']],
      options?: $SelectArg<WeatherStation.Definition, L, R, S>,
    ) => Promise<
      WeatherStation.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[WeatherStation.Definition['primaryKeyType']],
      options?: $SelectArg<WeatherStation.Definition, L, R, S>,
    ) => Promise<
      $Result<
        WeatherStation.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<WeatherStation.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        WeatherStation.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<WeatherStation.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          WeatherStation.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<WeatherStation.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'WeatherStation', WeatherStation.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: WeatherStation.ObjectSet;
    props: WeatherStation.Props;
    strictProps: WeatherStation.StrictProps;
    description: 'Weather Station';
    links: {};
    primaryKeyApiName: 'stationId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Geohash',
       *   description: geopoint
       */
      geohash: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      stationId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof WeatherStation.Props = keyof WeatherStation.Props,
  > = $Osdk<WeatherStation.Definition, K | OPTIONS> &
    Pick<OPTIONS extends '$notStrict' ? WeatherStation.Props : WeatherStation.StrictProps, K> & {
      readonly $link: WeatherStation.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<WeatherStation.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<WeatherStation.Definition, NEW_Q, K>>;
    } & $OsdkObject<'WeatherStation'>;
}

/** @deprecated use WeatherStation.Definition **/
export type WeatherStation = WeatherStation.Definition;

export const WeatherStation: WeatherStation & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'WeatherStation',
  description: 'Weather Station',
  links: {},
  primaryKeyApiName: 'stationId',
  primaryKeyType: 'string',
  properties: {
    stationId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    geohash: {
      displayName: 'Geohash',
      multiplicity: false,
      description: 'geopoint',
      type: 'geopoint',
      nullable: true,
    },
  },
  type: 'object',
};
