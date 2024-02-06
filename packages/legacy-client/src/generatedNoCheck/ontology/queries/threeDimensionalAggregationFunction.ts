import { QueryDefinition } from '@osdk/api';

export const threeDimensionalAggregationFunction = {
  apiName: 'threeDimensionalAggregationFunction',
  displayName: 'threeDimensionalAggregation',
  version: '0.11.0',
  parameters: {},
  output: {
    type: 'threeDimensionalAggregation',
    threeDimensionalAggregation: {
      keyType: 'string',
      valueType: { keyType: 'range', keySubtype: 'timestamp', valueType: 'double' },
    },
  },
} satisfies QueryDefinition<'threeDimensionalAggregationFunction', never>;
