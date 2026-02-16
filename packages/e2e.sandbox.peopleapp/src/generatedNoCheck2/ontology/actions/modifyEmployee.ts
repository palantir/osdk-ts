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

export namespace modifyEmployee {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    primary_office_id: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    fullName: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
  };

  export interface Params {
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly primary_office_id?: ActionParam.PrimitiveType<'string'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyEmployee.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyEmployee.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.PrimitiveType<"string">} [primary_office_id]
 */
export interface modifyEmployee extends ActionDefinition<modifyEmployee.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyEmployee';
    displayName: 'Modify Employee';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: modifyEmployee.ParamsDefinition;
    rid: 'ri.actions.main.action-type.1e59bc2b-4f3a-47d1-82d2-7d0516c7c4ee';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyEmployee.Signatures;
  };
  apiName: 'modifyEmployee';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyEmployee: modifyEmployee = {
  apiName: 'modifyEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
