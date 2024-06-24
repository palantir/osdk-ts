import { QueryDefinition } from '@osdk/api';

export const getTodoCount = {
  apiName: 'getTodoCount',
  type: 'query',
  version: '0.1.2',
  parameters: {},
  output: { type: 'integer', nullable: false },
} satisfies QueryDefinition<'getTodoCount', never>;
