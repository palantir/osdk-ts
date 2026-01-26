import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createExampleObjects {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    type: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
  };

  export interface Params {
    readonly type?: ActionParam.PrimitiveType<'string'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createExampleObjects.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createExampleObjects.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} [type]
 */
export interface createExampleObjects extends ActionDefinition<createExampleObjects.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createExampleObjects';
    displayName: 'Create Example Objects';
    modifiedEntities: {
      ExampleObjects: {
        created: true;
        modified: false;
      };
    };
    parameters: createExampleObjects.ParamsDefinition;
    rid: 'ri.actions.main.action-type.597dbf43-b002-4cfd-ba1f-277b6b6a833b';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createExampleObjects.Signatures;
  };
  apiName: 'createExampleObjects';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createExampleObjects: createExampleObjects = {
  apiName: 'createExampleObjects',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
