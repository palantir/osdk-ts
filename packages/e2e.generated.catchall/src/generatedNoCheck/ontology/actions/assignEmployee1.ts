import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';
import type { Venture } from '../objects/Venture.js';

export namespace assignEmployee1 {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    'employee-1': {
      multiplicity: false;
      nullable: false;
      type: ObjectActionDataType<'Employee', Employee>;
    };
    'venture-1': {
      multiplicity: false;
      nullable: false;
      type: ObjectActionDataType<'Venture', Venture>;
    };
  };

  /**
   * Assigns an employee to a venture
   */
  export interface Parameters {
    readonly 'employee-1': ActionParam.ObjectType<Employee>;

    readonly 'venture-1': ActionParam.ObjectType<Venture>;
  }

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'assignEmployee1', 'Employee' | 'Venture', assignEmployee1>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'assignEmployee1';
    description: 'Assigns an employee to a venture';
    modifiedEntities: { Employee: { created: false; modified: true } };
    type: 'action';
    parameters: assignEmployee1.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Assigns an employee to a venture
     */
    <
      P extends assignEmployee1.Parameters | ReadonlyArray<assignEmployee1.Parameters>,
      OP extends P extends ReadonlyArray<assignEmployee1.Parameters> ? ApplyBatchActionOptions : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `assignEmployee1.Parameters`
 */
export type assignEmployee1$Params = assignEmployee1.Parameters | ReadonlyArray<assignEmployee1.Parameters>;

/** @deprecated Use `assignEmployee1.Definition` **/
export type assignEmployee1 = assignEmployee1.Signature;

export const assignEmployee1: assignEmployee1.Definition = {
  apiName: 'assignEmployee1',
  description: 'Assigns an employee to a venture',
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    'employee-1': {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Employee',
      },
      nullable: false,
    },
    'venture-1': {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Venture',
      },
      nullable: false,
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
