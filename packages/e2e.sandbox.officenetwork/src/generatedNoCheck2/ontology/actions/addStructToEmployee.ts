import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';

export namespace addStructToEmployee {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    latest_venture: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Struct<{ venture: 'string'; days: 'integer' }>;
    };
  };

  export interface Params {
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly latest_venture: ActionParam.StructType<{ venture: 'string'; days: 'integer' }>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: addStructToEmployee.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<addStructToEmployee.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.StructType<{"venture":"string","days":"integer"}>} latest_venture
 */
export interface addStructToEmployee extends ActionDefinition<addStructToEmployee.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'addStructToEmployee';
    displayName: 'Add Struct to Employee';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: addStructToEmployee.ParamsDefinition;
    rid: 'ri.actions.main.action-type.9441fc5f-6bf1-41d0-9934-0296d841f509';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: addStructToEmployee.Signatures;
  };
  apiName: 'addStructToEmployee';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const addStructToEmployee: addStructToEmployee = {
  apiName: 'addStructToEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
