import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { bus_1 } from '../interfaces/bus_1.js';

export namespace getBusInterface {
  export interface Signature {
    (query: getBusInterface.Parameters): Promise<getBusInterface.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly vehicleIdToFind: QueryParam.PrimitiveType<'string'>;
  }

  export type ReturnType = QueryResult.InterfaceType<bus_1>;
}

export interface getBusInterface
  extends QueryDefinition<getBusInterface.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getBusInterface';
    displayName: 'outputInterface';
    rid: 'ri.function-registry.main.function.876cbb9b-8545-4cd1-9513-1340c9363058';
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
      interface: 'bus_1';
      nullable: false;
      type: 'interface';
    };
    signature: getBusInterface.Signature;
  };
  apiName: 'getBusInterface';
  type: 'query';
  version: '0.14.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const getBusInterface: getBusInterface = {
  apiName: 'getBusInterface',
  type: 'query',
  version: '0.14.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
