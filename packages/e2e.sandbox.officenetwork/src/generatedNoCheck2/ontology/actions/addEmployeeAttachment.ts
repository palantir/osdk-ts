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

export namespace addEmployeeAttachment {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    employee_file: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'attachment';
    };
  };

  export interface Params {
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly employee_file: ActionParam.PrimitiveType<'attachment'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: addEmployeeAttachment.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<addEmployeeAttachment.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.PrimitiveType<"attachment">} employee_file
 */
export interface addEmployeeAttachment extends ActionDefinition<addEmployeeAttachment.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'addEmployeeAttachment';
    displayName: 'addEmployeeAttachment';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: addEmployeeAttachment.ParamsDefinition;
    rid: 'ri.actions.main.action-type.f0db7733-e549-4ce5-8ff5-d2a6d0e4ba17';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: addEmployeeAttachment.Signatures;
  };
  apiName: 'addEmployeeAttachment';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const addEmployeeAttachment: addEmployeeAttachment = {
  apiName: 'addEmployeeAttachment',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
