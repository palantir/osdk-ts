import type { ObjectTypeDefinition } from '@osdk/api';

export interface BoundariesUsStateDef extends ObjectTypeDefinition<'BoundariesUsState'> {
  type: 'object';
  apiName: 'BoundariesUsState';
  description: 'Boundaries US State';
  primaryKeyType: 'string';
  links: {};
  properties: {
    usState: {
      multiplicity: false;
      type: 'string';
      nullable: false;
    };
    latitude: {
      multiplicity: false;
      type: 'double';
      nullable: true;
    };
    longitude: {
      multiplicity: false;
      type: 'double';
      nullable: true;
    };
    geometry10M: {
      multiplicity: false;
      description: 'geoshape';
      type: 'geoshape';
      nullable: true;
    };
  };
}

export const BoundariesUsState: BoundariesUsStateDef = {
  type: 'object',
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
    latitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    longitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    geometry10M: {
      multiplicity: false,
      description: 'geoshape',
      type: 'geoshape',
      nullable: true,
    },
  },
};
