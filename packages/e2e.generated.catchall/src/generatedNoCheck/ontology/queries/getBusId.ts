import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { bus_1 } from '../interfaces/bus_1.js';

export namespace getBusId {
  export interface Signature {
    (query: getBusId.Parameters): Promise<getBusId.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly bus: QueryParam.InterfaceType<bus_1>;
  }

  export type ReturnType = QueryResult.PrimitiveType<'string'>;
}

export interface getBusId extends QueryDefinition<getBusId.Signature>, VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getBusId';
    displayName: 'inputInterface';
    rid: 'ri.function-registry.main.function.615ebd6c-7494-48ea-8197-0b35a91f2a94';
    type: 'query';
    version: '0.13.0';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      bus: {
        interface: 'bus_1';
        nullable: false;
        type: 'interface';
      };
    };
    output: {
      nullable: false;
      type: 'string';
    };
    signature: getBusId.Signature;
  };
  apiName: 'getBusId';
  type: 'query';
  version: '0.13.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const getBusId: getBusId = {
  apiName: 'getBusId',
  type: 'query',
  version: '0.13.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
