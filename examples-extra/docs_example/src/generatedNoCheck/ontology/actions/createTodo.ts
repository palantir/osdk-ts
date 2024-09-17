import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
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
 * Creates Todo
 * @param {ActionParam.PrimitiveType<"boolean">} is_complete
 * @param {ActionParam.PrimitiveType<"string">} Todo
 */
export interface createTodo extends ActionDefinition<'createTodo', 'Todo', createTodo.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createTodo';
    description: 'Creates Todo';
    modifiedEntities: {
      Todo: {
        created: true;
        modified: false;
      };
    };
    parameters: createTodo.ParamsDefinition;
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
