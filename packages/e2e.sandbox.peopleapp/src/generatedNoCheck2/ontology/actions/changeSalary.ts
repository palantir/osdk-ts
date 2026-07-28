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

export namespace changeSalary {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
  };

  export interface Params {
    readonly employee: ActionParam.ObjectType<Employee>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: changeSalary.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<changeSalary.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Employee>} employee
 */
export interface changeSalary extends ActionDefinition<changeSalary.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'changeSalary';
    displayName: 'Change salary';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: changeSalary.ParamsDefinition;
    rid: 'ri.actions.main.action-type.006c30f9-c4f3-477e-bd4b-10dd16e2d7dd';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'change-salary';

    signatures: changeSalary.Signatures;
  };
  apiName: 'changeSalary';
  type: 'action';
  unsanitizedApiName: 'change-salary';
  osdkMetadata: typeof $osdkMetadata;
}

export const changeSalary: changeSalary = {
  apiName: 'changeSalary',
  type: 'action',
  unsanitizedApiName: 'change-salary',
  osdkMetadata: $osdkMetadata,
};
