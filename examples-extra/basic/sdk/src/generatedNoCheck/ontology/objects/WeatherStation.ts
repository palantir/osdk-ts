import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';

export interface WeatherStation extends ObjectTypeDefinition<'WeatherStation', WeatherStation>, VersionBound<'0.15.0'> {
  description: 'Weather Station';
  links: {};
  primaryKeyApiName: 'stationId';
  primaryKeyType: 'string';
  properties: {
    geohash: PropertyDef<'geopoint', 'nullable', 'single'>;
    stationId: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const WeatherStation: WeatherStation = {
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
      multiplicity: false,
      description: 'geopoint',
      type: 'geopoint',
      nullable: true,
    },
  },
  type: 'object',
};
