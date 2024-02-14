import type { ObjectTypeDefinition } from '@osdk/api';

export const BoundariesUsState = {
  apiName: 'BoundariesUsState',
  description: 'Boundaries US State',
  primaryKeyType: 'string',
  links: {},
  properties: {
    usState: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    geometry10M: {
      multiplicity: false,
      description: 'geoshape',
      type: 'geoshape',
      nullable: true,
    },
  },
} satisfies ObjectTypeDefinition<'BoundariesUsState', never>;
