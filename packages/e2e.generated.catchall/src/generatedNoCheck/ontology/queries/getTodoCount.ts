import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace getTodoCount {
  export interface Signature {
    (): Promise<getTodoCount.ReturnType>;
  }

  export type ReturnType = QueryResult.PrimitiveType<'integer'>;
}

export interface getTodoCount extends QueryDefinition<getTodoCount.Signature>, VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getTodoCount';
    rid: 'query.rid2';
    type: 'query';
    version: '0.1.2';
    parameters: {};
    output: {
      nullable: false;
      type: 'integer';
    };
    signature: getTodoCount.Signature;
  };
  apiName: 'getTodoCount';
  type: 'query';
  version: '0.1.2';
  osdkMetadata: typeof $osdkMetadata;
}

export const getTodoCount: getTodoCount = {
  apiName: 'getTodoCount',
  type: 'query',
  version: '0.1.2',
  osdkMetadata: $osdkMetadata,
};
