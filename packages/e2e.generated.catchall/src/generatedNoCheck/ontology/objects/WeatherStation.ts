import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  MinObjectDef as $ObjectTypeDefinition,
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
  type: 'object';
  apiName: 'WeatherStation';
  __DefinitionMetadata?: {
    objectSet: WeatherStation.ObjectSet;
    props: WeatherStation.Props;
    linksType: WeatherStation.Links;
    strictProps: WeatherStation.StrictProps;
    apiName: 'WeatherStation';
    description: 'Weather Station';
    interfaceMap: {};
    inverseInterfaceMap: {};
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
    type: 'object';
  };
}

export const WeatherStation: WeatherStation = {
  type: 'object',
  apiName: 'WeatherStation',
  osdkMetadata: $osdkMetadata,
};
