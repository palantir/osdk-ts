import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import { $resolveQuery, $resolveQueryVersion } from '@osdk/aliases';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace getFirstSecondElementOf2DArray {
  export interface Signature {
    (query: getFirstSecondElementOf2DArray.Parameters): Promise<getFirstSecondElementOf2DArray.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly array: ReadonlyArray<ReadonlyArray<QueryParam.PrimitiveType<'double'>>>;
  }

  export type ReturnType = QueryResult.PrimitiveType<'double'>;
}

export interface getFirstSecondElementOf2DArray
  extends QueryDefinition<getFirstSecondElementOf2DArray.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getFirstSecondElementOf2DArray';
    displayName: 'getFirstSecondElementOf2DArray';
    rid: 'ri.function-registry.main.function.0d736075-0c52-409f-93e1-b7cc05963913';
    type: 'query';
    version: '1.0.0';
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
      nullable: false;
      type: 'double';
    };
    signature: getFirstSecondElementOf2DArray.Signature;
  };
  apiName: 'getFirstSecondElementOf2DArray';
  type: 'query';
  version: '1.0.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const getFirstSecondElementOf2DArray: getFirstSecondElementOf2DArray = {
  type: 'query',
  get apiName() {
    return $resolveQuery('getFirstSecondElementOf2DArray') as 'getFirstSecondElementOf2DArray';
  },
  get version() {
    return $resolveQueryVersion('getFirstSecondElementOf2DArray') as '1.0.0';
  },
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
