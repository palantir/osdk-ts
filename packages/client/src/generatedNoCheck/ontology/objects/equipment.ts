import type { ObjectTypeDefinition } from '@osdk/api';

export const equipment = {
  apiName: 'equipment',
  primaryKeyType: 'string',
  links: {},
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
} satisfies ObjectTypeDefinition<'equipment', never>;
