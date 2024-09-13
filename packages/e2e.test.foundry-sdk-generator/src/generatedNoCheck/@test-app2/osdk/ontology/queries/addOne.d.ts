import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
export declare namespace addOne {
    interface Signature {
        (query: addOne.Parameters): Promise<QueryResult.PrimitiveType<'integer'>>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly n: QueryParam.PrimitiveType<'integer'>;
    }
    interface Definition extends QueryDefinition<'addOne', never, addOne.Signature>, VersionBound<$ExpectedClientVersion> {
        apiName: 'addOne';
        displayName: 'myFunction';
        type: 'query';
        version: '0.0.9';
        parameters: {
            /**
             * (no ontology metadata)
             */
            n: {
                nullable: false;
                type: 'integer';
            };
        };
        output: {
            nullable: false;
            type: 'integer';
        };
    }
}
/** @deprecated use `addOne.Signature' instead */
export type addOne = addOne.Signature;
export declare const addOne: addOne.Definition;
