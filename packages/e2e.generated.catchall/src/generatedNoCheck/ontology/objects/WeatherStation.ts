import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

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

  export interface ObjectSet extends $ObjectSet<WeatherStation.Definition, WeatherStation.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'WeatherStation', WeatherStation.Definition> {
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

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof WeatherStation.Props = keyof WeatherStation.Props,
  > = $Osdk<WeatherStation.Definition, K | OPTIONS>;
}

export type WeatherStation = WeatherStation.Definition;

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
