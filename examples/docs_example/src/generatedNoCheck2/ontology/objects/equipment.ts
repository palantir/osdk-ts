import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface equipment extends ObjectTypeDefinition<'equipment', equipment> {
  primaryKeyType: 'string';
  links: {};
  properties: {
    equipmentId: PropertyDef<'string', 'nullable', 'single'>;
    type: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const equipment: equipment = {
  type: 'object',
  apiName: 'equipment',
  primaryKeyType: 'string',
  links: {},
  properties: {
    equipmentId: {
      multiplicity: false,
      description: 'The id of an equipment',
      type: 'string',
      nullable: true,
    },
    type: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
};
