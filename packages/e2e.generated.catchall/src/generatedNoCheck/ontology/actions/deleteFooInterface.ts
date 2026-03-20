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
      description: undefined;
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
    applyAction<OP extends ApplyActionOptions>(
      args: deleteFooInterface.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteFooInterface.Params>,
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
    platformApiName: 'delete-foo-interface';
    rid: 'ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817';
    status: 'ACTIVE';
    type: 'action';

    signatures: deleteFooInterface.Signatures;
  };
  apiName: 'deleteFooInterface';
  platformApiName: 'delete-foo-interface';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteFooInterface: deleteFooInterface = {
  apiName: 'deleteFooInterface',
  platformApiName: 'delete-foo-interface',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
