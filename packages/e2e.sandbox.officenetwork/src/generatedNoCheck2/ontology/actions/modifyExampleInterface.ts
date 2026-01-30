import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ExampleInterface } from '../interfaces/ExampleInterface.js';

export namespace modifyExampleInterface {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    ExampleInterface: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<ExampleInterface>;
    };
    type: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
  };

  export interface Params {
    readonly ExampleInterface: ActionParam.InterfaceType<ExampleInterface>;

    readonly type?: ActionParam.PrimitiveType<'string'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyExampleInterface.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyExampleInterface.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.InterfaceType<ExampleInterface>} ExampleInterface
 * @param {ActionParam.PrimitiveType<"string">} [type]
 */
export interface modifyExampleInterface extends ActionDefinition<modifyExampleInterface.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyExampleInterface';
    displayName: 'Modify Example Interface';
    modifiedEntities: {};
    parameters: modifyExampleInterface.ParamsDefinition;
    rid: 'ri.actions.main.action-type.265950e6-0651-41d8-95e9-040c7d30130b';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyExampleInterface.Signatures;
  };
  apiName: 'modifyExampleInterface';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyExampleInterface: modifyExampleInterface = {
  apiName: 'modifyExampleInterface',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
