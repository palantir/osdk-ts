"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threeDimensionalAggregationFunction = void 0;
exports.threeDimensionalAggregationFunction = {
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
};
