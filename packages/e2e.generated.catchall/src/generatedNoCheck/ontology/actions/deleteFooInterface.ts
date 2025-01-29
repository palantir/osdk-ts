import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { FooInterface } from '../interfaces/FooInterface.js';

export namespace deleteFooInterface {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    deletedInterface: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<FooInterface>;
    };
  };

  export interface Params {
    readonly deletedInterface: ActionParam.InterfaceType<FooInterface>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends deleteFooInterface.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<deleteFooInterface.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.InterfaceType<FooInterface>} deletedInterface
 */
export interface deleteFooInterface extends ActionDefinition<deleteFooInterface.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteFooInterface';
    displayName: 'Delete Foo Interface';
    modifiedEntities: {};
    parameters: deleteFooInterface.ParamsDefinition;
    rid: 'ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817';
    status: 'ACTIVE';
    type: 'action';

    signatures: deleteFooInterface.Signatures;
  };
  apiName: 'deleteFooInterface';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteFooInterface: deleteFooInterface = {
  apiName: 'deleteFooInterface',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
