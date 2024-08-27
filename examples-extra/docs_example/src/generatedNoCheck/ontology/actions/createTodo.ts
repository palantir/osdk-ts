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
  export interface Parameters {
    readonly is_complete: ActionParam.PrimitiveType<'boolean'>;

    readonly Todo: ActionParam.PrimitiveType<'string'>;
  }

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'createTodo', 'Todo', createTodo>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'createTodo';
    description: 'Creates Todo';
    modifiedEntities: { Todo: { created: true; modified: false } };
    type: 'action';
    parameters: createTodo.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Creates Todo
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
