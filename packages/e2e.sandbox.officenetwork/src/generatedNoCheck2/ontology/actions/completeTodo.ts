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

export namespace completeTodo {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    is_complete: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'boolean';
    };
    Todo: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Todo>;
    };
  };

  /**
   * Marks Todo complete/incomplete
   */
  export interface Params {
    readonly is_complete: ActionParam.PrimitiveType<'boolean'>;

    readonly Todo: ActionParam.ObjectType<Todo>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Marks Todo complete/incomplete
     */
    applyAction<OP extends ApplyActionOptions>(
      args: completeTodo.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<completeTodo.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Marks Todo complete/incomplete
 * @param {ActionParam.PrimitiveType<"boolean">} is_complete
 * @param {ActionParam.ObjectType<Todo>} Todo
 */
export interface completeTodo extends ActionDefinition<completeTodo.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'completeTodo';
    description: 'Marks Todo complete/incomplete';
    displayName: 'Complete To Do';
    modifiedEntities: {
      Todo: {
        created: false;
        modified: true;
      };
    };
    parameters: completeTodo.ParamsDefinition;
    rid: 'ri.actions.main.action-type.b8ed5dbd-6d22-4b6d-8ab4-3b63c6007df9';
    status: 'ACTIVE';
    type: 'action';

    signatures: completeTodo.Signatures;
  };
  apiName: 'completeTodo';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const completeTodo: completeTodo = {
  apiName: 'completeTodo',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
