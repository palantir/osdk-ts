import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createOsdkDecimalActionTest {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    amount: {
      description: undefined;
      displayName: 'Amount';
      multiplicity: false;
      nullable: false;
      type: 'decimal';
    };
    amounts: {
      description: undefined;
      displayName: 'Amounts';
      multiplicity: true;
      nullable: false;
      type: 'decimal';
    };
  };

  export interface Params {
    readonly amount: ActionParam.PrimitiveType<'decimal'>;

    readonly amounts: ReadonlyArray<ActionParam.PrimitiveType<'decimal'>>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createOsdkDecimalActionTest.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createOsdkDecimalActionTest.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"decimal">} amount
 * @param {ActionParam.PrimitiveType<"decimal">} amounts
 */
export interface createOsdkDecimalActionTest extends ActionDefinition<createOsdkDecimalActionTest.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createOsdkDecimalActionTest';
    displayName: 'Create OSDK Decimal Action Test';
    modifiedEntities: {
      OsdkDecimalActionTest: {
        created: true;
        modified: false;
      };
    };
    parameters: createOsdkDecimalActionTest.ParamsDefinition;
    rid: 'ri.actions.main.action-type.f249bc74-7aff-4c6c-8923-fde8207216fe';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'create-osdk-decimal-action-test';

    signatures: createOsdkDecimalActionTest.Signatures;
  };
  apiName: 'createOsdkDecimalActionTest';
  type: 'action';
  unsanitizedApiName: 'create-osdk-decimal-action-test';
  osdkMetadata: typeof $osdkMetadata;
}

export const createOsdkDecimalActionTest: createOsdkDecimalActionTest = {
  apiName: 'createOsdkDecimalActionTest',
  type: 'action',
  unsanitizedApiName: 'create-osdk-decimal-action-test',
  osdkMetadata: $osdkMetadata,
};
