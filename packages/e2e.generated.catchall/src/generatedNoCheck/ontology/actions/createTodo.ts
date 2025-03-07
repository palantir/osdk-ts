import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createTodo {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = Record<string, never>;

  /**
   * Creates a new Todo
   */
  export interface Params {}

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
export interface createTodo extends ActionDefinition<createTodo.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createTodo';
    description: 'Creates a new Todo';
    modifiedEntities: {
      Todo: {
        created: true;
        modified: false;
      };
    };
    parameters: createTodo.ParamsDefinition;
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    type: 'action';

    signatures: createTodo.Signatures;
  };
  apiName: 'createTodo';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createTodo: createTodo = {
  apiName: 'createTodo',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
