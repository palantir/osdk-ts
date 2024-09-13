export const twoDimensionalAggregationFunction = {
    apiName: 'twoDimensionalAggregationFunction',
    displayName: 'twoDimensionalAggregation',
    type: 'query',
    version: '0.11.0',
    parameters: {},
    output: {
        nullable: false,
        twoDimensionalAggregation: {
            keyType: 'string',
            valueType: 'double',
        },
        type: 'twoDimensionalAggregation',
    },
};
