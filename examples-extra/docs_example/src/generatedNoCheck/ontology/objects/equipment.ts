import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface equipment extends ObjectTypeDefinition<'equipment', equipment> {
  links: {};
  primaryKeyApiName: 'equipmentId';
  primaryKeyType: 'string';
  properties: {
    equipmentId: PropertyDef<'string', 'non-nullable', 'single'>;
    type: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const equipment: equipment = {
  apiName: 'equipment',
  links: {},
  primaryKeyApiName: 'equipmentId',
  primaryKeyType: 'string',
  properties: {
    equipmentId: {
      multiplicity: false,
      description: 'The id of an equipment',
      type: 'string',
      nullable: false,
    },
    type: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'object',
};
