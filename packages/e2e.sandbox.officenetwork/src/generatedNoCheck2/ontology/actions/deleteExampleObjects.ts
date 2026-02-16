import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ExampleObjects } from '../objects/ExampleObjects.js';

export namespace deleteExampleObjects {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    ExampleObjects: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<ExampleObjects>;
    };
  };

  export interface Params {
    readonly ExampleObjects: ActionParam.ObjectType<ExampleObjects>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteExampleObjects.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteExampleObjects.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<ExampleObjects>} ExampleObjects
 */
export interface deleteExampleObjects extends ActionDefinition<deleteExampleObjects.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteExampleObjects';
    displayName: 'Delete Example Objects';
    modifiedEntities: {};
    parameters: deleteExampleObjects.ParamsDefinition;
    rid: 'ri.actions.main.action-type.e1698e4f-b789-478a-97bb-8da0865a2513';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: deleteExampleObjects.Signatures;
  };
  apiName: 'deleteExampleObjects';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteExampleObjects: deleteExampleObjects = {
  apiName: 'deleteExampleObjects',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
