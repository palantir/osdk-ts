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
  export interface Params {
    readonly 'employee-1': ActionParam.ObjectType<Employee>;

    readonly 'venture-1': ActionParam.ObjectType<Venture>;
  }

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'assignEmployee1', 'Employee' | 'Venture', assignEmployee1.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'assignEmployee1';
    description: 'Assigns an employee to a venture';
    modifiedEntities: { Employee: { created: false; modified: true } };
    type: 'action';
    parameters: assignEmployee1.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Assigns an employee to a venture
     */
    applyAction<P extends assignEmployee1.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<assignEmployee1.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/** @deprecated Use `assignEmployee1.Definition` **/
export type assignEmployee1 = assignEmployee1.Signatures;

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
