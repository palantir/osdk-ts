import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { bus_1 } from '../interfaces/bus_1.js';

export namespace getBusInterfaceSet {
  export interface Signature {
    (query: getBusInterfaceSet.Parameters): Promise<getBusInterfaceSet.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly vehicleIdToFind: QueryParam.PrimitiveType<'string'>;
  }

  export type ReturnType = QueryResult.ObjectSetType<bus_1>;
}

export interface getBusInterfaceSet
  extends QueryDefinition<getBusInterfaceSet.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getBusInterfaceSet';
    displayName: 'outputInterfaceObjectSet';
    rid: 'ri.function-registry.main.function.93aa9d56-fcb5-4c48-a40f-7d631d6b5800';
    type: 'query';
    version: '0.14.0';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      vehicleIdToFind: {
        nullable: false;
        type: 'string';
      };
    };
    output: {
      nullable: false;
      objectSet: 'bus_1';
      type: 'interfaceObjectSet';
    };
    signature: getBusInterfaceSet.Signature;
  };
  apiName: 'getBusInterfaceSet';
  type: 'query';
  version: '0.14.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const getBusInterfaceSet: getBusInterfaceSet = {
  apiName: 'getBusInterfaceSet',
  type: 'query',
  version: '0.14.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
