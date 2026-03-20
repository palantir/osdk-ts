import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createFooInterface {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    createdInterface: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'objectType';
    };
  };

  export interface Params {
    readonly createdInterface: ActionParam.PrimitiveType<'objectType'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createFooInterface.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createFooInterface.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"objectType">} createdInterface
 */
export interface createFooInterface extends ActionDefinition<createFooInterface.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createFooInterface';
    displayName: 'Create Foo Interface';
    modifiedEntities: {};
    parameters: createFooInterface.ParamsDefinition;
    platformApiName: 'create-foo-interface';
    rid: 'ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createFooInterface.Signatures;
  };
  apiName: 'createFooInterface';
  platformApiName: 'create-foo-interface';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createFooInterface: createFooInterface = {
  apiName: 'createFooInterface',
  platformApiName: 'create-foo-interface',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
