import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
export declare namespace returnsDate {
    interface Signature {
        (): Promise<QueryResult.PrimitiveType<'datetime'>>;
    }
    interface Definition extends QueryDefinition<'returnsDate', never, returnsDate.Signature>, VersionBound<$ExpectedClientVersion> {
        apiName: 'returnsDate';
        displayName: 'returnsDate';
        type: 'query';
        version: '0.0.9';
        parameters: {};
        output: {
            nullable: false;
            type: 'date';
        };
    }
}
/** @deprecated use `returnsDate.Signature' instead */
export type returnsDate = returnsDate.Signature;
export declare const returnsDate: returnsDate.Definition;
