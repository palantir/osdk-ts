import type { MinQueryDef, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
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
}

export interface getTask
  extends MinQueryDef<'getTask', 'com.example.dep.Task', getTask.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
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
    signature: getTask.Signature;
  };
  apiName: 'getTask';
  type: 'query';
  version: '0';
  osdkMetadata: typeof $osdkMetadata;
}

export const getTask: getTask = {
  apiName: 'getTask',
  type: 'query',
  version: '0',
  osdkMetadata: $osdkMetadata,
};
