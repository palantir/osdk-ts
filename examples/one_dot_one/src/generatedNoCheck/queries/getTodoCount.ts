import { QueryDefinition } from '@osdk/api';

export const getTodoCount = {
  apiName: 'getTodoCount',
  rid: 'query.rid2',
  version: '0.1.2',
  parameters: {},
  output: { type: 'integer', nullable: false },
} satisfies QueryDefinition<'getTodoCount'>;
