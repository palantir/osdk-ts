import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface Office extends ObjectTypeDefinition<'Office', Office> {
  description: 'A office in our Company';
  primaryKeyType: 'string';
  links: {};
  properties: {
    officeId: PropertyDef<'string', 'nullable', 'single'>;
    entrance: PropertyDef<'geopoint', 'nullable', 'single'>;
    occupiedArea: PropertyDef<'geoshape', 'nullable', 'single'>;
    name: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const Office: Office = {
  type: 'object',
  apiName: 'Office',
  description: 'A office in our Company',
  primaryKeyType: 'string',
  links: {},
  properties: {
    officeId: {
      multiplicity: false,
      type: 'string',
      nullable: true,
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
};
