import type { ObjectTypeDefinition } from '@osdk/api';

export const ObjectWithTimestampPrimaryKey = {
  apiName: 'ObjectWithTimestampPrimaryKey',
  description: 'Object Type With Timestamp Primary Key',
  primaryKeyType: 'timestamp',
  links: {},
  properties: {
    timestamp: {
      multiplicity: false,
      type: 'timestamp',
      nullable: false,
    },
    value: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
} satisfies ObjectTypeDefinition<'ObjectWithTimestampPrimaryKey', never>;
