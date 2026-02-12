import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createTodo3 {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    title: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly title: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createTodo3.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createTodo3.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} title
 */
export interface createTodo3 extends ActionDefinition<createTodo3.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createTodo3';
    displayName: 'Create Todo';
    modifiedEntities: {
      Todo: {
        created: true;
        modified: false;
      };
    };
    parameters: createTodo3.ParamsDefinition;
    rid: 'ri.actions.main.action-type.503d6ed5-c30a-41e5-a82f-b3a455d5f6e8';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createTodo3.Signatures;
  };
  apiName: 'createTodo3';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createTodo3: createTodo3 = {
  apiName: 'createTodo3',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
