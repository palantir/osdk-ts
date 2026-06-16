import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';

export namespace getEmployeeDaysSinceStart {
  export interface Signature {
    (query: getEmployeeDaysSinceStart.Parameters): Promise<getEmployeeDaysSinceStart.ReturnType>;
  }

  export interface Parameters {
    /**
     * (no ontology metadata)
     */
    readonly employees: QueryParam.ObjectSetType<Employee>;
  }

  export type ReturnType = Partial<
    Record<
      ObjectSpecifier<Employee>,
      {
        daysSinceStart?: QueryResult.PrimitiveType<'integer'>;
      }
    >
  >;
}

export interface getEmployeeDaysSinceStart
  extends QueryDefinition<getEmployeeDaysSinceStart.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'getEmployeeDaysSinceStart';
    displayName: 'getEmployeeDaysSinceStart';
    rid: 'ri.function-registry.main.function.5d6a29bd-20ea-46ad-9e8a-e6e7f28b7c02';
    type: 'query';
    version: '0.1.0';
    isFixedVersion: false;
    parameters: {
      /**
       * (no ontology metadata)
       */
      employees: {
        nullable: false;
        objectSet: 'Employee';
        type: 'objectSet';
        __OsdkTargetType?: Employee;
      };
    };
    output: {
      keyType: {
        type: 'object';
        object: 'Employee';
        nullable: false;
      };
      nullable: false;
      type: 'map';
      valueType: {
        type: 'struct';
        struct: {
          daysSinceStart: {
            type: 'integer';
            nullable: true;
          };
        };
        nullable: false;
      };
    };
    signature: getEmployeeDaysSinceStart.Signature;
  };
  apiName: 'getEmployeeDaysSinceStart';
  type: 'query';
  version: '0.1.0';
  osdkMetadata: typeof $osdkMetadata;
}

export const getEmployeeDaysSinceStart: getEmployeeDaysSinceStart = {
  apiName: 'getEmployeeDaysSinceStart',
  type: 'query',
  version: '0.1.0',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
