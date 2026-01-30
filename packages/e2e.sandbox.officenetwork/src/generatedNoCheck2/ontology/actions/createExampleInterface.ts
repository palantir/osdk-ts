import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createExampleInterface {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    example_interface_type: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'objectType';
    };
    type: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
  };

  export interface Params {
    readonly example_interface_type: ActionParam.PrimitiveType<'objectType'>;

    readonly type?: ActionParam.PrimitiveType<'string'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createExampleInterface.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createExampleInterface.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"objectType">} example_interface_type
 * @param {ActionParam.PrimitiveType<"string">} [type]
 */
export interface createExampleInterface extends ActionDefinition<createExampleInterface.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createExampleInterface';
    displayName: 'Create Example Interface';
    modifiedEntities: {};
    parameters: createExampleInterface.ParamsDefinition;
    rid: 'ri.actions.main.action-type.7f51d3e6-f6c9-4f6b-ae24-5e9513961411';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createExampleInterface.Signatures;
  };
  apiName: 'createExampleInterface';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createExampleInterface: createExampleInterface = {
  apiName: 'createExampleInterface',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
