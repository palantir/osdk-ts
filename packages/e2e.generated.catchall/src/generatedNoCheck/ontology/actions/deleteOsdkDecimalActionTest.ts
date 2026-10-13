import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { OsdkDecimalActionTest } from '../objects/OsdkDecimalActionTest.js';

export namespace deleteOsdkDecimalActionTest {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    OsdkDecimalActionTest: {
      description: undefined;
      displayName: 'OSDK Decimal Action Test';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<OsdkDecimalActionTest>;
    };
  };

  export interface Params {
    readonly OsdkDecimalActionTest: ActionParam.ObjectType<OsdkDecimalActionTest>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteOsdkDecimalActionTest.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteOsdkDecimalActionTest.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<OsdkDecimalActionTest>} OsdkDecimalActionTest
 */
export interface deleteOsdkDecimalActionTest extends ActionDefinition<deleteOsdkDecimalActionTest.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteOsdkDecimalActionTest';
    displayName: 'Delete OSDK Decimal Action Test';
    modifiedEntities: {};
    parameters: deleteOsdkDecimalActionTest.ParamsDefinition;
    rid: 'ri.actions.main.action-type.ed1c2190-a90c-4248-821b-912327c5a1e3';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'delete-osdk-decimal-action-test';

    signatures: deleteOsdkDecimalActionTest.Signatures;
  };
  apiName: 'deleteOsdkDecimalActionTest';
  type: 'action';
  unsanitizedApiName: 'delete-osdk-decimal-action-test';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteOsdkDecimalActionTest: deleteOsdkDecimalActionTest = {
  apiName: 'deleteOsdkDecimalActionTest',
  type: 'action',
  unsanitizedApiName: 'delete-osdk-decimal-action-test',
  osdkMetadata: $osdkMetadata,
};
