import type { MinQueryDef, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

export namespace getTodoCount {
  export interface Signature {
    (): Promise<QueryResult.PrimitiveType<'integer'>>;
  }

  export interface Definition
    extends MinQueryDef<'getTodoCount', never, getTodoCount.Signature>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'getTodoCount';
    type: 'query';
    version: '0.1.2';
    parameters: {};
    output: {
      nullable: false;
      type: 'integer';
    };
  }
}

/** @deprecated use `getTodoCount.Signature' instead */
export type getTodoCount = getTodoCount.Signature;

export const getTodoCount: getTodoCount.Definition = {
  apiName: 'getTodoCount',
  type: 'query',
  version: '0.1.2',
  parameters: {},
  output: {
    nullable: false,
    type: 'integer',
  },
};
