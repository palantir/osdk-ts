import type { ActionDefinition, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace createTodo {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    is_complete: {
      multiplicity: false;
      nullable: false;
      type: 'boolean';
    };
    Todo: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Creates Todo
   */
  export interface Params {
    readonly is_complete: ActionParam.PrimitiveType<'boolean'>;

    readonly Todo: ActionParam.PrimitiveType<'string'>;
  }
  /** @deprecated **/
  export type Parameters = Params;

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'createTodo', 'Todo', createTodo.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'createTodo';
    description: 'Creates Todo';
    modifiedEntities: { Todo: { created: true; modified: false } };
    type: 'action';
    parameters: createTodo.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Creates Todo
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
 * @deprecated Use `createTodo.Params`
 */
export type createTodo$Params = createTodo.Params | ReadonlyArray<createTodo.Params>;

/** @deprecated Use `createTodo.Definition` **/
export type createTodo = createTodo.Signatures;

export const createTodo: createTodo.Definition = {
  apiName: 'createTodo',
  description: 'Creates Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
  parameters: {
    Todo: {
      multiplicity: false,
      type: 'string',
      nullable: false,
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
