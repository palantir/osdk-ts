import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { bus_1 } from '../interfaces/bus_1.js';

export namespace getBusFromSet {
  export interface Signature {
    (query: getBusFromSet.Parameters): Promise<getBusFromSet.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly busesObjectSet: QueryParam.ObjectSetType<bus_1>;
  }

  export type ReturnType = QueryResult.PrimitiveType<'string'>;
}

export interface getBusFromSet extends QueryDefinition<getBusFromSet.Signature>, VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getBusFromSet';
    displayName: 'inputInterfaceObjectSet';
    rid: 'ri.function-registry.main.function.4db06290-7bb9-43fd-a22d-608b7ecc1849';
    type: 'query';
    version: '0.14.0';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      busesObjectSet: {
        nullable: false;
        objectSet: 'bus_1';
        type: 'interfaceObjectSet';
      };
    };
    output: {
      nullable: false;
      type: 'string';
    };
    signature: getBusFromSet.Signature;
  };
  apiName: 'getBusFromSet';
  type: 'query';
  version: '0.14.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const getBusFromSet: getBusFromSet = {
  apiName: 'getBusFromSet',
  type: 'query',
  version: '0.14.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
