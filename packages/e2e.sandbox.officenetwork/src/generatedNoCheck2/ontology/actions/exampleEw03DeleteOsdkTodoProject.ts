import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ExampleEw03osdkTodoProject } from '../objects/ExampleEw03osdkTodoProject.js';

export namespace exampleEw03DeleteOsdkTodoProject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    osdkTodoProject: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<ExampleEw03osdkTodoProject>;
    };
  };

  /**
   * Delete a todo project
   */
  export interface Params {
    readonly osdkTodoProject: ActionParam.ObjectType<ExampleEw03osdkTodoProject>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Delete a todo project
     */
    applyAction<OP extends ApplyActionOptions>(
      args: exampleEw03DeleteOsdkTodoProject.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<exampleEw03DeleteOsdkTodoProject.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Delete a todo project
 * @param {ActionParam.ObjectType<ExampleEw03osdkTodoProject>} osdkTodoProject
 */
export interface exampleEw03DeleteOsdkTodoProject
  extends ActionDefinition<exampleEw03DeleteOsdkTodoProject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'exampleEw03DeleteOsdkTodoProject';
    description: 'Delete a todo project';
    displayName: '[Example ew03] delete-osdk-todo-project';
    modifiedEntities: {};
    parameters: exampleEw03DeleteOsdkTodoProject.ParamsDefinition;
    rid: 'ri.actions.main.action-type.a66504e0-8b1a-4ba7-a7ad-bbe64d3f3662';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: exampleEw03DeleteOsdkTodoProject.Signatures;
  };
  apiName: 'exampleEw03DeleteOsdkTodoProject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const exampleEw03DeleteOsdkTodoProject: exampleEw03DeleteOsdkTodoProject = {
  apiName: 'exampleEw03DeleteOsdkTodoProject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
