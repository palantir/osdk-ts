import type { ObjectTypeDefinition } from '@osdk/api';

export interface WeatherStationDef extends ObjectTypeDefinition<'WeatherStation'> {
  type: 'object';
  apiName: 'WeatherStation';
  description: 'Weather Station';
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
  primaryKeyType: 'string',
  links: {} as const,
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
