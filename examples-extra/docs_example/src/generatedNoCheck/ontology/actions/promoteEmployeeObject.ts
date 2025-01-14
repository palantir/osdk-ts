import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { Employee } from '../objects/Employee';

export namespace promoteEmployeeObject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    newCompensation: {
      multiplicity: false;
      nullable: false;
      type: 'double';
    };
    newTitle: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Update an employee's title and compensation
   */
  export interface Params {
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly newCompensation: ActionParam.PrimitiveType<'double'>;

    readonly newTitle: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Update an employee's title and compensation
     */
    applyAction<OP extends ApplyActionOptions>(
      args: promoteEmployeeObject.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<promoteEmployeeObject.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Update an employee's title and compensation
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.PrimitiveType<"double">} newCompensation
 * @param {ActionParam.PrimitiveType<"string">} newTitle
 */
export interface promoteEmployeeObject extends ActionDefinition<promoteEmployeeObject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'promoteEmployeeObject';
    description: "Update an employee's title and compensation";
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: promoteEmployeeObject.ParamsDefinition;
    rid: 'ri.ontology.main.action-type.7ed72754-7491-428a-bb18-4d7296eb2168';
    status: 'ACTIVE';
    type: 'action';

    signatures: promoteEmployeeObject.Signatures;
  };
  apiName: 'promoteEmployeeObject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const promoteEmployeeObject: promoteEmployeeObject = {
  apiName: 'promoteEmployeeObject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
