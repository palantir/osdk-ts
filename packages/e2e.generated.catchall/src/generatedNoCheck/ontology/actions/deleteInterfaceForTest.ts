import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { InterfaceForTest } from '../interfaces/InterfaceForTest.js';

export namespace deleteInterfaceForTest {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    InterfaceForTest: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<InterfaceForTest>;
    };
  };

  export interface Params {
    readonly InterfaceForTest: ActionParam.InterfaceType<InterfaceForTest>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteInterfaceForTest.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteInterfaceForTest.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.InterfaceType<InterfaceForTest>} InterfaceForTest
 */
export interface deleteInterfaceForTest extends ActionDefinition<deleteInterfaceForTest.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteInterfaceForTest';
    displayName: 'Delete InterfaceForTest';
    modifiedEntities: {};
    parameters: deleteInterfaceForTest.ParamsDefinition;
    rid: 'ri.actions.main.action-type.e36651f3-7fa4-4e5f-9d59-3d7cc80fb562';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: deleteInterfaceForTest.Signatures;
  };
  apiName: 'deleteInterfaceForTest';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteInterfaceForTest: deleteInterfaceForTest = {
  apiName: 'deleteInterfaceForTest',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
