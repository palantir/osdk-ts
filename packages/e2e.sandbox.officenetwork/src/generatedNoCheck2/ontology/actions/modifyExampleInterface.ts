import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $resolveAction } from '@osdk/aliases';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ExampleInterface } from '../interfaces/ExampleInterface.js';

export namespace modifyExampleInterface {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    ExampleInterface: {
      description: undefined;
      displayName: 'Example Interface';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<ExampleInterface>;
    };
    type: {
      description: undefined;
      displayName: 'type';
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
    unsanitizedApiName: 'modify-example-interface';

    signatures: modifyExampleInterface.Signatures;
  };
  apiName: 'modifyExampleInterface';
  type: 'action';
  unsanitizedApiName: 'modify-example-interface';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyExampleInterface: modifyExampleInterface = {
  apiName: 'modifyExampleInterface',
  type: 'action',
  get unsanitizedApiName() {
    return $resolveAction('modify-example-interface') as 'modify-example-interface';
  },
  osdkMetadata: $osdkMetadata,
};
