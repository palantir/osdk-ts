import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface WeatherStation extends ObjectTypeDefinition<'WeatherStation', WeatherStation> {
  description: 'Weather Station';
  primaryKeyType: 'string';
  links: {};
  properties: {
    stationId: PropertyDef<'string', 'non-nullable', 'single'>;
    geohash: PropertyDef<'geopoint', 'nullable', 'single'>;
  };
}

export const WeatherStation: WeatherStation = {
  type: 'object',
  apiName: 'WeatherStation',
  description: 'Weather Station',
  primaryKeyType: 'string',
  links: {},
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
};
