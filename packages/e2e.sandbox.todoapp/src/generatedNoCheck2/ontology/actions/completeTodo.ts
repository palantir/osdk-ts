import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { Todo } from '../objects/Todo';

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
      type: ObjectActionDataType<'Todo', Todo.Definition>;
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
    readonly Todo: ActionParam.ObjectType<Todo.Definition>;
  }
  /** @deprecated **/
  export type Parameters = Params;

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'completeTodo', 'Todo', completeTodo.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'completeTodo';
    description: 'Completes Todo';
    modifiedEntities: { Todo: { created: false; modified: true } };
    type: 'action';
    parameters: completeTodo.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
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
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `completeTodo.Params`
 */
export type completeTodo$Params = completeTodo.Params | ReadonlyArray<completeTodo.Params>;

/** @deprecated Use `completeTodo.Definition` **/
export type completeTodo = completeTodo.Signatures;

export const completeTodo: completeTodo.Definition = {
  apiName: 'completeTodo',
  description: 'Completes Todo',
  modifiedEntities: {
    Todo: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    Todo: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Todo',
      },
      nullable: false,
      description: 'A todo Object',
    },
    is_complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: false,
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
