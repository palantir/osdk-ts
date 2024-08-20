import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

import type { Task as $Imported$objectTypes$com$example$dep$Task } from '@osdk/e2e.generated.api-namespace.dep';

export interface getTask {
  (query: QueryParams$getTask): Promise<QueryResult.ObjectType<$Imported$objectTypes$com$example$dep$Task>>;
}

export interface QueryParams$getTask {
  /**
   * (no ontology metadata)
   */
  readonly a: QueryParam.ObjectType<$Imported$objectTypes$com$example$dep$Task>;
}

export interface QueryDef$getTask
  extends QueryDefinition<'getTask', 'com.example.dep.Task', getTask>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'getTask';
  type: 'query';
  version: '0';
  parameters: {
    /**
     * (no ontology metadata)
     */
    a: {
      nullable: false;
      object: 'com.example.dep.Task';
      type: 'object';
      __OsdkTargetType?: $Imported$objectTypes$com$example$dep$Task;
    };
  };
  output: {
    nullable: false;
    object: 'com.example.dep.Task';
    type: 'object';
    __OsdkTargetType?: $Imported$objectTypes$com$example$dep$Task;
  };
}

export const getTask: QueryDef$getTask = {
  apiName: 'getTask',
  type: 'query',
  version: '0',
  parameters: {
    a: {
      type: 'object',
      object: 'com.example.dep.Task',
      nullable: false,
    },
  },
  output: {
    nullable: false,
    object: 'com.example.dep.Task',
    type: 'object',
  },
};
