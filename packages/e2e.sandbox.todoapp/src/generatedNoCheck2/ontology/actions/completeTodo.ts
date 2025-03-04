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
      multiplicity: false;
      nullable: false;
      type: 'boolean';
    };
    Todo: {
      description: 'A todo Object';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Todo>;
    };
  };

  /**
   * Completes Todo
   */
  export interface Params {
    readonly is_complete: ActionParam.PrimitiveType<'boolean'>;
    /**
     * A todo Object
     */
    readonly Todo: ActionParam.ObjectType<Todo>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Completes Todo
     */
    applyAction<P extends completeTodo.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<completeTodo.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP, true>>;
  }
}

/**
 * Completes Todo
 * @param {ActionParam.PrimitiveType<"boolean">} is_complete
 * @param {ActionParam.ObjectType<Todo>} Todo A todo Object
 */
export interface completeTodo extends ActionDefinition<completeTodo.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'completeTodo';
    description: 'Completes Todo';
    modifiedEntities: {
      Todo: {
        created: false;
        modified: true;
      };
    };
    parameters: completeTodo.ParamsDefinition;
    rid: '';
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
