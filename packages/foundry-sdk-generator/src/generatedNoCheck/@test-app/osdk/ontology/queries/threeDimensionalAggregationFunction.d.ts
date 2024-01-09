export declare const threeDimensionalAggregationFunction: {
    apiName: "threeDimensionalAggregationFunction";
    displayName: string;
    version: string;
    parameters: {};
    output: {
        type: "threeDimensionalAggregation";
        threeDimensionalAggregation: {
            keyType: "string";
            valueType: {
                keyType: "range";
                keySubtype: "timestamp";
                valueType: "double";
            };
        };
    };
};
