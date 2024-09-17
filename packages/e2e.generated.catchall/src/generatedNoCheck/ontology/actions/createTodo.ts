import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createTodo {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = Record<string, never>;

  /**
   * Creates a new Todo
   */
  export interface Params {}

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'createTodo', 'Todo', createTodo.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'createTodo';
    description: 'Creates a new Todo';
    modifiedEntities: { Todo: { created: true; modified: false } };
    type: 'action';
    parameters: createTodo.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Creates a new Todo
     */
    applyAction<P extends createTodo.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<createTodo.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Creates a new Todo
 */
export type createTodo = createTodo.Signatures;

export const createTodo: createTodo.Definition = {
  apiName: 'createTodo',
  description: 'Creates a new Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
  parameters: {},
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
