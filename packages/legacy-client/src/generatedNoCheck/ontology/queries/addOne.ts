import { QueryDefinition } from '@osdk/api';

export const addOne = {
  apiName: 'addOne',
  displayName: 'myFunction',
  version: '0.0.9',
  parameters: { n: { type: 'integer', nullable: false } },
  output: { type: 'integer', nullable: false },
} satisfies QueryDefinition<'addOne', never>;
