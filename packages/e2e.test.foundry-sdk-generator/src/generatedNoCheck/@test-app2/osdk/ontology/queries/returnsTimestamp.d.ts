import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryResult } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace returnsTimestamp {
    interface Signature {
        (): Promise<returnsTimestamp.ReturnType>;
    }
    type ReturnType = QueryResult.PrimitiveType<'timestamp'>;
}
export interface returnsTimestamp extends QueryDefinition<returnsTimestamp.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'returnsTimestamp';
        displayName: 'returnsTimestamp';
        rid: 'ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d';
        type: 'query';
        version: '0.0.9';
        parameters: {};
        output: {
            nullable: false;
            type: 'timestamp';
        };
        signature: returnsTimestamp.Signature;
    };
    apiName: 'returnsTimestamp';
    type: 'query';
    version: '0.0.9';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const returnsTimestamp: returnsTimestamp;
