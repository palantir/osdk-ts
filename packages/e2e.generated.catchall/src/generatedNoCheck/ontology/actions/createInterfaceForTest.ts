import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createInterfaceForTest {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    interface_for_test_type: {
      multiplicity: false;
      nullable: false;
      type: 'objectType';
    };
  };

  export interface Params {
    readonly interface_for_test_type: ActionParam.PrimitiveType<'objectType'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createInterfaceForTest.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createInterfaceForTest.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"objectType">} interface_for_test_type
 */
export interface createInterfaceForTest extends ActionDefinition<createInterfaceForTest.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createInterfaceForTest';
    displayName: 'Create InterfaceForTest';
    modifiedEntities: {};
    parameters: createInterfaceForTest.ParamsDefinition;
    rid: 'ri.actions.main.action-type.e4dc3be6-1bcb-4b49-a085-235f5bae50e2';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createInterfaceForTest.Signatures;
  };
  apiName: 'createInterfaceForTest';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createInterfaceForTest: createInterfaceForTest = {
  apiName: 'createInterfaceForTest',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
