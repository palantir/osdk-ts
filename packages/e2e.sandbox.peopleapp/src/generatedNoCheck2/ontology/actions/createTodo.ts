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
  export type ParamsDefinition = {
    is_complete: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'boolean';
    };
    location: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    Todo: {
      description: undefined;
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

    readonly location?: ActionParam.PrimitiveType<'string'> | null;

    readonly Todo: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Creates Todo
     */
    applyAction<OP extends ApplyActionOptions>(
      args: createTodo.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createTodo.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Creates Todo
 *
 * **Note on null values:** _For optional parameters, explicitly providing a null value instead of undefined
 * can change the behavior of the applied action. If prefills are configured, null prevents them
 * from being applied. If a parameter modifies an object's property, null will clear the data from
 * the object, whereas undefined would not modify that property._
 * @param {ActionParam.PrimitiveType<"boolean">} is_complete
 * @param {ActionParam.PrimitiveType<"string">} [location]
 * @param {ActionParam.PrimitiveType<"string">} Todo
 */
export interface createTodo extends ActionDefinition<createTodo.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createTodo';
    description: 'Creates Todo';
    displayName: 'Create Todo';
    modifiedEntities: {
      Todo: {
        created: true;
        modified: false;
      };
    };
    parameters: createTodo.ParamsDefinition;
    rid: 'ri.actions.main.action-type.1913052f-0395-4643-9d37-62fc7f74289d';
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
