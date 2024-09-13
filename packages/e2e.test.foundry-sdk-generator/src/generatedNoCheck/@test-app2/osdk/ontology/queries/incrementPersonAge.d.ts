import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
export declare namespace incrementPersonAge {
    interface Signature {
        (query: incrementPersonAge.Parameters): Promise<QueryResult.PrimitiveType<'struct'>>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly person: QueryParam.PrimitiveType<'struct'>;
    }
    interface Definition extends QueryDefinition<'incrementPersonAge', never, incrementPersonAge.Signature>, VersionBound<$ExpectedClientVersion> {
        apiName: 'incrementPersonAge';
        displayName: 'incrementAge';
        type: 'query';
        version: '0.0.9';
        parameters: {
            /**
             * (no ontology metadata)
             */
            person: {
                nullable: false;
                struct: {
                    firstName: {
                        type: 'string';
                        nullable: false;
                    };
                    lastName: {
                        type: 'string';
                        nullable: false;
                    };
                    age: {
                        type: 'integer';
                        nullable: true;
                    };
                };
                type: 'struct';
            };
        };
        output: {
            nullable: false;
            struct: {
                firstName: {
                    type: 'string';
                    nullable: false;
                };
                lastName: {
                    type: 'string';
                    nullable: false;
                };
                age: {
                    type: 'integer';
                    nullable: true;
                };
            };
            type: 'struct';
        };
    }
}
/** @deprecated use `incrementPersonAge.Signature' instead */
export type incrementPersonAge = incrementPersonAge.Signature;
export declare const incrementPersonAge: incrementPersonAge.Definition;
