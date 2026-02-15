import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createEmployeeTest {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee_number: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'integer';
    };
  };

  export interface Params {
    readonly employee_number: ActionParam.PrimitiveType<'integer'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createEmployeeTest.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createEmployeeTest.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"integer">} employee_number
 */
export interface createEmployeeTest extends ActionDefinition<createEmployeeTest.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createEmployeeTest';
    displayName: 'Create Employee Test';
    modifiedEntities: {
      Employee: {
        created: true;
        modified: false;
      };
    };
    parameters: createEmployeeTest.ParamsDefinition;
    rid: 'ri.actions.main.action-type.bf65fdab-3a54-4935-af97-448f101b1d27';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createEmployeeTest.Signatures;
  };
  apiName: 'createEmployeeTest';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createEmployeeTest: createEmployeeTest = {
  apiName: 'createEmployeeTest',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
