import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { TodoLike } from '../interfaces/TodoLike.js';

export namespace modifyTodoLike {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    isComplete: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'boolean';
    };
    name: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    todo_like_type: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'objectType';
    };
    TodoLike: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<TodoLike>;
    };
  };

  export interface Params {
    readonly isComplete?: ActionParam.PrimitiveType<'boolean'> | null;

    readonly name?: ActionParam.PrimitiveType<'string'> | null;

    readonly todo_like_type: ActionParam.PrimitiveType<'objectType'>;

    readonly TodoLike: ActionParam.InterfaceType<TodoLike>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyTodoLike.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyTodoLike.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"boolean">} [isComplete]
 * @param {ActionParam.PrimitiveType<"string">} [name]
 * @param {ActionParam.PrimitiveType<"objectType">} todo_like_type
 * @param {ActionParam.InterfaceType<TodoLike>} TodoLike
 */
export interface modifyTodoLike extends ActionDefinition<modifyTodoLike.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyTodoLike';
    displayName: 'Create TodoLike';
    modifiedEntities: {};
    parameters: modifyTodoLike.ParamsDefinition;
    rid: 'ri.actions.main.action-type.353f4e63-0d68-4d9c-9afd-66150ec24e04';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyTodoLike.Signatures;
  };
  apiName: 'modifyTodoLike';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyTodoLike: modifyTodoLike = {
  apiName: 'modifyTodoLike',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
