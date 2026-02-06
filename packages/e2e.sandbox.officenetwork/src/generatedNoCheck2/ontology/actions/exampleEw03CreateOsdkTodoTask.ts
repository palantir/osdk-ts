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

export namespace exampleEw03CreateOsdkTodoTask {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    assigned_to: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    description: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    due_date: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'datetime';
    };
    osdkTodoTask: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<ExampleEw03osdkTodoTask>;
    };
    project_id: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    start_date: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'datetime';
    };
    status: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    title: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Create a new task item
   */
  export interface Params {
    readonly assigned_to?: ActionParam.PrimitiveType<'string'> | null;

    readonly description?: ActionParam.PrimitiveType<'string'> | null;

    readonly due_date?: ActionParam.PrimitiveType<'datetime'> | null;

    readonly osdkTodoTask: ActionParam.ObjectType<ExampleEw03osdkTodoTask>;

    readonly project_id?: ActionParam.PrimitiveType<'string'> | null;

    readonly start_date?: ActionParam.PrimitiveType<'datetime'> | null;

    readonly status?: ActionParam.PrimitiveType<'string'> | null;

    readonly title: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create a new task item
     */
    applyAction<OP extends ApplyActionOptions>(
      args: exampleEw03CreateOsdkTodoTask.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<exampleEw03CreateOsdkTodoTask.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create a new task item
 *
 * **Note on null values:** _For optional parameters, explicitly providing a null value instead of undefined
 * can change the behavior of the applied action. If prefills are configured, null prevents them
 * from being applied. If a parameter modifies an object's property, null will clear the data from
 * the object, whereas undefined would not modify that property._
 * @param {ActionParam.PrimitiveType<"string">} [assigned_to]
 * @param {ActionParam.PrimitiveType<"string">} [description]
 * @param {ActionParam.PrimitiveType<"datetime">} [due_date]
 * @param {ActionParam.ObjectType<ExampleEw03osdkTodoTask>} osdkTodoTask
 * @param {ActionParam.PrimitiveType<"string">} [project_id]
 * @param {ActionParam.PrimitiveType<"datetime">} [start_date]
 * @param {ActionParam.PrimitiveType<"string">} [status]
 * @param {ActionParam.PrimitiveType<"string">} title
 */
export interface exampleEw03CreateOsdkTodoTask extends ActionDefinition<exampleEw03CreateOsdkTodoTask.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'exampleEw03CreateOsdkTodoTask';
    description: 'Create a new task item';
    displayName: '[Example ew03] create-osdk-todo-task';
    modifiedEntities: {
      ExampleEw03osdkTodoTask: {
        created: true;
        modified: false;
      };
    };
    parameters: exampleEw03CreateOsdkTodoTask.ParamsDefinition;
    rid: 'ri.actions.main.action-type.9bcd1484-de72-4c5d-8432-e2b876eacaf1';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: exampleEw03CreateOsdkTodoTask.Signatures;
  };
  apiName: 'exampleEw03CreateOsdkTodoTask';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const exampleEw03CreateOsdkTodoTask: exampleEw03CreateOsdkTodoTask = {
  apiName: 'exampleEw03CreateOsdkTodoTask',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
