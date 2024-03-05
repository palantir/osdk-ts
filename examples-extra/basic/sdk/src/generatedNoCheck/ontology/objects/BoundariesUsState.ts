import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface BoundariesUsState extends ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState> {
  description: 'Boundaries US State';
  primaryKeyApiName: 'usState';
  primaryKeyType: 'string';
  links: {};
  properties: {
    usState: PropertyDef<'string', 'non-nullable', 'single'>;
    latitude: PropertyDef<'double', 'nullable', 'single'>;
    longitude: PropertyDef<'double', 'nullable', 'single'>;
    geometry10M: PropertyDef<'geoshape', 'nullable', 'single'>;
  };
}

export const BoundariesUsState: BoundariesUsState = {
  type: 'object',
  apiName: 'BoundariesUsState',
  description: 'Boundaries US State',
  primaryKeyApiName: 'usState',
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
