import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
export declare namespace twoDimensionalAggregationFunction {
    interface Signature {
        (): Promise<QueryResult.PrimitiveType<'twoDimensionalAggregation'>>;
    }
    interface Definition extends QueryDefinition<'twoDimensionalAggregationFunction', never, twoDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
        apiName: 'twoDimensionalAggregationFunction';
        displayName: 'twoDimensionalAggregation';
        type: 'query';
        version: '0.11.0';
        parameters: {};
        output: {
            nullable: false;
            twoDimensionalAggregation: {
                keyType: 'string';
                valueType: 'double';
            };
            type: 'twoDimensionalAggregation';
        };
    }
}
/** @deprecated use `twoDimensionalAggregationFunction.Signature' instead */
export type twoDimensionalAggregationFunction = twoDimensionalAggregationFunction.Signature;
export declare const twoDimensionalAggregationFunction: twoDimensionalAggregationFunction.Definition;
