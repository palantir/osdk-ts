import type { ActionDefinition, VersionBound } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createTodo {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = Record<string, never>;

  /**
   * Creates a new Todo
   */
  export interface Parameters {}

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'createTodo', 'Todo', createTodo>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'createTodo';
    description: 'Creates a new Todo';
    modifiedEntities: { Todo: { created: true; modified: false } };
    type: 'action';
    parameters: createTodo.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Creates a new Todo
     */
    <
      P extends createTodo.Parameters | ReadonlyArray<createTodo.Parameters>,
      OP extends P extends ReadonlyArray<createTodo.Parameters> ? ApplyBatchActionOptions : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `createTodo.Parameters`
 */
export type createTodo$Params = createTodo.Parameters | ReadonlyArray<createTodo.Parameters>;

/** @deprecated Use `createTodo.Definition` **/
export type createTodo = createTodo.Signature;

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
