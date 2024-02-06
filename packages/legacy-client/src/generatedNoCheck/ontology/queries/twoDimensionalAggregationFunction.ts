import { QueryDefinition } from '@osdk/api';

export const twoDimensionalAggregationFunction = {
  apiName: 'twoDimensionalAggregationFunction',
  displayName: 'twoDimensionalAggregation',
  version: '0.11.0',
  parameters: {},
  output: { type: 'twoDimensionalAggregation', twoDimensionalAggregation: { keyType: 'string', valueType: 'double' } },
} satisfies QueryDefinition<'twoDimensionalAggregationFunction', never>;
