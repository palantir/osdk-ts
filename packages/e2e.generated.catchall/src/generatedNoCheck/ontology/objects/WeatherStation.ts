import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

export namespace WeatherStation {
  export type PropertyKeys = 'stationId' | 'geohash';

  export type Links = {};

  export interface Props {
    readonly geohash: $PropType['geopoint'] | undefined;
    readonly stationId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly geohash: $PropType['geopoint'] | undefined;
    readonly stationId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<WeatherStation, WeatherStation.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof WeatherStation.Props = keyof WeatherStation.Props,
  > = $Osdk<WeatherStation, K | OPTIONS>;
}

export interface WeatherStation extends $ObjectTypeDefinition<'WeatherStation', WeatherStation> {
  osdkMetadata: typeof $osdkMetadata;
  objectSet: WeatherStation.ObjectSet;
  props: WeatherStation.Props;
  linksType: WeatherStation.Links;
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

export const WeatherStation: WeatherStation = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
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
