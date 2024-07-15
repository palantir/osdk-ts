import { QueryDefinition } from '@osdk/api';

export const getTodoCount = {
  apiName: 'getTodoCount',
  type: 'query',
  version: '0.1.2',
  parameters: {},
  output: { nullable: false, type: 'integer' },
} satisfies QueryDefinition<'getTodoCount', never>;
