import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface BoundariesUsState extends ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState> {
  description: 'Boundaries US State';
  links: {};
  primaryKeyApiName: 'usState';
  primaryKeyType: 'string';
  properties: {
    geometry10M: PropertyDef<'geoshape', 'nullable', 'single'>;
    latitude: PropertyDef<'double', 'nullable', 'single'>;
    longitude: PropertyDef<'double', 'nullable', 'single'>;
    usState: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const BoundariesUsState: BoundariesUsState = {
  apiName: 'BoundariesUsState',
  description: 'Boundaries US State',
  links: {},
  primaryKeyApiName: 'usState',
  primaryKeyType: 'string',
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
  type: 'object',
};
