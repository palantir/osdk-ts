import type { ObjectTypeDefinition } from '@osdk/api';

export const Office = {
  apiName: 'Office',
  description: 'A office in our Company',
  primaryKeyType: 'string',
  links: {
    occupants: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  properties: {
    officeId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    entrance: {
      multiplicity: false,
      type: 'geopoint',
      nullable: true,
    },
    occupiedArea: {
      multiplicity: false,
      description: 'The occupied area of the Office',
      type: 'geoshape',
      nullable: true,
    },
    name: {
      multiplicity: false,
      description: 'The Name of the Office',
      type: 'string',
      nullable: true,
    },
  },
} satisfies ObjectTypeDefinition<'Office', 'Employee'>;
