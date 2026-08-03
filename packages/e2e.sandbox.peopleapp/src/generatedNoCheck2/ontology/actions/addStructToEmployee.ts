import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $resolveAction } from '@osdk/aliases';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';

export namespace addStructToEmployee {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      description: undefined;
      displayName: 'Employee';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    latest_venture: {
      description: undefined;
      displayName: 'Latest Venture ';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Struct<{
        days: { type: 'integer'; nullable: false };
        venture: { type: 'string'; nullable: false };
      }>;
    };
  };

  export interface Params {
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly latest_venture: ActionParam.StructType<{
      days: { type: 'integer'; nullable: false };
      venture: { type: 'string'; nullable: false };
    }>;
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
 * @param {ActionParam.StructType<{"days":{"type":"integer","nullable":false},"venture":{"type":"string","nullable":false}}>} latest_venture
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
    unsanitizedApiName: 'add-struct-to-employee';

    signatures: addStructToEmployee.Signatures;
  };
  apiName: 'addStructToEmployee';
  type: 'action';
  unsanitizedApiName: 'add-struct-to-employee';
  osdkMetadata: typeof $osdkMetadata;
}

export const addStructToEmployee: addStructToEmployee = {
  apiName: 'addStructToEmployee',
  type: 'action',
  get unsanitizedApiName() {
    return $resolveAction('add-struct-to-employee') as 'add-struct-to-employee';
  },
  osdkMetadata: $osdkMetadata,
};
