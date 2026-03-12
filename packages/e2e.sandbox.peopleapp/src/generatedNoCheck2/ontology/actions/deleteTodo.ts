import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Todo } from '../objects/Todo.js';

export namespace deleteTodo {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    todo: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Todo>;
    };
  };

  export interface Params {
    readonly todo: ActionParam.ObjectType<Todo>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteTodo.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteTodo.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Todo>} todo
 */
export interface deleteTodo extends ActionDefinition<deleteTodo.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteTodo';
    displayName: 'Delete Todo';
    modifiedEntities: {};
    parameters: deleteTodo.ParamsDefinition;
    rid: 'ri.actions.main.action-type.83a9d1a9-4132-4837-ae84-c9973a3a2e1e';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: deleteTodo.Signatures;
  };
  apiName: 'deleteTodo';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteTodo: deleteTodo = {
  apiName: 'deleteTodo',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
