import type { QueryDefinition, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace returnsDate {
    interface Signature {
        (): Promise<returnsDate.ReturnType>;
    }
    type ReturnType = QueryResult.PrimitiveType<'datetime'>;
}
export interface returnsDate extends QueryDefinition<returnsDate.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'returnsDate';
        displayName: 'returnsDate';
        rid: 'ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d';
        type: 'query';
        version: '0.0.9';
        parameters: {};
        output: {
            nullable: false;
            type: 'date';
        };
        signature: returnsDate.Signature;
    };
    apiName: 'returnsDate';
    type: 'query';
    version: '0.0.9';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const returnsDate: returnsDate;
