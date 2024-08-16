import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

export interface getTodoCount {
  (): Promise<QueryResult.PrimitiveType<'integer'>>;
}

export interface QueryDef$getTodoCount
  extends QueryDefinition<'getTodoCount', never, getTodoCount>,
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

export const getTodoCount: QueryDef$getTodoCount = {
  apiName: 'getTodoCount',
  type: 'query',
  version: '0.1.2',
  parameters: {},
  output: {
    nullable: false,
    type: 'integer',
  },
};
