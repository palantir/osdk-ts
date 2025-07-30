import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Office } from '../objects/Office.js';

export namespace deleteOffice {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    Office: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Office>;
    };
  };

  export interface Params {
    readonly Office: ActionParam.ObjectType<Office>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteOffice.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteOffice.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Office>} Office
 */
export interface deleteOffice extends ActionDefinition<deleteOffice.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteOffice';
    displayName: 'Delete Office';
    modifiedEntities: {};
    parameters: deleteOffice.ParamsDefinition;
    rid: 'ri.actions.main.action-type.72b40fca-42b6-4e09-99d1-a3d701808ce7';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: deleteOffice.Signatures;
  };
  apiName: 'deleteOffice';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteOffice: deleteOffice = {
  apiName: 'deleteOffice',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
