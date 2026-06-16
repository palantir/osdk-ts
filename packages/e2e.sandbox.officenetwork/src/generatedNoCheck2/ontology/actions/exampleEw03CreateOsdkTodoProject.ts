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

export namespace exampleEw03CreateOsdkTodoProject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    budget: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'integer';
    };
    description: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    name: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    osdkTodoProject: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<ExampleEw03osdkTodoProject>;
    };
  };

  /**
   * Create a new Osdk Project
   */
  export interface Params {
    readonly budget?: ActionParam.PrimitiveType<'integer'> | null;

    readonly description?: ActionParam.PrimitiveType<'string'> | null;

    readonly name: ActionParam.PrimitiveType<'string'>;

    readonly osdkTodoProject: ActionParam.ObjectType<ExampleEw03osdkTodoProject>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create a new Osdk Project
     */
    applyAction<OP extends ApplyActionOptions>(
      args: exampleEw03CreateOsdkTodoProject.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<exampleEw03CreateOsdkTodoProject.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create a new Osdk Project
 *
 * **Note on null values:** _For optional parameters, explicitly providing a null value instead of undefined
 * can change the behavior of the applied action. If prefills are configured, null prevents them
 * from being applied. If a parameter modifies an object's property, null will clear the data from
 * the object, whereas undefined would not modify that property._
 * @param {ActionParam.PrimitiveType<"integer">} [budget]
 * @param {ActionParam.PrimitiveType<"string">} [description]
 * @param {ActionParam.PrimitiveType<"string">} name
 * @param {ActionParam.ObjectType<ExampleEw03osdkTodoProject>} osdkTodoProject
 */
export interface exampleEw03CreateOsdkTodoProject
  extends ActionDefinition<exampleEw03CreateOsdkTodoProject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'exampleEw03CreateOsdkTodoProject';
    description: 'Create a new Osdk Project';
    displayName: '[Example ew03] create-osdk-todo-project';
    modifiedEntities: {
      ExampleEw03osdkTodoProject: {
        created: true;
        modified: false;
      };
    };
    parameters: exampleEw03CreateOsdkTodoProject.ParamsDefinition;
    rid: 'ri.actions.main.action-type.5750778f-3abd-4076-8ece-0b80c096f499';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: exampleEw03CreateOsdkTodoProject.Signatures;
  };
  apiName: 'exampleEw03CreateOsdkTodoProject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const exampleEw03CreateOsdkTodoProject: exampleEw03CreateOsdkTodoProject = {
  apiName: 'exampleEw03CreateOsdkTodoProject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
