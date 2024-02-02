import type { ObjectTypeDefinition } from '@osdk/api';

export const WeatherStation = {
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
} satisfies ObjectTypeDefinition<'WeatherStation', never>;
