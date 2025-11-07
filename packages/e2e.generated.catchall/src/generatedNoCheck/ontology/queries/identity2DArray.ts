import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace identity2DArray {
  export interface Signature {
    (query: identity2DArray.Parameters): Promise<identity2DArray.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly array: ReadonlyArray<ReadonlyArray<QueryParam.PrimitiveType<'double'>>>;
  }

  export type ReturnType = Array<Array<QueryResult.PrimitiveType<'double'>>>;
}

export interface identity2DArray
  extends QueryDefinition<identity2DArray.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'identity2DArray';
    displayName: 'identity2DArray';
    rid: 'ri.function-registry.main.function.3c154359-8f43-4684-b108-ddb947949349';
    type: 'query';
    version: '1.1.0';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      array: {
        array: {
          array: {
            type: 'double';
            nullable: false;
          };
          type: 'array';
          nullable: false;
        };
        nullable: false;
        type: 'array';
      };
    };
    output: {
      array: {
        array: {
          type: 'double';
          nullable: false;
        };
        type: 'array';
        nullable: false;
      };
      nullable: false;
      type: 'array';
    };
    signature: identity2DArray.Signature;
  };
  apiName: 'identity2DArray';
  type: 'query';
  version: '1.1.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const identity2DArray: identity2DArray = {
  apiName: 'identity2DArray',
  type: 'query',
  version: '1.1.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
