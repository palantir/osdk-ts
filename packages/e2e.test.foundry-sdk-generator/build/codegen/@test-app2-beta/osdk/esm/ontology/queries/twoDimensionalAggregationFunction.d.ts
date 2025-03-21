import type { QueryDefinition, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace twoDimensionalAggregationFunction {
    interface Signature {
        (): Promise<twoDimensionalAggregationFunction.ReturnType>;
    }
    type ReturnType = QueryResult.TwoDimensionalAggregationType<'string', 'double'>;
}
export interface twoDimensionalAggregationFunction extends QueryDefinition<twoDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'twoDimensionalAggregationFunction';
        displayName: 'twoDimensionalAggregation';
        rid: 'ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968';
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
        signature: twoDimensionalAggregationFunction.Signature;
    };
    apiName: 'twoDimensionalAggregationFunction';
    type: 'query';
    version: '0.11.0';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const twoDimensionalAggregationFunction: twoDimensionalAggregationFunction;
