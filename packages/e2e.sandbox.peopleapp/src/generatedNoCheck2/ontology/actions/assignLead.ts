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

export namespace assignLead {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    leadEmployeeNumber: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'integer';
    };
  };

  export interface Params {
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly leadEmployeeNumber?: ActionParam.PrimitiveType<'integer'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: assignLead.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<assignLead.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.PrimitiveType<"integer">} [leadEmployeeNumber]
 */
export interface assignLead extends ActionDefinition<assignLead.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'assignLead';
    displayName: 'Assign lead';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: assignLead.ParamsDefinition;
    rid: 'ri.actions.main.action-type.6fdfed9f-335c-4ec4-9144-1a769f96c389';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'assign-lead';

    signatures: assignLead.Signatures;
  };
  apiName: 'assignLead';
  type: 'action';
  unsanitizedApiName: 'assign-lead';
  osdkMetadata: typeof $osdkMetadata;
}

export const assignLead: assignLead = {
  apiName: 'assignLead',
  type: 'action',
  unsanitizedApiName: 'assign-lead',
  osdkMetadata: $osdkMetadata,
};
