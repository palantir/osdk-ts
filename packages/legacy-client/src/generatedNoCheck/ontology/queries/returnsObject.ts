import { QueryDefinition } from '@osdk/api';

export const returnsObject = {
  apiName: 'returnsObject',
  displayName: 'returnsObject',
  version: '0.0.9',
  parameters: {},
  output: { type: 'object', object: 'Employee', nullable: false },
} satisfies QueryDefinition<'returnsObject', 'Employee'>;
