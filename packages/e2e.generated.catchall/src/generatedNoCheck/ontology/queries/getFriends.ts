import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from '../objects/Person.js';

export namespace getFriends {
  export interface Signature {
    (query: getFriends.Parameters): Promise<getFriends.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly person: QueryParam.ObjectType<Person>;
  }

  export type ReturnType = QueryResult.ObjectSetType<Person>;
}

export interface getFriends extends QueryDefinition<getFriends.Signature>, VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getFriends';
    rid: 'query.rid3';
    type: 'query';
    version: '0.1.2';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      person: {
        nullable: false;
        object: 'Person';
        type: 'object';
        __OsdkTargetType?: Person;
      };
    };
    output: {
      nullable: false;
      objectSet: 'Person';
      type: 'objectSet';
      __OsdkTargetType?: Person;
    };
    signature: getFriends.Signature;
  };
  apiName: 'getFriends';
  type: 'query';
  version: '0.1.2';
  osdkMetadata: typeof $osdkMetadata;
}

export const getFriends: getFriends = {
  apiName: 'getFriends',
  type: 'query',
  version: '0.1.2',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
