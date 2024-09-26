import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Task as $Imported$objectTypes$com$example$dep$Task } from '@osdk/e2e.generated.api-namespace.dep';

export namespace getTask {
  export interface Signature {
    (query: getTask.Parameters): Promise<QueryResult.ObjectType<$Imported$objectTypes$com$example$dep$Task>>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly a: QueryParam.ObjectType<$Imported$objectTypes$com$example$dep$Task>;
  }

  export interface Definition
    extends QueryDefinition<'getTask', 'com.example.dep.Task', getTask.Signature>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'getTask';
    rid: 'ri.a.b.c';
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
}

/** @deprecated use `getTask.Signature' instead */
export type getTask = getTask.Signature;

export const getTask: getTask.Definition = {
  apiName: 'getTask',
  rid: 'ri.a.b.c',
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
