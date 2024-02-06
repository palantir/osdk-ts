import { QueryDefinition } from '@osdk/api';

export const returnsDate = {
  apiName: 'returnsDate',
  displayName: 'returnsDate',
  version: '0.0.9',
  parameters: {},
  output: { type: 'date', nullable: false },
} satisfies QueryDefinition<'returnsDate', never>;
