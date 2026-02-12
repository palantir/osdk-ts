import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ExampleEw03osdkTodoTask } from '../objects/ExampleEw03osdkTodoTask.js';

export namespace exampleEw03DeleteOsdkTodoTask {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    osdkTodoTask: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<ExampleEw03osdkTodoTask>;
    };
  };

  /**
   * Delete a given todo task
   */
  export interface Params {
    readonly osdkTodoTask: ActionParam.ObjectType<ExampleEw03osdkTodoTask>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Delete a given todo task
     */
    applyAction<OP extends ApplyActionOptions>(
      args: exampleEw03DeleteOsdkTodoTask.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<exampleEw03DeleteOsdkTodoTask.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Delete a given todo task
 * @param {ActionParam.ObjectType<ExampleEw03osdkTodoTask>} osdkTodoTask
 */
export interface exampleEw03DeleteOsdkTodoTask extends ActionDefinition<exampleEw03DeleteOsdkTodoTask.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'exampleEw03DeleteOsdkTodoTask';
    description: 'Delete a given todo task';
    displayName: '[Example ew03] delete-osdk-todo-task';
    modifiedEntities: {};
    parameters: exampleEw03DeleteOsdkTodoTask.ParamsDefinition;
    rid: 'ri.actions.main.action-type.84cd3ff8-870b-4c74-886b-e2fabdc5bcec';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: exampleEw03DeleteOsdkTodoTask.Signatures;
  };
  apiName: 'exampleEw03DeleteOsdkTodoTask';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const exampleEw03DeleteOsdkTodoTask: exampleEw03DeleteOsdkTodoTask = {
  apiName: 'exampleEw03DeleteOsdkTodoTask',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
