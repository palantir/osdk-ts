import type { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults,
  Augments,
  ConvertProps,
  FetchPageArgs,
  LinkedType,
  LinkNames,
  NullabilityAdherence,
  NullabilityAdherenceDefault,
  Osdk,
  OsdkObjectPropertyType,
  PageResult,
  PropertyValueClientToWire,
  Result,
  SelectArg,
  ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace WeatherStation {
  export type PropertyKeys = ObjectOrInterfacePropertyKeysFrom2<WeatherStation>;

  export type Links = never;

  export interface Props {
    /*readonly*/ geohash: $PropType['geopoint'] | undefined;
    /*readonly*/ stationId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ geohash: $PropType['geopoint'] | undefined;
    /*readonly*/ stationId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<WeatherStation, WeatherStation.ObjectSet> {
    aggregate: <AO extends AggregateOpts<WeatherStation>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<WeatherStation, AO>,
    ) => Promise<AggregationsResults<WeatherStation, AO>>;

    pivotTo: <L extends LinkNames<WeatherStation>>(type: L) => LinkedType<WeatherStation, L>['objectSet']; // ObjectSet<LinkedType<WeatherStation, L>>;

    fetchOne: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[WeatherStation['primaryKeyType']],
      options?: SelectArg<WeatherStation, L, R, S>,
    ) => Promise<
      WeatherStation.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<WeatherStation, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[WeatherStation['primaryKeyType']],
      options?: SelectArg<WeatherStation, L, R, S>,
    ) => Promise<
      Result<
        WeatherStation.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<WeatherStation, L, R, S>
      >
    >;

    fetchPage: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<WeatherStation, L, R, A, S>,
    ) => Promise<
      PageResult<WeatherStation.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<WeatherStation, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends WeatherStation.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<WeatherStation, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<WeatherStation.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<WeatherStation, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<WeatherStation.OsdkObject>;
  }

  export interface Definition
    extends ObjectTypeDefinition<'WeatherStation', WeatherStation>,
      VersionBound<$ExpectedClientVersion> {
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
      geohash: PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      stationId: PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    K extends keyof WeatherStation.Props = keyof WeatherStation.Props,
    S extends boolean = true,
  > = Osdk<WeatherStation, K | (S extends false ? '$notStrict' : '$strict')> &
    Pick<
      // WeatherStation.Props
      S extends false ? WeatherStation.Props : WeatherStation.StrictProps,
      K
    > & {
      $link: WeatherStation.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<WeatherStation>>(
        type: NEW_Q | string,
      ) => Osdk<NEW_Q, ConvertProps<WeatherStation, NEW_Q, K>>;
    } & $OsdkObject<'WeatherStation'>;
}

/** @deprecated use WeatherStation.Definition **/
export type WeatherStation = WeatherStation.Definition;

export const WeatherStation: WeatherStation & VersionBound<$ExpectedClientVersion> = {
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
