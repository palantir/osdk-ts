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
      multiplicity: true;
      nullable: false;
      type: ObjectActionDataType<'Todo', Todo>;
    };
  };

  /**
   * Completes Todo
   */
  export interface Parameters {
    readonly is_complete: ActionParam.PrimitiveType<'boolean'>;
    /**
     * A todo Object
     */
    readonly Todo: ReadonlyArray<ActionParam.ObjectType<Todo>>;
  }

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'completeTodo', 'Todo', completeTodo>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'completeTodo';
    description: 'Completes Todo';
    modifiedEntities: { Todo: { created: false; modified: true } };
    type: 'action';
    parameters: completeTodo.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Completes Todo
     */
    <
      P extends completeTodo.Parameters | ReadonlyArray<completeTodo.Parameters>,
      OP extends P extends ReadonlyArray<completeTodo.Parameters> ? ApplyBatchActionOptions : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `completeTodo.Parameters`
 */
export type completeTodo$Params = completeTodo.Parameters | ReadonlyArray<completeTodo.Parameters>;

/** @deprecated Use `completeTodo.Definition` **/
export type completeTodo = completeTodo.Signature;

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
      multiplicity: true,
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
