import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
export declare namespace threeDimensionalAggregationFunction {
    interface Signature {
        (): Promise<QueryResult.PrimitiveType<'threeDimensionalAggregation'>>;
    }
    interface Definition extends QueryDefinition<'threeDimensionalAggregationFunction', never, threeDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
        apiName: 'threeDimensionalAggregationFunction';
        displayName: 'threeDimensionalAggregation';
        type: 'query';
        version: '0.11.0';
        parameters: {};
        output: {
            nullable: false;
            threeDimensionalAggregation: {
                keyType: 'string';
                valueType: {
                    keyType: 'range';
                    keySubtype: 'timestamp';
                    valueType: 'double';
                };
            };
            type: 'threeDimensionalAggregation';
        };
    }
}
/** @deprecated use `threeDimensionalAggregationFunction.Signature' instead */
export type threeDimensionalAggregationFunction = threeDimensionalAggregationFunction.Signature;
export declare const threeDimensionalAggregationFunction: threeDimensionalAggregationFunction.Definition;
