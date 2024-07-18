import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface WeatherStation
  extends ObjectTypeDefinition<'WeatherStation', WeatherStation>,
    VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
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

export const WeatherStation: WeatherStation = {
  osdkMetadata: $osdkMetadata,
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
