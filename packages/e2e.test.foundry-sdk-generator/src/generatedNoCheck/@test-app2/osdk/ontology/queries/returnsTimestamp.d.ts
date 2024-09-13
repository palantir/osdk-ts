import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
export declare namespace returnsTimestamp {
    interface Signature {
        (): Promise<QueryResult.PrimitiveType<'timestamp'>>;
    }
    interface Definition extends QueryDefinition<'returnsTimestamp', never, returnsTimestamp.Signature>, VersionBound<$ExpectedClientVersion> {
        apiName: 'returnsTimestamp';
        displayName: 'returnsTimestamp';
        type: 'query';
        version: '0.0.9';
        parameters: {};
        output: {
            nullable: false;
            type: 'timestamp';
        };
    }
}
/** @deprecated use `returnsTimestamp.Signature' instead */
export type returnsTimestamp = returnsTimestamp.Signature;
export declare const returnsTimestamp: returnsTimestamp.Definition;
