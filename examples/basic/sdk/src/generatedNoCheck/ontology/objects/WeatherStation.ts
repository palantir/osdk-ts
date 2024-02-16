import type { ObjectTypeDefinition } from '@osdk/api';

export interface WeatherStationDef extends ObjectTypeDefinition<'WeatherStation'> {
  type: 'object';
  apiName: 'WeatherStation';
  description: 'Weather Station';
  primaryKeyApiName: 'stationId';
  primaryKeyType: 'string';
  links: {};
  properties: {
    stationId: {
      multiplicity: false;
      type: 'string';
      nullable: false;
    };
    geohash: {
      multiplicity: false;
      description: 'geopoint';
      type: 'geopoint';
      nullable: true;
    };
  };
}

export const WeatherStation: WeatherStationDef = {
  type: 'object',
  apiName: 'WeatherStation',
  description: 'Weather Station',
  primaryKeyApiName: 'stationId' as const,
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
