import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface Office extends ObjectTypeDefinition<'Office', Office> {
  description: 'A office in our Company';
  links: {};
  primaryKeyApiName: 'officeId';
  primaryKeyType: 'string';
  properties: {
    entrance: PropertyDef<'geopoint', 'nullable', 'single'>;
    meetingRoomCapacities: PropertyDef<'integer', 'nullable', 'array'>;
    meetingRooms: PropertyDef<'string', 'nullable', 'array'>;
    name: PropertyDef<'string', 'nullable', 'single'>;
    occupiedArea: PropertyDef<'geoshape', 'nullable', 'single'>;
    officeId: PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const Office: Office = {
  apiName: 'Office',
  description: 'A office in our Company',
  links: {},
  primaryKeyApiName: 'officeId',
  primaryKeyType: 'string',
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
    meetingRooms: {
      multiplicity: true,
      description: 'The Names of meetings rooms in the office',
      type: 'string',
      nullable: true,
    },
    meetingRoomCapacities: {
      multiplicity: true,
      description: 'The individual capacities of meetings rooms in the office',
      type: 'integer',
      nullable: true,
    },
  },
  type: 'object',
};
