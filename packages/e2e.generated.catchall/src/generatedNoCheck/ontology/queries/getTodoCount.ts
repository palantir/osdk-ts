import type { VersionBound } from '@osdk/api';
import { QueryDefinition } from '@osdk/api';

import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

export interface getTodoCount extends QueryDefinition<'getTodoCount', never>, VersionBound<$ExpectedClientVersion> {
  apiName: 'getTodoCount';
  type: 'query';
  version: '0.1.2';
  parameters: {};
  output: {
    nullable: false;
    type: 'integer';
  };
}

export const getTodoCount: getTodoCount = {
  apiName: 'getTodoCount',
  type: 'query',
  version: '0.1.2',
  parameters: {},
  output: {
    nullable: false,
    type: 'integer',
  },
};
