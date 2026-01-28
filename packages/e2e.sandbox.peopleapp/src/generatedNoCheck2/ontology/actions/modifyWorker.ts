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

export namespace modifyWorker {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    email: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    name: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    Worker: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<Worker>;
    };
  };

  export interface Params {
    readonly email: ActionParam.PrimitiveType<'string'>;

    readonly name?: ActionParam.PrimitiveType<'string'> | null;

    readonly Worker: ActionParam.InterfaceType<Worker>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyWorker.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyWorker.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} email
 * @param {ActionParam.PrimitiveType<"string">} [name]
 * @param {ActionParam.InterfaceType<Worker>} Worker
 */
export interface modifyWorker extends ActionDefinition<modifyWorker.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyWorker';
    displayName: 'Modify Worker';
    modifiedEntities: {};
    parameters: modifyWorker.ParamsDefinition;
    rid: 'ri.actions.main.action-type.0b1e5427-b2c5-46f6-8d1f-980a69ca6dae';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyWorker.Signatures;
  };
  apiName: 'modifyWorker';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyWorker: modifyWorker = {
  apiName: 'modifyWorker',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
