import { QueryDefinition } from '@osdk/api';

export const returnsTimestamp = {
  apiName: 'returnsTimestamp',
  displayName: 'returnsTimestamp',
  version: '0.0.9',
  parameters: {},
  output: { type: 'timestamp', nullable: false },
} satisfies QueryDefinition<'returnsTimestamp', never>;
