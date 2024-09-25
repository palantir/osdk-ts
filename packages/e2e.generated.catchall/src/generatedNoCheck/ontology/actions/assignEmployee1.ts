import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
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

/**
 * Assigns an employee to a venture
 * @param {ActionParam.ObjectType<Employee>} employee-1
 * @param {ActionParam.ObjectType<Venture>} venture-1
 */
export interface assignEmployee1
  extends ActionDefinition<'assignEmployee1', 'Employee' | 'Venture', assignEmployee1.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'assignEmployee1';
    description: 'Assigns an employee to a venture';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: assignEmployee1.ParamsDefinition;
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    type: 'action';

    signatures: assignEmployee1.Signatures;
  };
  apiName: 'assignEmployee1';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const assignEmployee1: assignEmployee1 = {
  apiName: 'assignEmployee1',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
