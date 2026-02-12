import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Worker } from '../interfaces/Worker.js';

export namespace deleteWorker {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    Worker: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<Worker>;
    };
  };

  export interface Params {
    readonly Worker: ActionParam.InterfaceType<Worker>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteWorker.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteWorker.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.InterfaceType<Worker>} Worker
 */
export interface deleteWorker extends ActionDefinition<deleteWorker.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteWorker';
    displayName: 'Delete Worker';
    modifiedEntities: {};
    parameters: deleteWorker.ParamsDefinition;
    rid: 'ri.actions.main.action-type.556053de-16d1-41bd-8dde-908899ad0af9';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: deleteWorker.Signatures;
  };
  apiName: 'deleteWorker';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteWorker: deleteWorker = {
  apiName: 'deleteWorker',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
