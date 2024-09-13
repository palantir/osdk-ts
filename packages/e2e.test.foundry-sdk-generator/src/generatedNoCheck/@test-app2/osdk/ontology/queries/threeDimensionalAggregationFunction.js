export const threeDimensionalAggregationFunction = {
    apiName: 'threeDimensionalAggregationFunction',
    displayName: 'threeDimensionalAggregation',
    type: 'query',
    version: '0.11.0',
    parameters: {},
    output: {
        nullable: false,
        threeDimensionalAggregation: {
            keyType: 'string',
            valueType: {
                keyType: 'range',
                keySubtype: 'timestamp',
                valueType: 'double',
            },
        },
        type: 'threeDimensionalAggregation',
    },
};
