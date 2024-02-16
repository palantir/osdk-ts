import type { ObjectTypeDefinition } from '@osdk/api';

export interface BoundariesUsStateDef extends ObjectTypeDefinition<'BoundariesUsState'> {
  type: 'object';
  apiName: 'BoundariesUsState';
  description: 'Boundaries US State';
  primaryKeyApiName: 'usState';
  primaryKeyType: 'string';
  links: {};
  properties: {
    usState: {
      multiplicity: false;
      type: 'string';
      nullable: false;
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
  primaryKeyApiName: 'usState' as const,
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
};
